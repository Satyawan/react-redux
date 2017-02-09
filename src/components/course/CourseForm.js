import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {

    return(
        <form>
            <h1> Manage Course </h1>
            <TextInput 
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title} />
            
            <SelectInput 
                name="authorId"
                label="Created By"
                value={course.authorId}
                defaultOption="Select User"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId} />

             <TextInput 
                name="university"
                label="University"
                value={course.university}
                onChange={onChange}
                error={errors.university} />

            <TextInput 
                name="discipline"
                label="Discipline"
                value={course.discipline}
                onChange={onChange}
                error={errors.discipline} />

            <input  type="submit" 
                    disable={saving}
                    value={saving? 'Saving...' : 'Save'}
                    className="btn btn-primary"
                    onClick={onSave} />
        </form>
            
    );
};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;