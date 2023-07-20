type AddAction = {
    type: 'add',
    payload: {
        title: string
        category: string
    }
}
type DeleteAction = {
    type: 'delete',
    payload: { id: number }
}
type DoneAction = {
    type: 'done',
    payload: {
        id: number
    }
}
type StatusAction = {
    type: 'status',
    payload: { category: string }
}

type AscAction = {
    type: 'order',
    payload: { order: string }
}

type SearchAction = {
    type: 'search',
    payload: { text: string }
}

export type TaskActions =
    AddAction |
    DeleteAction |
    DoneAction |
    StatusAction |
    AscAction |
    SearchAction