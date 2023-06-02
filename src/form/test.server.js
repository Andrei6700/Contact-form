{

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [urgent, setSubject] = useState('')

}

const handleRequest = async (e) => {
    if(email && name && urgent !== ""){
      if(message !== ""){
      e.preventDefault()
    setLoading(true)
    console.log({email, message, name, urgent})

    const body = {
      email,
      message, 
      urgent, 
      name,
    }

    await axios.post('/mail', body, {
        headers: {
          'Content-type': 'application/json'
        }
      }).then((res) => {
        alert('Email Sent Successfully')
        setLoading(false)
        console.log(res)
        window.location.reload()
      }).catch((err) => {
        console.log(err)
        setLoading(false)
      })
        } else {
          alert('Compose Email')
        }
        
      } else {
        alert('Please fill all required filled')
      }
      