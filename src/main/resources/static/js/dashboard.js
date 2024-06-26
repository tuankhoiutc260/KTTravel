window.addEventListener("DOMContentLoaded", function () {
    allInputPrice.forEach((inputPrice) => {
        inputPrice.addEventListener("keyup", function () {
            formatPrice(inputPrice);
        });
    });
});

const btnShowToast = document.querySelector("#show-toast");
const toastBox = document.querySelector("#toast-box");
let successMsg =
    '<span class="material-symbols-outlined"> check_circle </span> <span>Successfully</span>';
btnShowToast.addEventListener("click", function () {
    // showToast(false );
    submitAddNewTour1()
});

function showToast(process) {
    switch (process) {
        case true:
            let successToast = document.createElement("div");
            let successMsg =
                '<span class="material-symbols-outlined"> check_circle </span> <span>Add Tour Successfully</span>';
            successToast.classList.add("toast", "success-toast");
            successToast.innerHTML = successMsg;
            toastBox.appendChild(successToast);
            setTimeout(() => {
                successToast.remove();
            }, 4000);
            break;
        case false:
            let failedToast = document.createElement("div");
            let failedMsg =
                '<span class="material-symbols-outlined"> priority_high </span> <span>Tour Already Exists</span>';
            failedToast.classList.add("toast", "warning-toast");
            failedToast.innerHTML = failedMsg;
            toastBox.appendChild(failedToast);
            setTimeout(() => {
                failedToast.remove();
            }, 4000);
            break;
    }
}

function formatPrice(element) {
    const inputPriceRemovedChar = element.value.replace(/[^0-9]/g, "");
    let inputPriceRemovedDot;
    inputPriceRemovedDot = inputPriceRemovedChar.replace(/\./g, "");
    let inputPriceValue = inputPriceRemovedDot;
    if (inputPriceValue.length < 1) {
        inputPriceValue = "0";
    }
    inputPriceValue = inputPriceValue.replace(/^0+/, "");
    if (inputPriceValue.length < 1) {
        inputPriceValue = "0";
    }
    const maxTourMainPrice = parseInt(element.getAttribute("max"), 10);
    if (parseInt(inputPriceValue, 10) > maxTourMainPrice) {
        inputPriceValue = inputPriceValue.substring(0, inputPriceValue.length - 1);
    }
    let inputTourPriceFormatted;
    inputTourPriceFormatted = inputPriceValue.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        "."
    );
    element.value = inputTourPriceFormatted;
}

const allInputPrice = document.querySelectorAll(".input-price");
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const titles = document.querySelectorAll(".title");
const btnFunction = document.querySelectorAll(".navigation > ul > li");
const liNavigation = document.querySelector(".navigation li");
const iconBtn = document.querySelector(".navigation .icon-btn");
const liNavigationActive = document.querySelector(".navigation.active ul li");

toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    titles.forEach((title) => {
        title.classList.toggle("active");
    });
    const iconSize = iconBtn.width;
    const paddingLiNavigation = liNavigation.padding;
    liNavigationActive.style.width = iconSize + paddingLiNavigation;
});

btnFunction.forEach((btn) => {
    btn.addEventListener("click", function () {
        btnFunction.forEach((otherBtn) => {
            otherBtn.classList.remove("active");
        });
        btn.classList.toggle("active");
    });
});

const iconProgressBar = document.getElementById("icon-progress-bar");
const iconProgressBarWidth = parseFloat(
    window.getComputedStyle(iconProgressBar).getPropertyValue("width")
);
const contNumbs = document.querySelectorAll(".cont-numb");
const btnNextProgress = document.getElementById("btn-next-progress");
const contProgress = document.querySelector(".cont-progress");
const subContSuccessProgressBar = document.querySelector(
    ".sub-cont-success-progress-bar"
);
const contProgressWidth = parseFloat(
    window.getComputedStyle(contProgress).getPropertyValue("width")
);
const sub2ContInfNewTour = document.querySelector(".sub-2-cont-inf-new-tour");
const inputTourName = document.getElementById("input-tour-name");
const inputTourDescription = document.getElementById("input-tour-description");
const allSubContInfNewTour = document.querySelectorAll(
    ".sub-cont-inf-new-tour"
);

const textareas = document.querySelectorAll("textarea");
textareas.forEach((textarea) => {
    textarea.addEventListener("keyup", (e) => {
        textarea.style.height = `50px`;
        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
    });
});

const allProgressBarsText = document.querySelectorAll(
    ".cont-add-new-tour .sub-cont-progress span"
);

function checkContainerOverview() {
    let isValid = true;
    if (inputTourName.value.trim() === "") {
        inputTourName.style.borderColor = "red";
        isValid = false;
    } else {
        inputTourName.style.borderColor = "";
    }
    if (inputTourDescription.value.trim() === "") {
        inputTourDescription.style.borderColor = "red";
        isValid = false;
    } else {
        inputTourDescription.style.borderColor = "";
    }
    return isValid;
}

function checkEmptyInputField() {
    const timeInput = document.getElementById("input-centralized-time-inf");
    timeInput.addEventListener("change", () => {
        if (timeInput.value) {
            timeInput.classList.add("selected");
            timeInput.style.borderColor = "";
        } else {
            timeInput.classList.remove("selected");
        }
    });

    const alInputField = document.querySelectorAll(".input-field");
    const allContInputTourImage = document.querySelectorAll(
        ".cont-input-tour-image"
    );
    alInputField.forEach((inputField) => {
        const subContInputField = inputField.closest(".sub-cont-input-field");
        const inputTourHighlightCloset = inputField.closest(
            ".input-tour-highlight-field.active"
        );

        inputField.addEventListener("keyup", function () {
            if (subContInputField) {
                if (
                    inputField.tagName === "INPUT" ||
                    inputField.tagName === "TEXTAREA"
                ) {
                    if (inputField.value.trim() === "") {
                        subContInputField.style.borderColor = "red";
                    } else {
                        subContInputField.style.borderColor = "";
                    }
                } else {
                    if (inputField.textContent.trim() === "") {
                        subContInputField.style.borderColor = "red";
                    } else {
                        subContInputField.style.borderColor = "";
                    }
                }
            } else if (inputTourHighlightCloset) {
                if (inputField.value.trim() === "") {
                    inputTourHighlightCloset.style.borderColor = "red";
                } else {
                    inputTourHighlightCloset.style.borderColor = "";
                }
            } else {
                if (inputField.value.trim() === "") {
                    inputField.style.borderColor = "red";
                } else {
                    inputField.style.borderColor = "";
                }
            }
        });
    });

    allContInputTourImage.forEach((contInputTourImage) => {
        const inputTourImageFile = contInputTourImage.querySelector(
            ".input-tour-image-file"
        );
        inputTourImageFile.addEventListener("change", function () {
            if (inputTourImageFile.files.length === 0) {
                contInputTourImage.style.borderColor = "red";
            } else {
                contInputTourImage.style.borderColor = "";
            }
        });
    });
}

checkEmptyInputField();

