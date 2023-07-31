export const uploadFiles = async (files: File[], token: string) => {
    for (const file of files) {
        try {
            const response = await fetch(`https://cloud-api.yandex.net/v1/disk/resources/upload?path=%2F${file.name}`, {
                headers: {
                    Authorization: `${token}`,
                    Accept: 'application/json'
                }
            })

            const data = await response.json();

            // console.log(data)

            if (!response.ok) {
                return data.message;
            }

            const upload = await fetch(`${data.href}`, {
                method: 'PUT',
                body: file
            })

        } catch (error) {
            // console.log(error)
        }
    }
}
