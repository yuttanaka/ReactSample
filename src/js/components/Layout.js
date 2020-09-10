import React from "react";
import Header from './Header';
import Footer from './Footer';
import Title from './Header/Title';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { title: 'Welcome' };
    };
    changeTitle(title) {
        this.setState({title});
    };
    render() {
        // setTimeout(() => {
        //     this.setState({ title: 'Welcome Tsutomu' });
        // }, 20000);
        const title = 'Welcome to Tokyo Disney Sea';
        // let componets = [
        //                 <header>
        //                     <Title />
        //                 </header>, 
        //                 <div>
        //                     {this.state.name}
        //                 </div>];
        // return componets;
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} name={'Welcome to Tokyo Disney Sea'} title={this.state.title} />
                <Footer />
            </div>
        );
    };
};