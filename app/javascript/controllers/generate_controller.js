import { Controller } from "stimulus"

export default class extends Controller {
    connect() {
        this.count = 0
    }

    async initFile() {
        this.element.ownerDocument.getElementById("fileinput").click()
    }

    async selected(event) {
        this.count++

        // remove initial "Add your files" section
        if (this.count === 1)
            this.element.ownerDocument.getElementById("initial").remove()
    }
}