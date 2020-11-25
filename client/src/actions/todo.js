import moment from 'moment'

export const addTodo = todos => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        // const authorId = getState().firebase.auth.uid 
        firestore.collection('todos').add({
            ...todos,
            // authorId: authorId,
            date: new Date()
        })
        .then(() => {
            dispatch({
                type: "ADD_TODO",
                todos
            })
            console.log(todos)
        })
        .catch(err => {
            console.log(err)
            // dispatch({
            //     type: "ADD_TODO_ERR",
            //     err 
            // })
        })
    }
}
export const removeTodo = (todos) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("todos")
        .doc(todos.id)
        .delete()
        .then(() => {
          dispatch({
            type: "REMOVE_TODO",
          });
        })
        .catch((err) => {
            console.log(err)
        });
    };
  };

  export const updateTodo = (todos) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("todos")
        .doc(todos.id)
        .set({
            ...todos,
            done: !todos.done,
        },
        { merge: true }
        )
        .then(() => {
          dispatch({
            type: "UPDATE_TODO",
            todos
          });
        })
        .catch((err) => {
            console.log(err)
        });
    };
  };