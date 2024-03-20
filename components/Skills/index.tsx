import Image from 'next/image'
import React from 'react'
import CssIcon from './assets/Css.svg'
import HtmlIcon from './assets/Html.svg'
import JavaScriptIcon from './assets/JavaScript.svg'
import SassIcon from './assets/Sass.svg'
import TypeScriptIcon from './assets/TypeScript.svg'
import ReactIcon from './assets/React.svg'
import GitIcon from './assets/Git.svg'
import HerokuIcon from './assets/Heroku.svg'
import TailwindIcon from './assets/Tailwind.svg'
import MuiIcon from './assets/MaterialUI.svg'
import NextJsIcon from './assets/NextJs.svg'

type Props = {}

function Skills({ }: Props) {
    const SkillsList = ["Html", "Css", "JavaScript", "React", "TypeScript", "Git", "Sass", 'Heroku', 'Tailwind Css', 'Material UI', 'Next.js', "Adaptive", "Figma", "Ux/Ui", "Team Works", "Communication"]

    return (
        <div className='col-span-4 bg-secondary rounded-4xl p-8 text-white'>
            <h2 className='font-semibold text-3xl'>Skills</h2>
            <div className='flex flex-wrap mt-4 gap-2'>
                {SkillsList.map((skill, i) => (
                    <p key={i} className='bg-black/20 px-4 py-[2px] rounded-md'>{skill}</p>
                ))}
            </div>
        </div>
    )
}

export default Skills