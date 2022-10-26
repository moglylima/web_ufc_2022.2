import { getDocs, collection } from "firebase/firestore/dist/firestore"

class StudentService{

    static getStudents = (firebase, callback) =>{
        getDocs(collection(firebase, 'students'))
        .then(
            (studentList) =>{
                const students = []
                studentList.forEach(
                    (element)=>{
                        const id = element.id
                        const {name, course, ira} = element.data()
                        students.push({id, name, course,ira})
                    }
                )
                callback(students)                
            }
        ).catch(err => console.log(err))
    }

    static getOnSnapshot = (firebase, callback) =>{
        getDocs(collection(firebase, 'students'))
        .then(
            (studentList) =>{
                const students = []
                studentList.forEach(
                    (element)=>{
                        const id = element.id
                        const {name, course, ira} = element.data()
                        students.push({id, name, course,ira})
                    }
                )
                callback(students)                
            }
        ).catch(err => console.log(err))
    }
}

export default StudentService