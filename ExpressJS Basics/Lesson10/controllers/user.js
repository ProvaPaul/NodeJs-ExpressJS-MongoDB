const registerUser=async(req, res) => {
    try {
        const { name, email, password, dob } = req.body;
        const newUser = { name, email, password, dob };
        return res.json({
            message: 'User registered successfully',
            newUser
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}
const loginUser=async(req, res) => {
    try {
        const { email, password} = req.body;
        if(email ==='prova@gmail.com' && password === '123456') {
        const newUser = { email, password };
        return res.json({
            message: 'User loggedIn successfully',
        });
    }
    else {
        return res.status(401).json({
            message: 'Invalid email or password'
        });
    }    
    }  
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}
module.exports = {registerUser,loginUser};