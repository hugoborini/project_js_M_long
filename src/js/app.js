document.addEventListener("DOMContentLoaded", function(){
	
	class Model {
		
		constructor() {
			this.pages = [
				{
					title: 'Homepage',
                    url: '/',
                    text: "HELLO WORLD",
                    background: 'red'
				},
				{
					title: 'Contact',
					url: '/contact',
					background: 'green'
                },
			]
		}

		getPageByUrl(url) {
			return this.pages.find(page => page.url == url)
		}

	}

	class View {

		constructor(elem) {
			this.container = document.querySelector(elem)
		}

		changeTitle(text) {
			this.container.innerHTML += text
		}

		changeBackground(color) {
			this.container.style.background = color
        }
        centerFlex(){
            this.container.style.display = "flex"
            this.container.style.justifyContent = "center"
        }
        setFont(size){
            this.container.style.fontSize = size
        }
        setFontFamily(fontFamily){
            this.container.style.fontFamily = fontFamily
        }
        setFontWeight(fontWeight){
            this.container.style.fontWeight = fontWeight
        }
        setMarginTop(marginTop){
            this.container.style.marginTop = marginTop
        }
        setAnimation(anim){
            this.container.style.animation = anim
        }
        getInputValue(elem){
            return this.container.querySelector(elem).value
        }
        setFlexCollumCenter(){
            this.container.style.display= 'flex'
            this.container.style.flexDirection = "column"
            this.container.style.alignItems= "center"
        }
        setInputValue(value){
            this.container.querySelector(elem).value = value
        }



	}

	function controller() {
		let data = new Model()
        const currentPage = data.getPageByUrl('/')

        let input = new View(".input-todo");
        let submit = new View(".input-todo");
        let containerTodo = new View(".container-todo")

        //INPUT 
        input.changeTitle("<input class='txt' type=text>")
        input.centerFlex()
        input.setMarginTop("20px")

        //Submit

        submit.changeTitle("<input class='submit' type=submit>")

        //container todo
        containerTodo.setFlexCollumCenter()
        containerTodo.setMarginTop("10px")

        //elemTodo

        document.querySelector(".submit").addEventListener("click", ()=>{
            containerTodo.changeTitle(`<div class='item'>${input.getInputValue('.txt')} </div>`)
            
        });

    }

	controller()

})