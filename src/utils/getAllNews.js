export const getAllNews =async() => {
    const res = await fetch(
        'https://dragon-news-backend-tau.vercel.app/all-news',
        {
            next: {
                revalidate: 30
            }
        }
    )
    return res.json()
}