export const base = require("airtable").base(process.env.AIRTABLE_BASE_ID);

export const getTechnologies = async () => {
  const [allTechnologies, allMilestones] = await Promise.all([
    await base("Technologies").select().all(),
    await base("Milestones").select().all(),
  ]);

  const technologies = allTechnologies.map((technology: any) => {
    const milestoneRecords = allMilestones.filter((milestone: any) =>
      technology.fields.milestones.includes(milestone.id)
    );
    const milestones = milestoneRecords.map((milestone: any) => ({
      ...milestone.fields,
    }));

    return {
      ...technology.fields,
      milestones,
    };
  });

  return technologies;
};

export const getMilestones = async () => {
  const records = await base("Milestones").select().all();
  return records.map((rec: any) => rec.fields);
};
