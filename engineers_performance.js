async function setUp(context, commands) {
  // do some cleanup here
};

async function perfTest(context, commands) {
  commands.meta.setTitle('测试工程师表现页面');

  const domain = context.options.domain;
  try {
    var contributor_ranking_root_project = 'dashboard/v3/engineers-performance/group/65bace13-7333-414e-9692-7e00a5ecd3b0/contributor-ranking';
    await commands.measure.start(
      domain + contributor_ranking_root_project,
      'engineers_performance_contributor_ranking_root_project'
    );
    await commands.wait.byTime(7000);
    await commands.js.run(
      'document.body.innerHTML = ""; document.body.style.backgroundColor = "white";'
    );

    var contributors_root_project = 'dashboard/v3/engineers-performance/group/65bace13-7333-414e-9692-7e00a5ecd3b0/contributors';
    await commands.measure.start(
      domain + contributors_root_project,
      'engineers_performance_contributors_root_project'
    );
    await commands.wait.byTime(7000);
    await commands.js.run(
      'document.body.innerHTML = ""; document.body.style.backgroundColor = "white";'
    );
    
    var commits_root_project = 'dashboard/v3/engineers-performance/group/65bace13-7333-414e-9692-7e00a5ecd3b0/commits?author_at=$null&contributor=:&title_type=string';
    return await commands.measure.start(domain + commits_root_project, 'engineers_performance_commits_root_project');
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
  