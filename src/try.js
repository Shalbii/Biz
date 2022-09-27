import "./style/styles.css";
import logo from "./m.png"
export default function Login() {
    return (
        <div className="Login_Outer">
            <div className="Login_Outer_loginbox">
                <div className="Login_Outer_row1_logosection">
                    <img src={logo}></img>
                    <label>LOGO</label>
                </div>
                <label className="Login_Outer_loginbox_welcome">Welcome!</label>
                <label> please sign to your account</label>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button>LOGIN</button>
            </div>

            <label>New Member ? <span> Sign Up</span></label>
            {/* <div className="Login_Outer_row1_in">
                <div className="Login_Outer_row1_in_row1">

                    <div className="Login_Outer_row1_in_row2">
                    </div>
                    <div className="Login_Outer_row1_in_row3">
                        <label> please sign to your account</label></div>
                    <div className="Login_Outer_row1_in_row4">
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="Login_Outer_row1_in_row5">
                        <input type="text" placeholder="Password" />
                    </div></div>
                <div className="ogin_Outer_row1_in_row6">
                    <input type="Checkbox" />
                    <div className="Login_Outer_row1_in_row6_text"></div>
                    <label>Remember Me?</label>
                </div>
                <div className="Login_Outer_row2">

                </div>

            </div> */}
        </div>
    );
}