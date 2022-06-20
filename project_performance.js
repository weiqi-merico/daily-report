async function setUp(context, commands) {
  const domain = context.options.domain;
  await commands.navigate(
    domain
  );

  try {
    const username = context.options.username;
    const password = context.options.password;
    await commands.addText.byName(username, 'username');
    await commands.addText.byName(password, 'password');
    await commands.click.byXpathAndWait("//button[@data-ga='login-button']")
    return commands.wait.byTime(5000);
  } catch (e) {
    throw e;
  }
};

async function perfTest(context, commands) {
  commands.meta.setTitle('测试项目表现页面');

  const domain = context.options.domain;
  try {
    var dev_equivalent_root_project_by_year = 'dashboard/v3/projects-performance/group/65bace13-7333-414e-9692-7e00a5ecd3b0/dev-equivalent?filterKey=0610b3c4749360b99477f35e7098ec6b';
    await commands.measure.start(
      domain + dev_equivalent_root_project_by_year,
      'projects_performance_dev_equivalent_root_project_by_year'
    );
    await commands.wait.byTime(7000);
    await commands.js.run(
      'document.body.innerHTML = ""; document.body.style.backgroundColor = "white";'
    );

    var dev_equivalent_project_compare_by_year = 'dashboard/v3/projects-performance/vs/dev-equivalent?groups=:d852b6cc-bc7a-465f-89bf-42602850ed3d,65bace13-7333-414e-9692-7e00a5ecd3b0&repos=:&filterKey=6904ad703e82131d1b257bb7e932c9d7';
    await commands.measure.start(
      domain + dev_equivalent_project_compare_by_year,
      'projects_performance_dev_equivalent_project_compare_by_year'
    );
    await commands.wait.byTime(10000);
    await commands.js.run(
      'document.body.innerHTML = ""; document.body.style.backgroundColor = "white";'
    );
    
    var dev_quality_root_project_by_year = 'dashboard/v3/projects-performance/group/65bace13-7333-414e-9692-7e00a5ecd3b0/dev-quality?filterKey=0610b3c4749360b99477f35e7098ec6b';
    await commands.measure.start(
      domain + dev_quality_root_project_by_year,
      'projects_performance_dev_quality_root_project_by_year'
    );
    await commands.wait.byTime(7000);
    await commands.js.run(
      'document.body.innerHTML = ""; document.body.style.backgroundColor = "white";'
    );
    
    var dev_quality_project_compare_by_year = 'dashboard/v3/projects-performance/vs/dev-quality?groups=:d852b6cc-bc7a-465f-89bf-42602850ed3d,65bace13-7333-414e-9692-7e00a5ecd3b0&repos=:&filterKey=d5012e8812aba17ef8de2fc26c348199';
    await commands.measure.start(
      domain + dev_quality_project_compare_by_year,
      'projects_performance_dev_quality_project_compare_by_year'
    );
    await commands.wait.byTime(10000);
    await commands.js.run(
      'document.body.innerHTML = ""; document.body.style.backgroundColor = "white";'
    );

    var industry_metrics_root_project = 'dashboard/v3/projects-performance/group/65bace13-7333-414e-9692-7e00a5ecd3b0/industry-metrics';
    return await commands.measure.start(domain + industry_metrics_root_project, 'projects_performance_industry_metrics_root_project');
  } catch (e) {
    context.log.error(e);
  }
};

async function tearDown(context, commands) {
  // do some cleanup here
};

module.exports = {
setUp: setUp,
tearDown: tearDown,
test: perfTest
};
