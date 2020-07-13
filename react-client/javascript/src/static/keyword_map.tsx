type KeyWordMapElement = [
    string,
    Array<string>
];

const static_mapping: Array<KeyWordMapElement> = [
    ["javascript", [
        "js",
        "jscript",
        "javascript"
    ]],
    ["Node.js", [
        "node.js",
        "node",
        "Node.js"
    ]],
    ["React.js", [
        "reactjs",
        "react",
        "React.js"
    ]],
    ["Java", [
        "java",
        "Java"
    ]],
    ["Typescript", [
        "ts",
        "typescript"
    ]],
]

const keyword_map: Map<string, string> = new Map(
    static_mapping.flatMap(mapping => mapping[1].map(
        secondary_map => [mapping[0], secondary_map]
    ))
);

console.log(keyword_map)

export default keyword_map;