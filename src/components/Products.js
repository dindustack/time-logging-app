import React from 'react';

export class ProductList extends React.Component {
    state = {
      products: [],
    };
  
    componentDidMount() {
      this.setState({ products: window.Data.products });
    }
  
    handleProductUpVote = (productId) => {
      const nextProducts = this.state.products.map((product) => {
        if (product.id === productId) {
          return Object.assign({}, product, {
            votes: product.votes + 1,
          });
        } else {
          return product;
        }
      });
      this.setState({
        products: nextProducts,
      });
    };
  
    render() {
      const products = this.state.products.sort((a, b) => b.votes - a.votes);
      const productComponents = products.map((product) => (
        <Product
          key={"product-" + product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
          onVote={this.handleProductUpVote}
        />
      ));
      return (
        <section className="d-flex align-items-center pt-5 pt-md-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <h2 className="mb-5">Vote your favorite product</h2>
                {productComponents}
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
  
export class Product extends React.Component {
    handleUpVote = () => this.props.onVote(this.props.id);
  
    render() {
      return (
        <div className="border p-2 mb-3">
          <div className="product-item d-flex">
            <div className="product-image">
              <img
                src={this.props.productImageUrl}
                alt="product"
                className="prod-img img-fluid"
              />
            </div>
            <div className="col-6 col-md-0 flex-column">
              <p className="text-break font-weight-bold text-left mb-2 text-capitalize">
                {this.props.title}
              </p>
              <p className="text-left">{this.props.description}</p>
            </div>
            <div className="vote-button">
              <button className="btn btn-signal">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="15px"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </div>
                <span className="font-weight-bold">{this.props.votes}</span>
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
  