function RestrictedCourseAndLectures(id) {
    const arr = [
        "69df6ce2ad80be2f665b1624", "69df6d57ad80be2f665b162b", "69df6dd9ad80be2f665b162f",
        "69df6e99ad80be2f665b1647", "69df6ecead80be2f665b164d", "69df6f16ad80be2f665b1654",
        "69df6f55ad80be2f665b165c", "69df74d4ad80be2f665b168c", "69df7598ad80be2f665b1693",
        "69df7625ad80be2f665b1697", "69df76f8ad80be2f665b169c", "69df77c3ad80be2f665b16a2", 
    ]

    return arr.includes(id);
}
export default RestrictedCourseAndLectures;