function closeContAddNewTour() {
    const contProcess1 = document.querySelector(".cont-process-1");
    allSubContInfNewTour.forEach((subContInfNewTour) => {
        subContInfNewTour.classList.remove("active");
        contProcess1.classList.add("active");
    });

    const contMainSubProgress1 = document.querySelector(
        ".cont-main-sub-progress-1"
    );
    const allContMainSubProgress = document.querySelectorAll(
        ".cont-main-sub-progress"
    );
    allContMainSubProgress.forEach((contMainSubProgress) => {
        contMainSubProgress.classList.remove("active");
        contMainSubProgress1.classList.add("active");
    });
    subContSuccessProgressBar.style.width = 0 + "px";
    iconProgressBar.style.left = -iconProgressBarWidth / 2 + "px";
    allProgressBarsText[0].textContent = "";

    for (let i = 2; i <= contNumbs.length; i++) {
        allProgressBarsText[i - 1].textContent = i;
    }
    lastActiveIndex = -1;
    currentActiveIndex = 0;
    contAddNewTour.classList.remove("active");
}

function subResetField() {
    const allResetField = document.querySelectorAll(".reset-field");
    allResetField.forEach((resetField) => {
        if (resetField.classList.contains("text-field")) {
            if (resetField.tagName === "INPUT" || resetField.tagName === "TEXTAREA") {
                if (resetField.value.trim() !== "") {
                    resetField.value = "";
                }
            } else {
                if (resetField.textContent.trim() !== "") {
                    resetField.textContent = "";
                }
            }
        } else if (resetField.classList.contains("number-field")) {
            if (resetField.tagName === "INPUT" || resetField.tagName === "TEXTAREA") {
                if (resetField.value.value !== 0) {
                    resetField.value = 0;
                }
            } else {
                if (resetField.textContent !== "0") {
                    if (resetField.classList.contains("char-count-100")) {
                        resetField.textContent = `0/100`;
                    } else if (resetField.classList.contains("char-count-250")) {
                        resetField.textContent = `0/250`;
                    }
                }
            }
        }
    });
}

function resetField() {
    const allResetField = document.querySelectorAll(".reset-field");
    let needConfirmation = false;

    allResetField.forEach((resetField) => {
        const subInputField = resetField.closest(".sub-input-field");
        if (subInputField) {
            subInputField.style.borderColor = "";
        } else {
            resetField.style.borderColor = "";

            if (resetField.classList.contains("text-field")) {
                if (
                    resetField.tagName === "INPUT" ||
                    resetField.tagName === "TEXTAREA"
                ) {
                    if (resetField.value.trim() !== "") {
                        needConfirmation = true;
                    }
                } else {
                    if (resetField.textContent.trim() !== "") {
                        needConfirmation = true;
                    }
                }
            } else if (resetField.classList.contains("number-field")) {
                if (
                    resetField.tagName === "INPUT" ||
                    resetField.tagName === "TEXTAREA"
                ) {
                    if (resetField.value !== "0") {
                        needConfirmation = true;
                    }
                }
            } else if (resetField.classList.contains("image-field")) {
                const resetImageFieldChild = resetField.querySelector(
                    ".input-tour-image-file"
                );
                const inputTourImageArea = resetField.querySelector(
                    ".input-tour-image-area"
                );

                if (resetImageFieldChild.files.length !== 0) {
                    needConfirmation = true;
                    inputTourImageArea.classList.remove("active");
                    resetImageFieldChild.value = "";
                    const allImg = inputTourImageArea.querySelectorAll("img");
                    allImg.forEach((img) => img.remove());
                }
            }
        }
    });

    if (needConfirmation && finishAddNewTour) {
        // showToast(successMsg);
        subResetField();
        closeContAddNewTour();
    } else if (needConfirmation && !finishAddNewTour) {
        const confirmReset = confirm("Are you sure you want to close?");
        if (confirmReset) {
            subResetField();
            closeContAddNewTour();
        }
    } else {
        closeContAddNewTour();
    }

    const highlights = document.querySelectorAll(
        ".cont-input-tour-highlights-field"
    );
    for (let i = 1; i < highlights.length; i++) {
        highlights[i].remove();
    }

    const included = document.querySelectorAll(".cont-input-tour-included-field");
    for (let i = 1; i < included.length; i++) {
        included[i].remove();
    }

    const excluded = document.querySelectorAll(".cont-input-tour-excluded-field");
    for (let i = 1; i < excluded.length; i++) {
        excluded[i].remove();
    }
    finishAddNewTour = false;
}

const inputCentralizedPositionInf = document.getElementById(
    "input-centralized-position-inf"
);
const inputCentralizedTimeInf = document.getElementById(
    "input-centralized-time-inf"
);

function checkContainerDetails() {
    let isValid = true;
    if (inputDepartureDate.value.trim() === "") {
        inputDepartureDate.style.borderColor = "red";
        isValid = false;
    } else {
        inputDepartureDate.style.borderColor = "";
    }
    if (inputDestinationDate.value.trim() === "") {
        inputDestinationDate.style.borderColor = "red";
        isValid = false;
    } else {
        inputDestinationDate.style.borderColor = "";
    }
    if (inputPositionDeparture.value.trim() === "") {
        inputPositionDeparture.style.borderColor = "red";
        isValid = false;
    } else {
        inputPositionDeparture.style.borderColor = "";
    }
    if (inputPositionDestination.value.trim() === "") {
        inputPositionDestination.style.borderColor = "red";
        isValid = false;
    } else {
        inputPositionDestination.style.borderColor = "";
    }
    if (inputCentralizedTimeInf.value.trim() === "") {
        inputCentralizedTimeInf.style.borderColor = "red";
        isValid = false;
    } else {
        inputCentralizedTimeInf.style.borderColor = "";
    }
    if (inputCentralizedPositionInf.value.trim() === "") {
        inputCentralizedPositionInf.style.borderColor = "red";
        isValid = false;
    } else {
        inputCentralizedPositionInf.style.borderColor = "";
    }
    return isValid;
}

function checkContainerSchedule() {
    let isValid = true;
    const allInputTourScheduleTitle = document.querySelectorAll(
        ".input-tour-schedule-title"
    );

    const allInputTourDescriptionSchedule = document.querySelectorAll(
        ".div-input-tour-description-schedule"
    );
    allInputTourScheduleTitle.forEach((inputTourScheduleTitle) => {
        if (inputTourScheduleTitle.value.trim() === "") {
            inputTourScheduleTitle.style.borderColor = "red";
            isValid = false;
        } else {
            inputTourScheduleTitle.style.borderColor = "";
        }
    });
    allInputTourDescriptionSchedule.forEach((inputTourDescriptionSchedule) => {
        const parentInputTourDescriptionSchedule =
            inputTourDescriptionSchedule.parentElement;

        if (inputTourDescriptionSchedule.textContent.trim() === "") {
            parentInputTourDescriptionSchedule.style.borderColor = "red";
            isValid = false;
        } else {
            parentInputTourDescriptionSchedule.style.borderColor = "";
        }
    });

    return isValid;
}

const inputTourMainPrice = document.getElementById("input-tour-main-price");
const inputTourAdultPrice = document.getElementById("input-tour-adult-price");
const inputTourChildrenPrice = document.getElementById(
    "input-tour-children-price"
);

