import React from 'react'
export class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key:"all",
                    name:"All Laptops"
                },
                {
                    key:"Gaming Laptop",
                    name:"Gaming Laptop"
                },
                {
                    key:"Office",
                    name:"Office"
                },
                {
                    key:"MacBook",
                    name:"MacBook"
                },
                {
                    key:"Ultrabook",
                    name:"Ultrabook"
                },
                
                
            ]
        }
    }
    render() {
        return(
            <div className = "Categories">
                {this.state.categories.map(el => (
                        <div key = {el.id} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }

}

export default Categories