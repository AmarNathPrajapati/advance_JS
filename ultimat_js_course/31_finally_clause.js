// try {
//     console.log(golu);
// } catch (error) {
//     console.log(error);
//     console.log(chandan);
// }finally{
//     console.log("Mai tooh execute ho ke rahunga,chahe try me error ho ya catch me");
// }

let concept_of_finally = () =>{
    try {
        return "all is well"
    } catch (error) {
        console.log(error);
    }finally{
        console.log("Bhai, Mai return hone ke just pahale execute ho jata hoon");
    }
}
console.log(concept_of_finally());
console.log("Aur Sab thik ba");