function checkContainerPriceList() {
    let isValid = true;
    if (inputTourMainPrice.value === "0") {
        inputTourMainPrice.style.borderColor = "red";
        isValid = false;
    } else {
        inputTourMainPrice.style.borderColor = "";
    }
    if (inputTourAdultPrice.value === "0") {
        inputTourAdultPrice.style.borderColor = "red";
        isValid = false;
    } else {
        inputTourAdultPrice.style.borderColor = "";
    }
    if (inputTourChildrenPrice.value === "0") {
        inputTourChildrenPrice.style.borderColor = "red";
        isValid = false;
    } else {
        inputTourChildrenPrice.style.borderColor = "";
    }
    return isValid;
}

function checkNote() {
    let isValid = true;
    const allInputTourHighlight = document.querySelectorAll(
        ".input-tour-highlight-field"
    );
    const allInputTourIncluded = document.querySelectorAll(
        ".input-tour-included-field"
    );
    const allInputTourExcluded = document.querySelectorAll(
        ".input-tour-excluded-field"
    );

    const allContInputTourImage = document.querySelectorAll(
        ".cont-input-tour-image"
    );

    allInputTourHighlight.forEach((inputTourHighlight) => {
        const inputTourHighlightCloset = inputTourHighlight.closest(
            ".sub-cont-input-field"
        );
        if (inputTourHighlight.value.trim() === "") {
            inputTourHighlightCloset.style.borderColor = "red";
            isValid = false;
        } else {
            inputTourHighlightCloset.style.borderColor = "";
        }
    });

    allInputTourIncluded.forEach((inputTourIncluded) => {
        const inputTourIncludedCloset = inputTourIncluded.closest(
            ".sub-cont-input-field"
        );
        if (inputTourIncluded.value.trim() === "") {
            inputTourIncludedCloset.style.borderColor = "red";
            isValid = false;
        } else {
            inputTourIncludedCloset.style.borderColor = "";
        }
    });

    allInputTourExcluded.forEach((inputTourExcluded) => {
        const inputTourExcludedCloset = inputTourExcluded.closest(
            ".sub-cont-input-field"
        );
        if (inputTourExcluded.value.trim() === "") {
            inputTourExcludedCloset.style.borderColor = "red";
            isValid = false;
        } else {
            inputTourExcludedCloset.style.borderColor = "";
        }
    });

    // allContInputTourImage.forEach((contInputTourImage) => {
    //     const inputTourImageFile = contInputTourImage.querySelector(
    //         ".input-tour-image-file"
    //     );
    //     if (inputTourImageFile.files.length === 0) {
    //         contInputTourImage.style.borderColor = "red";
    //         isValid = false;
    //     } else {
    //         contInputTourImage.style.borderColor = "";
    //     }
    // });
    return isValid;
}

let currentActiveIndex = 0;
let lastActiveIndex = -1;
let finishAddNewTour = false;

btnNextProgress.addEventListener("click", function (event) {
    event.preventDefault();

    const currentProgressBarWidth = subContSuccessProgressBar.offsetWidth;
    const newProgressBarWidth = currentProgressBarWidth + contProgressWidth * 0.2;
    const currentIconProgressBarLeft = parseFloat(
        window.getComputedStyle(iconProgressBar).getPropertyValue("left")
    );
    const newIconProgressBarLeft =
        currentIconProgressBarLeft + contProgressWidth * 0.2;

    function updateProgressAndNavigation() {
        contNumbs.forEach((contNumb, index) => {
            if (
                contNumb.closest(".cont-main-sub-progress").classList.contains("active")
            ) {
                lastActiveIndex = index;
            }
        });
        if (lastActiveIndex + 1 < contNumbs.length) {
            contNumbs[lastActiveIndex + 1]
                .closest(".cont-main-sub-progress")
                .classList.add("active");
            iconProgressBar.style.left = newIconProgressBarLeft + "px";
            subContSuccessProgressBar.style.width = newProgressBarWidth + "px";
            allProgressBarsText[lastActiveIndex + 1].textContent = "";
            allProgressBarsText[lastActiveIndex].innerHTML =
                '<span class="material-symbols-outlined">done</span>';
            allSubContInfNewTour[lastActiveIndex].classList.remove("active");
            allSubContInfNewTour[lastActiveIndex + 1].classList.add("active");
            currentActiveIndex++;
        }
    }

    function addSchedule() {
        const departureDateParts = inputDepartureDate.value.split("/");
        const destinationDateParts = inputDestinationDate.value.split("/");
        departureDate = new Date(
            departureDateParts[2],
            departureDateParts[1] - 1,
            departureDateParts[0]
        );
        destinationDate = new Date(
            destinationDateParts[2],
            destinationDateParts[1] - 1,
            destinationDateParts[0]
        );
        const timeDifference = destinationDate - departureDate;
        const dayDifference = timeDifference / (1000 * 60 * 60 * 24) + 1;
        removeAllSchedules();
        for (let i = 0; i < dayDifference; i++) {
            addScheduleContainer(i);
        }
    }

    switch (currentActiveIndex) {
        case 0:
            checkEmptyInputField();
            if (checkContainerOverview()) {
                updateProgressAndNavigation();
            }
            break;
        case 1:
            checkEmptyInputField();
            if (checkContainerDetails()) {
                updateProgressAndNavigation();
                addSchedule();
            }
            break;
        case 2:
            checkEmptyInputField();
            if (checkContainerSchedule()) {
                const allDivInputTourDescriptionSchedule = document.querySelectorAll(
                    ".div-input-tour-description-schedule"
                );

                allDivInputTourDescriptionSchedule.forEach(function (
                    divInputTourDescriptionSchedule
                ) {
                    const inputTourDescriptionSchedule =
                        divInputTourDescriptionSchedule.nextElementSibling;
                    inputTourDescriptionSchedule.value =
                        divInputTourDescriptionSchedule.textContent.trim();
                });
                updateProgressAndNavigation();
            }
            break;
        case 3:
            checkEmptyInputField();
            if (checkContainerPriceList()) {
                updateProgressAndNavigation();
            }
            break;
        case 4:
            checkEmptyInputField();
            if (checkNote()) {
                finishAddNewTour = true;
                if (finishAddNewTour) {
                    // submitAddNewTour()
                    //     .then(result => {
                    //     if (result.success) {
                    //         showToast(result.success);
                    //         resetField();
                    //     } else {
                    //         showToast(result.success); // Hiển thị thông báo lỗi cụ thể
                    //     }
                    // }).catch(error => {
                    //     console.log('Error during submitAddNewTour:', error);
                    //     showToast('Có lỗi không mong muốn xảy ra.');
                    // });
                }
            }

    }
    if (currentActiveIndex === 1) {
        sub2ContInfNewTour.style.overflowX = "visible";
    } else {
        sub2ContInfNewTour.style.overflowX = "hidden";
    }
});

