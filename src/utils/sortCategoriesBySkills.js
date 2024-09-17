export const sortCategoriesBySkills = (categories) => {
  categories.forEach((category) => {
    console.log("category", category.category, parseInt(category.priority, 10));
  });
  // Separate categories based on priority
  const highPriority = categories.filter(
    (category) => category.priority && parseInt(category.priority, 10) >= 1
  );
  const noPriority = categories.filter(
    (category) => category.priority === undefined || category.priority === null
  );
  const lowPriority = categories.filter(
    (category) =>
      category.priority &&
      (parseInt(category.priority, 10) === 0 ||
        isNaN(parseInt(category.priority, 10)) ||
        parseInt(category.priority, 10) < 1)
  );

  // Sort each array by priority (if available) and then by skills length
  highPriority.sort((a, b) => {
    const priorityA = parseInt(a.priority, 10);
    const priorityB = parseInt(b.priority, 10);
    return priorityA - priorityB || b.skills.length - a.skills.length;
  });

  noPriority.sort((a, b) => b.skills.length - a.skills.length);

  lowPriority.sort((a, b) => {
    const priorityA = parseInt(a.priority, 10);
    const priorityB = parseInt(b.priority, 10);
    return priorityB - priorityA || b.skills.length - a.skills.length;
  });

  // Combine them back into one array
  return [...highPriority, ...noPriority, ...lowPriority];
};
