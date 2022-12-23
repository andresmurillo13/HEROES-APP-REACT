import React from 'react'
import { HeroList } from '../../auth/components/HeroList'

export const MarvelPage = () => {
    return (
        <>
            <h1>Comics</h1>
            <hr />
            <HeroList publisher='Marvel Comics' />
        </>
    )
}
