import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"



export default class Products extends React.Component {

    state = {
        fetchedData: [],
    };

    componentDidMount() {
        fetch('https://reqres.in/api/users')
            .then(response => {
                return response.json()
            }).then(json =>
                this.setState({
                    fetchedData: json.data,
                }));
    }

    render() {
        const { fetchedData } = this.state
        return (
            <Layout>
                <SEO title="Products" />
                <h1> Products Page </h1>
                <div className="d-flex">

                    {fetchedData.map(person =>

                        <div key={person.id} className="card">
                            <img src={person.avatar} alt={person.last_name} />
                            <p>{person.first_name}</p>
                            <p>{person.email}</p>
                        </div>

                    )}

                </div>
            </Layout>
        );

    };
}