function submitAddNewTour() {
    const departureSelectedCityID = Number(document.querySelector('.departure-position-options li.selected').getAttribute('data-id'));
    const destinationSelectedCityID = Number(document.querySelector('.destination-position-options li.selected').getAttribute('data-id'));
    const departureDateStr = document.getElementById('input-departure-date').value.replace(/\//g, '-');
    const destinationDateStr = document.getElementById('input-destination-date').value.replace(/\//g, '-');

    const tourData = {
        name: document.getElementById('input-tour-name').value,
        description: document.getElementById('input-tour-description').value,
        departureDate: departureDateStr,
        destinationDate: destinationDateStr,
        positionDepartureID: departureSelectedCityID,
        positionDestinationID: destinationSelectedCityID,
        centralizedTimeInf: document.getElementById('input-centralized-time-inf').value,
        centralizedPositionInf: document.getElementById('input-centralized-position-inf').value,
        schedules: [],
        mainPrice: document.getElementById('input-tour-main-price').value.replace(/\./g, ""),
        adultPrice: document.getElementById('input-tour-adult-price').value.replace(/\./g, ""),
        childrenPrice: document.getElementById('input-tour-children-price').value.replace(/\./g, ""),
        toddlerPrice: document.getElementById('input-tour-toddler-price').value.replace(/\./g, ""),
        infantPrice: document.getElementById('input-tour-infant-price').value.replace(/\./g, ""),
        highlights: Array.from(document.querySelectorAll(".input-tour-highlight-field"), input => input.value),
        included: Array.from(document.querySelectorAll(".input-tour-included-field"), input => input.value),
        excluded: Array.from(document.querySelectorAll(".input-tour-excluded-field"), input => input.value)
    };

    console.log(tourData);

    const allInputTourScheduleTitle = document.querySelectorAll('.input-tour-schedule-title');
    allInputTourScheduleTitle.forEach((element, index) => {
        tourData.schedules.push({
            title: element.value,
            description: document.querySelectorAll('.div-input-tour-description-schedule')[index].nextElementSibling.value.trim()
        });
    });

    fetch('/api/tours/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tourData)
    })
        .then(response => {
            if (response.ok) {
                window.location.href = '/dashboard';
            } else if (response.status === 409) {
                alert('Tour đã tồn tại.');
            } else {
                response.json().then(data => {
                    alert(data.message || 'Có lỗi xảy ra.');
                });
            }
        })
        .catch(error => {
            alert('Có lỗi không mong muốn xảy ra.');
        });
}


function submitAddNewTour1() {
    // const departureSelectedCityID = document.querySelector('.departure-position-options li.selected').getAttribute('data-id');
    // const destinationSelectedCityID = document.querySelector('.destination-position-options li.selected').getAttribute('data-id');
    // const departureDateStr = document.getElementById('input-departure-date').value.replace(/\//g, '-');
    // const destinationDateStr = document.getElementById('input-destination-date').value.replace(/\//g, '-');

    const tourData = {
        // name: document.getElementById('input-tour-name').value,
        // description: document.getElementById('input-tour-description').value,
        // departureDate: departureDateStr,
        // destinationDate: destinationDateStr,
        // positionDeparture: departureSelectedCityID,
        // positionDestination: destinationSelectedCityID,
        // centralizedTimeInf: document.getElementById('input-centralized-time-inf').value,
        // centralizedPositionInf: document.getElementById('input-centralized-position-inf').value,
        // schedules: [],
        // mainPrice: document.getElementById('input-tour-main-price').value.replace(/\./g, ""),
        // adultPrice: document.getElementById('input-tour-adult-price').value.replace(/\./g, ""),
        // childrenPrice: document.getElementById('input-tour-children-price').value.replace(/\./g, ""),
        // toddlerPrice: document.getElementById('input-tour-toddler-price').value.replace(/\./g, ""),
        // infantPrice: document.getElementById('input-tour-infant-price').value.replace(/\./g, ""),
        // highlights: Array.from(document.querySelectorAll(".input-tour-highlight-field"), input => input.value),
        // included: Array.from(document.querySelectorAll(".input-tour-included-field"), input => input.value),
        // excluded: Array.from(document.querySelectorAll(".input-tour-excluded-field"), input => input.value)

        name: '5',
        description: '5',
        departureDate: '20-5-2024',
        destinationDate: '21-5-2024',
        positionDepartureID: 1,
        positionDestinationID: 2,
        centralizedTimeInf: '17:45',
        centralizedPositionInf: '5',
        schedules: [{
            "title": "Visit Hoan Kiem Lake",
            "description": "Enjoy the beauty of the lake and surrounding area"
        }],
        mainPrice: 5,
        adultPrice: 5,
        childrenPrice: 5,
        toddlerPrice: 5,
        infantPrice: 5,
        highlights: ['1', '2', '3'],
        included: ['1', '2', '3'],
        excluded: ['1', '2', '3']
    };

    console.log(tourData)


    // const allInputTourScheduleTitle = document.querySelectorAll('.input-tour-schedule-title');
    // allInputTourScheduleTitle.forEach((element, index) => {
    //     tourData.schedules.push({
    //         title: element.value,
    //         description: document.querySelectorAll('.div-input-tour-description-schedule')[index].nextElementSibling.value.trim()
    //     });
    // });

    return fetch('/api/tours/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tourData)
    })
        .then(response => {
            if (response.ok) {
                return response.json().then(data => ({
                    success: true,
                    message: data.message
                }));
            } else if (response.status === 409) {
                return response.json().then(data => ({
                    success: false,
                    message: 'Tour đã tồn tại.'
                }));
            } else {
                return response.json().then(data => ({
                    success: false,
                    message: data.message || 'Có lỗi xảy ra.'
                }));
            }
        })
        .catch(error => ({
            success: false,
            message: 'Có lỗi không mong muốn xảy ra.'
        }));
}


let dayCount = 0;
let departureDate;
let destinationDate;

function addScheduleContainer(dayIndex) {
    dayCount++;
    const container = document.getElementById("cont-tour-schedule");
    const scheduleDate = new Date(departureSelectedDate);
    scheduleDate.setDate(departureSelectedDate.getDate() + dayIndex);
    const formattedDate = scheduleDate.toLocaleDateString("vi-VN");
    const newSchedule = document.createElement("div");
    newSchedule.className = "cont-date-schedule";
    newSchedule.innerHTML = `
<div id="cont-tour-schedule-title" class="cont-inf-field">
    <span style="font-weight: bold; font-size: 1.5rem; text-align: center;">Day ${dayCount} - ${formattedDate}</span>
    <label for="input-tour-schedule-title-${dayCount}" class="title-field">Title Schedule <span>(required)</span></label>
    <input th:field="*{schedules[${dayCount - 1}].getTitle()}" type="text" id="input-tour-schedule-title-${dayCount}" name="inputTourScheduleTitle${dayCount}" class="input-field reset-field input-tour-schedule-title text-field" placeholder="e.g: Khám phá Thác Datanla và Đồi Cỏ xanh..." maxlength="100" oninput="countChar100(this, document.querySelector('#tour-schedule-title-char-count'))">
    <span id="tour-schedule-title-char-count" class="char-count char-count-100 reset-field">0/100</span>
</div>
<div class="cont-schedule-content cont-inf-field">
    <p class="title-field">Description Schedule <span>(required)</span></p>
    <div class="sub-cont-input-field sub-input-field">
        <div style="border: none;" id="div-input-tour-description-schedule-${dayCount}" class="input-field div-input-tour-description-schedule reset-field text-field" contenteditable="true"></div>
        <input th:field="*{schedules[${dayCount - 1}].getDescription()}" type="hidden" id="input-tour-description-schedule-${dayCount}" name="inputTourDescriptionSchedule${dayCount}" class="input-tour-description-schedule">
        <div class="cont-tool-editor">
            <a class="btn btn-tertiary" href="#" onclick="document.execCommand('bold', true, '')"><strong>B</strong></a>
            <a class="btn btn-tertiary" href="#" onclick="document.execCommand('italic', true, '')"><em>I</em></a>
            <a class="btn btn-tertiary" href="#" onclick="document.execCommand('underline', true, '')"><u>U</u></a>
        </div>
    </div>
</div>
      `;
    container.appendChild(newSchedule);
    checkEmptyInputField();
}

