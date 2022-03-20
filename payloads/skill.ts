export interface ISkill {
    category: string;
    items: Item[];
}

export interface Item {
    name: string;
}

export const skills: ISkill[] = [
    {
        category: 'Backend',
        items: [
            {
                name: 'Java'
            },
            {
                name: 'Spring'
            },
            {
                name: 'JPA'
            },
            {
                name: 'Gradle'
            },
            {
                name: 'Docker'
            },
            {
                name: 'Nginx'
            }
        ]
    },
    {
        category: 'Database',
        items: [
            {
                name: 'MySQL'
            },
            {
                name: 'H2'
            }
        ]
    },
    {
        category: 'DevOps',
        items: [
            {
                name: 'EC2'
            },
            {
                name: 'RDS'
            },
            {
                name: 'ELB'
            },
            {
                name: 'S3'
            },
            {
                name: 'Route53'
            },
            {
                name: 'CodeDeploy'
            },
        ]
    }

]