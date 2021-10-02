import Link from "next/link"

export default function Profileform() {
  return (

    <div className="signup-inner text-center">
                                        <form className="signup-inner--form">
                                            <div className="row">
                                                <div className="col-12">
                                                    <input type="email" className="single-field" placeholder="Email"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" className="single-field" placeholder="First Name"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" className="single-field" placeholder="Last Name"/>
                                                </div>
                                                <div className="col-12">
                                                    <input type="password" className="single-field" placeholder="Password"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <select className="nice-select" name="sortby">
                                                        <option value="trending">Gender</option>
                                                        <option value="sales">Male</option>
                                                        <option value="sales">Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <select className="nice-select" name="sortby">
                                                        <option value="trending">Age</option>
                                                        <option value="sales">18+</option>
                                                        <option value="sales">18-</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <select className="nice-select" name="sortby">
                                                        <option value="trending">Country</option>
                                                        <option value="sales">Bangladesh</option>
                                                        <option value="sales">Noakhali</option>
                                                        <option value="sales">Australia</option>
                                                        <option value="sales">China</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <button className="submit-btn">Click to update</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
  
  
    )
}