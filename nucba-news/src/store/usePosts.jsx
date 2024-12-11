import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

const usePost = create(persist((set, get) => ({
    news: [],
    setNews: (posts) => set(({ news: posts })),
    addNew: (title, content) => set(({ news: [...get().news, { id: Date.now(), title, content }] }))
}), { name: 'news', storage: createJSONStorage(() => localStorage) }))

export default usePost