import React from 'react'

class PropsExample extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            person : []
        }
    }
     
    render(){
        const {name , heading } = this.props
        return(
            <>
                <div>
                    <h1>
                        {name}
                        {heading}
                    </h1>
                </div>
            </>
        )
    }
}

export default PropsExample

