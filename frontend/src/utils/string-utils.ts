export const mapProblemIdToString = (problemId: string): string => {
    const words = problemId.split("-")
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        words[i] = word.charAt(0).toUpperCase() + word.slice(1)
    }
    return words.join(" ")
}