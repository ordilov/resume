export interface IEducation {
    school: string;
    startAt: string;
    endAt?: string;
    description: string[];
}

export const educations: IEducation[] = [{
    school: '숭실대학교 소프트웨어학부',
    startAt: '2016-03',
    endAt: '2022-02',
    description: []
},
    {
        school: '프로그래머스 데브코스 2기',
        startAt: '2022-03',
        description: []
    }
]