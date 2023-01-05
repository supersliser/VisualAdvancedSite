import * as React from "react"
import styled from 'styled-components'

const TextItem = styled.p`
    font-size: 1em;
    color: white;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
`

const Text = ({ children, Size }) => (
    <TextItem fontSize={Size}>{children}</TextItem>
)

    export default Text