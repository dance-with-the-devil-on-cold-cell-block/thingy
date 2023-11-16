export default function LoginForm(){
    return (<form>
        <label>Email</label>
        <input type="email" name="email" required/>
        <br/> <br/>
        <label>Password</label>
        <input type="password" name="pw" required/>
        <br/> <br/>
        <button type="submit">Log In</button>
    </form>)
}