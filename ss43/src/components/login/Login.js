"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("mdb-react-ui-kit/dist/css/mdb.min.css");
require("@fortawesome/fontawesome-free/css/all.min.css");
const mdb_react_ui_kit_1 = require("mdb-react-ui-kit");
function Login() {
    return (<mdb_react_ui_kit_1.MDBContainer fluid className="p-3 my-5 h-custom">
      <mdb_react_ui_kit_1.MDBRow style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <mdb_react_ui_kit_1.MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image"/>
        </mdb_react_ui_kit_1.MDBCol>

        <mdb_react_ui_kit_1.MDBCol col='4' md='6'>

          <mdb_react_ui_kit_1.MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <mdb_react_ui_kit_1.MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <mdb_react_ui_kit_1.MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
            <a href="#!">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <mdb_react_ui_kit_1.MDBBtn className="mb-0 px-5" size='lg'>Login</mdb_react_ui_kit_1.MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>
        </mdb_react_ui_kit_1.MDBCol>
      </mdb_react_ui_kit_1.MDBRow>
    </mdb_react_ui_kit_1.MDBContainer>);
}
exports.default = Login;
