function myFunction() {
    rule_input = document.querySelector(".regel");
    if (rule_input.value.length == 0) {
        rule_input.classList.add("error");
        error = true;
        return;
    }

    else {
        rule_input.classList.remove("error");
    }

    var x;
    if (confirm("Bekräfta din nya regel!") == true) {
        x = "Du har nu lagt till en ny regel!";
    } else {
        x = "Du la inte till en ny regel!";
    }
    document.querySelector("#demo").innerHTML = x;
}
