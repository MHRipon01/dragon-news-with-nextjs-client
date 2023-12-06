export const getAllCategories = async () => {
    const res = await fetch('https://dragon-news-backend-tau.vercel.app/categories')

    return res.json()
}