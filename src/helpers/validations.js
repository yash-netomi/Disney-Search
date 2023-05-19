export const validateQuestion = (question) => {
    if(question.length===0) return false;
    for(var i=0;i<question.length;i++){
        const ch = question.charAt(i);
        if(ch==='\n' || ch===' ') continue;
        return true;
    }
    return false;
}
