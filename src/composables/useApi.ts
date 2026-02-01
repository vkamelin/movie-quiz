import {ref} from 'vue'
import axios, {
    type AxiosError,
    type AxiosRequestConfig,
    type Method,
} from 'axios'

export function useApi<ApiErrorBody = unknown>() {
    const data = ref<unknown>(null)
    const loading = ref(false)
    const error = ref<AxiosError<ApiErrorBody> | null>(null)

    async function request<Response, Payload = undefined>(
        method: Method,
        url: string,
        payload?: Payload,
        options: AxiosRequestConfig = {}
    ) {
        loading.value = true
        error.value = null

        const baseUrl: string = import.meta.env.VITE_API_BASE_URL
        url = `${baseUrl}${url}`

        try {
            const response = await axios.request<Response>({
                method,
                url,
                ...(method === 'get' || method === 'delete'
                    ? {params: payload}
                    : {data: payload}),
                ...options,
            })

            data.value = response.data
            return response
        } catch (err) {
            error.value = err as AxiosError<ApiErrorBody>
            throw err
        } finally {
            loading.value = false
        }
    }

    function upload<Response>(
        url: string,
        files: File | File[],
        extra?: Record<string, string | number | boolean>,
        options?: AxiosRequestConfig
    ) {
        const formData = new FormData()

        if (Array.isArray(files)) {
            files.forEach(file => formData.append('files[]', file))
        } else {
            formData.append('file', files)
        }

        if (extra) {
            Object.entries(extra).forEach(([k, v]) => {
                formData.append(k, String(v))
            })
        }

        return request<Response, FormData>('post', url, formData, options)
    }

    return {
        data,
        loading,
        error,

        get<Response, Params = undefined>(
            url: string,
            params?: Params,
            options?: AxiosRequestConfig
        ) {
            return request<Response, Params>('get', url, params, options)
        },

        post<Response, Body>(
            url: string,
            body: Body,
            options?: AxiosRequestConfig
        ) {
            return request<Response, Body>('post', url, body, options)
        },

        put<Response, Body>(
            url: string,
            body: Body,
            options?: AxiosRequestConfig
        ) {
            return request<Response, Body>('put', url, body, options)
        },

        delete<Response, Params = undefined>(
            url: string,
            params?: Params,
            options?: AxiosRequestConfig
        ) {
            return request<Response, Params>('delete', url, params, options)
        },

        upload,
    }
}