function removeAllSchedules() {
    const container = document.getElementById("cont-tour-schedule");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    dayCount = 0;
}

contNumbs.forEach((contNumb, index) => {
    contNumb.addEventListener("click", function () {
        if (
            contNumb.closest(".cont-main-sub-progress").classList.contains("active")
        ) {
            for (let i = index + 1; i < contNumbs.length; i++) {
                contNumbs[i]
                    .closest(".cont-main-sub-progress")
                    .classList.remove("active");
                allProgressBarsText[i - 1].innerHTML = "";
            }

            const activeCount = index;
            if (activeCount === 1) {
                sub2ContInfNewTour.style.overflowX = "visible";
            }

            if (activeCount !== 1) {
                sub2ContInfNewTour.style.overflowX = "hidden";
            }
            const newProgressBarWidth =
                contProgressWidth * ((activeCount * 20) / 100);
            subContSuccessProgressBar.style.width = newProgressBarWidth + "px";
            iconProgressBar.style.left =
                -iconProgressBarWidth / 2 + newProgressBarWidth + "px";

            for (let i = contNumbs.length; i > activeCount + 1; i--) {
                allProgressBarsText[i - 1].textContent = i;
                allSubContInfNewTour[i - 1].classList.remove("active");
            }

            allSubContInfNewTour[index].classList.add("active");
            currentActiveIndex = index;
        }
    });
});

function countChar100(element, spanElement) {
    let elementCountCharNumb = element.value.trim().length;
    spanElement.textContent = elementCountCharNumb + "/100";
}

function countChar250(element, spanElement) {
    let elementCountCharNumb = element.value.trim().length;
    spanElement.textContent = elementCountCharNumb + "/250";
}

const btnCloseContAddNewTour = document.getElementById(
    "btn-close-cont-add-new-tour"
);
const contAddNewTour = document.querySelector(".cont-add-new-tour");
const btnAddNewTour = document.getElementById("btn-add-new-tour");
btnCloseContAddNewTour.addEventListener("click", function () {
    resetField();
});

btnAddNewTour.addEventListener("click", function () {
    iconProgressBar.style.left = -iconProgressBarWidth / 2 + "px";

    destinationSelectedDate = "";
    departureSelectedDate = "";
    currentDepartureMonth = {value: currentDepartureDate.getMonth()};
    currentDestinationMonth = {value: currentDestinationDate.getMonth()};
    currentDepartureYear = {value: currentDepartureDate.getFullYear()};
    currentDestinationYear = {value: currentDestinationDate.getFullYear()};
    generateDepartureCalendar(
        currentDepartureMonth.value,
        currentDepartureYear.value
    );
    generateDestinationCalendar(
        currentDestinationMonth.value,
        currentDestinationYear.value
    );
    contAddNewTour.classList.toggle("active");
});
// Calendar
const isLeapYear = (year) => {
    return (
        (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
        (year % 100 === 0 && year % 400 === 0)
    );
};

const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
};

const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const contDepartureCalendar = document.getElementById(
    "cont-departure-calendar"
);
const contDestinationCalendar = document.getElementById(
    "cont-destination-calendar"
);

const contDepartureCalendarMonth = document.querySelector(
    ".cont-departure-calendar-month"
);
const contDestinationCalendarMonth = document.querySelector(
    ".cont-destination-calendar-month"
);

const monthDeparturePicker = document.getElementById("month-departure-picker");
const monthDestinationPicker = document.getElementById(
    "month-destination-picker"
);

const departureMonthList = contDepartureCalendar.querySelector(
    "#departure-month-list"
);
const destinationMonthList = contDestinationCalendar.querySelector(
    "#destination-month-list"
);

// Current month and year
let currentDepartureDate = new Date();
let currentDestinationDate = new Date();
let currentDepartureMonth = {value: currentDepartureDate.getMonth()};
let currentDestinationMonth = {value: currentDestinationDate.getMonth()};
let currentDepartureYear = {value: currentDepartureDate.getFullYear()};
let currentDestinationYear = {value: currentDestinationDate.getFullYear()};

// Generate the calendar for a specific month and year
const generateDepartureCalendar = (departureMonth, departureYear) => {
    let departureCalendarDays = document.querySelector(
        ".departure-calendar-days"
    );
    departureCalendarDays.innerHTML = "";
    let departureCalendarHeaderYear = document.getElementById("departure-year");

    let departureDaysOfMonth = [
        31,
        getFebDays(departureYear),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];

    monthDeparturePicker.innerHTML = monthName[departureMonth];
    departureCalendarHeaderYear.innerHTML = departureYear.toString();
    let departureFirstDay = new Date(departureYear, departureMonth);
    for (
        let i = 0;
        i <= departureDaysOfMonth[departureMonth] + departureFirstDay.getDay() - 1;
        i++
    ) {
        let departureDay = document.createElement("div");
        if (i >= departureFirstDay.getDay()) {
            departureDay.innerHTML = (i - departureFirstDay.getDay() + 1).toString();
            if (
                i - departureFirstDay.getDay() + 1 === currentDepartureDate.getDate() &&
                departureYear === currentDepartureDate.getFullYear() &&
                departureMonth === currentDepartureDate.getMonth()
            ) {
                departureDay.classList.add("current-date");
            }
        }
        departureCalendarDays.appendChild(departureDay);
    }
    attachEventListenersDepartureToDays();
};

const attachEventListenersDepartureToDays = () => {
    const departureDayElements = document.querySelectorAll(
        ".departure-calendar-days > div"
    );
    const departureToday = new Date();
    departureDayElements.forEach((departureDayElement) => {
        const departureDay = parseInt(departureDayElement.innerHTML);
        if (isNaN(departureDay)) return;
        const departureMonth = currentDepartureMonth.value;
        const departureYear = currentDepartureYear.value;
        const departureDate = new Date(departureYear, departureMonth, departureDay);
        departureDayElement.classList.remove("future-day");
        if (destinationSelectedDate !== "") {
            if (departureDate > destinationSelectedDate)
                departureDayElement.classList.add("future-day");
            departureDayElement.classList.remove("destination-selected-date");
            if (departureDate.getTime() === destinationSelectedDate.getTime()) {
                departureDayElement.classList.add("destination-selected-date");
            }
            if (departureSelectedDate) {
                departureDayElement.classList.remove("departure-selected-date");
                if (departureDate.getTime() === departureSelectedDate.getTime()) {
                    departureDayElement.classList.add("departure-selected-date");
                }
            }
        }
        if (departureDate < departureToday) {
            departureDayElement.classList.add("past-day");
        }
        departureDayElement.addEventListener("click", () => {
            if (destinationSelectedDate) {
                if (departureDate > destinationSelectedDate) {
                    return;
                }
            }
            if (departureDate < departureToday) {
                return;
            }
            selectDepartureDay(departureDayElement, departureDate);
        });
    });
};

