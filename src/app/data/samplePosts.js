import { nanoid } from "@reduxjs/toolkit"

const userId = nanoid()

export const samplePosts = [
    {
        "userId": userId,
        "id": nanoid(),
        "title": "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": userId,
        "id": nanoid(),
        "title": "Qui est esse",
        "body": "Est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": userId,
        "id": nanoid(),
        "title": "Ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "Et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
]