export interface Option {
    op: string;
    description?: string;
    default: string
}

export interface Command {
    name: string;
    baseOrder: string;
    description: string;
    argument?: string;
    options?: Option[]
}


export const commands: Command[] = [
    {
        name: "gi",
        baseOrder: "git init",
        description: "Initializes a new git repository"
    },
    {
        name: 'ga',
        baseOrder: "git add",
        description: "Adds files to the git repository",
        options: [
            {
                op: "-f, --file [filename]",
                description: "Adds the file to the git repository",
                default: "."
            }
        ]
    },
    {
        name: 'gc',
        baseOrder: "git commit -m",
        description: "Commits changes to the git repository",
        options: [
            {
                op: "-m, --message [message]",
                description: "Commit message",
                default: ""
            }
        ]
    }
]


