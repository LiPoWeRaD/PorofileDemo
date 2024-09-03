

interface IBlogs {
    id: number
    title: string
    content: {
        [key: string]: string},
    text: string,
    date: string,
    read: string,
    image: string,
    professional: string[]
}

export default IBlogs