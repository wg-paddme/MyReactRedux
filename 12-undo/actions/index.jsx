// 这里将action对象的type属性值写成了常量，便于reducer引用，减少了出错的概率。
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const UNDO_COUNTER = "UNDO_COUNTER";
export const REDO_COUNTER = "REDO_COUNTER";

export function increment(){
    return{
        type:INCREMENT_COUNTER
    }
}

export function decrement(){
    return{
        type:DECREMENT_COUNTER
    }
}

export  function undo(){
    return{
        type:UNDO_COUNTER
    }
}

export function redo(){
    return{
        type:REDO_COUNTER
    }
}