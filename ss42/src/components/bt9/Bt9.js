"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const react_bootstrap_1 = require("react-bootstrap");
function Bt9() {
    const schema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        username: Yup.string().required('Username is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        zip: Yup.string().required('Zip code is required'),
        terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });
    return (<div>
      Bt9:
      <br />
      <formik_1.Formik validationSchema={schema} onSubmit={console.log} initialValues={{
            firstName: '',
            lastName: '',
            username: '',
            city: '',
            state: '',
            zip: '',
            terms: false,
        }}>
        {({ handleSubmit, handleChange, values, touched, errors }) => (<react_bootstrap_1.Form noValidate onSubmit={handleSubmit}>
            <react_bootstrap_1.Row className="mb-3">
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col} md="4" controlId="validationFormik01">
                <react_bootstrap_1.Form.Label>Họ và Tên</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control type="text" name="firstName" placeholder="VD: Nguyễn Văn A" value={values.firstName} onChange={handleChange} isValid={touched.firstName && !errors.firstName}/>
                <react_bootstrap_1.Form.Control.Feedback>Looks good!</react_bootstrap_1.Form.Control.Feedback>
              </react_bootstrap_1.Form.Group>
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col} md="4" controlId="validationFormik02">
                <react_bootstrap_1.Form.Label>Mật Khẩu</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control type="password" name="lastName" placeholder="Nhập Mật khẩu" value={values.lastName} onChange={handleChange} isValid={touched.lastName && !errors.lastName}/>
                <react_bootstrap_1.Form.Control.Feedback>Looks good!</react_bootstrap_1.Form.Control.Feedback>
              </react_bootstrap_1.Form.Group>
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col} md="4" controlId="validationFormikUsername">
                <react_bootstrap_1.Form.Label>Email</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.InputGroup hasValidation>
                  <react_bootstrap_1.Form.Control type="text" placeholder="Nhập Email" aria-describedby="inputGroupPrepend" name="username" value={values.username} onChange={handleChange} isInvalid={!!errors.username}/>
                  <react_bootstrap_1.Form.Control.Feedback type="invalid">
                    {errors.username}
                  </react_bootstrap_1.Form.Control.Feedback>
                </react_bootstrap_1.InputGroup>
              </react_bootstrap_1.Form.Group>
            </react_bootstrap_1.Row>
            <react_bootstrap_1.Row className="mb-3">
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col} md="6" controlId="validationFormik03">
                <react_bootstrap_1.Form.Label>Địa chỉ</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control type="text" placeholder="VD: Thanh Xuân - Hà Nội" name="city" value={values.city} onChange={handleChange} isInvalid={!!errors.city}/>
                <react_bootstrap_1.Form.Control.Feedback type="invalid">
                  {errors.city}
                </react_bootstrap_1.Form.Control.Feedback>
              </react_bootstrap_1.Form.Group>
              <react_bootstrap_1.Form.Select style={{ width: "100px" }} aria-label="Chọn Thành Phố">
                <option value="Hà Nội">Hà Nội</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </react_bootstrap_1.Form.Select>
              <react_bootstrap_1.Form.Select style={{ width: "100px" }} aria-label="Chọn Quận">
                <option value="Thanh Xuân">Thanh Xuân</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </react_bootstrap_1.Form.Select>
              <react_bootstrap_1.Form.Group as={react_bootstrap_1.Col} md="3" controlId="validationFormik05">
                <react_bootstrap_1.Form.Label>Zip</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control type="text" placeholder="Zip" name="zip" value={values.zip} onChange={handleChange} isInvalid={!!errors.zip}/>
                <react_bootstrap_1.Form.Control.Feedback type="invalid">
                  {errors.zip}
                </react_bootstrap_1.Form.Control.Feedback>
              </react_bootstrap_1.Form.Group>
            </react_bootstrap_1.Row>
            <react_bootstrap_1.Form.Group className="mb-3">
              <react_bootstrap_1.Form.Check required name="terms" label="Agree to terms and conditions" onChange={handleChange} isInvalid={!!errors.terms} feedback={errors.terms} feedbackType="invalid" id="validationFormik0"/>
            </react_bootstrap_1.Form.Group>
            <react_bootstrap_1.Button type="submit">Submit form</react_bootstrap_1.Button>
          </react_bootstrap_1.Form>)}
      </formik_1.Formik>
    </div>);
}
exports.default = Bt9;
