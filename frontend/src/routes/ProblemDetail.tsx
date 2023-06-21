import { useParams } from "react-router"
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

const ProblemDetail = (): JSX.Element => {
    const { problemId } = useParams();

    const convertToCamelCase = (inputString: string | undefined) => {
        if (inputString === undefined) return;
        const words = inputString.split('-');
        const capitalizedWords = words.map((word, index) => {
            if (index === 0) {
                return word;
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
        });
        return capitalizedWords.join('');
    }

    const code = `const ${convertToCamelCase(problemId)} = () => { 
    return 0;
};`

    return (
        <div>
            <CodeMirror
                value={code}
                theme={okaidia}
                extensions={[javascript()]}
            />
        </div >
    )
}

export default ProblemDetail