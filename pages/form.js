/**
 * Written by Victor Ding
 * 2020-04-20
 */

const MyForm = () => {
    return (
        <form>
            <select name='age'>
                <option>Male</option>
                <option selected="selected">Female</option>
            </select>
            <select name='hobbies' size={6} multiple>
                <optgroup label="Hobbies one">
                    <option>Travel</option>
                    <option selected="selected">Study</option>
                </optgroup>
                <optgroup label="Hobbies two">
                    <option>Sports</option>
                    <option selected="selected">Reading</option>
                </optgroup>
            </select>
            <input type="date"/>
            <input type="time"/>
            <input type="datetime-local"/>
            <input type="month"/>
            <input type="week"/>
        </form>
    )
};

export default MyForm;
