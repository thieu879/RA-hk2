"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./bt12.css");
function Bt12() {
    return (<div>
        Bt12:
        <br />
        <div className="container-xl">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-5">
                                <h2>User <b>Management</b></h2>
                            </div>
                            <div className="col-sm-7">
                                <a href="#" className="btn btn-secondary">
                                    <i className="material-icons">&#xE147;</i> <span>Add New User</span>
                                </a>
                                <a href="#" className="btn btn-secondary">
                                    <i className="material-icons">&#xE24D;</i> <span>Export to Excel</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Date Created</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <a href="#">
                                        <img width="30px" src="./src/img/439557114_427673816652908_3102380687171857690_n.jpg" className="avatar" alt="Avatar"/> Michael Holz
                                    </a>
                                </td>
                                <td>04/10/2013</td>
                                <td>Admin</td>
                                <td><span className="status text-success">&bull;</span> Active</td>
                                <td>
                                    <a style={{ margin: "auto" }} href=""><i className="fa-regular fa-circle-right"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <a href="#">
                                        <img width="30px" src="./src/img/439557114_427673816652908_3102380687171857690_n.jpg" className="avatar" alt="Avatar"/> Paula Wilson
                                    </a>
                                </td>
                                <td>05/08/2014</td>
                                <td>Publisher</td>
                                <td><span className="status text-success">&bull;</span> Active</td>
                                <td>
                                    <a style={{ margin: "auto" }} href=""><i className="fa-regular fa-circle-right"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <a href="#">
                                        <img width="30px" src="./src/img/439557114_427673816652908_3102380687171857690_n.jpg" className="avatar" alt="Avatar"/> Antonio Moreno
                                    </a>
                                </td>
                                <td>11/05/2015</td>
                                <td>Publisher</td>
                                <td><span className="status text-danger">&bull;</span> Suspended</td>
                                <td>
                                    <a style={{ margin: "auto" }} href=""><i className="fa-regular fa-circle-right"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <a href="#">
                                        <img width="30px" src="./src/img/439557114_427673816652908_3102380687171857690_n.jpg" className="avatar" alt="Avatar"/> Mary Saveley
                                    </a>
                                </td>
                                <td>06/09/2016</td>
                                <td>Reviewer</td>
                                <td><span className="status text-success">&bull;</span> Active</td>
                                <td>
                                    <a style={{ margin: "auto" }} href=""><i className="fa-regular fa-circle-right"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    <a href="#">
                                        <img width="30px" src="./src/img/439557114_427673816652908_3102380687171857690_n.jpg" className="avatar" alt="Avatar"/> Martin Sommer
                                    </a>
                                </td>
                                <td>12/08/2017</td>
                                <td>Moderator</td>
                                <td><span className="status text-warning">&bull;</span> Inactive</td>
                                <td>
                                    <a style={{ margin: "auto" }} href=""><i className="fa-regular fa-circle-right"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="clearfix">
                        <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                        <ul className="pagination">
                            <li className="page-item disabled"><a href="#">Previous</a></li>
                            <li className="page-item"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item active"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link">4</a></li>
                            <li className="page-item"><a href="#" className="page-link">5</a></li>
                            <li className="page-item"><a href="#" className="page-link">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
exports.default = Bt12;