let departureSelectedDate = "";
let destinationSelectedDate = "";
const selectDepartureDay = (departureDayElement, departureDate) => {
    const previousSelectedDepartureDay = document.querySelector(
        ".departure-calendar-days .selected-day"
    );
    if (previousSelectedDepartureDay) {
        previousSelectedDepartureDay.classList.remove("selected-day");
    }
    departureDayElement.classList.add("selected-day");
    hideDepartureCalendar();
    displayDepartureDateInfo(departureDate);
    departureSelectedDate = departureDate;
};

const inputDepartureDate = document.getElementById("input-departure-date");
const displayDepartureDateInfo = (departureDate) => {
    let formattedDepartureDate;
    formattedDepartureDate = departureDate.toLocaleDateString("vi-VN");
    inputDepartureDate.value = formattedDepartureDate;
    inputDepartureDate.style.borderColor = "";
};

function hideDepartureCalendar() {
    contDepartureCalendar.classList.remove("active");
}

function showDepartureCalendar() {
    contDepartureCalendar.classList.toggle("active");
}

inputDepartureDate.addEventListener("click", function () {
    attachEventListenersDepartureToDays();
    showDepartureCalendar();
});

monthDeparturePicker.onclick = () => {
    contDepartureCalendarMonth.classList.remove("hide");
    contDepartureCalendarMonth.classList.add("show");
};

monthName.forEach((e, index) => {
    let departureMonth = document.createElement("div");
    departureMonth.innerHTML = `<div>${e}</div>`;
    if (index === currentDepartureMonth.value) {
        departureMonth.classList.add("current-departure-month");
    }
    departureMonthList.append(departureMonth);
    departureMonth.onclick = () => {
        currentDepartureMonth.value = index;
        generateDepartureCalendar(
            currentDepartureMonth.value,
            currentDepartureYear.value
        );
        contDepartureCalendarMonth.classList.replace("show", "hide");
        document
            .querySelectorAll("#departure-month-list > div")
            .forEach((m) => m.classList.remove("selected-departure-month"));
        departureMonth.classList.add("selected-departure-month");
    };
});

document.getElementById("pre-departure-month").onclick = () => {
    currentDepartureMonth.value -= 1;
    if (currentDepartureMonth.value < 0) {
        currentDepartureMonth.value = 11;
        currentDepartureYear.value -= 1;
    }
    generateDepartureCalendar(
        currentDepartureMonth.value,
        currentDepartureYear.value
    );
};

document.getElementById("next-departure-month").onclick = () => {
    currentDepartureMonth.value += 1;
    if (currentDepartureMonth.value > 11) {
        currentDepartureMonth.value = 0;
        currentDepartureYear.value += 1;
    }
    generateDepartureCalendar(
        currentDepartureMonth.value,
        currentDepartureYear.value
    );
};

document.getElementById("pre-departure-year").onclick = () => {
    --currentDepartureYear.value;
    generateDepartureCalendar(
        currentDepartureMonth.value,
        currentDepartureYear.value
    );
};

document.getElementById("next-departure-year").onclick = () => {
    ++currentDepartureYear.value;
    generateDepartureCalendar(
        currentDepartureMonth.value,
        currentDepartureYear.value
    );
};

const generateDestinationCalendar = (destinationMonth, destinationYear) => {
    let destinationCalendarDays = document.querySelector(
        ".destination-calendar-days"
    );
    destinationCalendarDays.innerHTML = "";
    let destinationCalendarHeaderYear =
        document.getElementById("destination-year");

    let destinationDaysOfMonth = [
        31,
        getFebDays(destinationYear),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];

    monthDestinationPicker.innerHTML = monthName[destinationMonth];
    destinationCalendarHeaderYear.innerHTML = destinationYear.toString();
    let destinationFirstDay = new Date(destinationYear, destinationMonth);
    for (
        let i = 0;
        i <=
        destinationDaysOfMonth[destinationMonth] + destinationFirstDay.getDay() - 1;
        i++
    ) {
        let destinationDay = document.createElement("div");

        if (i >= destinationFirstDay.getDay()) {
            destinationDay.innerHTML = (
                i -
                destinationFirstDay.getDay() +
                1
            ).toString();
            if (
                i - destinationFirstDay.getDay() + 1 ===
                currentDestinationDate.getDate() &&
                destinationYear === currentDestinationDate.getFullYear() &&
                destinationMonth === currentDestinationDate.getMonth()
            ) {
                destinationDay.classList.add("current-date");
            }
        }
        destinationCalendarDays.appendChild(destinationDay);
    }
    attachEventListenersDestinationToDays();
};

const attachEventListenersDestinationToDays = () => {
    const destinationDayElements = document.querySelectorAll(
        ".destination-calendar-days > div"
    );
    const destinationToday = new Date();
    destinationDayElements.forEach((destinationDayElement) => {
        const destinationDay = parseInt(destinationDayElement.innerHTML);
        if (isNaN(destinationDay)) return;
        const destinationMonth = currentDestinationMonth.value;
        const destinationYear = currentDestinationYear.value;
        const destinationDate = new Date(
            destinationYear,
            destinationMonth,
            destinationDay
        );
        destinationDayElement.classList.remove("past-day");
        if (departureSelectedDate !== "") {
            if (destinationDate < departureSelectedDate)
                destinationDayElement.classList.add("past-day");
            destinationDayElement.classList.remove("departure-selected-date");
            if (destinationDate.getTime() === departureSelectedDate.getTime()) {
                destinationDayElement.classList.add("departure-selected-date");
            }
            if (destinationSelectedDate) {
                destinationDayElement.classList.remove("destination-selected-date");
                if (destinationDate.getTime() === destinationSelectedDate.getTime()) {
                    destinationDayElement.classList.add("destination-selected-date");
                }
            }
        } else if (
            departureSelectedDate === "" &&
            destinationDate < destinationToday
        ) {
            destinationDayElement.classList.add("past-day");
        }
        destinationDayElement.addEventListener("click", () => {
            if (departureDate) {
                if (destinationDate < departureSelectedDate) {
                    return;
                }
            } else {
                if (destinationDate < destinationToday) {
                    return;
                }
            }

            selectDestinationDay(destinationDayElement, destinationDate);
        });
    });
};

const selectDestinationDay = (destinationDayElement, destinationDate) => {
    const previousSelectedDestinationDay = document.querySelector(
        ".destination-calendar-days .selected-day"
    );
    if (previousSelectedDestinationDay) {
        previousSelectedDestinationDay.classList.remove("selected-day");
    }

    destinationDayElement.classList.add("selected-day");
    displayDestinationDateInfo(destinationDate);
    hideDestinationCalendar();
    destinationSelectedDate = destinationDate;
};

const inputDestinationDate = document.getElementById("input-destination-date");
const displayDestinationDateInfo = (destinationDate) => {
    let formattedDestinationDate;
    formattedDestinationDate = destinationDate.toLocaleDateString("vi-VN");
    inputDestinationDate.value = formattedDestinationDate;
    inputDestinationDate.style.borderColor = "";
};

