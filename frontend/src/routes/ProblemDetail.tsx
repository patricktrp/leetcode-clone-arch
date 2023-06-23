import CodeMirror from '@uiw/react-codemirror'
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

const ProblemDetail = (): JSX.Element => {
    const data = {
        "id": "two-number-sum",
        "boilerplate_code": {
            "javascript": "const twoNumberSum = (array) => {\n\treturn array;\n}",
        },
        "difficulty": "easy",
        "categories": [
            "array"
        ]
    }
    return (
        <div>
            <CodeMirror
                value={data.boilerplate_code.javascript}
                theme={okaidia}
                extensions={[javascript()]}
            />
        </div >
    )
}

export default ProblemDetail