function hideDestinationCalendar() {
    contDestinationCalendar.classList.remove("active");
}

function showDestinationCalendar() {
    contDestinationCalendar.classList.toggle("active");
}

inputDestinationDate.addEventListener("click", function () {
    attachEventListenersDestinationToDays();
    showDestinationCalendar();
});

monthDestinationPicker.onclick = () => {
    contDestinationCalendarMonth.classList.remove("hide");
    contDestinationCalendarMonth.classList.add("show");
};

monthName.forEach((e, index) => {
    let destinationMonth = document.createElement("div");
    destinationMonth.innerHTML = `<div>${e}</div>`;
    if (index === currentDestinationMonth.value) {
        destinationMonth.classList.add("current-destination-month");
    }
    destinationMonthList.append(destinationMonth);
    destinationMonth.onclick = () => {
        currentDestinationMonth.value = index;
        generateDestinationCalendar(
            currentDestinationMonth.value,
            currentDestinationYear.value
        );
        contDestinationCalendarMonth.classList.replace("show", "hide");
        document
            .querySelectorAll("#destination-month-list > div")
            .forEach((m) => m.classList.remove("selected-destination-month"));
        destinationMonth.classList.add("selected-destination-month");
    };
});

// Initialize calendar
(function () {
    generateDestinationCalendar(
        currentDestinationMonth.value,
        currentDestinationYear.value
    );
    generateDepartureCalendar(
        currentDepartureMonth.value,
        currentDepartureYear.value
    );
})();

document.getElementById("pre-destination-month").onclick = () => {
    currentDestinationMonth.value -= 1;
    if (currentDestinationMonth.value < 0) {
        currentDestinationMonth.value = 11;
        currentDestinationYear.value -= 1;
    }
    generateDestinationCalendar(
        currentDestinationMonth.value,
        currentDestinationYear.value
    );
};

document.getElementById("next-destination-month").onclick = () => {
    currentDestinationMonth.value += 1;
    if (currentDestinationMonth.value > 11) {
        currentDestinationMonth.value = 0;
        currentDestinationYear.value += 1;
    }
    generateDestinationCalendar(
        currentDestinationMonth.value,
        currentDestinationYear.value
    );
};

document.getElementById("pre-destination-year").onclick = () => {
    --currentDestinationYear.value;
    generateDestinationCalendar(
        currentDestinationMonth.value,
        currentDestinationYear.value
    );
};

document.getElementById("next-destination-year").onclick = () => {
    ++currentDestinationYear.value;
    generateDestinationCalendar(
        currentDestinationMonth.value,
        currentDestinationYear.value
    );
};

// Position
const inputPositionDeparture = document.getElementById(
    "input-position-departure"
);
const departurePositionContent = document.querySelector(
    ".departure-position-content"
);
inputPositionDeparture.addEventListener("click", function () {
    departurePositionContent.classList.toggle("active");
});

const inputPositionDestination = document.getElementById(
    "input-position-destination"
);

const destinationPositionContent = document.querySelector(
    ".destination-position-content"
);
inputPositionDestination.addEventListener("click", function () {
    destinationPositionContent.classList.toggle("active");
});

// Search Departure Position
const departurePositionOptionsList = document.querySelectorAll(
    ".departure-position-options li"
);
const optionSearchDeparturePosition = document.getElementById(
    "option-search-departure-position"
);
const departurePositionOptions = document.querySelector(
    ".departure-position-options"
);


departurePositionOptionsList.forEach(function (departurePositionOptionsListSingle) {
    departurePositionOptionsListSingle.addEventListener("click", function () {
        const inputPositionDepartureValue = document.getElementById('input-position-departure-value')
        const departureCityId = departurePositionOptionsListSingle.getAttribute('data-id');
        departurePositionOptionsList.forEach(function (option) {
            option.classList.remove('selected');
        });
        this.classList.add('selected');
        inputPositionDeparture.value = this.textContent;
        inputPositionDepartureValue.value = departureCityId;
        inputPositionDeparture.style.borderColor = "";
        departurePositionContent.classList.remove("active");
    });
});

optionSearchDeparturePosition.addEventListener("keyup", function () {
    let filter, li, i, textValue, liCount;
    filter = optionSearchDeparturePosition.value.toUpperCase();
    li = departurePositionOptions.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        liCount = li[i];
        textValue = liCount.textContent || liCount.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});
// Search Destination Position
const destinationPositionOptionsList = document.querySelectorAll(
    ".destination-position-options li"
);

const optionSearchDestinationPosition = document.getElementById(
    "optionSearchDestinationPosition"
);
const destinationPositionOptions = document.querySelector(
    ".destination-position-options"
);

destinationPositionOptionsList.forEach(function (
    destinationPositionOptionsListSingle
) {
    destinationPositionOptionsListSingle.addEventListener("click", function () {
        const inputPositionDestinationValue = document.getElementById('input-position-destination-value')
        const destinationCityId = destinationPositionOptionsListSingle.getAttribute('data-id');
        destinationPositionOptionsList.forEach(function (option) {
            option.classList.remove("selected");
        });
        this.classList.add("selected");
        const cityId = this.getAttribute('data-id');

        inputPositionDestination.value = this.textContent;
        inputPositionDestinationValue.value = destinationCityId;
        inputPositionDestination.setAttribute('th:attr', cityId);

        inputPositionDestination.style.borderColor = "";
        destinationPositionContent.classList.remove("active");
    });
});


optionSearchDestinationPosition.addEventListener("keyup", function () {
    let filter, li, i, textValue, liCount;
    filter = optionSearchDestinationPosition.value.toUpperCase();
    li = destinationPositionOptions.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        liCount = li[i];
        textValue = liCount.textContent || liCount.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});
document.addEventListener("click", function (event) {
    const target = event.target;
    if (
        !contDepartureCalendar.contains(target) &&
        !inputDepartureDate.contains(target)
    ) {
        hideDepartureCalendar();
    }

    if (
        !contDestinationCalendar.contains(target) &&
        !inputDestinationDate.contains(target)
    ) {
        hideDestinationCalendar();
    }

    if (
        !departurePositionContent.contains(target) &&
        !inputPositionDeparture.contains(target)
    ) {
        departurePositionContent.classList.remove("active");
    }

    if (
        !destinationPositionContent.contains(target) &&
        !inputPositionDestination.contains(target)
    ) {
        destinationPositionContent.classList.remove("active");
    }
});

inputTourMainPrice.addEventListener("keyup", function () {
    formatPrice(this);
    const inputTourMainPriceRemovedChar = this.value.replace(/[^0-9]/g, "");
    const inputTourMainPriceRemovedDot = inputTourMainPriceRemovedChar.replace(
        /\./g,
        ""
    );
    inputTourAdultPrice.value = inputTourMainPriceRemovedDot;
    formatPrice(inputTourAdultPrice);

    inputTourChildrenPrice.value = Math.round(inputTourMainPriceRemovedDot / 2);
    formatPrice(inputTourChildrenPrice);
    if (inputTourMainPriceRemovedDot === 0) {
        inputTourAdultPrice.style.borderColor = "red";
        inputTourChildrenPrice.style.borderColor = "red";
    }
    if (inputTourMainPriceRemovedDot > 0) {
        inputTourAdultPrice.style.borderColor = "";
        inputTourChildrenPrice.style.borderColor = "";
    }
});

inputTourAdultPrice.addEventListener("keyup", function () {
    formatPrice(this);
    const inputTourMainPriceValue = parseInt(
        inputTourMainPrice.value.replace(/\./g, ""),
        10
    );
    const inputTourAdultPriceRemovedChar = this.value.replace(/[^0-9]/g, "");
    const inputTourAdultPriceRemovedDot = inputTourAdultPriceRemovedChar.replace(
        /\./g,
        ""
    );
    let inputTourAdultPriceValue = parseInt(inputTourAdultPriceRemovedDot, 10);
    if (inputTourAdultPriceValue > inputTourMainPriceValue) {
        inputTourAdultPriceValue = Math.floor(inputTourAdultPriceValue / 10);
    }
    let inputTourPriceFormatted;
    inputTourPriceFormatted = inputTourAdultPriceValue
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    this.value = inputTourPriceFormatted;
});

inputTourChildrenPrice.addEventListener("keyup", function () {
    formatPrice(this);
    const inputTourMainPriceValue = parseInt(
        inputTourMainPrice.value.replace(/\./g, ""),
        10
    );
    const inputTourChildrenPriceRemovedChar = this.value.replace(/[^0-9]/g, "");
    const inputTourChildrenPriceRemovedDot =
        inputTourChildrenPriceRemovedChar.replace(/\./g, "");
    let inputTourChildrenPriceValue = parseInt(
        inputTourChildrenPriceRemovedDot,
        10
    );
    if (inputTourChildrenPriceValue > inputTourMainPriceValue) {
        inputTourChildrenPriceValue = Math.floor(inputTourChildrenPriceValue / 10);
    }
    let inputTourPriceFormatted;
    inputTourPriceFormatted = inputTourChildrenPriceValue
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    this.value = inputTourPriceFormatted;
});
const btnAddNewHighlight = document.getElementById("btn-add-new-highlight");
let highlightCount = 1;

btnAddNewHighlight.addEventListener("click", function () {
    highlightCount++;
    checkEmptyInputField();
    const subContInputTourHighlightsField = document.querySelector(
        ".sub-cont-input-tour-highlights-field"
    );

    const newContHighlights = document.createElement("div");
    newContHighlights.className =
        "cont-input-tour-highlights-field cont-input-tour-field-process-note sub-cont-input-field sub-input-field";
    newContHighlights.innerHTML = `
<input th:field="*{highlights[${highlightCount}]}" type="text" name="highlight${highlightCount}" class="input-field input-tour-field-process-note input-tour-highlight-field reset-field text-field" placeholder="e.g: Explore the Valley of Love: Enjoy romantic gardens, serene lakes, and scenic walking trail">
<div class="cont-btn-function-with-highlights-field cont-btn-function-with-field-of-process-note">
    <a href="#" id="btn-delete-highlights" class="btn-function-with-field-of-process-note btn-normal">
    <span class="material-symbols-outlined">close</span></a>
</div>`;
    subContInputTourHighlightsField.appendChild(newContHighlights);
    checkEmptyInputField();

    const btnDeleteNewHighlights = newContHighlights.querySelector(
        "#btn-delete-highlights"
    );

    btnDeleteNewHighlights.addEventListener("click", function (e) {
        e.preventDefault();
        highlightCount--;
        newContHighlights.remove();
    });
});

const btnAddNewIncluded = document.getElementById("btn-add-new-included");
let includeCount = 1;
btnAddNewIncluded.addEventListener("click", function () {
    checkEmptyInputField();
    includeCount++;
    const subContInputTourIncludedField = document.querySelector(
        ".sub-cont-input-tour-included-field"
    );

    const newContIncluded = document.createElement("div");
    newContIncluded.className =
        "cont-input-tour-included-field cont-input-tour-field-process-note sub-cont-input-field sub-input-field";
    newContIncluded.innerHTML = `
<input th:field="*{included[${includeCount}]}" type="text" name="included${includeCount}" class="input-field input-tour-field-process-note input-tour-included-field reset-field text-field" placeholder="e.g: Explore the Valley of Love: Enjoy romantic gardens, serene lakes, and scenic walking trail">
<div class="cont-btn-function-with-included-field cont-btn-function-with-field-of-process-note">
    <a href="#" id="btn-delete-included" class="btn-function-with-field-of-process-note btn-normal">
    <span class="material-symbols-outlined">close</span></a>
</div>`;
    subContInputTourIncludedField.appendChild(newContIncluded);
    checkEmptyInputField();

    const btnDeleteNewIncluded = newContIncluded.querySelector(
        "#btn-delete-included"
    );

    btnDeleteNewIncluded.addEventListener("click", function (e) {
        e.preventDefault();
        includeCount--;
        newContIncluded.remove();
    });
});

const btnAddNewExcluded = document.getElementById("btn-add-new-excluded");
let excludedCount = 1;
btnAddNewExcluded.addEventListener("click", function () {
    checkEmptyInputField();
    excludedCount++;
    const subContInputTourExcludedField = document.querySelector(
        ".sub-cont-input-tour-excluded-field"
    );

    const newContExcluded = document.createElement("div");
    newContExcluded.className =
        "cont-input-tour-excluded-field cont-input-tour-field-process-note sub-cont-input-field sub-input-field";
    newContExcluded.innerHTML = `
<input th:field="*{excluded[${excludedCount}]}" type="text" name="excluded${excludedCount}" class="input-field input-tour-field-process-note input-tour-excluded-field reset-field text-field" placeholder="e.g: Explore the Valley of Love: Enjoy romantic gardens, serene lakes, and scenic walking trail">
<div class="cont-btn-function-with-excluded-field cont-btn-function-with-field-of-process-note">
    <a href="#" id="btn-delete-excluded" class="btn-function-with-field-of-process-note btn-normal">
    <span class="material-symbols-outlined">close</span></a>
</div>`;
    subContInputTourExcludedField.appendChild(newContExcluded);
    checkEmptyInputField();

    const btnDeleteNewExcluded = newContExcluded.querySelector(
        "#btn-delete-excluded"
    );

    btnDeleteNewExcluded.addEventListener("click", function (e) {
        e.preventDefault();
        excludedCount--;
        newContExcluded.remove();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const selectImages = document.querySelectorAll(".cont-input-tour-image");

    selectImages.forEach((selectImage) => {
        const fileInput = selectImage.querySelector(".input-tour-image-file");
        const imgArea = selectImage.querySelector(".input-tour-image-area");

        imgArea.addEventListener("click", () => {
            fileInput.click();
        });
        fileInput.addEventListener("change", function () {
            const image = this.files[0];
            if (image && image.size < 2000000) {
                const reader = new FileReader();
                reader.onload = () => {
                    const allImg = imgArea.querySelectorAll("img");
                    allImg.forEach((img) => img.remove());
                    const imgUrl = reader.result;
                    const img = document.createElement("img");
                    img.src = imgUrl;
                    imgArea.appendChild(img);
                    imgArea.classList.add("active");
                    imgArea.dataset.img = image.name;
                };
                reader.readAsDataURL(image);
            } else {
                alert("Image size more than 2MB");
            }
        });
    });
});
