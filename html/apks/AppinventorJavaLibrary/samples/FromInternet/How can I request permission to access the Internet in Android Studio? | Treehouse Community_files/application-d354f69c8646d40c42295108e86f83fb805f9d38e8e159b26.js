(function() {
  var t;
  t = function() {
    function t() {}
    return t.version = "1.2.0", t.registered_features = {}, t.featurettes_counter = 0, 
    t.register = function(t, e) {
      return this.registered_features[t] = e;
    }, t.load = function() {
      var t, e, i, s, r, n, o, a, l, h, u, c;
      for (i = document.querySelectorAll("[data-featurette]"), e = [], a = 0, h = i.length; a < h; a++) t = i[a], 
      t.featuretteLoading || t.featurette || (e.push(t), t.featuretteLoading = !0);
      for (c = [], l = 0, u = e.length; l < u; l++) t = e[l], s = t.getAttribute("data-featurette"), 
      n = this.registered_features[s], n ? (r = t.id, null != r && "" !== r || (r = "featurette-" + this.featurettes_counter, 
      t.id = r), o = new n(t), t.featurette = o, c.push(this.featurettes_counter += 1)) :window.console ? c.push(console.log("Unknown featurette " + s)) :c.push(void 0);
      return c;
    }, t.get = function(t) {
      var e;
      return null != (e = document.getElementById(t)) ? e.featurette :void 0;
    }, t;
  }(), window.Featurette = t;
}).call(this), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_feedback_correct"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<p class="box-action-text">'), s.b(s.t(s.f("alert_success_icon", t, e, 0))), 
    s.b(" <strong>Nice!</strong> "), s.b(s.v(s.f("feedback", t, e, 0))), s.b("</p>"), 
    s.b("\n" + i), s.b('<div class="box-action-buttons">'), s.b("\n" + i), s.b('  <a class="button secondary hide-results" data-task-number="'), 
    s.b(s.v(s.f("currentTask", t, e, 0))), s.b('">Hide Results</a>'), s.b("\n" + i), 
    s.b('  <a class="button primary cc-goto">Next Task</a>'), s.b("\n" + i), s.b("</div>"), 
    s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_feedback_degree_exam"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.s(s.f("nextStep", t, e, 1), t, e, 0, 13, 272, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b('  <p class="box-action-text">'), s.b("\n" + i), s.b("    You're done with this challenge. Let's get started on the next one!"), 
      s.b("\n" + i), s.b("  </p>"), s.b("\n" + i), s.b('  <div class="box-action-buttons">'), 
      s.b("\n" + i), s.b('    <a href="'), s.b(s.v(s.f("nextStep", t, e, 0))), s.b('"class="button primary icon-on-right">'), 
      s.b("\n" + i), s.b("      Next challenge "), s.b(s.t(s.f("next", t, e, 0))), s.b("\n" + i), 
      s.b("    </a>"), s.b("\n" + i), s.b("  </div>"), s.b("\n" + i);
    }), t.pop()), s.s(s.f("nextStep", t, e, 1), t, e, 1, 0, 0, "") || (s.b('  <p class="box-action-text">'), 
    s.b("\n" + i), s.b("    "), s.b(s.t(s.f("alert_success_icon", t, e, 0))), s.b("\n" + i), 
    s.b("    <strong>Congrats!</strong> You're done with the exam!"), s.b("\n" + i), 
    s.b("  </p>"), s.b("\n" + i)), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_feedback_neutral"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<div class="box-action-buttons">'), s.b("\n" + i), 
    s.s(s.f("degree_exam", t, e, 1), t, e, 0, 51, 178, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b('    <button class="button primary cc-test" data-task="'), s.b(s.v(s.f("task", t, e, 0))), 
      s.b('" data-default-text="Submit Code">'), s.b("\n" + i), s.b("      Submit"), s.b("\n" + i), 
      s.b("    </button>"), s.b("\n" + i);
    }), t.pop()), s.s(s.f("degree_exam", t, e, 1), t, e, 1, 0, 0, "") || (s.b('    <button id="ask-question" class="button secondary" data-featurette="async-modal-trigger" data-src="'), 
    s.b(s.t(s.f("get_help_url", t, e, 0))), s.b("\" data-params='"), s.b(s.t(s.f("step_params", t, e, 0))), 
    s.b('\' data-stack="true" data-target="new_forum_post_form" data-ask-question>Get Help</button>'), 
    s.b("\n" + i), s.b('    <button class="button primary cc-test" data-task="'), s.b(s.v(s.f("task", t, e, 0))), 
    s.b('" data-default-text="Check Work">Check Work</a>'), s.b("\n" + i)), s.b("</div>"), 
    s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_feedback_wrong"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<p class="box-action-text">'), s.b(s.t(s.f("alert_error_icon", t, e, 0))), 
    s.b(" <strong>Bummer!</strong> "), s.b(s.v(s.f("feedback", t, e, 0))), s.b("</p>"), 
    s.b("\n" + i), s.b('<div class="box-action-buttons" data-featurette="analytics-click-event" data-target="button[data-ask-question]" data-event-category="button" data-event-action="Opened Ask a Question Modal" data-event-label="Source: Feedback Bar on Command Challenges">'), 
    s.b("\n" + i), s.b('  <button id="ask-question" class="button" data-featurette="async-modal-trigger" data-src="'), 
    s.b(s.t(s.f("get_help_url", t, e, 0))), s.b("\" data-params='"), s.b(s.t(s.f("step_params", t, e, 0))), 
    s.b('\' data-stack="true" data-target="new_forum_post_form" data-ask-question>Get Help</button>'), 
    s.b("\n" + i), s.b('  <a class="button primary cc-test" data-default-text="Try Again">Try Again</a>'), 
    s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_results"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<iframe id="results-'), s.b(s.v(s.f("currentTask", t, e, 0))), 
    s.b('" class="command-results" src="'), s.b(s.v(s.f("url", t, e, 0))), s.b('"></iframe>'), 
    s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_task"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<div id="cc-container" class="mixed-box task_view">'), 
    s.b("\n" + i), s.b('  <div id="cc-instructions" class="box-header">'), s.b("\n" + i), 
    s.b('    <h2 id="task-count">Challenge Task '), s.b(s.v(s.f("currentTask", t, e, 0))), 
    s.b(" of "), s.b(s.v(s.f("totalTasks", t, e, 0))), s.b("</h2>"), s.b("\n" + i), 
    s.b('    <h1 id="task" class="markdown-zone">'), s.b(s.t(s.d("taskData.body", t, e, 0))), 
    s.b("</h1>"), s.b("\n" + i), s.b('    <p id="task-notes">Type in your command below, then press Enter.</p>'), 
    s.b("\n" + i), s.b("  </div>"), s.b("\n" + i), s.b('  <div id="cc-feedback" data-feedback></div>'), 
    s.b("\n" + i), s.b('  <div id="cc-editor" class="box-footer" data-editor>'), s.b("\n" + i), 
    s.b('    <div class="workspace">'), s.b("\n" + i), s.b('      <div class="cc-workspace">'), 
    s.b("\n" + i), s.b('        <div class="cc-editor-container">'), s.b("\n" + i), 
    s.b('          <div class="terminal"></div>'), s.b("\n" + i), s.b("        </div>"), 
    s.b("\n" + i), s.b("      </div>"), s.b("\n" + i), s.b("    </div>"), s.b("\n" + i), 
    s.b("  </div>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_correct"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<p class="box-action-text">'), s.b(s.t(s.f("alert_success_icon", t, e, 0))), 
    s.b(" <strong>Well done!</strong> "), s.b(s.v(s.f("feedback", t, e, 0))), s.b("</p>"), 
    s.b("\n" + i), s.b('<div class="box-action-buttons">'), s.b("\n" + i), s.b('  <a class="button primary icon-on-right cc-goto" data-task="'), 
    s.b(s.v(s.f("nextTask", t, e, 0))), s.b('">Next task '), s.b(s.t(s.f("next", t, e, 0))), 
    s.b("</a>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_degree_exam"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.s(s.f("nextStep", t, e, 1), t, e, 0, 13, 272, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b('  <p class="box-action-text">'), s.b("\n" + i), s.b("    You're done with this challenge. Let's get started on the next one!"), 
      s.b("\n" + i), s.b("  </p>"), s.b("\n" + i), s.b('  <div class="box-action-buttons">'), 
      s.b("\n" + i), s.b('    <a href="'), s.b(s.v(s.f("nextStep", t, e, 0))), s.b('"class="button primary icon-on-right">'), 
      s.b("\n" + i), s.b("      Next challenge "), s.b(s.t(s.f("next", t, e, 0))), s.b("\n" + i), 
      s.b("    </a>"), s.b("\n" + i), s.b("  </div>"), s.b("\n" + i);
    }), t.pop()), s.s(s.f("nextStep", t, e, 1), t, e, 1, 0, 0, "") || (s.b('  <p class="box-action-text">'), 
    s.b("\n" + i), s.b("    "), s.b(s.t(s.f("alert_success_icon", t, e, 0))), s.b("\n" + i), 
    s.b("    <strong>Congrats!</strong> You're done with the exam!"), s.b("\n" + i), 
    s.b("  </p>"), s.b("\n" + i)), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_finished"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<p class="box-action-text">'), s.b(s.t(s.f("alert_success_icon", t, e, 0))), 
    s.b(" <strong>Congrats!</strong> You completed the challenge!</p>"), s.b("\n"), 
    s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_inactive_task_failed"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<p class="box-action-text"><strong>Oops!</strong> It looks like Task '), 
    s.b(s.v(s.f("failedTask", t, e, 0))), s.b(" is no longer passing.</p>"), s.b("\n" + i), 
    s.b('<div class="box-action-buttons">'), s.b("\n" + i), s.b('  <button id="ask-question" class="button secondary" data-featurette="async-modal-trigger" data-src="'), 
    s.b(s.t(s.f("get_help_url", t, e, 0))), s.b("\" data-params='"), s.b(s.t(s.f("step_params", t, e, 0))), 
    s.b('\' data-stack="true" data-target="new_forum_post_form" data-ask-question>'), 
    s.b("\n" + i), s.b("    Get Help"), s.b("\n" + i), s.b("  </button>"), s.b("\n" + i), 
    s.b('  <a class="button primary cc-test" data-task="'), s.b(s.v(s.f("currentTask", t, e, 0))), 
    s.b('">Recheck work</a>'), s.b("\n" + i), s.b('  <a class="button button-alert cc-goto" data-task="'), 
    s.b(s.v(s.f("failedTask", t, e, 0))), s.b('">Go to task '), s.b(s.v(s.f("failedTaskAsWord", t, e, 0))), 
    s.b("</a>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_neutral"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.s(s.f("degree_exam", t, e, 1), t, e, 1, 0, 0, "") || (s.b('  <p class="box-action-text">'), 
    s.b(s.t(s.f("alert_info_icon", t, e, 0))), s.b("\n" + i), s.b("    <strong>Important:</strong>"), 
    s.b("\n" + i), s.b("    In each task of this code challenge, the code you write should be added to the code from the previous task."), 
    s.b("\n" + i), s.b("  </p>"), s.b("\n" + i)), s.b("\n" + i), s.b('<div class="box-action-buttons">'), 
    s.b("\n" + i), s.b('  <button class="button secondary icon-on-right cc-restart">Restart '), 
    s.b(s.t(s.f("refresh", t, e, 0))), s.b("</button>"), s.b("\n" + i), s.s(s.f("show_preview", t, e, 1), t, e, 0, 380, 522, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b('    <button class="button secondary icon-on-right show-results-button '), s.s(s.f("isPreview", t, e, 1), t, e, 0, 465, 473, "{{ }}") && (s.rs(t, e, function(t, e, i) {
        i.b(" hidden ");
      }), t.pop()), s.b('">Preview '), s.b(s.t(s.f("preview", t, e, 0))), s.b("</button>"), 
      s.b("\n" + i);
    }), t.pop()), s.b('  <button class="button secondary icon-on-right show-workspace-button '), 
    s.s(s.f("isPreview", t, e, 1), t, e, 1, 0, 0, "") || s.b(" hidden "), s.b('">Editor '), 
    s.b(s.t(s.f("editor", t, e, 0))), s.b("</a>"), s.b("\n"), s.b("\n" + i), s.s(s.f("degree_exam", t, e, 1), t, e, 0, 691, 823, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b('    <button class="button primary cc-test" data-task="'), s.b(s.v(s.f("task", t, e, 0))), 
      s.b('" data-default-text="Submit Code">'), s.b("\n" + i), s.b("      Submit Code"), 
      s.b("\n" + i), s.b("    </button>"), s.b("\n" + i);
    }), t.pop()), s.s(s.f("degree_exam", t, e, 1), t, e, 1, 0, 0, "") || (s.b('  <button id="ask-question" class="button secondary" data-featurette="async-modal-trigger" data-src="'), 
    s.b(s.t(s.f("get_help_url", t, e, 0))), s.b("\" data-params='"), s.b(s.t(s.f("step_params", t, e, 0))), 
    s.b('\' data-stack="true" data-target="new_forum_post_form" data-ask-question>'), 
    s.b("\n" + i), s.b("    Get Help"), s.b("\n" + i), s.b("  </button>"), s.b("\n" + i), 
    s.b('  <button class="button primary cc-test" data-task="'), s.b(s.v(s.f("task", t, e, 0))), 
    s.b('" data-default-text="Check Work">'), s.b("\n" + i), s.b("    Check Work"), 
    s.b("\n" + i), s.b("  </button>"), s.b("\n" + i)), s.b("</div>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_wrong"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<p class="box-action-text">'), s.b(s.t(s.f("alert_error_icon", t, e, 0))), 
    s.b(" <strong>Bummer!</strong> "), s.b(s.v(s.f("feedback", t, e, 0))), s.b("</p>"), 
    s.b("\n" + i), s.b('<div class="box-action-buttons">'), s.b("\n" + i), s.b('  <button class="button secondary icon-on-right cc-restart">Restart '), 
    s.b(s.t(s.f("refresh", t, e, 0))), s.b("</button>"), s.b("\n" + i), s.s(s.f("show_preview", t, e, 1), t, e, 0, 235, 377, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b('    <button class="button secondary icon-on-right show-results-button '), s.s(s.f("isPreview", t, e, 1), t, e, 0, 320, 328, "{{ }}") && (s.rs(t, e, function(t, e, i) {
        i.b(" hidden ");
      }), t.pop()), s.b('">Preview '), s.b(s.t(s.f("preview", t, e, 0))), s.b("</button>"), 
      s.b("\n" + i);
    }), t.pop()), s.b('  <button class="button secondary icon-on-right show-workspace-button '), 
    s.s(s.f("isPreview", t, e, 1), t, e, 1, 0, 0, "") || s.b(" hidden "), s.b('">Editor '), 
    s.b(s.t(s.f("editor", t, e, 0))), s.b("</a>"), s.b("\n" + i), s.b('  <button class="button" id="ask-question" data-featurette="async-modal-trigger" data-src="'), 
    s.b(s.t(s.f("get_help_url", t, e, 0))), s.b("\" data-params='"), s.b(s.t(s.f("step_params", t, e, 0))), 
    s.b('\' data-stack="true" data-target="new_forum_post_form" data-ask-question>Get Help</button>'), 
    s.b("\n" + i), s.b('  <button class="button primary cc-test" data-task="'), s.b(s.v(s.f("failedTask", t, e, 0))), 
    s.b('" data-default-text="Recheck work">Recheck Work</a>'), s.b("\n" + i), s.b("</div>"), 
    s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/instructions"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<h2 id="task-count">Challenge Task '), s.b(s.v(s.f("task", t, e, 0))), 
    s.b(" of "), s.b(s.v(s.f("totalTasks", t, e, 0))), s.b("</h2>"), s.b("\n" + i), 
    s.b('<h1 id="task" class="markdown-zone">'), s.b(s.t(s.f("body", t, e, 0))), s.b("</h1>"), 
    s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/multiline_command_task"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<div id="cc-container" class="mixed-box task_view">'), 
    s.b("\n" + i), s.b('  <div id="cc-instructions" class="box-header">'), s.b("\n" + i), 
    s.b('    <h2 id="task-count">Challenge Task '), s.b(s.v(s.f("currentTask", t, e, 0))), 
    s.b(" of "), s.b(s.v(s.f("totalTasks", t, e, 0))), s.b("</h2>"), s.b("\n" + i), 
    s.b('    <h1 id="task" class="markdown-zone">'), s.b(s.t(s.d("taskData.body", t, e, 0))), 
    s.b("</h1>"), s.b("\n" + i), s.b('    <p id="task-notes">Type in your command below.</p>'), 
    s.b("\n" + i), s.b("  </div>"), s.b("\n" + i), s.b('  <div id="cc-feedback" data-feedback></div>'), 
    s.b("\n" + i), s.b('  <div id="cc-editor" class="box-content multi-line-editor" data-editor>'), 
    s.b("\n" + i), s.b('    <div class="workspace">'), s.b("\n" + i), s.b('      <div class="cc-workspace">'), 
    s.b("\n" + i), s.b('        <div class="cc-editor-container">'), s.b("\n" + i), 
    s.b('          <div class="terminal"></div>'), s.b("\n" + i), s.b("        </div>"), 
    s.b("\n" + i), s.b("      </div>"), s.b("\n" + i), s.b("    </div>"), s.b("\n" + i), 
    s.b("  </div>"), s.b("\n" + i), s.b('  <div id="cc-footer" class="box-footer"></div>'), 
    s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["community/filter_breadcrumb"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<ul id="filter-breadcrumb-tags">'), s.b("\n" + i), 
    s.b("  <li>"), s.b("\n" + i), s.b("    Showing results for:"), s.b("\n" + i), s.b("  </li>"), 
    s.b("\n"), s.b("\n" + i), s.b("  "), s.b(s.t(s.f("tags", t, e, 0))), s.b("\n" + i), 
    s.b('  <li class="filter-reset clear-results">'), s.b("\n" + i), s.b('    <a href="/community" data-filter-clear-tags>'), 
    s.b("\n" + i), s.b("      "), s.b(s.t(s.f("icon_close", t, e, 0))), s.b("\n" + i), 
    s.b("    </a>"), s.b("\n" + i), s.b("  </li>"), s.b("\n" + i), s.b("</ul>"), s.b("\n"), 
    s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["profile/github_repo"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<li class="grid-50 tablet-grid-50">'), s.b("\n" + i), 
    s.b('  <div class="content-block">'), s.b("\n" + i), s.b('    <div class="content-meta">'), 
    s.b("\n" + i), s.b('      <a href="'), s.b(s.v(s.f("repoUrl", t, e, 0))), s.b('">'), 
    s.b("\n" + i), s.b('        <span class="icon icon-github"></span>'), s.b("\n" + i), 
    s.b("        <strong>GitHub Repository</strong>"), s.b("\n" + i), s.b("        <h3>"), 
    s.b(s.v(s.f("repoName", t, e, 0))), s.b("</h3>"), s.b("\n" + i), s.b("      </a>"), 
    s.b("\n" + i), s.b('      <p class="description">'), s.b(s.v(s.f("repoDescription", t, e, 0))), 
    s.b("</p>"), s.b("\n" + i), s.b('      <div class="content-actions-container content-stats">'), 
    s.b("\n" + i), s.b("        <ul>"), s.b("\n" + i), s.b("          <li>"), s.b("\n" + i), 
    s.b('            <a href="'), s.b(s.v(s.f("repoForksUrl", t, e, 0))), s.b('">'), 
    s.b("\n" + i), s.b("              <strong>"), s.b(s.v(s.f("repoForks", t, e, 0))), 
    s.b("</strong>"), s.b("\n" + i), s.b("              <p>Forks</p>"), s.b("\n" + i), 
    s.b("            </a>"), s.b("\n" + i), s.b("          </li>"), s.b("\n" + i), s.b("          <li>"), 
    s.b("\n" + i), s.b('            <a href="'), s.b(s.v(s.f("repoStargazersUrl", t, e, 0))), 
    s.b('">'), s.b("\n" + i), s.b("              <strong>"), s.b(s.v(s.f("repoStargazers", t, e, 0))), 
    s.b("</strong>"), s.b("\n" + i), s.b("              <p>Stargazers</p>"), s.b("\n" + i), 
    s.b("            </a>"), s.b("\n" + i), s.b("          </li>"), s.b("\n" + i), s.b("        </ul>"), 
    s.b("\n" + i), s.s(s.f("repoOwner", t, e, 1), t, e, 0, 754, 784, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b("        <p>Owner</p>"), s.b("\n" + i);
    }), t.pop()), s.s(s.f("repoOwner", t, e, 1), t, e, 1, 0, 0, "") || (s.b("        <p>Contributor</p>"), 
    s.b("\n" + i)), s.b("      </div>"), s.b("\n" + i), s.b("    </div>"), s.b("\n" + i), 
    s.b("  </div>"), s.b("\n" + i), s.b("</li>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/feedback_error"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<div class="box-actions icons-only alert error">'), 
    s.b("\n" + i), s.b('  <p class="box-action-text">'), s.b("\n" + i), s.s(s.f("degree_exam", t, e, 1), t, e, 1, 0, 0, "") || (s.b("      "), 
    s.b(s.t(s.f("alert_error_icon", t, e, 0))), s.b("\n" + i), s.b("      <strong>Bummer!</strong>"), 
    s.b("\n" + i), s.s(s.f("response", t, e, 1), t, e, 0, 179, 209, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b("        "), s.b(s.t(s.f("response", t, e, 0))), s.b("\n" + i);
    }), t.pop()), s.s(s.f("response", t, e, 1), t, e, 1, 0, 0, "") || (s.b("        Unfortunately, that answer is incorrect."), 
    s.b("\n" + i))), s.b("  </p>"), s.b("\n" + i), s.b('  <div class="box-action-buttons" data-featurette="analytics-click-event" data-target="button[data-ask-question]" data-event-category="button" data-event-action="Opened Ask a Question Modal" data-event-label="Source: Feedback Bar on Quiz Pages">'), 
    s.b("\n" + i), s.s(s.f("degree_exam", t, e, 1), t, e, 1, 0, 0, "") || (s.b('      <a href="'), 
    s.b(s.t(s.f("skip_quiz_url", t, e, 0))), s.b('" class="button secondary">Skip Quiz</a>'), 
    s.b("\n" + i), s.b('      <a href="'), s.b(s.t(s.f("review_video_url", t, e, 0))), 
    s.b('" class="button secondary">Review Video</a>'), s.b("\n" + i), s.b('      <button class="button" id="ask-question" data-featurette="async-modal-trigger" data-src="'), 
    s.b(s.v(s.f("get_help_url", t, e, 0))), s.b("\" data-params='"), s.b(s.t(s.f("step_params", t, e, 0))), 
    s.b('\' data-stack="true" data-target="new_forum_post_form" data-ask-question>Get Help</button>'), 
    s.b("\n" + i)), s.s(s.f("finished", t, e, 1), t, e, 1, 0, 0, "") || (s.b('      <button class="button primary icon-on-right" data-next-question>Next Question '), 
    s.b(s.t(s.f("icon_right_arrow", t, e, 0))), s.b("</button>"), s.b("\n" + i)), s.s(s.f("final_exam", t, e, 1), t, e, 1, 0, 0, "") || s.s(s.f("finished", t, e, 1), t, e, 0, 1208, 1292, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b('        <button class="button primary" data-finish-quiz>Finish Quiz</button>'), 
      s.b("\n" + i);
    }), t.pop()), s.b("  </div>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/feedback_neutral"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<div class="box-actions icons-only alert info">'), 
    s.b("\n" + i), s.b('  <p class="box-action-text">'), s.b(s.t(s.f("instruction", t, e, 0))), 
    s.b("</p>"), s.b("\n" + i), s.s(s.f("degree_exam", t, e, 1), t, e, 1, 0, 0, "") || (s.b('    <div class="box-action-buttons" data-featurette="analytics-click-event" data-target="button[data-ask-question]" data-event-category="button" data-event-action="Opened Ask a Question Modal" data-event-label="Source: Feedback Bar on Quiz Pages">'), 
    s.b("\n" + i), s.b('      <a href="'), s.b(s.t(s.f("skip_quiz_url", t, e, 0))), 
    s.b('" class="button secondary">Skip Quiz</a>'), s.b("\n" + i), s.b('      <a href="'), 
    s.b(s.t(s.f("review_video_url", t, e, 0))), s.b('" class="button secondary">Review Video</a>'), 
    s.b("\n" + i), s.b('      <button id="ask-question" class="button secondary" data-featurette="async-modal-trigger" data-stack="true" data-src="'), 
    s.b(s.t(s.f("get_help_url", t, e, 0))), s.b("\" data-params='"), s.b(s.t(s.f("step_params", t, e, 0))), 
    s.b('\' data-target="new_forum_post_form" data-ask-question>Get Help</button>'), 
    s.b("\n" + i), s.b('      <button class="button primary disabled icon-on-right" data-next-question>Next Question '), 
    s.b(s.t(s.f("icon_right_arrow", t, e, 0))), s.b("</button>"), s.b("\n" + i), s.b("    </div>"), 
    s.b("\n" + i)), s.b("</div>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/feedback_success"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<div class="box-actions icons-only alert success">'), 
    s.b("\n" + i), s.b('  <p class="box-action-text">'), s.b("\n" + i), s.s(s.f("degree_exam", t, e, 1), t, e, 1, 0, 0, "") || (s.b("      "), 
    s.b(s.t(s.f("alert_success_icon", t, e, 0))), s.b("\n" + i), s.b("      <strong>Well done!</strong>"), 
    s.b("\n" + i), s.s(s.f("response", t, e, 1), t, e, 0, 186, 216, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b("        "), s.b(s.t(s.f("response", t, e, 0))), s.b("\n" + i);
    }), t.pop()), s.s(s.f("response", t, e, 1), t, e, 1, 0, 0, "") || (s.b("        That's the correct answer."), 
    s.b("\n" + i))), s.b("  </p>"), s.b("\n" + i), s.b('  <div class="box-action-buttons">'), 
    s.b("\n" + i), s.s(s.f("finished", t, e, 1), t, e, 1, 0, 0, "") || (s.b('      <button class="button primary icon-on-right" data-next-question>Next Question '), 
    s.b(s.t(s.f("icon_right_arrow", t, e, 0))), s.b("</button>"), s.b("\n" + i)), s.s(s.f("final_exam", t, e, 1), t, e, 1, 0, 0, "") || s.s(s.f("finished", t, e, 1), t, e, 0, 559, 643, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b('        <button class="button primary" data-finish-quiz>Finish Quiz</button>'), 
      s.b("\n" + i);
    }), t.pop()), s.b("  </div>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/fill_in_the_blank"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<ul class="quiz-answers fill-in-blank">'), s.b("\n" + i), 
    s.s(s.f("answers", t, e, 1), t, e, 0, 54, 263, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b("  <li>"), s.b("\n" + i), s.b('    <form id="fill-in-blank" data-quiz-fitb-form-action="'), 
      s.b(s.v(s.f("href", t, e, 0))), s.b('">'), s.b("\n" + i), s.b("      "), s.b(s.t(s.f("answer", t, e, 0))), 
      s.b("\n" + i), s.b('      <input type="submit" value="Submit Answer" id="submit" class="button button-primary">'), 
      s.b("\n" + i), s.b("    </form>"), s.b("\n" + i), s.b("  </li>"), s.b("\n" + i);
    }), t.pop()), s.b("</ul>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/multiple_choice"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<ul class="quiz-answers multiple-choice">'), s.b("\n" + i), 
    s.s(s.f("answers", t, e, 1), t, e, 0, 56, 232, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b("  <li>"), s.b("\n" + i), s.b('    <a href="'), s.b(s.v(s.f("href", t, e, 0))), 
      s.b('" data-quiz-answer-key="'), s.b(s.t(s.f("abcd", t, e, 0))), s.b('">'), s.b("\n" + i), 
      s.b('      <strong class="abc">'), s.b(s.t(s.f("abcd", t, e, 0))), s.b("</strong>"), 
      s.b("\n" + i), s.b('      <div class="answer">'), s.b(s.t(s.f("answer", t, e, 0))), 
      s.b("</div>"), s.b("\n" + i), s.b("    </a>"), s.b("\n" + i), s.b("  </li>"), s.b("\n" + i);
    }), t.pop()), s.b("</ul>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/question"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.s(s.f("video", t, e, 1), t, e, 0, 10, 25, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b("  "), s.b(s.t(s.f("video", t, e, 0))), s.b("\n" + i);
    }), t.pop()), s.s(s.f("image", t, e, 1), t, e, 0, 46, 87, "{{ }}") && (s.rs(t, e, function(t, e, i) {
      i.b('<img src="'), i.b(i.v(i.f("image", t, e, 0))), i.b('" alt="Quiz Question">');
    }), t.pop()), s.b("\n" + i), s.b('<strong class="question-count">Quiz Question '), 
    s.b(s.v(s.f("current_question", t, e, 0))), s.b(" of "), s.b(s.v(s.f("total_questions", t, e, 0))), 
    s.b("</strong>"), s.b("\n" + i), s.b('<div data-question-feedback-url="'), s.b(s.t(s.f("question_feedback_url", t, e, 0))), 
    s.b('">'), s.b("\n" + i), s.b("  <h1>"), s.b(s.t(s.f("question", t, e, 0))), s.b("</h1>"), 
    s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/true_false"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<ul class="quiz-answers true-false">'), s.b("\n" + i), 
    s.s(s.f("answers", t, e, 1), t, e, 0, 51, 172, "{{ }}") && (s.rs(t, e, function(t, e, s) {
      s.b("  <li>"), s.b("\n" + i), s.b('    <a href="'), s.b(s.v(s.f("href", t, e, 0))), 
      s.b('" data-quiz-answer-key="'), s.b(s.t(s.f("answer", t, e, 0))), s.b('">'), s.b("\n" + i), 
      s.b("      <strong>"), s.b(s.v(s.f("answer", t, e, 0))), s.b("</strong>"), s.b("\n" + i), 
      s.b("    </a>"), s.b("\n" + i), s.b("  </li>"), s.b("\n" + i);
    }), t.pop()), s.b("</ul>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["signup/field_error"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b("<p class='error-message'>"), s.b(s.v(s.f("error", t, e, 0))), 
    s.b("</p>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["signup/form_message"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<div class="global-message-container featurette in-app '), 
    s.b(s.v(s.f("container_class", t, e, 0))), s.b('" data-featurette="global-message-container" style="display: block;">'), 
    s.b("\n" + i), s.b('  <div class="global-message">'), s.b("\n" + i), s.b('    <div class="row">'), 
    s.b("\n" + i), s.b('      <div class="twelve columns">'), s.b("\n" + i), s.b("        <strong>Bummer!</strong> <p>"), 
    s.b(s.v(s.f("message", t, e, 0))), s.b("</p>"), s.b("\n" + i), s.b('        <a class="close-message"><span class="icon icon-close"></span></a>'), 
    s.b("\n" + i), s.b("      </div>"), s.b("\n" + i), s.b("    </div>"), s.b("\n" + i), 
    s.b("  </div>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["videos/launch_console"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<div class="mejs-button mejs-console-button">'), s.b("\n" + i), 
    s.b('  <button class="button" data-track-click-event>'), s.b(s.t(s.f("icon", t, e, 0))), 
    s.b(" Launch Console</button>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["videos/launch_sql_playground"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<div class="mejs-button mejs-sql-playground-button">'), 
    s.b("\n" + i), s.b('  <button class="button" data-track-click-event>'), s.b(s.t(s.f("icon", t, e, 0))), 
    s.b(" Launch SQL Playground</button>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), 
    s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["videos/launch_workspace"] = new Hogan.Template({
  code:function(t, e, i) {
    var s = this;
    return s.b(i = i || ""), s.b('<div class="mejs-button mejs-workspaces-button">'), 
    s.b("\n" + i), s.b('  <button class="button" data-track-click-event data-featurette="async-modal-trigger" data-src="/videos/'), 
    s.b(s.v(s.f("videoId", t, e, 0))), s.b('/launch_workspace" data-target="launch-workspace-modal">'), 
    s.b("\n" + i), s.b("    "), s.b(s.t(s.f("icon", t, e, 0))), s.b(" Launch Workspace"), 
    s.b("\n" + i), s.b("  </button>"), s.b("\n" + i), s.b("</div>"), s.b("\n"), s.b("\n"), 
    s.fl();
  },
  partials:{},
  subs:{}
}, "", Hogan, {}), function() {
  $(function() {
    return $(".cheatsheet-toggle").on("click", function(t) {
      return t.preventDefault(), $(this).closest("form").find(".markdown-cheatsheet").slideToggle(200);
    }), $(".cheatsheet-close").on("click", function(t) {
      return t.preventDefault(), $(this).closest("form").find(".markdown-cheatsheet").slideUp(200);
    }), $("#edit-post").on("click", function(t) {
      return t.preventDefault(), $("#display-post").hide(), $("#edit-post-form").show(), 
      $("textarea.autogrow").trigger("autosize.resize");
    }), $("#cancel-edit-post").on("click", function(t) {
      return t.preventDefault(), $("#edit-post-form").hide(), $("#display-post").show(), 
      $("textarea.autogrow").trigger("autosize.resize");
    }), $(".new_forum_post button[type=submit], .discussion-reply button[type=submit]").on("click", function() {
      return _.defer(function(t) {
        return function() {
          return $(t).attr({
            disabled:"disabled"
          });
        };
      }(this));
    }), $(".post-preview-toggle").on("mousedown", function(t) {
      return t.preventDefault(), $(this).closest(".form-item").find("textarea").focus();
    }), $(".code-attachment-filename").on("click", function() {
      var t;
      return t = $(this).closest("#container").find(".card.course.forum-card a.title").attr("href"), 
      window.open(t);
    });
  });
}.call(this), function() {
  $(function() {
    var t;
    return t = function() {
      function t() {}
      return t.modals = {}, t.handleTrigger = function(e) {
        var i, s;
        return !(!$.browser.mobile && !e.metaKey && 2 !== e.which) || (t.container || (t.container = $("#mini-profile-container")), 
        e.preventDefault(), s = $(e.currentTarget), i = s.data("profile-name"), t.modals[i] ? t.modals[i].showOverlay() :t.createModalFor(i));
      }, t.createModalFor = function(t) {
        var e;
        return e = $("<div class='modal mini-profile' id='mini-profile-" + t + "' style='display: none'/>"), 
        e.load("/mini_profile/" + t, function(i) {
          return function() {
            return i.container.append(e), e.find(".chart").length && new Featurette.registered_features["points-chart"](e.find(".chart")[0]), 
            i.modals[t] = new Featurette.registered_features.modal(e[0]), i.modals[t].showOverlay();
          };
        }(this));
      }, t;
    }(), $(document).on("click", "[data-behavior=mini-profile-trigger]", t.handleTrigger);
  });
}.call(this), function() {
  mejs.MediaElementDefaults.pluginPath = "", mejs.MediaElementDefaults.flashName = "/flash/flashmediaelement.swf", 
  $("body").on("click", ".mejs-captions-selector input", function() {
    return setTimeout(function() {
      return function() {
        return $("body").click();
      };
    }(), 0);
  });
}.call(this), function() {
  this.Treehouse = {
    data:window.appData ? JSON.parse(window.appData) :{},
    onFirstInit:function(t) {
      return this.firstInitCallbacks.push(t);
    },
    firstInitCallbacks:[],
    onInit:function(t) {
      return this.initCallbacks.push(t);
    },
    initCallbacks:[],
    init:function() {
      var t, e, i, s, r, n, o, a;
      if (!this.firstInitFired) {
        for (n = this.firstInitCallbacks, e = 0, s = n.length; e < s; e++) (t = n[e])();
        this.firstInitFired = !0;
      }
      for (o = this.initCallbacks, a = [], i = 0, r = o.length; i < r; i++) t = o[i], 
      a.push(t());
      return a;
    },
    cleanup:function(t) {
      var e;
      if (e = Featurette.get(t.id)) return "function" == typeof e.stopListening ? e.stopListening() :void 0;
    },
    debug:function() {
      if (window.console) return console.log(Array.prototype.slice.call(arguments));
    }
  };
}.call(this), function() {
  Treehouse.onFirstInit(function() {
    return function() {
      var t;
      t = $.cleanData, $.cleanData = function(e) {
        var i, s, r;
        for (s = 0, r = e.length; s < r; s++) i = e[s], $(i).trigger("removed");
        return t(e);
      };
    }(), $(document).on("removed", "[data-featurette]", function(t) {
      return Treehouse.cleanup(t.target);
    }), null == $.cookie("notbot") && $.post("/visitors/not-bot", {
      _method:"PUT"
    }), $(document).on("click touch", ".menu-toggle", function(t) {
      return t.preventDefault(), $(t.currentTarget).toggleClass("is-checked");
    }), $(document).on("click", ".clickonce", function(t) {
      var e;
      return e = $(t.currentTarget), e.hasClass("disabled") ? t.preventDefault() :e.addClass("disabled");
    }), $(document).on("click", "a[data-pjax]", function(t) {
      var e;
      return e = $(this).closest("[data-pjax-container]"), $.pjax.click(t, {
        container:e
      });
    }), $(document).on("pjax:end", function() {
      return Treehouse.init();
    }), jQuery.migrateMute = !0, jQuery.migrateTrace = !1;
  }), Treehouse.onInit(function() {
    return Featurette.load(), $("html").hasClass("marketing-layout") || $(".form-item label").not(".prefill, .in-field-label-processed, .ghost-form label").inFieldLabels().addClass("in-field-label-processed"), 
    $(".autogrow").not(".autogrow-processed").autosize({
      append:""
    }).addClass("autogrow-processed"), $("input, textarea").not(".placeholder-processed").placeholder().addClass("placeholder-processed"), 
    $(".ghost-form input, .ghost-form textarea, .ghost-form select").off("focus.ghost-form, blur.ghost-form").on("focus.ghost-form", function() {
      return $(this).closest(".form-item, .adjacent-form-item").addClass("filled focused");
    }).on("blur.ghost-form", function() {
      if ($(this).closest(".form-item, .adjacent-form-item").removeClass("filled"), "" === this.value) return $(this).closest(".form-item, .adjacent-form-item").removeClass("focused");
    }).each(function() {
      if ("" !== this.value) return $(this).closest(".form-item, .adjacent-form-item").addClass("focused");
    }), $(".button-toggle label input[type=radio]").change(function() {
      $(this).attr("name") ? $(this).parent().addClass("selected").siblings().removeClass("selected") :$(this).parent().toggleClass("selected");
    });
  });
}.call(this), function() {
  jQuery.fn.cssAnimate = function(t) {
    return null == t && (t = 400), this.addClass("animating"), setTimeout(function(t) {
      return function() {
        return t.removeClass("animating");
      };
    }(this), t), this;
  };
}.call(this), function() {
  Treehouse.onFirstInit(function() {
    return $(document).on("pjax:start", function() {
      var t;
      return null != (t = Featurette.get("layout")) ? t.loading() :void 0;
    }), $(document).on("pjax:end", function() {
      var t;
      return null != (t = Featurette.get("layout")) && t.loaded(), "undefined" != typeof _gaq && null !== _gaq ? _gaq.push([ "_trackPageview" ]) :void 0;
    });
  });
}.call(this), function() {
  Treehouse.onInit(function() {
    var t;
    return t = "select, input:file", $(t).not('.editor textarea, select.drop-down, select[multiple], select[data-featurette="form-select"], select[data-featurette="department-select"], select[data-featurette="department-member-autocomplete"], #track_assignment_user_ids.uniform-processed').uniform({
      autoHide:!1,
      fileButtonClass:"button secondary",
      selectClass:"form-element"
    }).addClass("uniform-processed"), $("#track_assignment_user_ids").chosen({
      width:"100%"
    });
  });
}.call(this), function() {
  Treehouse.currentUser = Treehouse.data.user, Treehouse.isLoggedIn = null != Treehouse.currentUser, 
  Treehouse.isLoggedIn && (Treehouse.personalizationPromise = $.getJSON("/personalization").promise());
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  Treehouse.Cache = function() {
    function e(e) {
      null == e && (e = {}), this.flush = t(this.flush, this), this.exists = t(this.exists, this), 
      this.fetch = t(this.fetch, this), this["delete"] = t(this["delete"], this), this.write = t(this.write, this), 
      this.read = t(this.read, this), this.namespace = this.compileNamespace(e.namespace), 
      this.defaultTtl = e.defaultTtl || 720;
    }
    return e.prototype.compileNamespace = function(t) {
      var e, i, s;
      if (null === t && (t = ""), _.isString(t)) return t.replace(/\/$/, "") + "/";
      if (i = [], _.isObject(t)) {
        if (t.appVersion && (e = Treehouse.data.app_version, i.push("appVersion:" + (e || _.now()))), 
        t.currentUser) {
          if (!(s = Treehouse.currentUser.id)) throw new Error("A Treehouse.currentUser is required.");
          i.push("user:" + s);
        }
        return t.namespace && i.push(t.namespace), _.compact(i).join("/") + "/";
      }
      return "/";
    }, e.prototype.read = function(t) {
      return lscache.setBucket(this.namespace), lscache.get(t);
    }, e.prototype.write = function(t, e, i) {
      return null == i && (i = this.defaultTtl), lscache.setBucket(this.namespace), lscache.set(t, e, i), 
      !0;
    }, e.prototype["delete"] = function(t) {
      return lscache.setBucket(this.namespace), lscache.remove(t);
    }, e.prototype.fetch = function(t, e, i) {
      var s;
      return null == i && (i = this.defaultTtl), s = this.read(t), s || (s = _.isFunction(e) ? e() :e, 
      this.write(t, s, i)), s;
    }, e.prototype.exists = function(t) {
      return null !== this.read(t);
    }, e.prototype.flush = function() {
      return lscache.setBucket(this.namespace), lscache.flush();
    }, e.flush = function() {
      return lscache.setBucket(""), lscache.flush();
    }, e;
  }(), lscache.flushExpired(), Treehouse.cache = new Treehouse.Cache();
}.call(this), function() {
  var t, e, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty, r = [].slice;
  e = function() {
    function t(t) {
      var e;
      e = $(t).find(".tooltip").parent().find(":input"), e.focus(function() {
        var t;
        if (t = $(this).parent().find(".tooltip"), !(t.data("hide-on-mobile") && $(window).width() <= 480)) return t.fadeIn();
      }), e.blur(function() {
        return $(this).parent().find(".tooltip").fadeOut();
      }), $(t).submit(function() {
        return $(t).find("button#submit").html("Processing..."), $(t).find("button#submit").attr("disabled", "true");
      });
    }
    return t;
  }(), window.StandardForm = e, t = function(t) {
    function e(t) {
      this.accountForm = $(t), this.accountEmail = this.accountForm.find("#account_signup_email, #person_email"), 
      this.planId = this.accountForm.find("#plan").val(), e.__super__.constructor.call(this, this.accountForm), 
      this.accountEmail.change(function(t) {
        return function() {
          return t.verifyEmailAddress();
        };
      }(this));
    }
    return i(e, t), e.prototype.verifyEmailAddress = function() {
      var t, e, i, s;
      return e = this.accountEmail, i = e.siblings("label"), t = e.val(), s = $("meta[name='csrf-token']").attr("content"), 
      this.clearFormErrors(e), $.ajax("/account/email_address", {
        type:"POST",
        dataType:"json",
        data:{
          email:t
        },
        headers:{
          "X-CSRF-Token":s
        },
        error:function(t) {
          return function(s) {
            var r;
            return t.unwrapErrors(e, i), t.clearFormErrors(e), e.siblings("label").wrap('<div class="field_with_errors" />'), 
            e.wrap('<div class="field_with_errors" />'), r = JSON.parse(s.responseText), e.after("<p class='error-message'>" + r.error + "</p>");
          };
        }(this),
        success:function(s) {
          return function() {
            return s.unwrapErrors(e, i), null == e.val() && s.clearFormErrors(e), s.gtmDataLayerNewEmailEvent(t);
          };
        }(this)
      });
    }, e.prototype.unwrapErrors = function() {
      var t, e, i, s, n;
      for (e = 1 <= arguments.length ? r.call(arguments, 0) :[], n = [], i = 0, s = e.length; i < s; i++) t = e[i], 
      t.closest("div").hasClass("field_with_errors") ? n.push(t.unwrap()) :n.push(void 0);
      return n;
    }, e.prototype.clearFormErrors = function(t) {
      return t.siblings("p.error-message").remove();
    }, e.prototype.gtmDataLayerNewEmailEvent = function(t) {
      return dataLayer.push({
        event:"newEmailAddressEntered",
        newEmail:t
      });
    }, e;
  }(e), window.AccountForm = t;
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  Treehouse.View = function() {
    function e(e) {
      this.clearElementsCache = t(this.clearElementsCache, this), this.cid = _.uniqueId("featurette-view-"), 
      this.el = $(e), this.data = this.el.data(), this.elements = [];
    }
    return e.prototype.listeningTo = [], e.prototype.get = function(t) {
      var e;
      return (e = this.elements)[t] || (e[t] = this.el.find(t));
    }, e.prototype.clearElementsCache = function() {
      return this.elements = [];
    }, e.prototype.on = function(t, e, i) {
      return i ? this.el.on(this.addNamespace(t), e, i) :(i = e, this.el.on(this.addNamespace(t), i));
    }, e.prototype.listenTo = function(t, e, i, s) {
      if (null == s && (s = {}), this.listeningTo = _.union(this.listeningTo, [ t ]), 
      $(t).on(this.addNamespace(e), i), s.triggerImmediately) return $(t).trigger(e);
    }, e.prototype.stopListening = function() {
      var t, e, i, s, r;
      for (this.el.off(this.addNamespace()), s = this.listeningTo, r = [], t = 0, e = s.length; t < e; t++) i = s[t], 
      r.push($(i).off(this.addNamespace()));
      return r;
    }, e.prototype.addNamespace = function(t) {
      return null == t && (t = ""), t + "." + this.cid;
    }, e;
  }();
}.call(this), function() {
  Treehouse.SearchableView = {
    mixin:function(t) {
      return _.extend(t, Treehouse.SearchableView.prototype), t.on("keyup", "[data-searchable-field]", _.debounce(t.onSearch.bind(t), 100));
    }
  }, Treehouse.SearchableView.prototype = {
    onSearch:function(t) {
      return this.updateSearch($(t.currentTarget));
    },
    updateSearch:function(t) {
      var e, i, s;
      return i = t.val().trim().toLowerCase(), s = t.closest("[data-searchable]").find("[data-searchable-results] [data-searchable-text]"), 
      i && i.length ? (e = s.filter(function() {
        return $(this).attr("data-searchable-text").toLowerCase().indexOf(i) >= 0;
      }), s.hide(), e.show()) :s.css("display", "");
    }
  };
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("alert", Treehouse.Alert = function(i) {
    function s() {
      this.closeAlert = t(this.closeAlert, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", "[data-close-alert]", this.closeAlert), this.el.hasClass("fixed") && $("html").addClass("has-fixed-alert");
    }
    return e(s, i), s.prototype.closeAlert = function(t) {
      if (t.preventDefault(), this.el.addClass("closed"), 0 === $(".alert.fixed:not(.closed)").length) return $("html.has-fixed-alert").addClass("closed-all-fixed-alerts");
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("avatar", Treehouse.Avatar = function(i) {
    function s() {
      this.hover = t(this.hover, this), s.__super__.constructor.apply(this, arguments), 
      this.on("hover", this.hover), this.chart = this.get('[data-featurette="points-chart"]');
    }
    return e(s, i), s.prototype.hover = function() {
      return this.chart.trigger("chart:build");
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.SimpleDropDown = function(i) {
    function s() {
      this.closeDropDown = t(this.closeDropDown, this), this.onOutClick = t(this.onOutClick, this), 
      this.toggleDropDown = t(this.toggleDropDown, this), this.onWindowClick = t(this.onWindowClick, this), 
      this.onLabelClick = t(this.onLabelClick, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", ".dropdown-parent-label", this.onLabelClick), this.listenTo(window, "click", this.onWindowClick);
    }
    return e(s, i), s.prototype.isShown = !1, s.prototype.onLabelClick = function(t) {
      return t.preventDefault(), this.toggleDropDown();
    }, s.prototype.onWindowClick = function(t) {
      if (this.el.has(t.target).length <= 0) return this.onOutClick();
    }, s.prototype.toggleDropDown = function() {
      return this.get(".dropdown-child").toggle(!this.isShown), this.isShown = !this.isShown;
    }, s.prototype.onOutClick = function() {
      return this.closeDropDown();
    }, s.prototype.closeDropDown = function() {
      if (this.isShown) return this.toggleDropDown();
    }, s;
  }(Treehouse.View), Featurette.register("simple-drop-down", Treehouse.SimpleDropDown);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("dialog", Treehouse.Dialog = function(i) {
    function s() {
      this.hide = t(this.hide, this), this.show = t(this.show, this), this.enterOrEscKeyPressed = t(this.enterOrEscKeyPressed, this), 
      this.tabKeyPressed = t(this.tabKeyPressed, this), this.onKeyUp = t(this.onKeyUp, this), 
      this.preventTarpFromHiding = t(this.preventTarpFromHiding, this), this.listenToEvents = t(this.listenToEvents, this), 
      s.__super__.constructor.apply(this, arguments), this.tarp = new Treehouse.Dialog.Tarp($("[data-dialog-tarp]")), 
      this.container = new Treehouse.Dialog.Container($("[data-dialog-container]")), this.el.is('[data-featurette="dialog"]') && this.listenToEvents();
    }
    return e(s, i), s.prototype.listenToEvents = function() {
      return this.video = this.get("video"), this.closeButton = this.get("[data-close-dialog]"), 
      this.on("click", this.preventTarpFromHiding), this.on("click", "[data-close-dialog]", this.hide), 
      this.video.get(0).addEventListener("ended", this.hide), this.listenTo(document, "keyup", this.onKeyUp);
    }, s.prototype.preventTarpFromHiding = function(t) {
      return t.stopPropagation();
    }, s.prototype.onKeyUp = function(t) {
      if (this.tabKeyPressed(t) && this.closeButton.focus(), this.enterOrEscKeyPressed(t)) return this.hide(t);
    }, s.prototype.tabKeyPressed = function(t) {
      return 9 === t.which;
    }, s.prototype.enterOrEscKeyPressed = function(t) {
      return 13 === t.which || 27 === t.which;
    }, s.prototype.show = function(t) {
      return this.trigger = t, this.el.attr({
        tabindex:0
      }), this.el.focus(), this.el.addClass("active").siblings().removeClass("active"), 
      this.tarp.show(), this.video.trigger("play");
    }, s.prototype.hide = function(t) {
      if (this.el.removeClass("active"), this.video.trigger("pause"), this.tarp.hide(), 
      this.enterOrEscKeyPressed(t)) return this.trigger.focus();
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Dialog.Tarp = function(i) {
    function s() {
      this.hide = t(this.hide, this), this.show = t(this.show, this), this.onEscPressed = t(this.onEscPressed, this), 
      this.listenToEvents = t(this.listenToEvents, this), this.insert = t(this.insert, this), 
      s.__super__.constructor.apply(this, arguments), this.el.length > 0 || (this.el = this.insert(), 
      this.listenToEvents());
    }
    return e(s, i), s.prototype.insert = function() {
      return $(document.body).append('<div class="dialog-tarp" data-dialog-tarp> <div class="dialog-container" data-dialog-container></div> </div>'), 
      $("[data-dialog-tarp]");
    }, s.prototype.listenToEvents = function() {
      return this.on("click", this.hide), this.listenTo(document, "keyup", this.onEscPressed);
    }, s.prototype.onEscPressed = function(t) {
      if (27 === t.which) return this.hide();
    }, s.prototype.show = function() {
      return this.el.addClass("active");
    }, s.prototype.hide = function() {
      return this.el.removeClass("active"), this.el.find("video").trigger("pause");
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("dialog-trigger", Treehouse.Dialog.Trigger = function(i) {
    function s() {
      this.onSuccess = t(this.onSuccess, this), this.loadDialog = t(this.loadDialog, this), 
      this.onClick = t(this.onClick, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", this.onClick);
    }
    return e(s, i), s.prototype.onClick = function(t) {
      return t.preventDefault(), this.el.data("loaded-dialog") ? this.dialog.show(this.el) :(this.loadDialog(), 
      this.el.addClass("loading"));
    }, s.prototype.loadDialog = function() {
      return $.get(this.el.attr("href"), {}, this.onSuccess);
    }, s.prototype.onSuccess = function(t) {
      return this.el.data("loaded-dialog", !0), this.el.removeClass("loading"), this.dialog = this.container.insertDialog(t), 
      this.dialog.show(this.el);
    }, s;
  }(Treehouse.Dialog));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Dialog.Container = function(i) {
    function s() {
      this.insertDialog = t(this.insertDialog, this), s.__super__.constructor.apply(this, arguments);
    }
    return e(s, i), s.prototype.insertDialog = function(t) {
      return this.el.append(t), this.dialog = this.el.find('[data-featurette="dialog"]').last(), 
      Featurette.load(), Featurette.get(this.dialog.attr("id"));
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.StarRating = function(i) {
    function s() {
      this.onRatingChosen = t(this.onRatingChosen, this), s.__super__.constructor.apply(this, arguments), 
      this.on("change", ":radio", this.onRatingChosen);
    }
    return e(s, i), s.prototype.onRatingChosen = function() {
      return this.el.addClass("rating-chosen");
    }, s;
  }(Treehouse.View), Featurette.register("star-rating", Treehouse.StarRating);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("modal", Treehouse.Modal = function(i) {
    function s(e) {
      this.onKeyup = t(this.onKeyup, this), this.closeOverlay = t(this.closeOverlay, this), 
      this.safeCloseOverlay = t(this.safeCloseOverlay, this), this.playVideo = t(this.playVideo, this), 
      s.__super__.constructor.call(this, e), this.on("click", ".modal-close, .modal-close-extra, [data-modal-close]", this.safeCloseOverlay), 
      this.listenTo(document, "keyup", this.onKeyup);
    }
    return e(s, i), s.stack = [], s.closeCurrentModal = function(t) {
      var e;
      if (null == t && (t = {}), (e = this.stack.pop()) && (e.safeCloseOverlay(), t.stack)) return this.addToStack(e);
    }, s.addToStack = function(t) {
      return this.stack.push(t);
    }, s.showLastModal = function() {
      var t;
      return null != (t = this.stack.pop()) ? t.showOverlay({
        restoring:!0
      }) :void 0;
    }, s.prototype.showOverlay = function(t) {
      return null == t && (t = {}), this.constructor.closeCurrentModal({
        stack:t.stack
      }), this.constructor.addToStack(this), this.tarp().show(function(t) {
        return function() {
          var e, i;
          return i = "fixed" === t.el.css("position") ? 0 :$(window).scrollTop(), e = i + $(window).height(), 
          _.defer(function() {
            return $(window).scrollTop(i);
          }), t.el.show().css({
            top:e,
            opacity:0
          }).animate({
            top:i,
            opacity:1
          }, 150), t.el.addClass("modal-active"), t.el.trigger("modal:show"), t.el.data("modal-video-autoplay") && t.playVideo(), 
          t.isVisible = !0;
        };
      }(this));
    }, s.prototype.playVideo = function() {
      return this.el.find("video").trigger("play").on("ended", function(t) {
        return function() {
          return t.closeOverlay();
        };
      }(this));
    }, s.prototype.safeCloseOverlay = function(t) {
      return null != t && t.preventDefault(), !!this.data.uncloseable || this.closeOverlay();
    }, s.prototype.closeOverlay = function() {
      return this.el.find("video").trigger("pause"), this.tarp().hide(), this.el.hide(), 
      this.el.removeClass("modal-active"), this.el.trigger("modal:close"), this.isVisible = !1, 
      this.constructor.stack.pop(), this.constructor.showLastModal();
    }, s.prototype.onKeyup = function(t) {
      if (27 === t.which && this.isVisible) return this.safeCloseOverlay();
    }, s.prototype.tarp = function() {
      return this.tarpEl || (this.tarpEl = Featurette.get("tarp"));
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("help-modal", function(e) {
    function i() {
      return i.__super__.constructor.apply(this, arguments);
    }
    return t(i, e), i.prototype.showOverlay = function() {
      return Featurette.get("help-form").resetContactForm(), i.__super__.showOverlay.apply(this, arguments);
    }, i;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("wizard-modal", function(i) {
    function s() {
      return this.closeOverlay = t(this.closeOverlay, this), s.__super__.constructor.apply(this, arguments);
    }
    return e(s, i), s.prototype.showOverlay = function(t) {
      if (null == t && (t = {}), s.__super__.showOverlay.apply(this, arguments), !t.restoring) return $(document).trigger("wizard-opened");
    }, s.prototype.closeOverlay = function(t) {
      if (null == t && (t = {}), s.__super__.closeOverlay.apply(this, arguments), !t.stack) return $(document).trigger("wizard-closed");
    }, s;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("quiz-error-modal", function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.on("click", "button", this.closeOverlay);
    }
    return t(i, e), i.prototype.setError = function(t) {
      return this.el.find("#quiz-error-modal-text").text(t);
    }, i.prototype.closeOverlay = function() {
      return this.setError(""), i.__super__.closeOverlay.call(this);
    }, i;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("workspace-settings-modal", Treehouse.WorkspaceSettingsModal = function(i) {
    function s(e) {
      this.onDeleteWorkspace = t(this.onDeleteWorkspace, this), s.__super__.constructor.call(this, e), 
      this.on("click", "a.delete", this.onDeleteWorkspace);
    }
    return e(s, i), s.prototype.onDeleteWorkspace = function() {
      return !!confirm("This will permanently delete everything within this workspace and cannot be undone. Do you still want to delete?") && (this.closeOverlay(), 
      $("#workspace-" + this.el.data("workspace-id") + " .deletion-cover").show());
    }, s;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("code-challenge-error-modal", function(e) {
    function i() {
      return i.__super__.constructor.apply(this, arguments);
    }
    return t(i, e), i.prototype.setError = function(t) {
      return this.el.find("#challenge-error-modal-text").text(t);
    }, i.prototype.closeOverlay = function() {
      return this.setError(""), i.__super__.closeOverlay.call(this);
    }, i;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("track-changelog-modal", function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), $(function(t) {
        return function() {
          if (!0 === t.el.data("previewing")) return t.showOverlay();
        };
      }(this));
    }
    return t(i, e), i;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("degree-exam-end-modal", function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.redirectlink, this.on("click", "button", this.closeOverlay);
    }
    return t(i, e), i.prototype.setMessage = function(t) {
      return this.el.find("#degree-exam-end-modal-text").text(t);
    }, i.prototype.setRedirectLink = function(t) {
      return this.redirectlink = t;
    }, i.prototype.closeOverlay = function() {
      return window.onbeforeunload = null, window.location = this.redirectlink, i.__super__.closeOverlay.call(this);
    }, i;
  }(Treehouse.Modal));
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("tarp", function(e) {
    function i(t) {
      i.__super__.constructor.call(this, t), this.on("click touchstart", function() {
        return Treehouse.Modal.closeCurrentModal();
      });
    }
    return t(i, e), i.prototype.show = function(t) {
      return this.el.css({
        opacity:0
      }).show().animate({
        opacity:1
      }, 100, t);
    }, i.prototype.hide = function() {
      return this.el.hide();
    }, i;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("table-expander", function(i) {
    function s() {
      this.toggle = t(this.toggle, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", this.data.expander, this.toggle), this.rows = this.el.find("tr:gt(" + this.data.rows + ")"), 
      this.rows.hide();
    }
    return e(s, i), s.prototype.toggle = function() {
      return this.get(this.data.expander).toggleClass("target-expanded"), this.rows.toggle();
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  Featurette.register("nav-select", function() {
    function e(e) {
      this.updateLocation = t(this.updateLocation, this), this.el = $(e), this.el.on("change", this.updateLocation);
    }
    return e.prototype.updateLocation = function() {
      return window.location = this.el.val();
    }, e;
  }());
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.updateTotalOnce = e(this.updateTotalOnce, this), this.updateTotal = e(this.updateTotal, this), 
      this.el = $(t), this.pointsUpdated = !1, this.el[0] && Treehouse.personalizationPromise.then(function(t) {
        return function(e) {
          return t.loadedPointsDonut(e.points);
        };
      }(this));
    }
    return t.prototype.loadedPointsDonut = function(t) {
      return this.el.find("#menu-points-donut").append(t), Featurette.load();
    }, t.prototype.updateTotal = function(t) {
      return t ? this.el.find("#points-counter").html(this.addCommas(t)) :$.get("/user/total_points", function(t) {
        return function(e) {
          return t.el.find("#points-counter").html(t.addCommas(e.points));
        };
      }(this));
    }, t.prototype.updateTotalOnce = function() {
      if (!this.pointsUpdated) return this.updateTotal(), this.pointsUpdated = !0;
    }, t.prototype.addCommas = function(t) {
      return t.toString().replace(/\,/g, "").replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }, t;
  }(), Treehouse.PointsCounter = new t("#profile");
}.call(this), function() {
  Treehouse.queryString = function() {
    var t, e, i, s, r, n;
    if (i = new Object(), !(r = location.href.split("?")[1])) return i;
    for (n = r.split("&"), t = 0, e = n.length; t < e; t++) s = n[t], s = s.split("="), 
    i[s[0]] = s[1];
    return i;
  };
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Quiz = function(i) {
    function s() {
      this.render = t(this.render, this), this.finishQuiz = t(this.finishQuiz, this), 
      this.processError = t(this.processError, this), this.processResponse = t(this.processResponse, this), 
      this.submit = t(this.submit, this), s.__super__.constructor.apply(this, arguments), 
      this.quizData = this.data.quiz, this.feedbackEl = this.el.find("[data-quiz-element=feedback]"), 
      this.questionEl = this.el.find("[data-quiz-element=question]"), this.answersEl = this.el.find("[data-quiz-element=answers]"), 
      this.examControlEl = this.el.find("[data-quiz-element=exam_controls]"), this.render();
    }
    return e(s, i), s.prototype.submit = function(t, e) {
      return null == e && (e = {}), this.quizData.quiz_attempt && (e.quiz_attempt = this.quizData.quiz_attempt), 
      $.ajax({
        type:"POST",
        url:t,
        data:e,
        dataType:"json",
        success:this.processResponse,
        error:function(t) {
          return function(e) {
            return t.processError(e);
          };
        }(this)
      });
    }, s.prototype.processResponse = function(t) {
      return this.quizData = t, this.generateFeedback(), Treehouse.init();
    }, s.prototype.processError = function(t) {
      var e, i;
      return e = Featurette.get("quiz-error-modal"), i = JSON.parse(t.responseText), i.inadequate_permissions ? e.setError("You do not have access to take this Quiz. Please upgrade your account.") :e.setError("Oops! Something went wrong. Please try answering the question again."), 
      e.showOverlay({
        stack:!0
      }), this.render();
    }, s.prototype.finishQuiz = function() {
      switch ($("[data-report-question-link]").hide(), this.quizData.quiz_status) {
       case "passed":
        return Treehouse.PointsCounter.updateTotal(), this.showPassed();

       case "failed":
        return this.showFailed();
      }
    }, s.prototype.showFailed = function() {
      return $(document).trigger("step-failed");
    }, s.prototype.showPassed = function() {
      return $(document).trigger("step-passed");
    }, s.prototype.render = function() {
      return this.clearFeedback(), this.generateQuestion(), this.generateAnswers(), Treehouse.init();
    }, s.prototype.generateQuestion = function() {
      var t;
      return t = HoganTemplates["quizzes/question"].render(this.quizData.question), this.questionEl.html(t).find("a").attr("target", "_blank");
    }, s.prototype.generateAnswers = function() {
      var t, e;
      return null != (e = this.answersView) && "function" == typeof e.empty && e.empty(), 
      t = function() {
        switch (this.quizData.question.question_type) {
         case "MultipleChoice":
          return Treehouse.Quiz.MultipleChoice;

         case "TrueFalse":
          return Treehouse.Quiz.TrueFalse;

         case "FillInTheBlank":
          return Treehouse.Quiz.FillInTheBlank;
        }
      }.call(this), this.answersView = new t(this.answersEl, {
        submit:this.submit,
        answers:_.pick(this.quizData, "answers")
      }), this.answersView.render();
    }, s.prototype.renderFeedback = function(t) {
      var e, i;
      return this.quizData.degree_exam || (e = this.el.find("[data-quiz-answer-key].selected"), 
      e.addClass(t)), null != (i = this.feedbackView) && i.stopListening(), this.feedbackView = new Treehouse.Quiz.Feedback(this.feedbackEl, {
        nextQuestion:this.render,
        finishQuiz:this.finishQuiz,
        quizStatus:this.quizData.quiz_status,
        questionPassed:this.quizData.answer_passed,
        feedbackText:this.quizData.feedback,
        instruction:this.quizData.question.instruction,
        feedbackType:t,
        degreeExam:this.quizData.degree_exam,
        reviewVideoUrl:this.quizData.question.review_video_url
      }), this.feedbackView.render();
    }, s.prototype.generateFeedback = function() {
      return this.quizData.answer_passed ? this.renderFeedback("success") :this.renderFeedback("error");
    }, s.prototype.clearFeedback = function() {
      return this.renderFeedback("neutral");
    }, s;
  }(Treehouse.View), Featurette.register("quiz", Treehouse.Quiz);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.restoreSubmitText = e(this.restoreSubmitText, this), this.enableSubmitButton = e(this.enableSubmitButton, this), 
      this.disableSubmitButton = e(this.disableSubmitButton, this), this.getSubmitButton = e(this.getSubmitButton, this), 
      this.clearComments = e(this.clearComments, this), this.getComments = e(this.getComments, this), 
      this.handleFeedbackChanged = e(this.handleFeedbackChanged, this), this.submitError = e(this.submitError, this), 
      this.submitSuccess = e(this.submitSuccess, this), this.submitFeedback = e(this.submitFeedback, this), 
      this.initialize = e(this.initialize, this), s.__super__.constructor.apply(this, arguments), 
      this.on("change", "input[type=radio]", this.handleFeedbackChanged), this.on("change keyup paste", "[data-comments]", this.handleFeedbackChanged), 
      this.on("click", "[data-submit-feedback]", this.submitFeedback), $("#quiz_question_feedback_modal").on("modal:show", this.initialize);
    }
    return i(s, t), s.prototype.initialize = function() {
      return this.disableSubmitButton(), this.clearRadioSelection(), this.clearComments(), 
      this.get("[data-feedback-input]").show(), this.get("[data-submit-success],[data-submit-error]").hide(), 
      this.get("[data-comments-optional]").removeClass("hidden"), this.get("[data-comments-required]").addClass("hidden");
    }, s.prototype.submitFeedback = function(t) {
      var e, i;
      return t.preventDefault(), this.get("[data-submit-error]").hide(), this.disableSubmitButton(), 
      this.getSubmitButton().text("Processing..."), e = {
        quiz_question_feedback:{
          category:this.getSelectedRadioValue(),
          comments:this.getComments()
        }
      }, i = $.ajax({
        url:this.questionFeedbackUrl(),
        type:"POST",
        contentType:"application/json",
        data:JSON.stringify(e)
      }), i.success(this.submitSuccess), i.fail(this.submitError), i.always(this.restoreSubmitText);
    }, s.prototype.submitSuccess = function() {
      return this.get("[data-submit-success]").show(), this.get("[data-feedback-input]").hide(), 
      this.get("[data-submit-error]").hide();
    }, s.prototype.submitError = function() {
      return this.get("[data-submit-error]").show(), this.enableSubmitButton();
    }, s.prototype.questionFeedbackUrl = function() {
      return $("[data-question-feedback-url]").attr("data-question-feedback-url");
    }, s.prototype.handleFeedbackChanged = function(t) {
      var e, i, s, r;
      return s = this.getSelectedRadioValue(), i = s && "other" !== s, e = "other" === s, 
      r = e && this.getComments().length > 0 || i, r ? this.enableSubmitButton() :this.disableSubmitButton(), 
      this.get("[data-comments-optional]").toggleClass("hidden", e), this.get("[data-comments-required]").toggleClass("hidden", !e), 
      t.stopPropagation();
    }, s.prototype.getComments = function() {
      return this.get("[data-feedback-input] [data-comments]").val();
    }, s.prototype.clearComments = function() {
      return this.get("[data-feedback-input] [data-comments]").val("");
    }, s.prototype.getSelectedRadioValue = function() {
      return $("[data-feedback-input] input[type=radio]:checked").val();
    }, s.prototype.clearRadioSelection = function() {
      return $("[data-feedback-input] input[type=radio]:checked").prop("checked", !1);
    }, s.prototype.getSubmitButton = function() {
      return this.get("[data-submit-feedback]");
    }, s.prototype.disableSubmitButton = function() {
      return this.getSubmitButton().prop("disabled", !0).addClass("disabled").removeClass("primary");
    }, s.prototype.enableSubmitButton = function() {
      return this.getSubmitButton().prop("disabled", !1).removeClass("disabled").addClass("primary");
    }, s.prototype.restoreSubmitText = function() {
      return this.getSubmitButton().text("Report Question");
    }, s;
  }(Treehouse.View), Featurette.register("quiz-question-feedback-modal", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.ExamQuiz = function(i) {
    function s() {
      this.completeDegreeExam = t(this.completeDegreeExam, this), this.render = t(this.render, this), 
      this.examQuizNavAlert = t(this.examQuizNavAlert, this), this.processError = t(this.processError, this), 
      this.processResponse = t(this.processResponse, this), this.submitSelectedAnswer = t(this.submitSelectedAnswer, this), 
      this.setSelectedAnswer = t(this.setSelectedAnswer, this), s.__super__.constructor.apply(this, arguments), 
      this.selectedAnswer, this.submitAnswerButtonContent = "<button id='submit-selected-answer' class='button primary'>Submit Answer</button>", 
      this.listenTo(window, "beforeunload", this.examQuizNavAlert), this.on("click", "#submit-selected-answer", this.submitSelectedAnswer), 
      this.render();
    }
    return e(s, i), s.prototype.setSelectedAnswer = function(t) {
      return this.enableSubmitButton(), this.selectedAnswer = t;
    }, s.prototype.submitSelectedAnswer = function() {
      var t;
      return this.disable(), t = {}, this.quizData.quiz_attempt && (t.quiz_attempt = this.quizData.quiz_attempt), 
      $.ajax({
        type:"POST",
        url:this.selectedAnswer,
        data:t,
        dataType:"json",
        success:this.processResponse,
        error:this.processError
      });
    }, s.prototype.processResponse = function(t) {
      return this.quizData = t, "unfinished" !== t.quiz_status ? t.degree_exam_completed ? this.completeDegreeExam() :this.showDegreeExamBreak() :this.render(), 
      Treehouse.init();
    }, s.prototype.processError = function(t) {
      var e, i, s, r;
      if (e = Featurette.get("quiz-error-modal"), e.setError("Oops! Something went wrong. Please try answering the question again."), 
      401 === t.status) {
        if (s = JSON.parse(t.responseText), s.exam_ended) return r = s.redirect_url, i = Featurette.get("degree-exam-end-modal"), 
        i.setRedirectLink(r), i.setMessage("Your exam session time has expired. All of your answers have been saved and submitted for grading."), 
        void i.showOverlay({
          stack:!0
        });
        e.setError("Your exam session is locked! To resume with this exam, please ask your proctor to unlock your session.");
      }
      return e.showOverlay({
        stack:!0
      }), this.render();
    }, s.prototype.examQuizNavAlert = function() {
      if ("unfinished" === this.quizData.quiz_status) return "If you leave now, you'll lose your progress!";
      window.onbeforeunload = null;
    }, s.prototype.showDegreeExamBreak = function() {
      return Featurette.get("degree-exam-break-modal").showOverlay();
    }, s.prototype.render = function() {
      return this.generateQuestion(), this.generateAnswers(), this.generateDegreeExamControls(), 
      Treehouse.init();
    }, s.prototype.generateDegreeExamControls = function() {
      return this.canReselectAnswer(this.quizData) ? (this.examControlEl.html(this.submitAnswerButtonContent), 
      this.disableSubmitButton(), this.examControlEl.show()) :this.examControlEl.hide();
    }, s.prototype.generateAnswers = function() {
      var t;
      return null != (t = this.answersView) && "function" == typeof t.empty && t.empty(), 
      this.answersView = function() {
        switch (this.quizData.question.question_type) {
         case "MultipleChoice":
          return new Treehouse.Quiz.ExamMultipleChoice(this.answersEl, {
            setSelectedAnswer:this.setSelectedAnswer,
            answers:_.pick(this.quizData, "answers")
          });

         case "TrueFalse":
          return new Treehouse.Quiz.ExamTrueFalse(this.answersEl, {
            setSelectedAnswer:this.setSelectedAnswer,
            answers:_.pick(this.quizData, "answers")
          });

         case "FillInTheBlank":
          return new Treehouse.Quiz.FillInTheBlank(this.answersEl, {
            submit:this.submit,
            answers:_.pick(this.quizData, "answers")
          });
        }
      }.call(this), this.answersView.render();
    }, s.prototype.disable = function() {
      return this.disableSubmitButton(), this.answersEl.find(".quiz-answers a").addClass("inactive"), 
      this.isDisabled = !0;
    }, s.prototype.disableSubmitButton = function() {
      return $("#submit-selected-answer").attr("disabled", !0), $("#submit-selected-answer").addClass("inactive");
    }, s.prototype.enableSubmitButton = function() {
      return $("#submit-selected-answer").removeAttr("disabled"), $("#submit-selected-answer").removeClass("inactive");
    }, s.prototype.canReselectAnswer = function(t) {
      var e;
      return "MultipleChoice" === (e = t.question.question_type) || "TrueFalse" === e;
    }, s.prototype.completeDegreeExam = function() {
      return $.ajax({
        type:"POST",
        url:this.quizData.degree_exam_completion_url,
        error:this.processError,
        success:function(t, e, i) {
          return window.location = i.getResponseHeader("Location");
        }
      });
    }, s;
  }(Treehouse.Quiz), Featurette.register("exam_quiz", Treehouse.ExamQuiz);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Quiz.Feedback = function(i) {
    function s(e, i) {
      this.quizFinished = t(this.quizFinished, this), this.finishQuizProxy = t(this.finishQuizProxy, this), 
      this.nextQuestionProxy = t(this.nextQuestionProxy, this), this.onKeyUp = t(this.onKeyUp, this), 
      s.__super__.constructor.apply(this, arguments), this.quizStatus = i.quizStatus, 
      this.questionPassed = i.questionPassed, this.feedbackText = i.feedbackText, this.nextQuestion = i.nextQuestion, 
      this.finishQuiz = i.finishQuiz, this.feedbackType = i.feedbackType, this.instruction = i.instruction, 
      this.degreeExam = i.degreeExam, this.reviewVideoUrl = i.reviewVideoUrl, this.on("click", "[data-next-question]", this.nextQuestionProxy), 
      this.on("click", "[data-finish-quiz]", this.finishQuizProxy);
    }
    return e(s, i), s.prototype.render = function() {
      return "error" !== this.feedbackType && "success" !== this.feedbackType || this.listenTo(document, "keyup", this.onKeyUp), 
      this.el.html(HoganTemplates["quizzes/feedback_" + this.feedbackType].render({
        degree_exam:this.degreeExam,
        finished:this.quizFinished(),
        passed:this.questionPassed,
        response:this.feedbackText,
        instruction:this.instruction,
        skip_quiz_url:this.el.data("skip-quiz-url"),
        review_video_url:this.reviewVideoUrl,
        icon_play:this.el.data("icon-play"),
        icon_right_arrow:this.el.data("icon-right-arrow"),
        alert_success_icon:this.el.data("alert-success-icon"),
        alert_error_icon:this.el.data("alert-error-icon"),
        step_params:JSON.stringify({
          step_type:"Quiz",
          step_id:this.el.data("quiz-id")
        }),
        get_help_url:this.el.data("get-help-url")
      }));
    }, s.prototype.empty = function() {
      return this.el.empty(), this.stopListening();
    }, s.prototype.onKeyUp = function(t) {
      if (13 === t.which) return this.nextQuestionProxy(), this.finishQuizProxy();
    }, s.prototype.nextQuestionProxy = function() {
      if ("unfinished" === this.quizStatus) return this.nextQuestion();
    }, s.prototype.finishQuizProxy = function() {
      if (this.quizFinished()) return this.finishQuiz(), this.stopListening();
    }, s.prototype.quizFinished = function() {
      return "passed" === this.quizStatus || "failed" === this.quizStatus;
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Quiz.MultipleChoice = function(i) {
    function s(e, i) {
      this.options = i, this.onClick = t(this.onClick, this), this.onKeyUp = t(this.onKeyUp, this), 
      s.__super__.constructor.apply(this, arguments), this.listenTo(document, "keyup", this.onKeyUp), 
      this.on("click", "[data-quiz-answer-key]", this.onClick);
    }
    return e(s, i), s.prototype.template = "quizzes/multiple_choice", s.prototype.render = function() {
      return this.el.html(HoganTemplates[this.template].render(this.options.answers));
    }, s.prototype.onKeyUp = function(t) {
      var e, i;
      if (!this.isDisabled) return (i = this.keyCodes()[t.which]) ? (e = this.el.find("[data-quiz-answer-key=" + i + "]"), 
      this.submitProxy(e)) :void 0;
    }, s.prototype.onClick = function(t) {
      if ("function" == typeof t.preventDefault && t.preventDefault(), !this.isDisabled) return this.submitProxy($(t.currentTarget));
    }, s.prototype.submitProxy = function(t) {
      return this.options.submit(t.attr("href")), t.addClass("selected"), this.disable();
    }, s.prototype.disable = function() {
      return this.el.find(".quiz-answers a").addClass("inactive"), this.isDisabled = !0;
    }, s.prototype.empty = function() {
      return this.el.empty(), this.stopListening();
    }, s.prototype.keyCodes = function() {
      return this.cachedKeyCodes ? this.cachedKeyCodes :(this.cachedKeyCodes = {}, this.options.answers.answers.forEach(function(t) {
        return function(e) {
          return t.cachedKeyCodes[e.abcd.charCodeAt()] = e.abcd;
        };
      }(this)), this.cachedKeyCodes);
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Treehouse.Quiz.TrueFalse = function(e) {
    function i() {
      return i.__super__.constructor.apply(this, arguments);
    }
    return t(i, e), i.prototype.template = "quizzes/true_false", i.prototype.keyCodes = function() {
      return null != this.cachedKeyCodes ? this.cachedKeyCodes :this.cachedKeyCodes = {
        70:"False",
        84:"True"
      };
    }, i;
  }(Treehouse.Quiz.MultipleChoice);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Quiz.FillInTheBlank = function(i) {
    function s(e, i) {
      this.options = i, this.enterKeyHandler = t(this.enterKeyHandler, this), this.onFormSubmit = t(this.onFormSubmit, this), 
      s.__super__.constructor.apply(this, arguments), this.on("submit", "[data-quiz-fitb-form-action]", this.onFormSubmit), 
      this.on("keydown", "[contenteditable='true']", this.enterKeyHandler);
    }
    return e(s, i), s.prototype.onFormSubmit = function(t) {
      var e, i, s, r;
      if (null != t && t.preventDefault(), !this.isDisabled) return i = this.el.find("form[data-quiz-fitb-form-action]"), 
      s = i.data("quiz-fitb-form-action"), r = i.find("[contenteditable='true']"), e = {
        fitb_answers:this.serializedFormData(r)
      }, r.blur().prop("contenteditable", !1), this.options.submit(s, e), this.disable();
    }, s.prototype.enterKeyHandler = function(t) {
      if (13 === t.which) return this.onFormSubmit();
    }, s.prototype.serializedFormData = function(t) {
      var e;
      return e = {}, t.each(function(t, i) {
        e[t] = {
          name:i.id,
          value:i.textContent
        };
      }), e;
    }, s.prototype.disable = function() {
      return this.el.find(".quiz-answers").addClass("inactive"), this.isDisabled = !0;
    }, s.prototype.render = function() {
      var t;
      return t = HoganTemplates["quizzes/fill_in_the_blank"].render(this.options.answers), 
      this.el.html(t).find("a").attr("target", "_blank"), this.el.find("[contenteditable='true']:first").focus();
    }, s.prototype.empty = function() {
      return this.el.empty(), this.stopListening();
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Quiz.ExamMultipleChoice = function(i) {
    function s(e, i) {
      this.options = i, this.onKeyUp = t(this.onKeyUp, this), this.onClick = t(this.onClick, this), 
      s.__super__.constructor.apply(this, arguments);
    }
    return e(s, i), s.prototype.template = "quizzes/multiple_choice", s.prototype.onClick = function(t) {
      var e;
      if ("function" == typeof t.preventDefault && t.preventDefault(), !this.isDisabled) return this.resetAnswerStyles(), 
      e = $(t.currentTarget), e.addClass("selected"), this.el.find(".quiz-answers a").addClass("inactive"), 
      this.options.setSelectedAnswer(e.attr("href"));
    }, s.prototype.onKeyUp = function(t) {
      var e, i;
      if (!this.isDisabled) return (i = this.keyCodes()[t.which]) ? (this.resetAnswerStyles(), 
      e = this.el.find("[data-quiz-answer-key=" + i + "]"), e.addClass("selected"), this.options.setSelectedAnswer(e.attr("href"))) :void 0;
    }, s.prototype.resetAnswerStyles = function() {
      return this.el.find(".quiz-answers a").removeClass("inactive"), this.el.find(".quiz-answers a").removeClass("selected");
    }, s;
  }(Treehouse.Quiz.MultipleChoice);
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Treehouse.Quiz.ExamTrueFalse = function(e) {
    function i() {
      return i.__super__.constructor.apply(this, arguments);
    }
    return t(i, e), i.prototype.template = "quizzes/true_false", i.prototype.keyCodes = function() {
      return null != this.cachedKeyCodes ? this.cachedKeyCodes :this.cachedKeyCodes = {
        70:"False",
        84:"True"
      };
    }, i;
  }(Treehouse.Quiz.ExamMultipleChoice);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.enableSubmitButton = e(this.enableSubmitButton, this), this.disableSubmitButton = e(this.disableSubmitButton, this), 
      this.getSubmitButton = e(this.getSubmitButton, this), this.clearComments = e(this.clearComments, this), 
      this.getComments = e(this.getComments, this), this.handleFeedbackChanged = e(this.handleFeedbackChanged, this), 
      this.initialize = e(this.initialize, this), s.__super__.constructor.apply(this, arguments), 
      this.on("change", "input[type=radio]", this.handleFeedbackChanged), this.on("change keyup paste", "[data-comments]", this.handleFeedbackChanged), 
      $("#leave_assessment_modal").on("modal:show", this.initialize);
    }
    return i(s, t), s.prototype.initialize = function() {
      return this.disableSubmitButton(), this.clearRadioSelection(), this.clearComments(), 
      this.get("[data-comments-optional]").removeClass("hidden"), this.get("[data-comments-required]").addClass("hidden");
    }, s.prototype.handleFeedbackChanged = function(t) {
      var e, i, s, r;
      return s = this.getSelectedRadioValue(), i = s && "other" !== s, e = "other" === s, 
      r = e && this.getComments().length > 0 || i, r ? this.enableSubmitButton() :this.disableSubmitButton(), 
      this.get("[data-comments-optional]").toggleClass("hidden", e), this.get("[data-comments-required]").toggleClass("hidden", !e), 
      t.stopPropagation();
    }, s.prototype.getComments = function() {
      return this.get("[data-feedback-input] [data-comments]").val();
    }, s.prototype.clearComments = function() {
      return this.get("[data-feedback-input] [data-comments]").val("");
    }, s.prototype.getSelectedRadioValue = function() {
      return $("[data-feedback-input] input[type=radio]:checked").val();
    }, s.prototype.clearRadioSelection = function() {
      return $("[data-feedback-input] input[type=radio]:checked").prop("checked", !1);
    }, s.prototype.getSubmitButton = function() {
      return this.get("[data-submit-feedback]");
    }, s.prototype.disableSubmitButton = function() {
      return this.getSubmitButton().prop("disabled", !0).addClass("disabled").removeClass("caution");
    }, s.prototype.enableSubmitButton = function() {
      return this.getSubmitButton().prop("disabled", !1).removeClass("disabled").addClass("caution");
    }, s;
  }(Treehouse.View), Featurette.register("leave-assessment-modal", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.toggleSteps = e(this.toggleSteps, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", ".toggle-steps", this.toggleSteps), this.on("pjax:end", this.clearElementsCache), 
      this.expanded = this.get(".steps-list:visible").length > 0;
    }
    return i(s, t), s.prototype.toggleSteps = function(t) {
      return t.preventDefault(), this.expanded ? this.contract() :this.expand();
    }, s.prototype.expand = function(t) {
      return null == t && (t = "fast"), this.get(".steps-list").stop(!0, !0).slideDown(t), 
      this.get(".toggle-steps").addClass("selected"), this.get(".toggle-steps").addClass("selected"), 
      this.expanded = !0;
    }, s.prototype.contract = function(t) {
      return null == t && (t = "fast"), this.get(".steps-list").stop(!0, !0).slideUp(t), 
      this.get(".toggle-steps").removeClass("selected"), this.get(".toggle-steps").removeClass("selected"), 
      this.expanded = !1;
    }, s;
  }(Treehouse.View), Featurette.register("expandable-content-card", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("truncate-tags", Treehouse.TruncateTags = function(i) {
    function s() {
      this.truncate = t(this.truncate, this), s.__super__.constructor.apply(this, arguments), 
      this.listenTo(window, "resize", _.throttle(this.truncate, 500), {
        triggerImmediately:!0
      });
    }
    return e(s, i), s.prototype.truncate = function() {
      return this.get(".tags").each(function() {
        return function(t, e) {
          var i, s, r, n, o;
          if (e = $(e), o = e.find(".truncated-tags ul"), s = e.innerWidth(), i = e.children(":not(.truncated-tags)"), 
          o.empty(), i.show(), e.removeClass("truncated"), r = _.find(i, function(t) {
            return t.offsetWidth + t.offsetLeft > s;
          })) return n = i.slice(i.index(r), i.length + 1), n.hide(), n.clone().appendTo(o), 
          e.addClass("truncated"), o.find("li").show();
        };
      }());
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("track-update-actions", function(i) {
    function s() {
      this.updateCopy = t(this.updateCopy, this), this.showErrorUpdate = t(this.showErrorUpdate, this), 
      this.showConfirmUpdate = t(this.showConfirmUpdate, this), this.updateTrack = t(this.updateTrack, this), 
      this.declineUpdate = t(this.declineUpdate, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", "[data-decline-update]", this.declineUpdate), this.on("click", "[data-update-track]", this.updateTrack);
    }
    return e(s, i), s.prototype.declineUpdate = function() {
      return this.el.addClass("showing-confirmation"), this.updateCopy("declined");
    }, s.prototype.updateTrack = function(t) {
      return t.preventDefault(), this.get("[data-update-track]").html("Updating..."), 
      $.ajax({
        url:this.get("[data-update-track]").attr("href"),
        type:"PUT",
        success:function(t) {
          return function() {
            return t.showConfirmUpdate();
          };
        }(this),
        error:function(t) {
          return function() {
            return t.showErrorUpdate();
          };
        }(this)
      }), !1;
    }, s.prototype.showConfirmUpdate = function() {
      return this.el.addClass("updated-track"), this.updateCopy("accepted");
    }, s.prototype.showErrorUpdate = function() {
      return this.el.addClass("failed-update"), this.updateCopy("failed");
    }, s.prototype.updateCopy = function(t) {
      return $([ "title", "description" ]).each(function(e) {
        return function(i, s) {
          var r;
          return r = e.get("[data-track-update-" + s + "]"), r.html(r.data(t + "-update"));
        };
      }(this));
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t, e, i, s = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, r = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) n.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, n = {}.hasOwnProperty;
  t = function(t) {
    function e(t) {
      this.updateCardEstimate = s(this.updateCardEstimate, this), this.personalize = s(this.personalize, this), 
      this.handlePersonalize = s(this.handlePersonalize, this), this.handleBookmarkChange = s(this.handleBookmarkChange, this), 
      this.handleBookmarkChanged = s(this.handleBookmarkChanged, this), this.bookmarkableFeaturette = s(this.bookmarkableFeaturette, this), 
      this.handleBookmarkError = s(this.handleBookmarkError, this), this.handleBookmarkChanged = s(this.handleBookmarkChanged, this), 
      this.handleBookmarkAdded = s(this.handleBookmarkAdded, this), this.handleQueueError = s(this.handleQueueError, this), 
      this.handleQueueChanged = s(this.handleQueueChanged, this), this.handleQueueAdded = s(this.handleQueueAdded, this), 
      this.isActivityType = s(this.isActivityType, this), this.identity = s(this.identity, this), 
      this.deconstructor = s(this.deconstructor, this);
      e.__super__.constructor.call(this, t), this.personalization = Treehouse.ActivityProgress.instance(), 
      this.el.parents("[data-no-personalization]").count > 0 || !0 === this.personalization.registerInterest(this.identity(), this.el.attr("id")) && this.listenTo(document, "personalize", this.handlePersonalize), 
      this.on("queue:changed", this.handleQueueChanged), this.on("queue:added", this.handleQueueAdded), 
      this.on("queue:error", this.handleQueueError), this.listenTo("body", "bookmark:changed", this.handleBookmarkChanged), 
      this.on("bookmark:change", this.handleBookmarkChange), this.on("bookmark:added", this.handleQueueAdded), 
      this.on("bookmark:error", this.handleQueueError), this.el.on("remove", this.deconstructor), 
      this.el.find(".card-estimate").data("initial-value", this.el.find(".card-estimate").html()), 
      this.queueableTarp = new Treehouse.Library.QueueableTarp(this.el.find(".queueable-tarp"));
    }
    return r(e, t), e.prototype.deconstructor = function() {
      return this.personalization.unregisterInterest(this.identity(), this), this.stopListening();
    }, e.prototype.identity = function() {
      return this.el.attr("data-activity");
    }, e.prototype.isActivityType = function(t) {
      var e;
      return t = _.string.dasherize(t.trim()), e = [ "bonus-content-series", "syllabus", "workshop", "instruction" ], 
      e.indexOf(t) >= 0 && this.el.hasClass(t);
    }, e.prototype.handleQueueAdded = function() {
      return this.queueableTarp.show("added");
    }, e.prototype.handleQueueChanged = function() {
      return this.personalization.expire(this.identity());
    }, e.prototype.handleQueueError = function() {
      return this.queueableTarp.displayError();
    }, e.prototype.handleBookmarkAdded = function() {
      return this.queueableTarp.show("added");
    }, e.prototype.handleBookmarkChanged = function() {
      return this.personalization.expire(this.identity());
    }, e.prototype.handleBookmarkError = function() {
      return this.queueableTarp.displayError();
    }, e.prototype.bookmarkableFeaturette = function() {
      return Featurette.get(this.el.find("[data-featurette='bookmarkable']").attr("id"));
    }, e.prototype.handleBookmarkChanged = function(t, e, i) {
      if (e === this.identity()) {
        if (i === Treehouse.Library.Bookmarkable.NOT_BOOKMARKED) return this.el.removeClass("bookmarked");
        if (i === Treehouse.Library.Bookmarkable.BOOKMARKED) return this.el.addClass("bookmarked");
      }
    }, e.prototype.handleBookmarkChange = function() {
      return this.personalization.expire(this.identity());
    }, e.prototype.handlePersonalize = function(t, e, i) {
      if (e === this.identity()) return this.personalize(i);
    }, e.prototype.personalize = function(t) {
      var e, i, s, r, n, o, a, l;
      if (this.inProgress = t.in_progress, this.percentComplete = t.percent_complete, 
      this.completed = t.completed, this.skipped = t.skipped, this.upcoming = t.upcoming, 
      s = this.get(".card-estimate").data("initial-value"), this.skipped ? this.updateCardEstimate("You have placed out of this course! (It typically takes approximately " + s + " to complete.)", "Tested out") :this.completed ? this.updateCardEstimate("You have completed this course! (It typically takes approximately " + s + " to complete.)", "Complete") :this.inProgress && this.updateCardEstimate("You have approximately " + t.formatted_time_left + " left of " + s + " to complete this activity.", t.formatted_time_left + " left"), 
      a = this.el.find(".card-stages").children(), t.stage_progress_classes) for (i = r = 0, 
      n = a.length; r < n; i = ++r) o = a[i], $(o).addClass(t.stage_progress_classes[i]); else this.inProgress && a.first().addClass("current");
      return this.inProgress && this.el.find(".card-actions .resume a").text("Resume"), 
      this.skipped ? this.el.find(".card-status-title").html("Tested out") :this.completed ? (l = this.isActivityType("bonus_content_series") || this.isActivityType("workshop") || this.isActivityType("instruction") ? "Complete" :t.points_earned + " points achieved", 
      this.el.find(".card-status-title").html(l)) :(null != t.next_step_url || t.bookmarked) && (this.el.find(".card-actions .resume a").attr("href", t.next_step_url), 
      this.el.find(".current-step").append(t.next_step_title), "forum" !== this.el.data("location") && this.el.find(".current-step > svg").hide(), 
      this.el.find(".current-step").removeClass("hidden"), this.el.find("." + t.next_step_type.toLowerCase() + "-22-icon").show(), 
      this.el.find(".card-actions").removeClass("hidden")), this.upcoming && this.el.addClass("upcoming"), 
      this.inProgress && this.el.addClass("in-progress"), this.completed && this.el.addClass("completed"), 
      t.queued && this.get("." + Treehouse.LearningQueue.Item.QUEUEABLE_CLASS).addClass(Treehouse.LearningQueue.Item.QUEUED_CLASS), 
      e = this.bookmarkableFeaturette(), e && e.setState(t.bookmarked), this.el.addClass("personalized");
    }, e.prototype.updateCardEstimate = function(t, e) {
      var i;
      return i = this.get(".card-estimate"), i.data("initial-value") && i.attr("title", t), 
      i.html(e);
    }, e;
  }(Treehouse.View), null != (e = this.Treehouse) && null != (i = e.Library) && (i.Card = t), 
  Featurette.register("library-card", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  Treehouse.Library || (Treehouse.Library = {}), Treehouse.Library.Bookmarkable = function(t) {
    function s() {
      this.trigger = e(this.trigger, this), this.handleBookmarkChanged = e(this.handleBookmarkChanged, this), 
      this.success = e(this.success, this), this.error = e(this.error, this), this.loaded = e(this.loaded, this), 
      this.loading = e(this.loading, this), this.sendRequest = e(this.sendRequest, this), 
      this.unbookmark = e(this.unbookmark, this), this.bookmark = e(this.bookmark, this), 
      this.setState = e(this.setState, this), this.isBookmarked = e(this.isBookmarked, this), 
      this.activityId = e(this.activityId, this), s.__super__.constructor.apply(this, arguments), 
      this.el.data("bookmarked") || this.el.data("bookmarked", !1), this.on("click", "a.bookmark, a.unbookmark, .undo", this.sendRequest), 
      this.listenTo("body", "bookmark:changed", this.handleBookmarkChanged), this.el.on("remove", this.stopListening);
    }
    return i(s, t), s.BOOKMARKED = "bookmarked", s.NOT_BOOKMARKED = "not-bookmarked", 
    s.prototype.activityId = function() {
      return this.el.data("activity") || this.el.parents("[data-activity]").data("activity");
    }, s.prototype.isBookmarked = function() {
      return this.el.data("bookmarked");
    }, s.prototype.setState = function(t) {
      return this.el.data("bookmarked", t === s.BOOKMARKED || !0 === t), this.trigger("bookmark:changed");
    }, s.prototype.bookmark = function() {
      if (!this.isBookmarked()) return this.el.find("a.bookmark").click();
    }, s.prototype.unbookmark = function() {
      if (this.isBookmarked()) return this.el.find("a.unbookmark").click();
    }, s.prototype.sendRequest = function(t) {
      var e;
      return e = $(t.currentTarget), t.preventDefault(), $.ajax({
        dataType:"text",
        type:e.data("method"),
        url:e.attr("href"),
        beforeSend:this.loading,
        complete:this.loaded,
        error:this.error,
        success:this.success
      }), !1;
    }, s.prototype.loading = function() {
      return this.el.addClass("loading"), this.trigger("bookmark:change");
    }, s.prototype.loaded = function() {
      return this.el.removeClass("loading");
    }, s.prototype.error = function() {
      return this.trigger("bookmark:error"), this.tarp.displayError();
    }, s.prototype.success = function(t) {
      return this.setState(!this.isBookmarked()), _.defer(function(e) {
        return function() {
          return e.trigger("bookmark:" + t);
        };
      }(this));
    }, s.prototype.handleBookmarkChanged = function(t, e, i) {
      if (e === this.activityId() && (i === s.NOT_BOOKMARKED && this.el.removeClass("bookmarked"), 
      i === s.BOOKMARKED)) return this.el.addClass("bookmarked");
    }, s.prototype.trigger = function(t) {
      var e;
      return e = !0 === this.isBookmarked() ? s.BOOKMARKED :s.NOT_BOOKMARKED, this.el.trigger(t, [ this.activityId(), e ]);
    }, s;
  }(Treehouse.View), t = Treehouse.Library.Bookmarkable, Featurette.register("bookmarkable", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Library.QueueableTarp = function(i) {
    function s(e) {
      this.trigger = t(this.trigger, this), this.displayError = t(this.displayError, this), 
      this.show = t(this.show, this), s.__super__.constructor.call(this, e);
    }
    return e(s, i), s.prototype.show = function(t) {
      var e;
      return this.get(".confirmation-tarp:not(.undo):visible").stop(!0, !0).fadeOut(150), 
      this.get(".undo").is(":visible") ? this.get(".undo:visible").stop(!0, !0).delay(50).fadeOut(150, callback) :(e = this.get("." + t), 
      e.show().delay(4e3).fadeOut(300));
    }, s.prototype.displayError = function() {
      return this.get(".error").show();
    }, s.prototype.trigger = function(t) {
      return this.el.trigger(t);
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  Treehouse.ActivityProgress = function() {
    function e() {
      this.expire = t(this.expire, this), this.missingActivities = t(this.missingActivities, this), 
      this.cycle = t(this.cycle, this), this.broadcast = t(this.broadcast, this), this.failedToLoadData = t(this.failedToLoadData, this), 
      this.loadedData = t(this.loadedData, this), this.unregisterInterest = t(this.unregisterInterest, this), 
      this.registerInterest = t(this.registerInterest, this);
      var e, i, s, r;
      this.enabled() && (s = Treehouse.currentUser.cache_marks.progress, e = Treehouse.currentUser.cache_marks.bookmarks, 
      r = Treehouse.currentUser.cache_marks.queue, i = "progress:" + s + "/bookmarks:" + e + "/queue:" + r, 
      this.cache = new Treehouse.Cache({
        namespace:{
          namespace:i,
          currentUser:!0
        }
      }), this.registeredActivities = {}, this.pendingActivities = []);
    }
    return e.instance = function() {
      return null != this._instance ? this._instance :this._instance = new Treehouse.ActivityProgress();
    }, e.prototype.enabled = function() {
      return !0 === Treehouse.isLoggedIn;
    }, e.prototype.registerInterest = function(t, e) {
      var i;
      return !!this.enabled() && (!!t && (i = e + ": " + t, this.registeredActivities[i] = t, 
      _.defer(function(e) {
        return function() {
          return e.broadcast(t);
        };
      }(this)), _.defer(this.cycle), !0));
    }, e.prototype.unregisterInterest = function(t, e) {
      var i;
      return !!this.enabled() && (i = e + ": " + t, !!this.registeredActivities[i] && delete this.registeredActivities[i]);
    }, e.prototype.loadedData = function(t, e) {
      return delete this.pendingActivities[_.indexOf(this.pendingActivities, t)], this.cache.write(t, e), 
      this.broadcast(t);
    }, e.prototype.failedToLoadData = function(t) {
      return delete this.pendingActivities[_.indexOf(this.pendingActivities, t)], $(document).trigger("personalize:failure", t);
    }, e.prototype.broadcast = function(t) {
      var e;
      return !!(e = this.cache.read(t)) && ($(document).trigger("personalize", [ t, e ]), 
      !0);
    }, e.prototype.cycle = function() {
      var t;
      if (this.enabled()) return t = this.chunkArray(this.missingActivities(), 30), _.each(t, function(t) {
        return function(e) {
          if (e.length > 0) return t.pendingActivities = _.union(t.pendingActivities, e), 
          new Treehouse.ActivityProgress.Request(e);
        };
      }(this));
    }, e.prototype.missingActivities = function() {
      var t;
      return t = _.select(_.values(this.registeredActivities), function(t) {
        return function(e) {
          return t.cache.exists(e);
        };
      }(this)), _.difference(_.values(this.registeredActivities), t, this.pendingActivities);
    }, e.prototype.expire = function(t) {
      return this.cache["delete"](t), $(document).trigger("personalize:expired", t);
    }, e.prototype.chunkArray = function(t, e) {
      return null == e && (e = 15), [].concat.apply([], t.map(function(i, s) {
        return s % e ? [] :[ t.slice(s, s + e) ];
      }));
    }, e;
  }(), Treehouse.ActivityProgress.Request = function() {
    function e(e) {
      this.handleErrorResponse = t(this.handleErrorResponse, this), this.handleSuccessResponse = t(this.handleSuccessResponse, this), 
      this.activityIds = e, $.isEmptyObject(e) || $.ajax({
        type:"POST",
        url:"/progress",
        data:{
          activities:e
        },
        success:this.handleSuccessResponse,
        error:this.handleErrorResponse
      });
    }
    return e.prototype.handleSuccessResponse = function(t) {
      return _.each(t, function() {
        return function(t) {
          return Treehouse.ActivityProgress.instance().loadedData(t.identity, t);
        };
      }());
    }, e.prototype.handleErrorResponse = function() {
      return _.each(this.activityIds, function() {
        return function(t) {
          return Treehouse.ActivityProgress.instance().failedToLoadData(t);
        };
      }());
    }, e;
  }();
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.createChart = e(this.createChart, this), this.dataSeries = e(this.dataSeries, this), 
      this.goalSeries = e(this.goalSeries, this), this.getDays = e(this.getDays, this), 
      this.getDay = e(this.getDay, this), s.__super__.constructor.apply(this, arguments), 
      this.days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], this.yMinimum = 4, 
      this.createChart();
    }
    return i(s, t), s.prototype.getDay = function(t) {
      return this.days[Date.parse(t).getDay()];
    }, s.prototype.getDays = function() {
      return this.data.step.stats.map(function(t) {
        return function(e) {
          return t.getDay(e[0]);
        };
      }(this));
    }, s.prototype.goalSeries = function() {
      return _.range(this.data.step.stats.length).map(function(t) {
        return function() {
          return t.data.totalSteps;
        };
      }(this));
    }, s.prototype.dataSeries = function() {
      return this.data.step.stats.map(function(t) {
        return function(e) {
          return {
            meta:t.getDay(e[0]),
            value:e[1]
          };
        };
      }(this));
    }, s.prototype.createChart = function() {
      var t;
      return t = this.dataSeries(), new Chartist.Line(this.el.get(0), {
        labels:this.getDays(),
        series:[ this.goalSeries(), t ]
      }, {
        high:Math.max.apply(Math, t.map(_.property("value")).concat(this.yMinimum)),
        fullWidth:!0,
        lineSmooth:Chartist.Interpolation.simple({
          divisor:2
        }),
        axisY:{
          onlyInteger:!0
        },
        axisX:{
          showGrid:!1
        },
        classNames:{
          point:"ct-point " + this.data.topicStrokeClass
        },
        plugins:[ Chartist.plugins.tooltip({
          tooltipFnc:function(t) {
            return function(e, i) {
              var s;
              return s = "1" === i ? "step" :"steps", '<div class="chartist-tooltip-box">\n  <strong class="ct-tooltip-date ' + t.data.topicColorClass + '">' + e + '</strong>\n  <span class="ct-tooltip-steps-complete">' + i + " " + s + "</span>\n</div>";
            };
          }(this)
        }) ]
      }).on("draw", function(t) {
        return function(e) {
          var i, s;
          return "line" === e.type ? 0 === e.seriesIndex ? e.group.addClass("ct-series-goal") :(e.element.addClass(t.data.topicStrokeClass), 
          s = e.element._node.getTotalLength(), e.element.attr({
            "stroke-dasharray":s + "px " + s + "px"
          }), e.element.animate({
            "stroke-dashoffset":{
              dur:2e3,
              from:s + "px",
              to:"0px",
              easing:Chartist.Svg.Easing.easeOutQuint,
              fill:"freeze"
            }
          })) :"point" === e.type ? (i = new Chartist.Svg("circle", {
            r:4,
            cx:e.x,
            cy:e.y,
            "ct:meta":e.meta,
            "ct:value":e.series[e.index].value
          }, "ct-point ct-circle " + t.data.topicStrokeClass), e.value.y >= t.data.totalSteps && i.addClass("ct-goal-completed " + t.data.topicFillClass), 
          e.element.replace(i)) :void 0;
        };
      }(this));
    }, s;
  }(Treehouse.View), Featurette.register("learning-flow-weekly-progress", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.LearningQueue && (Treehouse.LearningQueue = {}), Treehouse.LearningQueue.Queue = function(i) {
    function s() {
      this.setFirstItemCurrent = t(this.setFirstItemCurrent, this), this.restorePreDragScrollTop = t(this.restorePreDragScrollTop, this), 
      this.savePreDragScrollTop = t(this.savePreDragScrollTop, this), this.clearPreAddScrollTop = t(this.clearPreAddScrollTop, this), 
      this.restorePreAddScrollTop = t(this.restorePreAddScrollTop, this), this.savePreAddScrollTop = t(this.savePreAddScrollTop, this), 
      this.toggleLastNResults = t(this.toggleLastNResults, this), this.showItemLoading = t(this.showItemLoading, this), 
      this.toggleSearchResults = t(this.toggleSearchResults, this), this.closeOnEscape = t(this.closeOnEscape, this), 
      this.clearSearchInput = t(this.clearSearchInput, this), this.clearSearchResults = t(this.clearSearchResults, this), 
      this.searchFailed = t(this.searchFailed, this), this.searchComplete = t(this.searchComplete, this), 
      this.search = t(this.search, this), this.hideSearchPanel = t(this.hideSearchPanel, this), 
      this.showSearchPanel = t(this.showSearchPanel, this), this.addToQueue = t(this.addToQueue, this), 
      this.setEmptyQueuePlaceholderVisibility = t(this.setEmptyQueuePlaceholderVisibility, this), 
      this.resetRecommendations = t(this.resetRecommendations, this), this.displayRecommendations = t(this.displayRecommendations, this), 
      this.loadRecommendations = t(this.loadRecommendations, this), this.move = t(this.move, this), 
      this.dragSort = t(this.dragSort, this), this.dragStop = t(this.dragStop, this), 
      this.dragStart = t(this.dragStart, this), this.toggleDropDown = t(this.toggleDropDown, this), 
      this.removeItem = t(this.removeItem, this), this.addItem = t(this.addItem, this), 
      s.__super__.constructor.apply(this, arguments), this.addToQueueEl = this.get(".queue-addition-search"), 
      this.on("click", ".queue-content-actions", this.toggleDropDown), this.on("click", ".queue-addition-button", this.addToQueue), 
      this.on("click", "li:not(.empty-queue-placeholder) .queue-node-controller", this.hideSearchPanel), 
      this.on("click", ".queue-panel .toggle-results", this.toggleSearchResults), this.on("click", ".clear-search", function(t) {
        return function() {
          return t.clearSearchInput(!0);
        };
      }(this)), this.on("keyup", "[data-queue-element=search-form] input", _.debounce(this.search, 200)), 
      this.on("submit", "[data-queue-element=search-form]", function() {
        return !1;
      }), this.on("keydown", "[data-queue-element=search-form] input", this.closeOnEscape), 
      this.on("mousedown", ".queue-node-dragger", this.savePreDragScrollTop), this.listenTo("body", "queue:added", this.addItem), 
      this.listenTo("body", "queue:removed", this.removeItem), this.get(".learning-queue").sortable({
        axis:"y",
        containment:"[data-queue-element=queue-container]",
        handle:".queue-node-dragger",
        items:".queue-item",
        start:this.dragStart,
        stop:this.dragStop,
        sort:this.dragSort
      }), this.body = $("body"), this.setEmptyQueuePlaceholderVisibility();
    }
    return e(s, i), s.prototype.searchResultsToShowInitially = 8, s.prototype.allResultsShown = !1, 
    s.prototype.keyCodeEscape = 27, s.prototype.addItem = function(t, e) {
      var i, s;
      return s = $(t.target), i = s.closest("[data-queue-item-id]"), this.hideSearchPanel(), 
      this.restorePreAddScrollTop(), this.resetRecommendations(), $.ajax({
        url:this.data.queueUrl + "/" + e.id,
        type:"GET",
        success:function(t) {
          return function(e) {
            var s;
            return s = $(e), i.length ? i.after(s) :t.get(".learning-queue").append(s), t.clearElementsCache(), 
            t.setEmptyQueuePlaceholderVisibility(), t.setFirstItemCurrent(), setTimeout(function() {
              return s.cssAnimate(2e3);
            }, 100), Treehouse.init();
          };
        }(this)
      });
    }, s.prototype.removeItem = function(t, e) {
      var i;
      return i = this.get("[data-queue-item-id=" + e.id + "]"), i.addClass("hide"), setTimeout(function(t) {
        return function() {
          return i.remove(), t.clearElementsCache(), t.resetRecommendations(), t.setEmptyQueuePlaceholderVisibility(), 
          t.setFirstItemCurrent(i);
        };
      }(this), 600);
    }, s.prototype.toggleDropDown = function(t) {
      var e;
      return t.preventDefault(), e = $(t.currentTarget), e.toggleClass("selected"), e.children(".dropdown-child").toggle();
    }, s.prototype.dragStart = function(t, e) {
      var i;
      return this.restorePreDragScrollTop(), i = e.item.find(".queue-card"), this.hideSearchPanel(), 
      i.addClass("drag"), $(".queue-node-dragger").addClass("hide"), e.item.find(".queue-node-dragger").removeClass("hide");
    }, s.prototype.dragStop = function(t, e) {
      var i, s, r;
      return this.clearElementsCache(), s = e.item.find(".queue-card"), s.removeClass("drag"), 
      this.get(".queue-node-dragger").removeClass("hide"), this.setFirstItemCurrent(s), 
      r = e.item.attr("data-queue-item-id"), i = e.item.prev("li").attr("data-queue-item-id"), 
      this.move(r, i);
    }, s.prototype.dragSort = function(t, e) {
      var i;
      return i = t.pageY - this.el.offset().top, i -= 35, e.helper.css({
        top:i + "px"
      });
    }, s.prototype.move = function(t, e) {
      var i;
      return i = {
        item_id:t,
        insert_after_item_id:e
      }, $.ajax({
        url:this.data.moveItemUrl,
        type:"PUT",
        data:i,
        success:function(t) {
          return function() {
            return t.body.trigger("queue:changed");
          };
        }(this)
      });
    }, s.prototype.loadRecommendations = function() {
      return this.recommendations ? void this.displayRecommendations() :$.get(this.data.recommendationsUrl, function(t) {
        return function(e) {
          return t.recommendations = e, t.displayRecommendations();
        };
      }(this));
    }, s.prototype.displayRecommendations = function() {
      return this.get("[data-queue-element=search-results]").html(this.recommendations), 
      Treehouse.init();
    }, s.prototype.resetRecommendations = function() {
      return this.recommendations = null;
    }, s.prototype.setEmptyQueuePlaceholderVisibility = function() {
      var t, e;
      return t = this.get(".empty-queue-placeholder"), this.get(".queue-item").length ? t.hide() :(t.show(), 
      e = t.find(".queue-addition"), this.showSearchPanel(e));
    }, s.prototype.addToQueue = function(t) {
      var e;
      return t.preventDefault(), e = $(t.currentTarget).closest(".queue-addition"), this.showSearchPanel(e);
    }, s.prototype.showSearchPanel = function(t) {
      return this.currentSearchQuery = "", this.clearPreAddScrollTop(), this.loadRecommendations(), 
      this.get(".queue-addition").removeClass("panel-active"), this.get(".queue-node-dragger").addClass("hide"), 
      this.addToQueueEl.detach().appendTo(t), _.defer(function() {
        return function() {
          return t.addClass("panel-active"), t.find("[data-queue-element=search-form] input").focus();
        };
      }());
    }, s.prototype.hideSearchPanel = function(t) {
      return null != t && t.preventDefault(), this.get(".queue-addition").removeClass("panel-active"), 
      this.get(".queue-node-dragger").removeClass("hide"), this.clearSearchInput(), this.get("[data-queue-element=search-results]").empty();
    }, s.prototype.search = function(t) {
      var e, i, s;
      if (t.preventDefault(), null != (i = this.searchInProgress) && i.abort(), (e = this.get("[data-queue-element=search-form] input").val().trim()) !== this.currentSearchQuery) return this.currentSearchQuery = e, 
      e.length ? (s = this.data.searchUrl + "?query=" + e, this.el.addClass("search-loading"), 
      this.el.removeClass("search-complete"), this.searchInProgress = $.get(s, this.searchComplete).fail(this.searchFailed)) :this.clearSearchResults();
    }, s.prototype.searchComplete = function(t) {
      return this.searchInProgress = null, this.clearElementsCache(), this.get("[data-queue-element=search-results]").html(t), 
      this.toggleLastNResults({
        show:!1
      }), this.el.removeClass("search-loading"), this.el.addClass("search-complete"), 
      Treehouse.init();
    }, s.prototype.searchFailed = function() {
      return this.searchInProgress = null;
    }, s.prototype.clearSearchResults = function() {
      return this.el.removeClass("search-complete"), this.get("[data-queue-element=search-results]").empty(), 
      this.loadRecommendations();
    }, s.prototype.clearSearchInput = function(t) {
      if (this.clearSearchResults(), this.get("[data-queue-element=search-form] input").val(""), 
      t) return this.get("[data-queue-element=search-form] input").focus();
    }, s.prototype.closeOnEscape = function(t) {
      if (t.keyCode === this.keyCodeEscape) return t.preventDefault(), this.el.removeClass("panel-active"), 
      this.clearSearchInput();
    }, s.prototype.toggleSearchResults = function(t) {
      var e;
      return t.preventDefault(), e = $(t.currentTarget), this.allResultsShown ? (this.restorePreAddScrollTop(), 
      this.toggleLastNResults({
        show:!1
      }), e.html(e.data("text")), this.allResultsShown = !1) :(this.savePreAddScrollTop(), 
      this.toggleLastNResults({
        show:!0
      }), e.html(e.data("swap")), this.allResultsShown = !0);
    }, s.prototype.showItemLoading = function(t) {
      return $(t.target).find(".queue-content-actions").addClass("loading");
    }, s.prototype.toggleLastNResults = function(t) {
      var e, i;
      return e = this.searchResultsToShowInitially + 1, i = this.get("[data-queue-element=search-results] li:nth-child(n+" + e + ")"), 
      t.show ? i.removeClass("truncated") :i.addClass("truncated");
    }, s.prototype.savePreAddScrollTop = function() {
      return this.preAddScrollTop = $(window).scrollTop();
    }, s.prototype.restorePreAddScrollTop = function() {
      return -1 !== this.preAddScrollTop && $(window).scrollTop(this.preAddScrollTop), 
      this.preAddScrollTop = -1;
    }, s.prototype.clearPreAddScrollTop = function() {
      return this.preAddScrollTop = -1;
    }, s.prototype.savePreDragScrollTop = function() {
      return this.preDragScrollTop = $(window).scrollTop();
    }, s.prototype.restorePreDragScrollTop = function() {
      if (this.preDragScrollTop) return $(window).scrollTop(this.preDragScrollTop), this.preDragScrollTop = null;
    }, s.prototype.setFirstItemCurrent = function(t) {
      return null != t && t.cssAnimate(500), _.delay(function() {
        return function() {
          return $(".queue-item").removeClass("current"), $(".queue-item").first().addClass("current");
        };
      }(), 25);
    }, s;
  }(Treehouse.View), Featurette.register("learning-queue/queue", Treehouse.LearningQueue.Queue);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.LearningQueue && (Treehouse.LearningQueue = {}), Treehouse.LearningQueue.Item = function(i) {
    function s() {
      this.success = t(this.success, this), this.error = t(this.error, this), this.loaded = t(this.loaded, this), 
      this.loading = t(this.loading, this), this.sendRequest = t(this.sendRequest, this), 
      this.cancelRemove = t(this.cancelRemove, this), this.confirmRemove = t(this.confirmRemove, this), 
      s.__super__.constructor.apply(this, arguments), this.queuedClass = Treehouse.LearningQueue.Item.QUEUED_CLASS, 
      this.loadingClass = Treehouse.LearningQueue.Item.LOADING_CLASS, this.on("click", "[data-queue-action='confirm-remove']", this.confirmRemove), 
      this.on("click", "[data-queue-action='cancel-remove']", this.cancelRemove), this.on("click", "[data-queue-action='add'], [data-queue-action='remove']", this.sendRequest);
    }
    return e(s, i), s.QUEUED_CLASS = "queued", s.LOADING_CLASS = "loading", s.QUEUEABLE_CLASS = "queueable", 
    s.prototype.confirmRemove = function(t) {
      return t.preventDefault(), t.stopPropagation(), $(t.target).closest(".queue-content-actions").click(), 
      this.get(".confirmation-container").addClass("active");
    }, s.prototype.cancelRemove = function(t) {
      return t.preventDefault(), t.stopPropagation(), this.get(".confirmation-container").removeClass("active");
    }, s.prototype.sendRequest = function(t) {
      var e, i;
      return t.preventDefault(), t.stopPropagation(), this.action = $(t.currentTarget).data("queueAction"), 
      i = $(t.currentTarget), e = {}, e.insert_after_item_id = i.closest("[data-queue-item-id]").data("queueItemId"), 
      $.ajax({
        type:i.data("method"),
        url:i.attr("href"),
        data:e,
        beforeSend:this.loading,
        complete:this.loaded,
        error:this.error,
        success:this.success
      });
    }, s.prototype.loading = function() {
      return this.el.addClass(this.loadingClass), this.el.trigger("queue:" + this.action);
    }, s.prototype.loaded = function() {
      return this.el.removeClass(this.loadingClass);
    }, s.prototype.error = function() {
      return this.el.trigger("queue:error");
    }, s.prototype.success = function(t) {
      var e, i, s, r, n;
      if (t.message) {
        for ("added" === t.message && this.el.addClass(this.queuedClass), "removed" === t.message && this.el.removeClass(this.queuedClass), 
        this.action = null, this.el.trigger("queue:changed"), s = t.resources, n = [], e = 0, 
        i = s.length; e < i; e++) r = s[e], n.push(this.el.trigger("queue:" + t.message, r));
        return n;
      }
    }, s;
  }(Treehouse.View), Featurette.register("learning-queue/item", Treehouse.LearningQueue.Item);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.LearningQueue && (Treehouse.LearningQueue = {}), Treehouse.LearningQueue.StatusPanel = function(i) {
    function s() {
      this.refreshPanel = t(this.refreshPanel, this), this.scrollToTop = t(this.scrollToTop, this), 
      this.toggleLastNResults = t(this.toggleLastNResults, this), this.togglePanelResults = t(this.togglePanelResults, this), 
      this.removeStatusBookmark = t(this.removeStatusBookmark, this), this.loadFilters = t(this.loadFilters, this), 
      this.onPjaxEnd = t(this.onPjaxEnd, this), s.__super__.constructor.apply(this, arguments), 
      _.delay(this.loadFilters, 100), this.toggleLastNResults({
        show:!1
      }), this.on("bookmark:removed", this.removeStatusBookmark), this.on("click", ".toggle-results", this.togglePanelResults), 
      this.on("pjax:end", "#student-content", this.onPjaxEnd), this.listenTo("body", "queue:changed", this.refreshPanel);
    }
    return e(s, i), s.prototype.searchResultsToShowInitially = 10, s.prototype.allResultsShown = !1, 
    s.prototype.onPjaxEnd = function() {
      return this.clearElementsCache(), this.toggleLastNResults({
        show:!1
      });
    }, s.prototype.loadFilters = function() {
      return this.filters || (this.filters = new Filters({
        basePath:"queue",
        container:"#student-content",
        binds:{
          view:Featurette.get("view")
        }
      }));
    }, s.prototype.removeStatusBookmark = function(t) {
      var e;
      if ($(t.target).closest(".student-bookmarks").length) return e = $(t.target).closest(".queue-content").parent(), 
      e.remove();
    }, s.prototype.togglePanelResults = function(t) {
      var e;
      return t.preventDefault(), e = $(t.currentTarget), this.allResultsShown ? (this.scrollToTop(), 
      this.toggleLastNResults({
        show:!1
      }), e.html(e.data("text")), this.allResultsShown = !1) :(this.toggleLastNResults({
        show:!0
      }), e.html(e.data("swap")), this.allResultsShown = !0);
    }, s.prototype.toggleLastNResults = function(t) {
      var e, i;
      return e = this.searchResultsToShowInitially + 1, i = this.get("[data-queue-element=panel-results] li:nth-child(n+" + e + ")"), 
      t.show ? i.removeClass("truncated") :i.addClass("truncated");
    }, s.prototype.scrollToTop = function() {
      return $(window).scrollTop(-100);
    }, s.prototype.refreshPanel = function() {
      return this.filters.update();
    }, s;
  }(Treehouse.View), Featurette.register("learning-queue/status-panel", Treehouse.LearningQueue.StatusPanel);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Degree && (Treehouse.Degree = {}), Treehouse.Degree.ProgressChart = function(i) {
    function s() {
      this.yAxisMax = t(this.yAxisMax, this), this.getDays = t(this.getDays, this), s.__super__.constructor.apply(this, arguments), 
      new Chartist.Line(this.el.get(0), {
        labels:this.getDays(),
        series:[ this.data.stats.map(_.property(1)) ]
      }, {
        high:this.yAxisMax(),
        fullWidth:!0,
        lineSmooth:Chartist.Interpolation.simple({
          divisor:2
        }),
        axisY:{
          onlyInteger:!0,
          labelInterpolationFnc:function(t, e) {
            return 0 === e ? "&nbsp;" :t;
          }
        },
        axisX:{
          showGrid:!1
        },
        plugins:[ Chartist.plugins.tooltip({
          tooltipFnc:function(t, e) {
            return '<div class="chartist-tooltip-box">\n  <div class="stat">\n    <span class="stat-data">' + (e || 0) + "</span>\n  </div>\n</div>";
          }
        }) ]
      });
    }
    return e(s, i), s.prototype.getDays = function() {
      var t;
      return t = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], this.data.stats.map(function(e) {
        return t[Date.parse(e[0]).getDay()];
      });
    }, s.prototype.yAxisMax = function() {
      return Math.max.apply(Math, this.data.stats.map(_.property(1)).concat(3)) + 1;
    }, s;
  }(Treehouse.View), Featurette.register("dashboard/degree/progress-chart", Treehouse.Degree.ProgressChart);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Degree && (Treehouse.Degree = {}), Treehouse.Degree.Dashboard = function(i) {
    function s() {
      this.dismissNewBadgeOnPeerReviewTabHeader = t(this.dismissNewBadgeOnPeerReviewTabHeader, this), 
      this.replayCurrentInstructionVideo = t(this.replayCurrentInstructionVideo, this), 
      this.loadInstructionControls = t(this.loadInstructionControls, this), this.resetReviewClass = t(this.resetReviewClass, this), 
      this.scheduleSession = t(this.scheduleSession, this), this.submitReviewForm = t(this.submitReviewForm, this), 
      this.enableReviewForm = t(this.enableReviewForm, this), this.switchPanel = t(this.switchPanel, this), 
      this.onPjaxEnd = t(this.onPjaxEnd, this), this.onPjaxStart = t(this.onPjaxStart, this), 
      this.loadFilters = t(this.loadFilters, this), s.__super__.constructor.apply(this, arguments), 
      this.activityContainer = this.get("[data-degree-activity-container]"), this.panelsParent = this.get("#degree-views"), 
      this.on("submit", "[data-panel='" + this.reviewPanel + "'] form", this.submitReviewForm), 
      this.on("change", "[data-panel='" + this.reviewPanel + "'] [name='" + this.ratingInput + "']", this.enableReviewForm), 
      this.on("click", "[data-action='schedule-session']", this.scheduleSession), this.on("click", ".show-instruction", this.loadInstruction), 
      this.on("click", ".hide-instruction", this.hideInstruction), this.on("click", "[data-instruction-complete]", this.completeInstruction), 
      this.on("click", ".rewatch-video", this.replayCurrentInstructionVideo), this.on("click", "[data-acknowledge-url]", this.acknowledgeCompletedProject), 
      this.on("click", "[data-degree-activity-alert-dismiss]", this.dismissActivityAlert), 
      this.on("click", ".degree-completed-activities-toggle", this.toggleCompletedList), 
      this.on("click", "a[data-filter-value=peer-reviews]", this.dismissNewBadgeOnPeerReviewTabHeader), 
      this.on("click", ".card-degree-unit-courses", this.toggleCardOpen), this.activityContainer.on("pjax:start", this.onPjaxStart), 
      this.activityContainer.on("pjax:end", this.onPjaxEnd), this.listenTo(window, "hashchange", this.switchPanel), 
      this.get(".current-activity video").size() && this.get(".current-activity video").get(0).addEventListener("ended", this.loadInstructionControls), 
      location.hash && this.switchPanel(), _.delay(this.loadFilters, 100);
    }
    return e(s, i), s.prototype.pendingReviewClass = "pending-review", s.prototype.sessionReminderClass = "session-reminder", 
    s.prototype.overviewPanel = "overview", s.prototype.mentorshipPanel = "mentorship", 
    s.prototype.reviewPanel = "review", s.prototype.ratingInput = "degree_mentorship_session_review[rating]", 
    s.prototype.reviewConfirmationPanel = "review-confirmation", s.prototype.loadFilters = function() {
      return this.filters || (this.filters = new Filters({
        basePath:"home",
        container:"[data-degree-activity-container]",
        binds:{
          view:Featurette.get("view")
        }
      }));
    }, s.prototype.onPjaxStart = function() {
      return this.activityContainer.addClass("transparent-while-loading");
    }, s.prototype.onPjaxEnd = function() {
      return this.activityContainer.removeClass("transparent-while-loading");
    }, s.prototype.switchPanel = function(t) {
      return location.hash && (t = location.hash.replace("#", "")), !!this.get("[data-panel='" + t + "']").length && (this.get("[data-panel]").hide(), 
      this.get("[data-panel='" + t + "']").show(), t !== this.overviewPanel ? this.get("[data-panel='" + this.mentorshipPanel + "']").show() :void 0);
    }, s.prototype.dismissActivityAlert = function(t) {
      return t.preventDefault(), $(t.currentTarget).parents("[data-degree-activity-container]").addClass("degree-activity-alert-dismissed"), 
      $.ajax({
        type:"DELETE",
        url:"/home/dismiss-activity-alert",
        data:{
          alert:$(t.target).data("degree-activity-alert-dismiss")
        }
      });
    }, s.prototype.enableReviewForm = function(t) {
      var e;
      return e = $(t.currentTarget), e.closest("form").find("[disabled]").removeAttr("disabled");
    }, s.prototype.submitReviewForm = function(t) {
      var e;
      return e = $(t.currentTarget), t.preventDefault(), $.ajax({
        url:e.attr("action"),
        type:e.attr("method"),
        data:e.serialize(),
        beforeSend:function(t) {
          return function() {
            return e.find(".error").hide(), t.panelsParent.addClass("loading");
          };
        }(this),
        success:function(t) {
          return function() {
            return t.panelsParent.removeClass("loading"), t.resetReviewClass(), location.hash = t.reviewConfirmationPanel;
          };
        }(this),
        error:function(t) {
          return function() {
            return e.find(".error").show(), t.panelsParent.removeClass("loading");
          };
        }(this)
      });
    }, s.prototype.scheduleSession = function() {
      return this.get('[data-panel="schedule"]').hide(), this.get('[data-panel="schedule-confirmation"]').show();
    }, s.prototype.resetReviewClass = function() {
      return this.get("." + this.pendingReviewClass).removeClass(this.pendingReviewClass);
    }, s.prototype.loadInstruction = function(t) {
      var e, i;
      return e = $(t.target).closest(".curriculum-activity").find(".instruction-video"), 
      i = $(t.target).closest(".curriculum-activity").find(".instructable"), e.addClass("active"), 
      e.find("video").trigger("play"), i.addClass("active");
    }, s.prototype.hideInstruction = function(t) {
      var e, i;
      return e = $(t.target).closest(".curriculum-activity").find(".instruction-video"), 
      i = $(t.target).closest(".curriculum-activity").find(".instructable"), e.removeClass("active"), 
      e.find("video").trigger("pause"), i.removeClass("active");
    }, s.prototype.completeInstruction = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.target), e = i.closest(".degree-activity-item"), 
      $.ajax({
        type:"PUT",
        url:i.attr("data-instruction-complete-url"),
        success:function(t) {
          return t && e.next().replaceWith(t), e.remove();
        }
      });
    }, s.prototype.loadInstructionControls = function() {
      return this.get(".completed-overlay").addClass("active");
    }, s.prototype.replayCurrentInstructionVideo = function(t) {
      return t.preventDefault(), this.get(".completed-overlay").removeClass("active"), 
      $(t.target).closest(".current-activity").find("video").trigger("play");
    }, s.prototype.acknowledgeCompletedProject = function(t) {
      var e;
      return t.preventDefault(), e = $(t.currentTarget), e.closest("[data-degree-activity-item]").addClass("degree-activity-item-dismissed"), 
      $.ajax({
        type:"PUT",
        url:e.attr("data-acknowledge-url")
      });
    }, s.prototype.toggleCompletedList = function(t) {
      return $(t.currentTarget).parent(".degree-completed-activities").toggleClass("active");
    }, s.prototype.dismissNewBadgeOnPeerReviewTabHeader = function() {
      return this.get("[data-peer-review-tab-header-new-badge]").hide();
    }, s.prototype.toggleCardOpen = function(t) {
      return $(t.target).closest(".card-box").toggleClass("card-degree-open");
    }, s;
  }(Treehouse.View), Featurette.register("dashboard/degree/home", Treehouse.Degree.Dashboard);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Degree && (Treehouse.Degree = {}), Treehouse.Degree.CodeReviewNavigation = function(i) {
    function s() {
      this.toggleLoading = t(this.toggleLoading, this), s.__super__.constructor.apply(this, arguments), 
      this.pjaxContainer = $("[data-pjax-container]"), this.pjaxContainer.on("pjax:start", this.toggleLoading), 
      this.pjaxContainer.on("pjax:end", this.toggleLoading), this.on("click", "[data-pjax-click]", this.handlePjaxNav);
    }
    return e(s, i), s.prototype.toggleLoading = function() {
      return this.get(".breadcrumb-title-icon").toggle(), this.pjaxContainer.toggleClass("transparent-while-loading");
    }, s.prototype.handlePjaxNav = function(t) {
      return $.pjax.click(t, {
        container:"[data-pjax-container]",
        fragment:"[data-pjax-container]"
      });
    }, s;
  }(Treehouse.View), Featurette.register("degree/code-review-navigation", Treehouse.Degree.CodeReviewNavigation);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Degree && (Treehouse.Degree = {}), Treehouse.Degree.CodeReviewGradeForm = function(i) {
    function s() {
      this.boilerplateComments = t(this.boilerplateComments, this), this.matchesAnyBoilerplate = t(this.matchesAnyBoilerplate, this), 
      this.loadCommentsBoilerplate = t(this.loadCommentsBoilerplate, this), this.loadOverallFeedback = t(this.loadOverallFeedback, this), 
      this.validateComments = t(this.validateComments, this), this.validateTimeSpent = t(this.validateTimeSpent, this), 
      this.validateGrade = t(this.validateGrade, this), this.isValid = t(this.isValid, this), 
      this.handleSubmit = t(this.handleSubmit, this), this.enableSubmitButton = t(this.enableSubmitButton, this), 
      this.handleReviewChanged = t(this.handleReviewChanged, this), this.handleGradeChanged = t(this.handleGradeChanged, this), 
      this.navigationAlert = t(this.navigationAlert, this), this.navigationAlertPjax = t(this.navigationAlertPjax, this), 
      s.__super__.constructor.apply(this, arguments), this.on("change", "[data-grade-radio]", this.handleGradeChanged), 
      this.on("input", "[data-billable-minutes]", this.handleReviewChanged), this.on("input", "[data-comments]", this.handleReviewChanged), 
      this.on("click", "[data-toggle-feedback]", this.togglePreviousFeedback), this.on("submit", this.handleSubmit), 
      $("[data-pjax-container]").on("pjax:beforeSend", this.navigationAlertPjax), $(window).on("beforeunload", this.navigationAlert), 
      this.handleReviewChanged(), this.loadOverallFeedback(), this.isContentChanged = !1;
    }
    return e(s, i), s.prototype.navigationAlertPjax = function(t) {
      if (this.isContentChanged) return confirm("If you leave now, you'll lose your progress!\nAre you sure you want to leave?") ? (this.isContentChanged = !1, 
      !0) :t.preventDefault();
    }, s.prototype.navigationAlert = function() {
      if (this.isContentChanged) return "If you leave now, you'll lose your progress!";
      window.onbeforeunload = null;
    }, s.prototype.handleGradeChanged = function() {
      return this.isContentChanged = !0, this.loadCommentsBoilerplate(), this.handleReviewChanged();
    }, s.prototype.handleReviewChanged = function() {
      return this.isContentChanged = !0, this.enableSubmitButton();
    }, s.prototype.enableSubmitButton = function() {
      var t;
      return t = this.get("[data-submit-button]"), t.prop("disabled", !this.isValid()), 
      t.toggleClass("disabled", !this.isValid());
    }, s.prototype.handleSubmit = function(t) {
      if (this.isContentChanged = !1, this.data.pjaxSubmit) return t.preventDefault(), 
      $.pjax.submit(t, {
        container:"[data-pjax-container]",
        fragment:"[data-pjax-container]"
      });
    }, s.prototype.togglePreviousFeedback = function(t) {
      return t.preventDefault(), $(t.currentTarget).parent().toggleClass("close");
    }, s.prototype.isValid = function() {
      return this.validateGrade() && this.validateTimeSpent() && this.validateComments();
    }, s.prototype.validateGrade = function() {
      var t;
      return t = this.get("[data-grade-radio]"), 0 === t.length || t.is(":checked");
    }, s.prototype.validateTimeSpent = function() {
      var t;
      return t = this.get("[data-billable-minutes]"), 0 === t.length || parseInt(t.val()) >= 0;
    }, s.prototype.validateComments = function() {
      var t;
      return t = this.get("[data-comments]"), 0 === t.length || t.val().trim().length > 0;
    }, s.prototype.loadOverallFeedback = function() {
      var t, e;
      if (t = this.get("[data-comments]"), e = this.get("[data-feedback-template]").text()) return t.val(e), 
      this.isContentChanged = !0, this.enableSubmitButton();
    }, s.prototype.loadCommentsBoilerplate = function() {
      var t, e, i, s;
      if (s = $("[data-grade-radio]:checked").val().replace("_", "-"), e = this.get("[data-comments]"), 
      i = e.val(), !i.trim().length || this.matchesAnyBoilerplate(i)) return t = this.get("[data-boilerplate-" + s + "]").text(), 
      e.val(t);
    }, s.prototype.matchesAnyBoilerplate = function(t) {
      return $.inArray(t, this.boilerplateComments()) > -1;
    }, s.prototype.boilerplateComments = function() {
      return [ this.get("[data-boilerplate-needs-work]").text(), this.get("[data-boilerplate-meets-expectations]").text(), this.get("[data-boilerplate-exceeds-expectations]").text() ];
    }, s;
  }(Treehouse.View), Featurette.register("degree/code-review-grade-form", Treehouse.Degree.CodeReviewGradeForm);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Degree && (Treehouse.Degree = {}), Treehouse.Degree.CodeReviewRating = function(i) {
    function s() {
      this.submitRatingForm = t(this.submitRatingForm, this), this.handleRatingChanged = t(this.handleRatingChanged, this), 
      s.__super__.constructor.apply(this, arguments), this.on("submit", "form", this.submitRatingForm), 
      this.on("change", "input:radio", this.handleRatingChanged);
    }
    return e(s, i), s.prototype.handleRatingChanged = function() {
      return this.get("[data-comment-panel]").show();
    }, s.prototype.submitRatingForm = function(t) {
      var e;
      return e = $(t.currentTarget), t.preventDefault(), $.ajax({
        url:e.attr("action"),
        type:e.attr("method"),
        data:e.serialize(),
        beforeSend:function(t) {
          return function() {
            return e.find(".error").hide(), t.get("input[type=submit]").attr("value", "Loading...").addClass("disabled");
          };
        }(this),
        success:function(t) {
          return function() {
            return t.el.addClass("submitted"), t.get("[data-thank-you-panel]").show(), t.get("[data-low-rating-panel]").toggle(t.isOneStarRating()), 
            t.get("[data-comment-panel]").hide(), t.get("input[type=submit]").attr("value", "Submit").removeClass("disabled");
          };
        }(this),
        error:function(t) {
          return function() {
            return e.find(".error").show(), t.get("input[type=submit]").attr("value", "Submit").removeClass("disabled");
          };
        }(this)
      });
    }, s.prototype.isOneStarRating = function() {
      return $("input#star-rating-1:checked").length > 0;
    }, s;
  }(Treehouse.View), Featurette.register("degree/code-review-rating", Treehouse.Degree.CodeReviewRating);
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Treehouse.Degree.ProjectSubmissionForm = function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.on("submit", "form", this.submit), 
      this.on("pjax:error", this.error);
    }
    return t(i, e), i.prototype.submit = function(t) {
      return t.preventDefault(), $.pjax.submit(t, "#project-submission-content", {
        fragment:"#project-submission-content",
        push:!1,
        scrollTo:!1
      });
    }, i.prototype.error = function() {
      return window.location.pathname = "/500";
    }, i;
  }(Treehouse.View), Featurette.register("degree/project-submission-form", Treehouse.Degree.ProjectSubmissionForm);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Degree && (Treehouse.Degree = {}), Treehouse.Degree.TestResultsDispute = function(i) {
    function s() {
      this.submitDisputeForm = t(this.submitDisputeForm, this), this.updateSubmitButton = t(this.updateSubmitButton, this), 
      this.showDisputeForm = t(this.showDisputeForm, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", ".pt-dispute-button", this.showDisputeForm), this.on("change", "textarea", _.throttle(this.updateSubmitButton, 100)), 
      this.on("keyup", "textarea", _.throttle(this.updateSubmitButton, 100)), this.updateSubmitButton();
    }
    return e(s, i), s.prototype.showDisputeForm = function(t) {
      return t.preventDefault(), this.get("[data-comment-panel]").show();
    }, s.prototype.updateSubmitButton = function() {
      var t;
      return t = "" === this.get("textarea").val().trim(), this.get("input[type=submit]").prop("disabled", t).toggleClass("disabled", t);
    }, s.prototype.submitDisputeForm = function(t) {
      return t.preventDefault(), $(t.currentTarget);
    }, s;
  }(Treehouse.View), Featurette.register("degree/test-results-dispute", Treehouse.Degree.TestResultsDispute);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.Account && (Treehouse.Account = {}), Treehouse.Account.Enrollment = function(i) {
    function s() {
      this.degreeTotalPriceElement = t(this.degreeTotalPriceElement, this), this.setCurrentDegreeDetails = t(this.setCurrentDegreeDetails, this), 
      this.getCurrentDegreeDetails = t(this.getCurrentDegreeDetails, this), this.restoreDegreeDetails = t(this.restoreDegreeDetails, this), 
      this.saveDegreeDetails = t(this.saveDegreeDetails, this), this.selectCurrentDegree = t(this.selectCurrentDegree, this), 
      this.setActionButtonDefaultState = t(this.setActionButtonDefaultState, this), this.setActionButtonEnablement = t(this.setActionButtonEnablement, this), 
      this.handleDegreeSelection = t(this.handleDegreeSelection, this), this.togglePlanPanel = t(this.togglePlanPanel, this), 
      this.showTechdegreePanel = t(this.showTechdegreePanel, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", "a[data-select-techdegree]", this.togglePlanPanel), this.on("click", "button[data-cancel-techdegree-selection]", this.togglePlanPanel), 
      this.on("change", ".plan-techdegree-selection-list input", this.handleDegreeSelection), 
      this.on("change", ".techdegree-price-selection-item input", this.showTechdegreePanel);
    }
    return e(s, i), s.prototype.showTechdegreePanel = function() {
      var t;
      return t = this.selectedPriceTierElement().data("priceTier") || "plan_addons_tier_199", 
      this.get(".techdegree-topic-selection").removeClass("hidden"), this.get("[data-degree-price-tier]").hide(), 
      this.get("[data-degree-price-tier=" + t + "]").show();
    }, s.prototype.togglePlanPanel = function(t) {
      var e;
      return t.preventDefault(), e = this.get(".plan-techdegree-selection"), e.is(":visible") ? (this.restoreDegreeDetails(), 
      this.get("a[data-select-techdegree]").removeClass("disabled"), this.get("input[name=techdegree-selection]").prop("checked", !1), 
      this.get("a[data-enroll-techdegree]").addClass("disabled"), $("html, body").animate({
        scrollTop:0
      }, "slow")) :(this.get("[data-degree-referral-info]").hide(), this.saveDegreeDetails(), 
      this.get("a[data-select-techdegree]").addClass("disabled"), this.selectCurrentDegree(), 
      this.setActionButtonDefaultState(), this.showTechdegreePanel()), e.toggle();
    }, s.prototype.handleDegreeSelection = function() {
      var t;
      return t = this.selectedTechdegreeElement(), this.setCurrentDegreeDetails({
        title:t.data("degreeTitle"),
        totalPrice:t.data("degreeTotalPrice"),
        alternatePrice:t.data("degreeAlternatePrice"),
        price:t.data("degreePrice")
      }), this.setActionButtonEnablement(t);
    }, s.prototype.setActionButtonEnablement = function(t) {
      var e;
      return t.data("degreeId"), e = t.data("planAddonId"), this.data.currentPlanAddonId === e ? (this.setActionButtonDefaultState(), 
      this.get("[data-degree-referral-info]").hide()) :(this.get("[data-enroll-techdegree]").hide(), 
      this.get("[data-enroll-techdegree=" + e + "]").show().removeClass("disabled"), this.get("[data-degree-referral-info]").show());
    }, s.prototype.setActionButtonDefaultState = function() {
      return this.get("[data-enroll-techdegree]").hide().addClass("disabled"), this.get("[data-enroll-techdegree]").first().show();
    }, s.prototype.selectCurrentDegree = function() {
      if (this.data.currentPriceTier && this.data.currentPlanAddonId) return this.get("li[data-price-tier='" + this.data.currentPriceTier + "'] input").prop("checked", !0), 
      this.get("li[data-plan-addon-id='" + this.data.currentPlanAddonId + "'] input").prop("checked", !0), 
      this.showTechdegreePanel();
    }, s.prototype.selectedPriceTierElement = function() {
      return $("input[name=techdegree-price-selection]:checked").closest("li");
    }, s.prototype.selectedTechdegreeElement = function() {
      return $("input[name=techdegree-selection]:checked").closest("li");
    }, s.prototype.saveDegreeDetails = function() {
      return this.savedDegreeDetails = this.getCurrentDegreeDetails();
    }, s.prototype.restoreDegreeDetails = function() {
      return this.savedDegreeDetails && this.setCurrentDegreeDetails(this.savedDegreeDetails), 
      this.savedDegreeDetails = null;
    }, s.prototype.getCurrentDegreeDetails = function() {
      var t;
      return t = this.get(".plan-techdegree"), {
        title:t.find("[data-selected-degree-title]").text(),
        totalPrice:this.degreeTotalPriceElement().text(),
        alternatePrice:t.find("[data-selected-degree-alternate-price]").text(),
        price:t.find("[data-selected-degree-price]").text()
      };
    }, s.prototype.setCurrentDegreeDetails = function(t) {
      return this.get(".plan-selected-degree").text(t.title), this.degreeTotalPriceElement().text(t.totalPrice), 
      this.get(".plan-techdegree").find("[data-selected-degree-price]").text(t.price), 
      this.get(".plan-techdegree").find("[data-selected-degree-alternate-price]").text(t.alternatePrice);
    }, s.prototype.degreeTotalPriceElement = function() {
      return this.data.onTechdegree ? this.get(".plan-techdegree").find("[data-plan-total-price]") :this.get(".plan-techdegree").find("[data-selected-degree-total-price]");
    }, s;
  }(Treehouse.View), Featurette.register("account/enrollment", Treehouse.Account.Enrollment);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty, s = [].indexOf || function(t) {
    for (var e = 0, i = this.length; e < i; e++) if (e in this && this[e] === t) return e;
    return -1;
  };
  Treehouse.States = function(t) {
    var e;
    return (e = Treehouse.States.instances)[t] || (e[t] = new Treehouse.StateMachine(document, t));
  }, Treehouse.States.instances = {}, Treehouse.onInit(function() {
    var t;
    return t = $("[data-state-group]").map(function(t, e) {
      return $(e).attr("data-state-group");
    }), _.chain(t).uniq().each(function(t) {
      return Treehouse.States(t);
    });
  }), Treehouse.StateMachine = function(i) {
    function r(e, i) {
      if (this.group = i, this.init = t(this.init, this), null == e) throw "Undefined state group `" + this.group + "`";
      r.__super__.constructor.apply(this, arguments), this.functions = {}, this.init(), 
      Treehouse.onInit(this.init);
    }
    return e(r, i), r.prototype.init = function() {
      if (this.states = this.get("[data-state-group='" + this.group + "'][data-state]").map(function(t, e) {
        return $(e).attr("data-state");
      }), this.stopListening(), this.listeners(), this.transitionIn = function(t) {
        return t.show(), t.addClass("active");
      }, this.transitionOut = function(t) {
        return t.hide(), t.removeClass("active");
      }, this.states[0] && !this.currentState) return this.transition(this.states[0]);
    }, r.prototype.listeners = function() {
      return this.listenTo("[data-state-transition-next='" + this.group + "']", "click", function(t) {
        return function(e) {
          var i;
          return e.preventDefault(), i = _.indexOf(t.states, t.currentState), i !== t.states.length - 1 ? t.transition(t.states[i + 1]) :t.transition(t.states[0]);
        };
      }(this)), this.listenTo("[data-state-transition-previous='" + this.group + "']", "click", function(t) {
        return function(e) {
          var i;
          return e.preventDefault(), i = _.indexOf(t.states, t.currentState), 0 !== i ? t.transition(t.states[i - 1]) :t.transition(t.states[t.states.length - 1]);
        };
      }(this)), this.listenTo("[data-state-group='" + this.group + "'][data-state-transition]", "click", function(t) {
        return function(e) {
          return e.preventDefault(), t.transition($(e.currentTarget).attr("data-state-transition"));
        };
      }(this));
    }, r.prototype.transition = function(t) {
      var e;
      if (s.call(this.states, t) < 0) throw "Undefined state `" + t + "`";
      if (t !== this.currentState) return this.transitionOut(this.get("[data-state-group='" + this.group + "'][data-state][data-state!='" + t + "']")), 
      this.transitionIn(this.get("[data-state-group='" + this.group + "'][data-state='" + t + "']")), 
      "function" == typeof (e = this.functions)[t] && e[t](), _.each(this.states, function(e) {
        return function(i) {
          return $("[data-state-group='" + e.group + "'][data-state-transition='" + i + "']").toggleClass("active", i === t);
        };
      }(this)), this.currentState = t, $(document).trigger("transition:" + this.group + ":" + t);
    }, r.prototype.on = function(t, e) {
      return this.functions[t] = e;
    }, r.prototype.off = function(t) {
      return this.functions[t] = null;
    }, r;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("welcome-panel", Treehouse.WelcomePanel = function(i) {
    function s() {
      this.closePanel = t(this.closePanel, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", "[data-close-panel]", this.closePanel);
    }
    return e(s, i), s.prototype.closePanel = function(t) {
      return t.preventDefault(), this.el.cssAnimate(290).addClass("closed"), $.post(this.data.url, {
        key:this.data.key
      });
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("filter-select", function(i) {
    function s() {
      this.refresh = t(this.refresh, this), this.updateSelectValue = t(this.updateSelectValue, this), 
      s.__super__.constructor.apply(this, arguments), this.on("change", this.refresh), 
      this.path = window.location.pathname, this.updateSelectValue();
    }
    return e(s, i), s.prototype.updateSelectValue = function() {
      var t, e;
      if ((e = this.path.indexOf(this.data.filter + ":")) > 1) return t = this.path.substr(e + this.data.filter.length + 1), 
      this.el.val(t);
    }, s.prototype.refresh = function() {
      return window.location = "/" + this.data.path + "/" + this.data.filter + ":" + this.el.val();
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("control-bar", Treehouse.ControlBar = function(i) {
    function s() {
      this.updateFilterLabel = t(this.updateFilterLabel, this), this.updateFilterLabels = t(this.updateFilterLabels, this), 
      this.findDropdownMenu = t(this.findDropdownMenu, this), this.hideAllDropdowns = t(this.hideAllDropdowns, this), 
      this.hideAllDropdownsUnlessFilterForm = t(this.hideAllDropdownsUnlessFilterForm, this), 
      this.toggleDropdown = t(this.toggleDropdown, this), s.__super__.constructor.apply(this, arguments), 
      this.container = this.get(".search-container"), this.on("click", ".dropdown-parent-label", this.toggleDropdown), 
      this.listenTo(document, "click", this.hideAllDropdownsUnlessFilterForm), this.listenTo(document, "filters:serialized", this.updateFilterLabels);
    }
    return e(s, i), s.prototype.toggleDropdown = function(t) {
      var e;
      return e = this.findDropdownMenu($(t.target)), e.is(":visible") ? e.hide() :(this.hideAllDropdowns(), 
      e.show()), !1;
    }, s.prototype.hideAllDropdownsUnlessFilterForm = function(t) {
      var e;
      if (e = this.get(".filter-form"), !e.is(t.target) && 0 === e.has(t.target).length) return this.hideAllDropdowns();
    }, s.prototype.hideAllDropdowns = function() {
      return this.get(".filter-dropdown").hide();
    }, s.prototype.findDropdownMenu = function(t) {
      return t.is("a") ? t.siblings(".filter-dropdown") :t.parent().siblings(".filter-dropdown");
    }, s.prototype.updateFilterLabels = function() {
      return _.each($(".dropdown-parent-label"), this.updateFilterLabel);
    }, s.prototype.updateFilterLabel = function(t) {
      var e, i;
      return e = $(t), i = e.siblings("ul").find("li a.selected").text(), e.find(".currently-selected").text("" + i);
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("form-select", Treehouse.FormSelect = function(i) {
    function s() {
      this.toggleEmptyState = t(this.toggleEmptyState, this), s.__super__.constructor.apply(this, arguments), 
      this.options = this.el.children(), this.on("change", this.toggleEmptyState), this.el.chosen({
        allow_single_deselect:!0,
        display_selected_options:!1,
        single_backstroke_delete:!1,
        disable_search:this.el.is('[data-search="disabled"]'),
        width:"100%"
      });
    }
    return e(s, i), s.prototype.toggleEmptyState = function() {
      var t;
      return t = this.el.val(), this.el.next().toggleClass("chosen-drop-empty", null !== t && t.length === this.options.length);
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t, e;
  e = function(t, e) {
    var i;
    return null == e && (e = {}), i = {}, $.each(t.data(), function(t, e) {
      var s;
      if (null !== (s = t.match(/analytics([^Event][A-Za-z].*)/))) return i[s[1].toLowerCase()] = e;
    }), delete i.initialized, _.extend(i, e);
  }, t = function() {
    return $("[data-analytics-event]").each(function() {
      var t, i, s;
      if (i = $(this), !0 !== i.data("analyticsInitialized")) return s = i.data("analyticsEvent"), 
      t = i.data("analyticsAction"), "clicked" === t ? analytics.trackLink(i, s, function() {
        return e(i);
      }) :"clicked:internal" === t ? i.on("click", function() {
        return analytics.track(s, e(i, {
          action:"clicked"
        }));
      }) :"viewed" === t ? analytics.track(s, e(i)) :"closed" === t && i.is("a") ? analytics.trackLink(i, s, function() {
        return e(i);
      }) :console.warn("Could not initialize analytics, please provide a recognized data-analytics-action. Provided: " + t + " Element: ", i), 
      i.data("analyticsInitialized", !0);
    });
  }, $(document).ready(t), $(document).on("pjax:success", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Layout = function(i) {
    function s() {
      this.moveMarkupToTarget = t(this.moveMarkupToTarget, this), this.moveMarkupOnTabletBreakpoint = t(this.moveMarkupOnTabletBreakpoint, this), 
      this.isMobile = t(this.isMobile, this), this.isTablet = t(this.isTablet, this), 
      this.toggleScrollingStates = t(this.toggleScrollingStates, this), this.scrollTo = t(this.scrollTo, this), 
      this.getScrollTop = t(this.getScrollTop, this), this.setScrollTop = t(this.setScrollTop, this), 
      this.hamburgerButtonBlur = t(this.hamburgerButtonBlur, this), this.hamburgerButtonClicked = t(this.hamburgerButtonClicked, this), 
      this.loaded = t(this.loaded, this), this.loading = t(this.loading, this), this.setVariables = t(this.setVariables, this), 
      s.__super__.constructor.apply(this, arguments), this.html = $("html"), this.window = $(window), 
      this.document = $(document), this.elements = {}, this.elements.hero = new Treehouse.Layout.Hero(this.el.find("[data-layout-element=hero]"), this), 
      this.on("click", "[data-hamburger-button]", this.hamburgerButtonClicked), this.listenTo(document, "click", this.hamburgerButtonBlur), 
      this.listenTo(document, "scroll", this.toggleScrollingStates, {
        triggerImmediately:!0
      }), this.listenTo(window, "resize", _.throttle(this.setVariables, 750), {
        triggerImmediately:!0
      }), this.listenTo(window, "resize", _.throttle(this.moveMarkupOnTabletBreakpoint, 750), {
        triggerImmediately:!0
      }), this.listenTo(window, "load", this.loaded);
    }
    return e(s, i), s.prototype.setVariables = function() {
      return this.windowWidth = this.window.width(), this.windowHeight = this.window.height(), 
      this.documentHeight = this.document.height();
    }, s.prototype.loading = function() {
      return this.el.addClass("loading").removeClass("loaded");
    }, s.prototype.loaded = function() {
      return this.el.addClass("loaded").removeClass("loading");
    }, s.prototype.hamburgerButtonClicked = function(t) {
      return t.preventDefault(), t.stopPropagation(), this.el.toggleClass("hamburger-button-clicked");
    }, s.prototype.hamburgerButtonBlur = function() {
      return this.el.removeClass("hamburger-button-clicked"), this.get("[data-header]").scrollTop(0);
    }, s.prototype.setScrollTop = function() {
      return this.scrollTop = this.document.scrollTop();
    }, s.prototype.getScrollTop = function() {
      return this.scrollTop;
    }, s.prototype.scrollTo = function(t) {
      return $("html, body").animate({
        scrollTop:t - 70,
        600:600
      });
    }, s.prototype.toggleScrollingStates = function() {
      return this.setScrollTop(), this.el.toggleClass("scrolling", this.getScrollTop() > 0), 
      this.el.toggleClass("scrolling-down", (this.getScrollTop() > this.lastScrollPosition || this.getScrollTop() + this.windowHeight >= this.documentHeight) && this.getScrollTop() > 0), 
      this.el.toggleClass("scrolling-up", this.getScrollTop() < this.lastScrollPosition && this.getScrollTop() > 0 && this.getScrollTop() + this.windowHeight < this.documentHeight), 
      this.lastScrollPosition = this.getScrollTop();
    }, s.prototype.isTablet = function() {
      return this.windowWidth < 959;
    }, s.prototype.isMobile = function() {
      return this.windowWidth < 679;
    }, s.prototype.moveMarkupOnTabletBreakpoint = function() {
      return !this.movedToTarget && this.isTablet() ? (this.moveMarkupToTarget(this.get("[data-markup-move]"), this.get("[data-markup-move-target]")), 
      this.movedToTarget = !0, this.movedToOrigin = !1, this.window.trigger("resize")) :this.movedToOrigin || !this.movedToTarget || this.isTablet() ? void 0 :(this.moveMarkupToTarget(this.get("[data-markup-move-target]"), this.get("[data-markup-move]")), 
      this.movedToTarget = !1, this.movedToOrigin = !0, this.window.trigger("resize"));
    }, s.prototype.moveMarkupToTarget = function(t, e) {
      return e.html(t.contents().clone(!0)), t.html("");
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Layout.Hero = function(i) {
    function s(e, i) {
      this.layout = i, this.removeClass = t(this.removeClass, this), this.addClass = t(this.addClass, this), 
      this.onVideoEnd = t(this.onVideoEnd, this), this.onVideoPause = t(this.onVideoPause, this), 
      this.onVideoPlay = t(this.onVideoPlay, this), this.stopVideo = t(this.stopVideo, this), 
      this.stopVideoOnEsc = t(this.stopVideoOnEsc, this), this.playVideo = t(this.playVideo, this), 
      this.scrolling = t(this.scrolling, this), this.addBackground = t(this.addBackground, this), 
      this.addVideoEvents = t(this.addVideoEvents, this), s.__super__.constructor.apply(this, arguments), 
      this.el.length > 0 && (this.on("click", "[data-hero-video-play]", this.playVideo), 
      this.on("click", "[data-hero-video-stop]", this.stopVideo), this.listenTo(document, "scroll", _.throttle(this.scrolling, 150), {
        triggerImmediately:!0
      }), this.listenTo(document, "keyup", this.stopVideoOnEsc), this.addBackground(), 
      this.addVideoEvents());
    }
    return e(s, i), s.prototype.addVideoEvents = function() {
      var t;
      if (t = this.get("video"), t.length > 0) return this.video = t.get(0), this.video.addEventListener("play", this.onVideoPlay), 
      this.video.addEventListener("ended", this.onVideoEnd), this.video.addEventListener("pause", this.onVideoPause), 
      this.listenTo(document, "video-playing", this.onVideoPlay), this.listenTo(document, "video-paused", this.onVideoPause), 
      this.listenTo(document, "video-ended", this.onVideoEnd);
    }, s.prototype.addBackground = function() {
      var t;
      return t = this.get("[data-hero-background]"), t.length > 0 && this.el.css("background-image", "url(" + t.attr("src") + ")"), 
      this.addClass("hero-loaded");
    }, s.prototype.scrolling = function() {
      return this.layout.el.toggleClass("scrolled-past-hero", this.layout.document.scrollTop() > this.el.outerHeight());
    }, s.prototype.playVideo = function() {
      return this.layout.el.hasClass("ipad") ? (this.el.find(".mejs-overlay-play").click(), 
      this.onVideoPlay()) :this.get("video").trigger("play");
    }, s.prototype.stopVideoOnEsc = function(t) {
      if (27 === t.which) return this.stopVideo();
    }, s.prototype.stopVideo = function() {
      return this.get("video").trigger("stop"), this.addClass("hero-video-stopped");
    }, s.prototype.onVideoPlay = function() {
      return this.addClass("hero-video-playing hero-video-in-progress"), this.removeClass("hero-video-played hero-video-paused hero-video-stopped");
    }, s.prototype.onVideoPause = function() {
      return this.addClass("hero-video-paused"), this.removeClass("hero-video-playing");
    }, s.prototype.onVideoEnd = function() {
      if (this.addClass("hero-video-played"), this.removeClass("hero-video-playing hero-video-paused hero-video-in-progress"), 
      this.layout.el.hasClass("ios")) return this.video.webkitExitFullScreen();
    }, s.prototype.addClass = function(t) {
      return this.el.addClass(t), this.layout.el.addClass(t);
    }, s.prototype.removeClass = function(t) {
      return this.el.removeClass(t), this.layout.el.removeClass(t);
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Layout.Application = function(i) {
    function s() {
      this.sendAnalyticsEvent = t(this.sendAnalyticsEvent, this), this.showAccountDropdown = t(this.showAccountDropdown, this), 
      this.hideDropdowns = t(this.hideDropdowns, this), this.showDropdown = t(this.showDropdown, this), 
      this.toggleMobileNav = t(this.toggleMobileNav, this), this.scrollToTop = t(this.scrollToTop, this), 
      this.updateHeaderCtaText = t(this.updateHeaderCtaText, this), this.cloneHeaderCta = t(this.cloneHeaderCta, this), 
      s.__super__.constructor.apply(this, arguments), this.header = this.get("[data-header]"), 
      this.headerCta = this.get("[data-header-cta]"), this.on("click", "[data-breadcrumb-link]", this.scrollToTop), 
      this.on("click", "[data-hamburger-button]", this.toggleMobileNav), this.on("click", "[data-dropdown-toggle='profile']", this.showAccountDropdown), 
      this.on("click", "[data-track-analytics]", this.sendAnalyticsEvent), this.listenTo("[data-nav-item]", "dropdown:show", this.showDropdown), 
      this.listenTo(document, "click", this.hideDropdowns), this.listenTo(document, "ready", this.cloneHeaderCta), 
      this.listenTo(window, "resize", _.throttle(this.updateHeaderCtaText, 800), {
        triggerImmediately:!0
      }), this.elements.learningFlowStep = new Treehouse.Layout.Application.LearningFlowStep(this.el.find("[data-layout-element=learning-flow-step]"), this), 
      this.elements.stageProgress = new Treehouse.Layout.Application.StageProgress(this.el.find("[data-layout-element=stage-progress]"), this), 
      this.listenTo(document, "pjax:start", function() {
        return NProgress.start();
      }), this.listenTo(document, "pjax:end", function() {
        return NProgress.done();
      }), NProgress.configure({
        parent:"[data-header]",
        template:'<div class="header-loading-bar" role="bar"></div>',
        trickleRate:.05,
        trickleSpeed:300
      });
    }
    return e(s, i), s.prototype.cloneHeaderCta = function() {
      if (this.headerCta.length > 0) return this.el.addClass("header-has-button"), this.headerCta = this.headerCta.clone(!0), 
      this.headerCta.data("tablet-text", this.headerCta.html()), this.get("[data-nav]").append(this.headerCta.attr({
        "class":"button button-primary header-button"
      }));
    }, s.prototype.updateHeaderCtaText = function() {
      var t;
      return this.headerCta && (t = this.headerCta.data("header-cta-mobile-text")), this.isMobile() && t ? this.headerCta.html(t) :this.headerCta.html(this.headerCta.data("tablet-text"));
    }, s.prototype.scrollToTop = function(t) {
      return t.preventDefault(), this.scrollTo(0);
    }, s.prototype.toggleMobileNav = function() {
      return this.hideDropdowns();
    }, s.prototype.showDropdown = function(t, e) {
      if (e = $(e), !e.hasClass("dropdown-show")) return t.stopPropagation(), e.addClass("dropdown-show").siblings().removeClass("dropdown-show"), 
      this.el.removeClass("hamburger-button-clicked");
    }, s.prototype.hideDropdowns = function() {
      return this.header.find("[data-nav-item]").removeClass("dropdown-show");
    }, s.prototype.showAccountDropdown = function(t) {
      if (!this.isMobile()) return t.preventDefault(), this.showDropdown(t, "[data-nav-item='profile']");
    }, s.prototype.sendAnalyticsEvent = function() {
      var t;
      if (t = [ "eventCategory", "eventAction", "eventLabel", "eventValue" ], this.eventAttrs = _.pick(this.data, t), 
      "undefined" != typeof ga && null !== ga) return ga("send", "event", this.eventAttrs);
    }, s;
  }(Treehouse.Layout), Featurette.register("application-layout", Treehouse.Layout.Application);
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("nav-list-mobile-select", function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.on("change", this.updateWindowLocation);
    }
    return t(i, e), i.prototype.updateWindowLocation = function(t) {
      return window.location = $(t.currentTarget).val();
    }, i;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Layout.Application.LearningFlowStep = function(i) {
    function s(e, i) {
      this.layout = i, this.addPagination = t(this.addPagination, this), this.bindFeedbackFeaturette = t(this.bindFeedbackFeaturette, this), 
      this.onPjaxLoaded = t(this.onPjaxLoaded, this), this.onPjaxLoading = t(this.onPjaxLoading, this), 
      this.setHeight = t(this.setHeight, this), this.onStepCompleted = t(this.onStepCompleted, this), 
      this.onStepFailed = t(this.onStepFailed, this), this.replayVideo = t(this.replayVideo, this), 
      this.showStepRatingForm = t(this.showStepRatingForm, this), s.__super__.constructor.apply(this, arguments), 
      this.el.length > 0 && (this.video = this.el.find("[data-step-video]").get(0), this.on("click", "[data-rate-step]", this.showStepRatingForm), 
      this.on("click", "[data-replay-video]", this.replayVideo), this.on("click", "[data-new-goal]", this.createNewContentSuggestion), 
      this.on("pjax:start", "[data-step-overlay]", this.onPjaxLoading), this.on("pjax:success", "[data-step-overlay]", this.onPjaxLoaded), 
      this.listenTo(window, "resize", _.throttle(this.setHeight, 750)), "Video" === this.data.stepType && this.listenTo(document, "video-ended", this.onStepCompleted), 
      this.listenTo(document, "step-passed", this.onStepCompleted), this.listenTo(document, "step-failed", this.onStepFailed), 
      this.listenTo(document, "transition:learning-flow-overlay:progress-report", this.renderChart));
    }
    return e(s, i), s.prototype.renderChart = function() {
      return Featurette.get("learning-flow-chart").createChart();
    }, s.prototype.showStepRatingForm = function() {
      return this.layout.el.addClass("rate-step"), this.layout.document.trigger("show-step-feedback");
    }, s.prototype.replayVideo = function() {
      return this.layout.el.removeClass("step-completed"), this.video.play();
    }, s.prototype.createNewContentSuggestion = function() {
      return $.ajax({
        type:"PUT",
        url:"/content_suggestion"
      });
    }, s.prototype.onStepFailed = function() {
      return $.pjax({
        push:!1,
        url:this.data.learningFlowStepFailedUrl,
        container:"[data-step-overlay]",
        timeout:0
      }), this.layout.el.addClass("step-failed");
    }, s.prototype.onStepCompleted = function() {
      return $("[data-report-question-link]").hide(), $("[data-leave-assessment-button]").hide(), 
      $.pjax({
        push:!1,
        url:this.data.learningFlowStepCompletedUrl,
        container:"[data-step-overlay]",
        timeout:0
      });
    }, s.prototype.setHeight = function() {
      var t, e;
      if (this.pjaxLoaded) return t = [], this.get(".step-overlay-container").each(function(e, i) {
        return t.push($(i).outerHeight());
      }), e = _.max(t), this.get("[data-step-overlay]").css("height", e + 75);
    }, s.prototype.onPjaxLoading = function() {
      return this.layout.el.addClass("step-overlay-loading");
    }, s.prototype.onPjaxLoaded = function() {
      return this.layout.el.addClass("step-completed").removeClass("step-overlay-loading"), 
      this.layout.document.trigger("step-completed"), this.addPagination(), this.bindFeedbackFeaturette(), 
      this.pjaxLoaded = !0, this.setHeight();
    }, s.prototype.bindFeedbackFeaturette = function() {
      return new Treehouse.Layout.Application.LearningFlowStep.Feedback(this.get("[data-step-message=feedback]"), this.layout, this);
    }, s.prototype.addPagination = function() {
      return _.each(this.get(".step-overlay-container"), function() {
        return function(t, e) {
          return $(e).attr("data-state");
        };
      }());
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Layout.Application.LearningFlowStep.Feedback = function(i) {
    function s(e, i, r) {
      this.layout = i, this.container = r, this.onCancel = t(this.onCancel, this), this.onDone = t(this.onDone, this), 
      this.toggleLoadingState = t(this.toggleLoadingState, this), this.onError = t(this.onError, this), 
      this.onSuccess = t(this.onSuccess, this), this.onSubmit = t(this.onSubmit, this), 
      this.onRatingChosen = t(this.onRatingChosen, this), this.initLabel = t(this.initLabel, this), 
      s.__super__.constructor.apply(this, arguments), this.trigger = this.container.el.find("[data-rate-step]"), 
      this.initLabel(), this.on("change", ":radio", this.onRatingChosen), this.on("submit", this.onSubmit), 
      this.on("click", "[data-cancel]", this.onCancel), this.on("click", "[data-done]", this.onDone);
    }
    return e(s, i), s.prototype.initLabel = function() {
      return this.label = this.get("[data-step-feedback-label]"), this.label.data("default", this.label.text());
    }, s.prototype.onRatingChosen = function() {
      var t;
      return this.rating = parseInt(this.el.find("input:checked").val()), this.el.addClass("step-rating-chosen"), 
      this.get("[data-submit]").removeAttr("disabled").removeClass("disabled"), t = function() {
        switch (this.rating) {
         case 1:
          return this.label.data("when-rating-chosen").replace(/\{@rating\} stars/, this.rating + " star");

         case 2:
         case 3:
          return this.label.data("when-rating-chosen").replace(/\{@rating\}/, this.rating);

         default:
          return this.label.data("when-rating-chosen").replace(/only \{@rating\}/, this.rating);
        }
      }.call(this), this.label.html(t);
    }, s.prototype.onSubmit = function(t) {
      return t.preventDefault(), $.ajax({
        type:"post",
        url:this.el.attr("action"),
        data:this.el.serialize(),
        success:this.onSuccess,
        error:this.onError,
        beforeSend:this.toggleLoadingState,
        complete:this.toggleLoadingState
      });
    }, s.prototype.onSuccess = function() {
      return this.rating = parseInt(this.el.find("input:checked").val()), this.el.addClass("success"), 
      this.label.html(this.label.data("success")), this.trigger.addClass("step-rated").find("svg").each(function(t) {
        return function(e, i) {
          var s, r;
          return i = $(i), r = i.attr("class"), s = e < t.rating ? r + " has-topic-fill add-" + t.data.topicSlug + "-fill has-topic-stroke add-" + t.data.topicSlug + "-stroke" :r.replace(/has-topic-(.*)|add-(.*)-(.*)/, ""), 
          i.attr("class", s);
        };
      }(this));
    }, s.prototype.onError = function() {
      return this.el.addClass("error"), this.label.html(this.label.data("error"));
    }, s.prototype.toggleLoadingState = function() {
      return this.el.toggleClass("loading");
    }, s.prototype.onDone = function(t) {
      return t.preventDefault(), this.layout.el.removeClass("rate-step"), this.container.el.removeClass("rate-step"), 
      setTimeout(function(t) {
        return function() {
          return t.el.removeClass("success"), t.label.html(t.label.data("default"));
        };
      }(this), 500);
    }, s.prototype.onCancel = function(t) {
      return t.preventDefault(), this.container.el.removeClass("rate-step");
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("notifications", Treehouse.Layout.Notifications = function(i) {
    function s() {
      this.markNotificationsRead = t(this.markNotificationsRead, this), this.sendDesktopNotification = t(this.sendDesktopNotification, this), 
      this.addNewNotification = t(this.addNewNotification, this), this.showNotificationsDropdown = t(this.showNotificationsDropdown, this), 
      s.__super__.constructor.apply(this, arguments), this.dropdown = this.get("[data-notification-dropdown]"), 
      this.ul = this.dropdown.find("> ul"), this.on("click", "[data-dropdown-toggle='notifications']", this.showNotificationsDropdown), 
      this.listenTo(document, "notifications:mark-read", this.markNotificationsRead), 
      Treehouse.personalizationPromise.then(function(t) {
        return function(e) {
          return t.loadedNotifications(e.notifications);
        };
      }(this));
    }
    return e(s, i), s.prototype.loadedNotifications = function(t) {
      return this.document.trigger("notifications:count:set", t.unread_count), this.dropdown.find(".loading").remove(), 
      this.dropdown.append(t.html), this.ul = this.dropdown.find("> ul");
    }, s.prototype.showNotificationsDropdown = function(t) {
      if (this.isTablet() || t.preventDefault(), !this.isTablet() && !this.el.hasClass("dropdown-show")) return t.stopPropagation(), 
      this.el.trigger("dropdown:show", this.el).removeClass("unread"), this.document.trigger("notifications:mark-read");
    }, s.prototype.addNewNotification = function(t, e) {
      var i, s;
      if (this.ensureListExists(), s = $("<li />").attr("id", "notification-" + t).addClass("unread notification").html(e), 
      i = $("<input>").attr({
        name:"unread[]",
        type:"hidden"
      }).val(t), s.append(i), 0 === $(s.attr("id")).length) return this.ul.prepend(s), 
      this.document.trigger("notifications:count:increment"), this.sendDesktopNotification(s);
    }, s.prototype.ensureListExists = function() {
      if (!(this.ul.length > 0)) return this.ul = $("<ul>").appendTo(this.dropdown), this.get(".empty").remove();
    }, s.prototype.sendDesktopNotification = function(t) {
      var e, i, s, r, n;
      if (window.Notification && "granted" === Notification.permission) return r = t.find("h3").first().text(), 
      i = t.find("p.notification-message").first().text(), e = t.find("img").first().attr("src"), 
      e.match("^http") || (e = "http:" + e), n = t.children("a").first().attr("href"), 
      s = new Notification(r, {
        body:i,
        icon:e,
        tag:t.attr("id")
      }), s.onclick = function() {
        return function() {
          return window.open(n), s.close();
        };
      }();
    }, s.prototype.markNotificationsRead = function() {
      var t, e;
      if (this.el.removeClass("unread"), this.document.trigger("notifications:count:reset"), 
      e = this.ul.find("input").serializeArray(), e.length) return t = "/notifications/mark-read", 
      $.post(t, e, function(t) {
        return function() {
          return t.ul.find(".notification.unread").removeClass("unread"), t.ul.find('input[name="unread[]"]').remove(), 
          !0;
        };
      }(this));
    }, s;
  }(Treehouse.Layout));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("notifications-count", Treehouse.Layout.NotificationsCount = function(i) {
    function s() {
      this.triggerUpdate = t(this.triggerUpdate, this), this.resetCount = t(this.resetCount, this), 
      this.incrementCount = t(this.incrementCount, this), this.setCount = t(this.setCount, this), 
      this.updateNotificationCount = t(this.updateNotificationCount, this), s.__super__.constructor.apply(this, arguments), 
      this.count = 0, this.listenTo(document, "notifications:count:set", this.setCount), 
      this.listenTo(document, "notifications:count:reset", this.resetCount), this.listenTo(document, "notifications:count:increment", this.incrementCount), 
      this.listenTo(document, "notifications:count:updated", this.updateNotificationCount), 
      Tinycon.setOptions({
        colour:"#ffffff",
        background:"#ea6c6c"
      }), Tinycon.setBubble(this.count);
    }
    return e(s, i), s.prototype.updateNotificationCount = function(t, e) {
      return this.el.text(e).parents("li").toggleClass("unread", e > 0), this.el.toggleClass("header-nav-item-notifications-count-double-digits", e >= 10), 
      Tinycon.setBubble(e);
    }, s.prototype.setCount = function(t, e) {
      return this.count = e, this.triggerUpdate();
    }, s.prototype.incrementCount = function() {
      return this.count++, this.triggerUpdate();
    }, s.prototype.resetCount = function(t) {
      return this.setCount(t, 0);
    }, s.prototype.triggerUpdate = function() {
      return this.el.toggleClass("header-nav-item-notifications-count-hidden", 0 === this.count), 
      this.document.trigger("notifications:count:updated", this.count);
    }, s;
  }(Treehouse.Layout));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.Layout.Application.StageProgress = function(i) {
    function s(e, i) {
      this.layout = i, this.onVideoEnd = t(this.onVideoEnd, this), this.onVideoTimeUpdate = t(this.onVideoTimeUpdate, this), 
      this.onVideoPlay = t(this.onVideoPlay, this), this.isVideoPlaying = t(this.isVideoPlaying, this), 
      this.cancelPageRefresh = t(this.cancelPageRefresh, this), this.setComplete = t(this.setComplete, this), 
      this.unsetComplete = t(this.unsetComplete, this), this.updateProgress = t(this.updateProgress, this), 
      this.toggleStepIcons = t(this.toggleStepIcons, this), this.listenToEvents = t(this.listenToEvents, this), 
      this.onLoaded = t(this.onLoaded, this), s.__super__.constructor.apply(this, arguments), 
      this.listenTo(document, "stage-progress-loaded", this.onLoaded);
    }
    return e(s, i), s.prototype.onLoaded = function() {
      return this.steps = this.get("[data-stage-progress-item]"), this.stepIconWidth = 42, 
      this.stepDotWidth = 20, this.numberOfSteps = this.steps.length, this.video = this.layout.el.find("video").get(0), 
      this.currentStepRadial = this.get(".current svg.circle-progress"), this.listenToEvents();
    }, s.prototype.listenToEvents = function() {
      if (this.on("click", "li.current", this.cancelPageRefresh), this.listenTo(window, "resize", _.throttle(this.toggleStepIcons, 750), {
        triggerImmediately:!0
      }), this.video && (this.video.addEventListener("play", this.onVideoPlay), this.video.addEventListener("ended", this.onVideoEnd), 
      this.video.addEventListener("timeupdate", _.throttle(this.onVideoTimeUpdate, 2500)), 
      this.isVideoPlaying())) return this.onVideoPlay();
    }, s.prototype.toggleStepIcons = function() {
      return this.el.toggleClass("show-mobile-steps", this.numberOfSteps * this.stepIconWidth > this.el.width() - 250), 
      this.el.toggleClass("hide-dividers", this.numberOfSteps * this.stepDotWidth > this.el.width() - 200);
    }, s.prototype.updateProgress = function(t) {
      var e;
      return this.radialProgress || (this.radialProgress = Featurette.get(this.currentStepRadial.attr("id"))), 
      null != (e = this.radialProgress) ? e.setProgress(t) :void 0;
    }, s.prototype.unsetComplete = function() {
      return this.el.find(".current").removeClass("completed");
    }, s.prototype.setComplete = function() {
      return this.el.find(".current").addClass("completed");
    }, s.prototype.cancelPageRefresh = function(t) {
      return t.preventDefault();
    }, s.prototype.isVideoPlaying = function() {
      return !this.video.paused && !this.video.ended;
    }, s.prototype.onVideoPlay = function() {
      return this.unsetComplete(), this.el.addClass("video-playing");
    }, s.prototype.onVideoTimeUpdate = function() {
      var t;
      return t = this.video.currentTime / this.video.duration * 100, this.updateProgress(t);
    }, s.prototype.onVideoEnd = function() {
      return this.el.removeClass("video-playing"), this.updateProgress(100), this.setComplete();
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.EngineListener = function() {
    function e(e, i, s, r) {
      this.channelId = e, this.acceptIncoming = i, this.logMessagePath = s, this.callbacks = r, 
      this.logConnectionEvent = t(this.logConnectionEvent, this), this.fireEvent = t(this.fireEvent, this), 
      pubnub.subscribe({
        channel:this.channelId,
        message:this.fireEvent,
        connect:function(t) {
          return function() {
            return t.logConnectionEvent({
              event_type:"pubnub-connect",
              message_body:"Connected"
            });
          };
        }(this),
        disconnect:function(t) {
          return function() {
            return t.logConnectionEvent({
              event_type:"pubnub-disconnect",
              message_body:"Disconnected"
            });
          };
        }(this),
        reconnect:function(t) {
          return function() {
            return t.logConnectionEvent({
              event_type:"pubnub-reconnect",
              message_body:"Reconnected"
            });
          };
        }(this),
        error:function(t) {
          return function(e) {
            return t.logConnectionEvent({
              event_type:"pubnub-error",
              message_body:"PubNub error: " + JSON.stringify(e)
            });
          };
        }(this)
      });
    }
    return e.prototype.fireEvent = function(t) {
      if (this.logMessagePath && this.logConnectionEvent({
        message_body:t
      }), this.acceptIncoming && this.callbacks[t.name]) return this.callbacks[t.name](t.data);
    }, e.prototype.logConnectionEvent = function(t) {
      return $.post(this.logMessagePath, $.extend({}, {
        uuid:this.channelId
      }, t));
    }, e;
  }();
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.Submitter = function() {
    function e(e, i) {
      this.url = e, this.uuid = i, this.processError = t(this.processError, this);
    }
    return e.prototype.submit = function(t, e, i, s, r) {
      var n;
      return this.timeoutId = r, n = {
        uuid:this.uuid,
        code_challenge_submission:{
          message_id:t,
          task:e,
          preview:!!i,
          submission:s
        }
      }, $.ajax({
        type:"POST",
        url:this.url,
        data:JSON.stringify(n),
        contentType:"application/json",
        error:function(t) {
          return function(e) {
            return t.processError(e);
          };
        }(this)
      });
    }, e.prototype.processError = function(t) {
      var e, i, s, r;
      401 === t.status && (clearTimeout(this.timeoutId), s = JSON.parse(t.responseText), 
      s.inadequate_permissions ? (e = Featurette.get("code-challenge-error-modal"), e.setError("You do not have access to take this Code Challenge. Please upgrade your account."), 
      e.showOverlay({
        stack:!0
      })) :s.exam_ended ? (r = s.redirect_url, i = Featurette.get("degree-exam-end-modal"), 
      i.setRedirectLink(r), i.setMessage("Your exam session time has expired. All of your answers have been saved and submitted for grading."), 
      i.showOverlay({
        stack:!0
      })) :(e = Featurette.get("code-challenge-error-modal"), e.setError("Your exam session is locked! To resume with this exam, please ask your proctor to unlock your session."), 
      e.showOverlay({
        stack:!0
      })));
    }, e;
  }();
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.CommandTaskView = function() {
    function e(e, i, s, r, n, o, a) {
      this.el = e, this.taskData = i, this.currentTask = s, this.previousCommand = r, 
      this.totalTasks = n, this.submitForTestingCallback = o, this.badgeUrl = a, this.hideResults = t(this.hideResults, this), 
      this.displayResults = t(this.displayResults, this), this.feedbackElement = t(this.feedbackElement, this), 
      this.wrong = t(this.wrong, this), this.neutral = t(this.neutral, this), this.getIcon = t(this.getIcon, this), 
      this.correct = t(this.correct, this), this.degreeExam = t(this.degreeExam, this), 
      this.disableOtherTaskEntries = t(this.disableOtherTaskEntries, this), this.addNewTaskEntry = t(this.addNewTaskEntry, this), 
      this.addLayoutState = t(this.addLayoutState, this), this.el = $(this.el), this.addLayoutState(), 
      this.addNewTaskEntry();
    }
    return e.prototype.addLayoutState = function() {
      return this.layout = Featurette.get("layout"), this.layout.el.addClass("command-challenge");
    }, e.prototype.addNewTaskEntry = function() {
      var t, e, i, s, r, n, o, a;
      return this.disableOtherTaskEntries(), e = {
        taskData:this.taskData,
        currentTask:this.currentTask,
        totalTasks:this.totalTasks,
        badgeUrl:this.badgeUrl
      }, s = this.el.data("challenge").is_multiline_ui, n = s ? "multiline_command_task" :"command_task", 
      this.el.append(HoganTemplates["code_challenges/" + n].render(e)), a = $("#" + this.el.attr("id") + " .task_view .terminal").last(), 
      r = "> ", o = function(t) {
        return function() {
          var e;
          if ("" !== t.editor.getValue()) return e = t.editor.getValue().slice(r.length), 
          t.submitForTestingCallback(t.currentTask, e), t.editor.setOption("readOnly", "nocursor"), 
          t.el.find("[data-task]").html("Working...").addClass("disabled");
        };
      }(this), i = {}, t = s ? "Ctrl-Enter" :"Enter", i[t] = o, this.editor = CodeMirror(a[0], {
        mode:"text",
        lineWrapping:!0,
        value:r + this.previousCommand,
        extraKeys:i
      }), this.editor.markText({
        line:0,
        ch:0
      }, {
        line:0,
        ch:2
      }, {
        inclusiveLeft:!0,
        atomic:!0
      }), this.editor.focus(), this.editor.setCursor({
        line:0
      }), this.el.find(".terminal").on("click", function(t) {
        return function() {
          return t.editor.focus();
        };
      }(this)), this.neutral(), this.feedbackElement().on("click", ".cc-test", o);
    }, e.prototype.disableOtherTaskEntries = function() {
      return this.el.children(".task_view").addClass("inactive");
    }, e.prototype.generateFeedback = function(t, e) {
      return null == e && (e = {}), e.alert_error_icon = this.getIcon("alert-error"), 
      e.alert_success_icon = this.getIcon("alert-success"), e.next = this.getIcon("next"), 
      e.get_help_url = this.el.find("[data-feedback]").data("get-help-url"), e.degree_exam = this.el.find("[data-feedback]").data("degree-exam"), 
      e.step_params = JSON.stringify({
        step_type:"CodeChallenge",
        step_id:this.el.data("code-challenge-id")
      }), HoganTemplates["code_challenges/command_feedback_" + t].render(e);
    }, e.prototype.degreeExam = function(t) {
      return this.feedbackElement().addClass("success").removeClass("error info").html(this.generateFeedback("degree_exam", {
        nextStep:t
      }));
    }, e.prototype.correct = function(t) {
      return this.feedbackElement().addClass("box-actions icons-only alert success").removeClass("error info").html(this.generateFeedback("correct", {
        feedback:t
      }));
    }, e.prototype.getIcon = function(t) {
      var e;
      return e = this.el.data(t + "-icon"), $("html").hasClass("ie") ? e.replace(/xlink:href="(.*)(#.*)"/, 'xlink:href="$2"') :e;
    }, e.prototype.neutral = function() {
      return this.feedbackElement().addClass("box-actions icons-only alert neutral").removeClass("error info").html(this.generateFeedback("neutral"));
    }, e.prototype.wrong = function(t) {
      return this.feedbackElement().addClass("box-actions icons-only alert error").html(this.generateFeedback("wrong", {
        feedback:t
      }));
    }, e.prototype.feedbackElement = function() {
      return $("#" + this.el.attr("id") + " .task_view [data-feedback]").last();
    }, e.prototype.displayResults = function(t) {
      var e, i;
      if (void 0 !== t && null !== t && !this.el.find("[data-feedback]").data("degree-exam")) return e = {
        currentTask:this.currentTask,
        url:t
      }, this.el.find("[data-editor]").html(HoganTemplates["code_challenges/command_results"].render(e)), 
      i = $(".hide-results").last(), i.click(function(t) {
        return function() {
          var s;
          return s = e.currentTask, t.hideResults(s, i);
        };
      }(this));
    }, e.prototype.hideResults = function(t, e) {
      return $("#results-" + t).hide(), e.addClass("show-results"), e.removeClass("hide-results"), 
      e.html("Show Results"), e.click(function(i) {
        return function() {
          return $("#results-" + t).show(), e.addClass("hide-results"), e.removeClass("show-results"), 
          e.html("Hide Results"), e.click(function() {
            return i.hideResults(t, e);
          });
        };
      }(this));
    }, e;
  }();
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.EditorView = function() {
    function e(e, i, s) {
      var r;
      this.submitForTestingCallback = i, this.submitForPreviewCallback = s, this.refresh = t(this.refresh, this), 
      this.handleCursorMove = t(this.handleCursorMove, this), r = $(e).data("editor-mode"), 
      this.codeMirror = CodeMirror.fromTextArea(e, {
        mode:r,
        tabSize:this.tabSizeForMode(r),
        indentUnit:this.tabSizeForMode(r),
        lineNumbers:!0,
        theme:"dark " + $(e).data("editor-theme"),
        viewportMargin:30,
        extraKeys:{
          Tab:CodeMirror.commands.insertSoftTab
        }
      }), this.codeMirror.on("cursorActivity", this.handleCursorMove), $(".CodeMirror").ready(this.refresh);
    }
    return e.prototype.tabSizeForMode = function(t) {
      switch (t) {
       case "text/x-csharp":
       case "text/x-python":
        return 4;

       default:
        return 2;
      }
    }, e.prototype.handleCursorMove = function() {
      var t, e;
      return e = this.highlightedLine, t = this.codeMirror.getCursor().line, e && this.codeMirror.removeLineClass(e, "background", "CodeMirror-activeline-background"), 
      this.highlightedLine = this.codeMirror.addLineClass(t, "background", "CodeMirror-activeline-background");
    }, e.prototype.getValue = function() {
      return this.codeMirror.getValue();
    }, e.prototype.setValue = function(t) {
      return this.codeMirror.setValue(t);
    }, e.prototype.refresh = function() {
      return this.codeMirror.refresh();
    }, e;
  }();
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.FeedbackView = function() {
    function e(e, i, s, r, n) {
      this.el = e, this.submitForTestingCallback = i, this.submitForPreviewCallback = s, 
      this.restartCallback = r, this.goToTaskCallback = n, this.showWorkspace = t(this.showWorkspace, this), 
      this.showResults = t(this.showResults, this), this.disableRefresh = t(this.disableRefresh, this), 
      this.disableCheckWork = t(this.disableCheckWork, this), this.currentTask = t(this.currentTask, this), 
      this.getIcon = t(this.getIcon, this), this.goToTask = t(this.goToTask, this), this.testButtonHandler = t(this.testButtonHandler, this), 
      this.previewButtonHandler = t(this.previewButtonHandler, this), this.el = $(this.el), 
      this.el.on("click", ".cc-test", this.testButtonHandler), this.el.on("click", ".cc-restart", this.restartCallback), 
      this.el.on("click", ".cc-preview", this.previewButtonHandler), this.el.on("click", ".cc-goto", this.goToTask), 
      this.el.on("click", ".show-results-button", this.showResults), this.el.on("click", ".show-workspace-button", this.showWorkspace);
    }
    return e.prototype.previewButtonHandler = function(t) {
      return t.preventDefault(), this.submitForPreviewCallback();
    }, e.prototype.testButtonHandler = function(t) {
      return t.preventDefault(), this.submitForTestingCallback();
    }, e.prototype.goToTask = function(t) {
      var e, i;
      if (t.preventDefault(), e = $(t.target), !e.hasClass("disabled")) return i = e.data("task"), 
      this.showWorkspace(), this.goToTaskCallback(i);
    }, e.prototype.generateFeedback = function(t, e) {
      return null == e && (e = {}), e.info = this.getIcon("info"), e.preview = this.getIcon("preview"), 
      e.editor = this.getIcon("editor"), e.next = this.getIcon("next"), e.refresh = this.getIcon("refresh"), 
      e.alert_info_icon = this.getIcon("alert-info"), e.alert_error_icon = this.getIcon("alert-error"), 
      e.alert_success_icon = this.getIcon("alert-success"), e.show_preview = this.el.data("show-preview"), 
      e.degree_exam = this.el.data("degree-exam"), e.get_help_url = this.el.data("get-help-url"), 
      e.step_params = JSON.stringify({
        step_type:"CodeChallenge",
        step_id:this.el.data("code-challenge-id")
      }), HoganTemplates["code_challenges/feedback_" + t].render(e);
    }, e.prototype.getIcon = function(t) {
      var e;
      return e = this.el.data(t + "-icon"), $("html").hasClass("ie") ? e.replace(/xlink:href="(.*)(#.*)"/, 'xlink:href="$2"') :e;
    }, e.prototype["default"] = function(t, e) {
      return this.el.addClass("info").removeClass("success error").html(this.generateFeedback("neutral", {
        isPreview:e,
        task:t
      }));
    }, e.prototype.canCheckWork = function() {
      return !this.el.find(".cc-test").hasClass("disabled");
    }, e.prototype.canRefresh = function() {
      return !this.el.find(".cc-preview").hasClass("disabled");
    }, e.prototype.correct = function(t, e) {
      return this.el.addClass("success").removeClass("error info").html(this.generateFeedback("correct", {
        feedback:t,
        nextTask:e
      }));
    }, e.prototype.currentTask = function() {
      return this.el.find(".cc-test").data("task");
    }, e.prototype.disableCheckWork = function() {
      return this.el.find(".cc-test").addClass("disabled"), this.updateTestButton("Working...");
    }, e.prototype.disableRefresh = function() {
      return this.el.find(".cc-preview").addClass("disabled"), this.updatePreviewButton("Working...");
    }, e.prototype.finished = function() {
      return this.el.addClass("success").removeClass("error info").html(this.generateFeedback("finished"));
    }, e.prototype.degreeExam = function(t) {
      return this.el.addClass("success").removeClass("error info").html(this.generateFeedback("degree_exam", {
        nextStep:t
      }));
    }, e.prototype.wrong = function(t, e, i) {
      return this.el.addClass("error").removeClass("success info").html(this.generateFeedback("wrong", {
        feedback:t,
        isPreview:i,
        failedTask:e
      }));
    }, e.prototype.inactiveTaskFailed = function(t, e) {
      var i;
      return i = {
        failedTaskAsWord:this.numberToWord(t),
        failedTask:t,
        currentTask:e
      }, this.el.addClass("error").removeClass("success info").html(this.generateFeedback("inactive_task_failed", i));
    }, e.prototype.numberToWord = function(t) {
      var e;
      return e = [ "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten" ], 
      t < 11 ? e[t] :"#" + t;
    }, e.prototype.resetButtons = function() {
      var t, e;
      return t = this.el.find(".cc-test"), t.text(t.data("default-text")), e = this.el.find(".cc-preview"), 
      e.text(e.data("default-text")), $(".cc-test, .cc-preview").removeClass("disabled");
    }, e.prototype.showResults = function() {
      return this.el.find(".cc-preview").removeClass("hidden"), $(".show-results-button").addClass("hidden"), 
      $(".show-workspace-button").removeClass("hidden"), $(".workspace").addClass("hidden"), 
      $(".cc-results").removeClass("hidden");
    }, e.prototype.showWorkspace = function() {
      return this.el.find(".cc-preview").addClass("hidden"), $(".show-results-button").removeClass("hidden"), 
      $(".show-workspace-button").addClass("hidden"), $(".workspace").removeClass("hidden"), 
      $(".cc-results").addClass("hidden");
    }, e.prototype.updateTestButton = function(t) {
      return this.el.find(".cc-test").text(t);
    }, e.prototype.updatePreviewButton = function(t) {
      return this.el.find(".cc-preview").text(t);
    }, e;
  }();
}.call(this), function() {
  null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.InstructionView = function() {
    function t(t, e, i) {
      this.el = t, this.taskInstructions = e, this.badgeImageUrl = i, this.el = $(this.el);
    }
    return t.prototype.update = function(t) {
      var e;
      return e = {
        task:t,
        body:this.taskInstructions[t - 1].body,
        totalTasks:this.taskInstructions.length,
        badgeImageUrl:this.badgeImageUrl
      }, this.el.html(HoganTemplates["code_challenges/instructions"].render(e));
    }, t;
  }();
}.call(this), function() {
  null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.PreviewView = function() {
    function t(t) {
      this.el = t, this.el = $(this.el);
    }
    return t.prototype.update = function(t) {
      return this.el.find("iframe").attr("src", t);
    }, t;
  }();
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.ResultsView = function() {
    function e(e) {
      this.el = e, this.update = t(this.update, this), this.handleMenuClick = t(this.handleMenuClick, this), 
      this.initializePreview = t(this.initializePreview, this), this.el.find(".cc-preview-view").each(this.initializePreview), 
      this.el.on("click", ".cc-results-menu a", this.handleMenuClick), this.el.find(".cc-results-menu .selected").click();
    }
    return e.prototype.initializePreview = function(t, e) {
      return this.previews || (this.previews = {}), this.previews[$(e).data("source")] = new CodeChallenge.PreviewView(e);
    }, e.prototype.handleMenuClick = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.target), this.el.find(".cc-results-menu .selected").removeClass("selected"), 
      i.addClass("selected"), e = this.el.find(".cc-results-menu a").index(i), this.el.find(".preview.selected").removeClass("selected"), 
      this.el.find(".preview").eq(e).addClass("selected");
    }, e.prototype.update = function(t) {
      var e, i, s, r, n;
      s = this.previews, r = [];
      for (e in s) i = s[e], t.preview_urls ? r.push(function() {
        var s, r, o, a;
        for (o = t.preview_urls, a = [], s = 0, r = o.length; s < r; s++) n = o[s], new RegExp("/" + e + "$").test(n) && a.push(i.update(n));
        return a;
      }()) :r.push(void 0);
      return r;
    }, e;
  }();
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  null == this.CodeChallenge && (this.CodeChallenge = {}), CodeChallenge.WorkspaceView = function() {
    function e(e, i, s) {
      this.el = e, this.submitForTestingCallback = i, this.submitForPreviewCallback = s, 
      this.setFiles = t(this.setFiles, this), this.handleMenuClick = t(this.handleMenuClick, this), 
      this.initializeEditor = t(this.initializeEditor, this), this.el.find(".editor textarea").each(this.initializeEditor), 
      this.el.on("click", ".cc-editor-menu a", this.handleMenuClick), this.el.find(".cc-editor-menu .selected").click();
    }
    return e.prototype.initializeEditor = function(t, e) {
      return this.editors || (this.editors = []), this.editors.push(new CodeChallenge.EditorView(e, this.submitForTestingCallback, this.submitForPreviewCallback));
    }, e.prototype.handleMenuClick = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.target), this.el.find(".cc-editor-menu .selected").removeClass("selected"), 
      i.addClass("selected"), e = this.el.find(".cc-editor-menu a").index(i), this.el.find(".editor.selected").removeClass("selected"), 
      this.el.find(".editor").eq(e).addClass("selected"), this.editors[e].codeMirror.refresh();
    }, e.prototype.getFiles = function() {
      return $.map(this.editors, function(t) {
        return function(e, i) {
          var s, r;
          return r = t.el.find(".cc-editor-menu a").eq(i).text(), s = e.getValue(), {
            source:r,
            content:s
          };
        };
      }(this));
    }, e.prototype.setFiles = function(t) {
      var e, i, s, r, n;
      for (n = [], s = i = 0, r = t.length; i < r; s = ++i) e = t[s], n.push(this.editors[s].setValue(e.content));
      return n;
    }, e;
  }();
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  this.CodeChallenge || (this.CodeChallenge = {}), CodeChallenge.Base = function() {
    function e(e) {
      var i;
      this.el = e, this.isLastStep = t(this.isLastStep, this), this.completeChallenge = t(this.completeChallenge, this), 
      this.acceptIncomingMessage = t(this.acceptIncomingMessage, this), this.handleEngineError = t(this.handleEngineError, this), 
      this.handleTimeoutError = t(this.handleTimeoutError, this), this.restart = t(this.restart, this), 
      this.clearAllTaskAttempts = t(this.clearAllTaskAttempts, this), this.retrieveTaskAttempt = t(this.retrieveTaskAttempt, this), 
      this.setTaskAttempt = t(this.setTaskAttempt, this), this.sessionStorageKey = t(this.sessionStorageKey, this), 
      this.el = $(this.el), i = this.el.data("challenge"), this.tasks = i.tasks, this.currentTask = 0, 
      this.lastTaskPassed = 0, this.timeoutDelay = 1.25 * i.timeout * 1e3, this.timeoutPath = this.el.data("timeout-path"), 
      this.timeoutId = null, this.isAdminPreview = i.admin_preview, this.isDegreeExam = i.degree_exam, 
      this.degreeExamCompletionURL = i.degree_exam_completion_url, this.nextStepPath = i.next_step_path, 
      this.codeChallengeSessionUUID = i.uuid, this.submitter = new CodeChallenge.Submitter(this.el.data("submit-path"), this.codeChallengeSessionUUID), 
      this.engineListener = new CodeChallenge.EngineListener(this.codeChallengeSessionUUID, this.acceptIncomingMessage, this.el.data("log-message-path"), {
        event:this.handleEngineEvent,
        engine_error:this.handleEngineError
      });
    }
    return e.prototype.sessionStorageKey = function(t) {
      return null == t && (t = this.currentTask), this.el.data("challenge").challenge_id + t;
    }, e.prototype.setTaskAttempt = function(t) {
      return window.sessionStorage.setItem(this.sessionStorageKey(), t);
    }, e.prototype.retrieveTaskAttempt = function() {
      var t;
      return null != (t = window.sessionStorage) ? t.getItem(this.sessionStorageKey()) :void 0;
    }, e.prototype.clearAllTaskAttempts = function() {
      var t, e, i, s, r, n;
      for (s = this.tasks, n = [], t = e = 0, i = s.length; e < i; t = ++e) s[t], n.push(null != (r = window.sessionStorage) ? r.removeItem(this.sessionStorageKey(t + 1)) :void 0);
      return n;
    }, e.prototype.restart = function() {
      if (confirm("Are you sure you want to delete your current attempts and start this challenge completely over?")) return this.clearAllTaskAttempts(), 
      document.location.reload();
    }, e.prototype.handleTimeoutError = function() {
      return this.rejectMessages(), $.post(this.timeoutPath, {
        uuid:this.codeChallengeSessionUUID
      }), this.genericErrorMessage("There was a communication problem.");
    }, e.prototype.handleEngineError = function(t) {
      return clearTimeout(this.timeoutId), this.genericErrorMessage(t.message || "");
    }, e.prototype.listenForMessages = function() {
      return null == this.messageId && (this.messageId = 0), null == this.totalMessages && (this.totalMessages = 0), 
      this.totalMessages += 1, this.messageId = this.totalMessages;
    }, e.prototype.acceptIncomingMessage = function(t) {
      return parseInt(t.message_id, 10) === this.messageId;
    }, e.prototype.rejectMessages = function() {
      return this.messageId = null;
    }, e.prototype.genericErrorMessage = function(t) {
      var e;
      return e = Featurette.get("code-challenge-error-modal"), e.setError(t), e.showOverlay({
        stack:!0
      });
    }, e.prototype.completeChallenge = function() {
      return this.clearAllTaskAttempts(), $.ajax({
        type:"POST",
        url:this.el.data("completed-path"),
        data:{
          _method:"PUT",
          uuid:this.codeChallengeSessionUUID
        },
        success:function(t) {
          return function() {
            return t.isDegreeExam && t.isLastStep() ? t.completeDegreeExam() :$(document).trigger("step-passed");
          };
        }(this),
        error:function(t) {
          return function(e, i, s) {
            return t.genericErrorMessage(s);
          };
        }(this)
      });
    }, e.prototype.isLastStep = function() {
      return !this.nextStepPath;
    }, e.prototype.completeDegreeExam = function() {
      if (this.isLastStep()) return $.ajax({
        type:"POST",
        url:this.degreeExamCompletionURL,
        success:function(t, e, i) {
          return window.location = i.getResponseHeader("Location");
        }
      });
    }, e;
  }();
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  this.CodeChallenge || (this.CodeChallenge = {}), CodeChallenge.CodeEditorChallenge = function(i) {
    function s(e) {
      var i, r, n, o;
      for (this.el = e, this.changeContentState = t(this.changeContentState, this), this.examNavAlert = t(this.examNavAlert, this), 
      this.restoreWorkspaceContents = t(this.restoreWorkspaceContents, this), this.storeWorkspaceContents = t(this.storeWorkspaceContents, this), 
      this.handleEngineStatusUpdate = t(this.handleEngineStatusUpdate, this), this.handleEngineEvent = t(this.handleEngineEvent, this), 
      this.handleTimeoutError = t(this.handleTimeoutError, this), this.refresh = t(this.refresh, this), 
      this.checkWork = t(this.checkWork, this), this.submit = t(this.submit, this), this.goToTask = t(this.goToTask, this), 
      s.__super__.constructor.apply(this, arguments), this.workspace = new CodeChallenge.WorkspaceView(this.el.find(".cc-workspace")), 
      this.instructions = new CodeChallenge.InstructionView(this.el.find("[data-instructions]"), this.tasks, this.el.data("badge-url")), 
      this.feedback = new CodeChallenge.FeedbackView(this.el.find("[data-feedback]"), this.checkWork, this.refresh, this.restart, this.goToTask), 
      this.results = new CodeChallenge.ResultsView(this.el.find(".cc-results")), this.engineListener.engine_update = this.handleEngineStatusUpdate, 
      this.engineListener.connect = function(t) {
        return function() {
          if (!challengeData.no_preview) return t.refresh();
        };
      }(this), $(document).bind("keydown", "ctrl+return", this.checkWork), $(document).bind("keydown", "alt+r", this.refresh), 
      $(document).on("click", ".show-results-button", this.refresh), this.isContentChanged = !1, 
      this.isSubmitted = !1, this.isDegreeExam && $(window).on("beforeunload", this.examNavAlert), 
      $(document).on("keydown", this.changeContentState), o = this.workspace.editors, 
      r = 0, n = o.length; r < n; r++) i = o[r], i.codeMirror.addKeyMap({
        "Ctrl-Enter":this.checkWork
      }), i.codeMirror.addKeyMap({
        "Alt-R":this.refresh
      });
      this.goToTask(1);
    }
    return e(s, i), s.prototype.goToTask = function(t) {
      var e;
      return this.currentTask = t, e = Math.max(t, this.lastTaskPassed), this.instructions.update(t), 
      this.feedback["default"](e), this.restoreWorkspaceContents(), Treehouse.init();
    }, s.prototype.submit = function(t) {
      var e;
      return null == t && (t = !1), e = this.listenForMessages(), this.storeWorkspaceContents(), 
      this.timeoutId = setTimeout(this.handleTimeoutError, this.timeoutDelay), this.submitter.submit(e, this.currentTask, t, {
        files:this.workspace.getFiles()
      }, this.timeoutId), this.isSubmitted = !0;
    }, s.prototype.checkWork = function() {
      if (this.feedback.canCheckWork()) return this.feedback.disableCheckWork(), this.feedback.disableRefresh(), 
      this.submit();
    }, s.prototype.refresh = function() {
      if (this.feedback.canRefresh()) return this.feedback.disableRefresh(), this.feedback.disableCheckWork(), 
      this.submit(!0);
    }, s.prototype.handleTimeoutError = function() {
      return s.__super__.handleTimeoutError.apply(this, arguments), this.feedback.resetButtons();
    }, s.prototype.handleEngineEvent = function(t) {
      var e, i;
      return this.rejectMessages(), this.isDegreeExam ? this.isCheckWork(t) && void 0 !== t.pass && (this.feedback.degreeExam(this.nextStepPath), 
      this.isAdminPreview || this.completeChallenge()) :t.pass && this.isCheckWork(t) ? t.task === this.tasks.length ? (Treehouse.PointsCounter.updateTotal(), 
      this.feedback.finished(), !0 !== this.isAdminPreview && this.completeChallenge()) :(t.task > this.lastTaskPassed && (this.lastTaskPassed = t.task), 
      this.feedback.correct(t.feedback, t.task + 1)) :t.pass && this.isPreview(t) ? this.feedback["default"](t.task, this.isPreview(t)) :!1 === t.pass && (t.task <= this.lastTaskPassed && t.task !== this.currentTask ? this.feedback.inactiveTaskFailed(t.task, t.up_to) :(e = this.isPreview(t) && (null != (i = t.preview_urls) ? i.length :void 0) > 0, 
      e || this.feedback.showWorkspace(), this.feedback.wrong(t.feedback, t.up_to, e))), 
      clearTimeout(this.timeoutId), this.results.update(t), this.feedback.resetButtons(), 
      Treehouse.init();
    }, s.prototype.handleEngineStatusUpdate = function(t) {
      return this.isPreview(t) ? this.feedback.updatePreviewButton(t.text) :this.feedback.updateTestButton(t.text);
    }, s.prototype.storeWorkspaceContents = function() {
      return this.setTaskAttempt(JSON.stringify(this.workspace.getFiles()));
    }, s.prototype.restoreWorkspaceContents = function() {
      if (this.retrieveTaskAttempt()) return this.workspace.setFiles(JSON.parse(this.retrieveTaskAttempt()));
    }, s.prototype.examNavAlert = function() {
      if (this.isContentChanged && !this.isSubmitted && !this.islastStep) return "If you leave now, you'll lose your progress!";
      window.onbeforeunload = null;
    }, s.prototype.changeContentState = function() {
      return this.isContentChanged = !0;
    }, s.prototype.isPreview = function(t) {
      return "run" === t.target;
    }, s.prototype.isCheckWork = function(t) {
      return "test" === t.target;
    }, s;
  }(CodeChallenge.Base), Featurette.register("code-editor-challenge", CodeChallenge.CodeEditorChallenge);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  this.CodeChallenge || (this.CodeChallenge = {}), CodeChallenge.CommandChallenge = function(i) {
    function s(e) {
      this.el = e, this.retryCurrentTask = t(this.retryCurrentTask, this), this.goToNextTask = t(this.goToNextTask, this), 
      this.handleEngineEvent = t(this.handleEngineEvent, this), this.submit = t(this.submit, this), 
      s.__super__.constructor.apply(this, arguments), this.currentTask = 1, this.badgeUrl = this.el.data("badge-url"), 
      this.addViewForCurrentTask();
    }
    return e(s, i), s.prototype.submit = function(t, e) {
      var i;
      return this.setTaskAttempt(e), i = this.listenForMessages(), this.timeoutId = setTimeout(this.handleTimeoutError, this.timeoutDelay), 
      this.submitter.submit(i, t, !1, {
        command:e
      }, this.timeoutId);
    }, s.prototype.handleEngineEvent = function(t) {
      var e;
      return this.rejectMessages(), this.isDegreeExam ? void 0 !== t.pass && (this.taskView.degreeExam(this.nextStepPath), 
      this.isAdminPreview || (this.completeChallenge(), this.completeDegreeExam())) :t.pass ? t.task === this.tasks.length ? (Treehouse.PointsCounter.updateTotal(), 
      !0 !== this.isAdminPreview && this.completeChallenge()) :(this.lastTaskPassed = t.task, 
      this.taskView.correct(t.feedback), $(".cc-goto").click(function(t) {
        return function() {
          return t.goToNextTask();
        };
      }(this))) :(this.taskView.wrong(t.feedback), $(".cc-test").click(function(t) {
        return function() {
          return t.retryCurrentTask();
        };
      }(this))), clearTimeout(this.timeoutId), Treehouse.init(), this.taskView.displayResults(null != (e = t.preview_urls) ? e[0] :void 0);
    }, s.prototype.goToNextTask = function() {
      return this.taskView.hideResults(this.lastTaskPassed, $(".hide-results")), $(".cc-goto").remove(), 
      this.currentTask = this.lastTaskPassed + 1, this.addViewForCurrentTask();
    }, s.prototype.retryCurrentTask = function() {
      return $("#" + this.el.attr("id") + " .task_view").last().remove(), this.addViewForCurrentTask();
    }, s.prototype.addViewForCurrentTask = function() {
      return this.taskView = new CodeChallenge.CommandTaskView(this.el, this.tasks[this.currentTask - 1], this.currentTask, this.retrieveTaskAttempt() || "", this.tasks.length, this.submit, this.badgeUrl);
    }, s;
  }(CodeChallenge.Base), Featurette.register("command-challenge", CodeChallenge.CommandChallenge);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.showImagePreview = e(this.showImagePreview, this), this.el = $(t), $("#contact-method-selector").on("change", this.contactMethodToggle), 
      $(".radio-replacement-wrapper").on("click", this.replaceRadios), $("#job_company_logo").on("change", this.showImagePreview), 
      this.contactMethodInit(), this.setupRadios();
    }
    return t.prototype.contactMethodInit = function() {
      var t, e;
      return t = $(".contact_email"), e = $(".contact_url"), "" !== e.children("input").val() ? ($("#contact-method-selector").val("url"), 
      t.hide()) :($("#contact-method-selector").val("email"), e.hide());
    }, t.prototype.contactMethodToggle = function() {
      var t;
      return t = $("#contact-method-selector").val(), $("#contact-method-selector-wrapper input").val("").parents(".form-item").hide(), 
      $(".contact_" + t).show();
    }, t.prototype.replaceRadios = function(t) {
      var e;
      return e = $(t.delegateTarget), e.siblings(".radio-replacement-wrapper").removeClass("selected"), 
      e.addClass("selected"), e.find("input[type='radio']").attr("checked", "checked");
    }, t.prototype.setupRadios = function() {
      var t;
      return t = $(".radio-replacement-wrapper input[type='radio']:checked"), 0 === t.length ? $(".radio-collection").each(function(t, e) {
        return $(e).find(":radio").first().attr("checked", "checked").parents(".radio-replacement-wrapper").addClass("selected");
      }) :t.parent().addClass("selected");
    }, t.prototype.highlightRadioContainer = function(t) {
      return $(t).parents(".radio-replacement-wrapper").addClass("selected");
    }, t.prototype.showImagePreview = function(t) {
      if (window.File && window.FileReader && window.FileList && window.Blob) return _.each(t.target.files, function(t) {
        var e;
        return e = new FileReader(), e.onload = function(t) {
          var e;
          return e = $(".company-logo").empty(), $("<img src='" + t.target.result + "' />").appendTo(e).hide().show(250), 
          $(".company-logo").css({
            "background-image":"background-image",
            none:"none"
          });
        }, e.readAsDataURL(t);
      });
    }, t;
  }(), Featurette.register("job-form", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("library-index", function(i) {
    function s() {
      this.dynamicTitle = t(this.dynamicTitle, this), this.noResults = t(this.noResults, this), 
      this.updateBreadcrumb = t(this.updateBreadcrumb, this), this.onPjaxEnd = t(this.onPjaxEnd, this), 
      this.onPjaxStart = t(this.onPjaxStart, this), this.listeners = t(this.listeners, this), 
      s.__super__.constructor.apply(this, arguments), this.container = $("#library-pjax"), 
      _.delay(this.listeners, 100), _.delay(this.dynamicTitle, 200);
    }
    return e(s, i), s.prototype.listeners = function() {
      return this.container.on("pjax:start", this.onPjaxStart), this.container.on("pjax:end", this.onPjaxEnd), 
      this.filters = new Filters({
        basePath:"library",
        container:"#library-pjax",
        binds:{
          topic:Featurette.get("topic"),
          type:Featurette.get("type"),
          q:$("#q"),
          sort:Featurette.get("sort")
        }
      }), this.on("click", ".form-search .search-button", function(t) {
        return function(e) {
          return t.filters.update(e);
        };
      }(this));
    }, s.prototype.onPjaxStart = function() {
      return this.container.addClass("transparent-while-loading");
    }, s.prototype.onPjaxEnd = function() {
      return this.updateBreadcrumb(), this.dynamicTitle(), this.noResults(), this.container.removeClass("transparent-while-loading");
    }, s.prototype.updateBreadcrumb = function() {
      return $(document).trigger("library:updated", "/library");
    }, s.prototype.noResults = function() {
      if ($("#no-results").hide(), 0 === this.container.find(":not(#upcoming-releases) ul.card-list li.card").length) return $("#no-results").stop().show();
    }, s.prototype.dynamicTitle = function() {
      return $(".topic-heading").length > 0 ? $(".primary-heading h1").html("<a class='all-topics' href='/library'><span class='icon icon-left'></span> Library</a>") :$(".primary-heading h1").html("Library"), 
      $(document).on("click", "a.all-topics", function(t) {
        return t.preventDefault(), Featurette.get("topic").val("");
      });
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("tracks-index", function(i) {
    function s() {
      this.onPjaxEnd = t(this.onPjaxEnd, this), this.onPjaxStart = t(this.onPjaxStart, this), 
      this.listeners = t(this.listeners, this), s.__super__.constructor.apply(this, arguments), 
      this.container = $("#tracks-pjax"), _.delay(this.listeners, 100);
    }
    return e(s, i), s.prototype.listeners = function() {
      return this.container.on("pjax:start", this.onPjaxStart), this.container.on("pjax:end", this.onPjaxEnd), 
      this.filters = new Filters({
        basePath:"tracks",
        container:"#tracks-pjax",
        binds:{
          topic:Featurette.get("topic")
        }
      });
    }, s.prototype.onPjaxStart = function() {
      return this.container.addClass("transparent-while-loading");
    }, s.prototype.onPjaxEnd = function() {
      return this.container.removeClass("transparent-while-loading");
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s(t) {
      this.getUrlParameter = e(this.getUrlParameter, this), this.filterChange = e(this.filterChange, this), 
      this.filterOptions = e(this.filterOptions, this), this.setupFilters = e(this.setupFilters, this), 
      s.__super__.constructor.apply(this, arguments), this.baseUrl = $(t).data("refresh-url"), 
      this.setupFilters();
    }
    return i(s, t), s.prototype.setupFilters = function() {
      return _.delay(function(t) {
        return function() {
          return $(".filter-container").on("change", t.filterChange);
        };
      }(this), 100);
    }, s.prototype.filterOptions = function() {
      var t;
      return t = {}, t.search = this.searchInput(), t.sort = Featurette.get("sort"), Featurette.get("filter") && (t.filter = Featurette.get("filter")), 
      t;
    }, s.prototype.filterChange = function(t) {
      var e;
      return $(t.target).attr("id"), e = this.baseUrl + "?sort_by=" + this.getUrlParameter("sort_by", "Video"), 
      this.el.find(".filter-container").each(function() {
        return e = e + "&" + $(this).data("filter-name") + "=" + $(this).find("ul .selected").data("filter-value");
      }), window.location.href = e;
    }, s.prototype.getUrlParameter = function(t, e) {
      var i, s, r, n, o, a;
      for (r = window.location.search.substring(1), a = r.split("&"), i = 0, s = a.length; i < s; i++) if (o = a[i], 
      n = o.split("="), n[0] === t) return n[1];
      return e;
    }, s;
  }(Treehouse.View), Featurette.register("organization-leaderboard", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.listeners = e(this.listeners, this), this.element = $(t), this.container = $("#users-stats-pjax"), 
      _.delay(this.listeners, 100);
    }
    return t.prototype.listeners = function() {
      return this.container.on("pjax:end", this.noResults), this.filters = new Filters({
        basePath:"account/users/stats",
        container:"#users-stats-pjax",
        binds:{
          within:Featurette.get("within")
        }
      });
    }, t;
  }(), Featurette.register("users-stats", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.onPjaxEnd = e(this.onPjaxEnd, this), this.onPjaxStart = e(this.onPjaxStart, this), 
      this.pageNavigation = e(this.pageNavigation, this), this.deleteWorkspace = e(this.deleteWorkspace, this), 
      this.listeners = e(this.listeners, this), s.__super__.constructor.apply(this, arguments), 
      this.container = $("#workspaces-pjax"), this.page = this.container.find('input[name="current_page"]'), 
      _.defer(this.listeners);
    }
    return i(s, t), s.prototype.listeners = function() {
      return this.container.on("pjax:start", this.onPjaxStart), this.container.on("pjax:end", this.onPjaxEnd), 
      this.container.on("click", ".workspace-delete", this.deleteWorkspace), this.container.on("click", ".pagination-nav", this.pageNavigation), 
      this.filters = new Filters({
        basePath:"workspaces",
        container:this.container,
        binds:{
          q:this.get("#q"),
          sort:Featurette.get("sort"),
          env:Featurette.get("env"),
          content:Featurette.get("content-filter"),
          page:this.page
        }
      }), $(document).trigger("filters:serialized");
    }, s.prototype.deleteWorkspace = function(t) {
      if (t.preventDefault(), confirm("Are you sure you want to delete this workspace entirely?")) return $.pjax({
        container:this.container,
        url:t.currentTarget.href,
        type:"DELETE",
        push:!1,
        timeout:!1,
        data:this.filters.data()
      });
    }, s.prototype.pageNavigation = function(t) {
      var e;
      return t.preventDefault(), (e = t.currentTarget.href.match(/page=(\d*)/)[1]) && this.page.val(parseInt(e)), 
      this.filters.update();
    }, s.prototype.onPjaxStart = function() {
      return this.container.addClass("transparent-while-loading");
    }, s.prototype.onPjaxEnd = function() {
      return this.container.removeClass("transparent-while-loading");
    }, s;
  }(Treehouse.View), Featurette.register("workspaces-index", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("info-tooltip", Treehouse.InfoTooltip = function(i) {
    function s() {
      this.closeToolip = t(this.closeToolip, this), this.toggleTooltip = t(this.toggleTooltip, this), 
      this.hideTooltip = t(this.hideTooltip, this), this.showTooltip = t(this.showTooltip, this), 
      s.__super__.constructor.apply(this, arguments), this.tooltip = this.get(".tooltip"), 
      this.displaying = !1, "click" === this.el.data("event") ? (this.el.on("click", this.toggleTooltip), 
      $(document).on("click", this.closeToolip)) :(this.tooltip.hide(), this.el.on("mouseover", this.showTooltip), 
      this.el.on("mouseout", this.hideTooltip));
    }
    return e(s, i), s.prototype.showTooltip = function(t) {
      if (!this.displaying) return this.tooltip.show(), this.displaying = !0, t.stopPropagation();
    }, s.prototype.hideTooltip = function(t) {
      if (this.displaying) return this.tooltip.hide(), this.displaying = !1, t.stopPropagation();
    }, s.prototype.toggleTooltip = function(t) {
      return t.stopPropagation(), this.tooltip.toggleClass("tooltip-showing").parent().siblings().children().removeClass("tooltip-showing"), 
      this.el.toggleClass("tooltip-showing").siblings().removeClass("tooltip-showing");
    }, s.prototype.closeToolip = function() {
      return this.tooltip.removeClass("tooltip-showing"), this.el.removeClass("tooltip-showing");
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("tooltip", Treehouse.Tooltip = function(e) {
    function i(t) {
      var e;
      i.__super__.constructor.apply(this, arguments), this.id = t.id, e = $(t), e.hide(), 
      this.class_to_close = e.attr("data-class-to-close"), e.find(".close-tooltip").click(function(t) {
        return function() {
          return t.close();
        };
      }(this)), "true" !== e.attr("data-hide") && setTimeout(function() {
        return e.fadeIn();
      }, 200);
    }
    return t(i, e), i.prototype.close = function() {
      var t, e;
      if (t = $("#" + this.id), t.fadeOut(), this.class_to_close && $("." + this.class_to_close).fadeOut(), 
      e = t.attr("data-flag")) return $.post("/dashboard/flag", {
        _method:"PUT",
        flag:e
      });
    }, i;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("upgrade-tooltip", function(i) {
    function s() {
      this.init = t(this.init, this), s.__super__.constructor.apply(this, arguments), 
      this.on("pjax:end", _.bind(this.init, this)), this.init();
    }
    return e(s, i), s.prototype.init = function() {
      if (!0 === this.el.data("hide-tooltip")) return this.get(".upgrade-tooltip").remove();
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.removeField = e(this.removeField, this), this.addNewField = e(this.addNewField, this), 
      this.createNestedField = e(this.createNestedField, this), this.el = $(t), this.createNestedField("language", ".add-new-language", ".remove-language", ".profile-languages", "#language-fields-template"), 
      this.createNestedField("award", ".add-new-award", ".remove-award", ".profile-awards", "#award-fields-template"), 
      this.createNestedField("publication", ".add-new-publication", ".remove-publication", ".profile-publications", "#publication-fields-template");
    }
    return t.prototype.createNestedField = function(t, e, i, s, r) {
      if (this.el.on("click", e, {
        title:t,
        templateName:r
      }, this.addNewField), this.el.on("click", i, {
        wrapperClass:s,
        removeLink:i
      }, this.removeField), 1 === this.el.find(s + ":visible").length) return this.el.find(s + ":visible:first " + i).hide();
    }, t.prototype.addNewField = function(t) {
      var e, i, s, r;
      return t.preventDefault(), r = this.el.find(t.data.templateName).html(), i = new Date().getTime(), 
      s = new RegExp("new_" + t.data.title, "g"), e = $(r.replace(s, i)), $(t.currentTarget).before(e), 
      Treehouse.init(), e.find(":input:first").focus();
    }, t.prototype.removeField = function(t) {
      if (t.preventDefault(), $(t.currentTarget).prev("input[type=hidden]").val("1"), 
      $(t.currentTarget).closest("div").hide(), 1 === this.el.find(t.data.wrapperClass + ":visible").length) return this.el.find(t.data.wrapperClass + ":visible:first " + t.data.removeLink).hide();
    }, t;
  }(), Featurette.register("accounts-form", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("analytics-click-event", function(i) {
    function s() {
      this.sendEvent = t(this.sendEvent, this);
      var e;
      s.__super__.constructor.apply(this, arguments), e = [ "eventCategory", "eventAction", "eventLabel", "eventValue" ], 
      this.eventAttrs = _.pick(this.data, e), this.data.target ? this.on("click", this.data.target, this.sendEvent) :this.on("click", this.sendEvent);
    }
    return e(s, i), s.prototype.sendEvent = function() {
      if ("undefined" != typeof ga && null !== ga) return ga("send", "event", this.eventAttrs);
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.success = e(this.success, this), this.listener = e(this.listener, this), this.element = $(t), 
      this.element.click(this.listener);
    }
    return t.prototype.listener = function(t) {
      var e;
      return t.preventDefault(), e = this.element.data("user-id"), $.post("" + window.location.origin + window.location.pathname + "/request_answer", {
        user_id:e
      }, this.success);
    }, t.prototype.success = function() {
      return this.element.text("Asked").addClass("disabled").attr("disabled", "disabled");
    }, t;
  }(), Featurette.register("ask-to-answer", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  Featurette.register("async-icon", Treehouse.AsyncIcon = function() {
    function e(e) {
      this.loadingIcon = t(this.loadingIcon, this), this.loaded = t(this.loaded, this), 
      this.loading = t(this.loading, this), this.el = $(e), this.target = $(this.el.data("target")), 
      this.target.length > 0 && (this.target.on("loading", function(t) {
        return function() {
          return t.loading();
        };
      }(this)), this.target.on("loaded", function(t) {
        return function() {
          return t.loaded();
        };
      }(this)));
    }
    return e.prototype.loading = function() {
      return this.el.css("display", "none"), this.loadingIcon().css("display", "inline-block");
    }, e.prototype.loaded = function() {
      return this.el.css("display", "inline-block"), this.loadingIcon().css("display", "none");
    }, e.prototype.loadingIcon = function() {
      return this.el.siblings(this.el.data("loading-icon"));
    }, e;
  }());
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.strategies = e(this.strategies, this), this.updateElement = e(this.updateElement, this), 
      this.loadElement = e(this.loadElement, this), s.__super__.constructor.apply(this, arguments), 
      this.url = this.data.url, this.strategy = this.data.strategy || "update", this.loadElement();
    }
    return i(s, t), s.prototype.loadElement = function() {
      return $.get(this.url, function(t) {
        return function(e) {
          return t.updateElement(e), t.data.onloadEvent && $(document).trigger(t.data.onloadEvent), 
          Treehouse.init();
        };
      }(this));
    }, s.prototype.updateElement = function(t) {
      return this.strategies()[this.strategy](t);
    }, s.prototype.strategies = function() {
      return {
        update:function(t) {
          return function(e) {
            return t.el.html(e);
          };
        }(this),
        replace:function(t) {
          return function(e) {
            return t.el.replaceWith(e);
          };
        }(this)
      };
    }, s;
  }(Treehouse.View), Featurette.register("async-element", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.CircleProgress = function(i) {
    function s() {
      this.setProgress = t(this.setProgress, this), s.__super__.constructor.apply(this, arguments), 
      this.progress = this.el.data("progress"), this.circumference = this.el.data("diameter") * Math.PI, 
      this.progressBars = this.get("[data-progress-base-overlay], [data-progress-bar]"), 
      this.setProgress(this.progress);
    }
    return e(s, i), s.prototype.setProgress = function(t) {
      return this.progress = t, this.progressBars.attr("stroke-dashoffset", ((100 - this.progress) / 100 * this.circumference).toFixed(3) + "px");
    }, s;
  }(Treehouse.View), Featurette.register("circle-progress", Treehouse.CircleProgress);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      return this.playVideo = e(this.playVideo, this), this.closeOverlay = e(this.closeOverlay, this), 
      s.__super__.constructor.apply(this, arguments);
    }
    return i(s, t), s.prototype.closeOverlay = function() {
      var t;
      return s.__super__.closeOverlay.apply(this, arguments), t = Featurette.get(this.el.find("video").attr("id")), 
      t.reset();
    }, s.prototype.playVideo = function() {
      return this.el.find("video").trigger("play");
    }, s;
  }(Treehouse.Modal), Featurette.register("course-trailer-modal", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.onSubmit = e(this.onSubmit, this), this.onAdminRemove = e(this.onAdminRemove, this), 
      this.onAdminSelected = e(this.onAdminSelected, this), s.__super__.constructor.apply(this, arguments), 
      this.el.on("submit", this.onSubmit), this.el.on("change", ".department-admin select", this.onAdminSelected), 
      this.el.on("click", ".remove-field", this.onAdminRemove);
    }
    return i(s, t), s.prototype.onAdminSelected = function(t) {
      var e, i;
      return e = $(t.target), i = e.find(":selected"), this.addRowForAdmin(i), this.disableAdmin(i), 
      this.resetDropdown(e);
    }, s.prototype.addRowForAdmin = function(t) {
      return this.el.find(".department-administrators").append(this.staticRowForAdmin(t));
    }, s.prototype.staticRowForAdmin = function(t) {
      var e, i, s;
      return e = this.el.find("#department-administrator-fields-template").html(), i = new Date().getTime(), 
      e = e.replace(/new_department_administrator/g, i), s = $(e), s.find("input[name*=user_id]").val(t.val()), 
      s.find(".selected-admin").text(t.text()), s;
    }, s.prototype.disableAdmin = function(t) {
      return t.prop("disabled", !0).trigger("chosen:updated");
    }, s.prototype.resetDropdown = function(t) {
      return t.val("").trigger("chosen:updated");
    }, s.prototype.onAdminRemove = function(t) {
      var e, i;
      return t.preventDefault(), e = $(t.target).parents(".department-admin"), i = e.find("input[name*=user_id]").val(), 
      e.hide(), e.find("input[name*=_destroy]").val("1"), this.el.find("option[value=" + i + "]").prop("disabled", !1).trigger("chosen:updated");
    }, s.prototype.onSubmit = function(t) {
      var e, i;
      return t.preventDefault(), e = t.currentTarget, null != (i = Featurette.get("layout")) && i.loading(), 
      $.ajax({
        url:e.action,
        type:e.method,
        data:this.el.serialize(),
        success:function() {
          return function() {
            return location.reload();
          };
        }(),
        error:function(t) {
          return function(e) {
            var i;
            return t.el.parent().html(e.responseText), Treehouse.init(), null != (i = Featurette.get("layout")) ? i.loaded() :void 0;
          };
        }(this)
      });
    }, s;
  }(Treehouse.View), Featurette.register("department-form", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.populateMemberOptions = e(this.populateMemberOptions, this), this.updateChosen = e(this.updateChosen, this), 
      this.lookupMembers = e(this.lookupMembers, this), s.__super__.constructor.apply(this, arguments), 
      this.on("chosen:showing_dropdown", this.lookupMembers);
    }
    return i(s, t), s.prototype.lookupMembers = function() {
      return $.ajax({
        url:this.el.data("autocomplete-url"),
        dataType:"json",
        success:this.updateChosen
      });
    }, s.prototype.updateChosen = function(t) {
      return this.populateMemberOptions(t), this.el.trigger("chosen:updated");
    }, s.prototype.populateMemberOptions = function(t) {
      var e;
      return e = t.reduce(function(t, e) {
        return t += "<option value='" + e.value + "'>" + e.label + "</option>";
      }, ""), this.el.html(e);
    }, s;
  }(Treehouse.FormSelect), Featurette.register("department-member-autocomplete", t);
}.call(this), function() {
  var t, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i(t) {
      i.__super__.constructor.apply(this, arguments), this.on("change", function(e, i) {
        if ("Add a department..." === i.selected) return window.location = $(t).data("departments-path");
      });
    }
    return e(i, t), i;
  }(Treehouse.FormSelect), Featurette.register("department-select", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.EditBillingForm = function(i) {
    function s() {
      this.clearFormErrors = t(this.clearFormErrors, this), this.unwrapErrors = t(this.unwrapErrors, this), 
      this.displayValidationError = t(this.displayValidationError, this), this.displayCardTokenizerError = t(this.displayCardTokenizerError, this), 
      this.displayValidationErrors = t(this.displayValidationErrors, this), this.authPaypal = t(this.authPaypal, this), 
      this.setupCardTokenizer = t(this.setupCardTokenizer, this), this.validateFields = t(this.validateFields, this), 
      this.finalizeForm = t(this.finalizeForm, this), this.onFormSubmit = t(this.onFormSubmit, this), 
      this.togglePaymentMethod = t(this.togglePaymentMethod, this), s.__super__.constructor.apply(this, arguments), 
      this.creditCardValidator = new Treehouse.CreditCardValidator(this.el), this.on("change", "input[name='payment_method_type']", this.togglePaymentMethod), 
      this.on("submit", this.onFormSubmit), this.togglePaymentMethod(), this.setupCardTokenizer();
    }
    return e(s, i), s.prototype.togglePaymentMethod = function() {
      switch (this.paymentMethodType = this.get("input[name='payment_method_type']").filter(":checked").val(), 
      this.paymentMethodType) {
       case "paypal":
        return this.get(".credit-card-chosen").hide(), this.get(".paypal-chosen").show();

       case "credit_card":
        return this.get(".paypal-chosen").hide(), this.get(".credit-card-chosen").show();

       case "manual":
        return this.get(".credit-card-chosen").hide(), this.get(".paypal-chosen").show();
      }
    }, s.prototype.onFormSubmit = function(t) {
      if (t.preventDefault(), t.stopPropagation(), "credit_card" === this.paymentMethodType) {
        if (!this.validateFields()) return;
        return this.cardTokenizer.tokenizeCard(this.get("#credit_card_number").val(), this.get("#credit_card_month").val(), this.get("#credit_card_year").val(), this.get("#credit_card_cvv").val());
      }
      if ("paypal" === this.paymentMethodType) return this.authPaypal();
    }, s.prototype.finalizeForm = function() {
      return this.get("#credit_card_number").val(""), this.get("#credit_card_cvv").val(""), 
      this.el.get(0).submit();
    }, s.prototype.validateFields = function() {
      return this.clearFormErrors(), "credit_card" === this.paymentMethodType && this.creditCardValidator.validate(), 
      this.errors = $.extend({}, this.creditCardValidator.errors), !Object.keys(this.errors).length || (this.displayValidationErrors(), 
      !1);
    }, s.prototype.setupCardTokenizer = function() {
      var t;
      return t = this.el.data("tokenizer-config"), this.cardTokenizer = new Treehouse.CreditCardTokenizer(this.el.get(0).id, {
        client_token:t.client_token,
        merchant_id:t.merchant_id,
        environment:BraintreeData.environments[t.environment]
      }, this.finalizeForm);
    }, s.prototype.authPaypal = function() {
      var t;
      return t = this.el.data("tokenizer-config"), braintree.setup(t.client_token, "custom", {
        paypal:{
          headless:!0,
          singleUse:!1,
          locale:"en_US",
          enableShippingAddress:!1
        },
        dataCollector:{
          paypal:!0
        },
        onReady:function() {
          return function(t) {
            return t.paypal.initAuthFlow();
          };
        }(),
        onPaymentMethodReceived:function(t) {
          return function(e) {
            return t.el.find("[data-braintree-name=payment_method_nonce]").val(e.nonce), t.finalizeForm();
          };
        }(this)
      });
    }, s.prototype.displayValidationErrors = function() {
      var t, e, i, s;
      i = this.errors, s = [];
      for (e in i) t = i[e], s.push(this.displayValidationError(this.get("#" + e), t));
      return s;
    }, s.prototype.displayCardTokenizerError = function() {
      return this.displayValidationError(this.get("#credit_card_number"), "There was a problem verifying your credit card details.");
    }, s.prototype.displayValidationError = function(t, e) {
      var i, s;
      return i = t, i.siblings().andSelf().wrapAll('<div class="field_with_errors" />'), 
      s = HoganTemplates["signup/field_error"].render({
        error:e
      }), i.after(s);
    }, s.prototype.unwrapErrors = function() {
      return $(".field_with_errors").each(function() {
        var t;
        return t = $(this), t.find("p.error-message").remove(), t.children().unwrap();
      });
    }, s.prototype.clearFormErrors = function() {
      return this.creditCardValidator.clearErrors(), this.hasErrors = !1, this.unwrapErrors();
    }, s;
  }(Treehouse.View), Featurette.register("edit-billing-form", Treehouse.EditBillingForm);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.listener = e(this.listener, this), this.init = e(this.init, this), s.__super__.constructor.apply(this, arguments), 
      this.filters = "a[data-filter-value]", this.el.on("filter-list:updated", this.init), 
      this.el.trigger("filter-list:updated"), this.initialValue();
    }
    return i(s, t), s.prototype.init = function() {
      return this.get(this.filters).off("click", this.listener).on("click", this.listener);
    }, s.prototype.initialValue = function() {
      var t;
      if ((t = Treehouse.queryString()[this.el.attr("id")]) && this.val(t.replace(/\+/g, " ")), 
      void 0 === this.val()) return this.val("");
    }, s.prototype.listener = function(t) {
      var e;
      return t.preventDefault(), e = $(t.target), this.val(e.data("filter-value"));
    }, s.prototype.val = function(t, e) {
      var i;
      return null == e && (e = !0), void 0 === t ? this.get(this.filters).filter(".selected").first().data("filter-value") :(this.get(this.filters).removeClass("selected"), 
      i = this.get(this.filters).filter("[data-filter-value='" + t + "']"), 1 === i.length && i.addClass("selected"), 
      this.get("[data-filter-list-current-value]").html(i.html()), e ? this.el.trigger("change") :void 0);
    }, s;
  }(Treehouse.View), Featurette.register("filter-list", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s(t) {
      this.removeEmptyCategories = e(this.removeEmptyCategories, this), this.populateTemplateGroup = e(this.populateTemplateGroup, this), 
      this.populateForkedWorkspaceSelect = e(this.populateForkedWorkspaceSelect, this), 
      this.resetTemplateSelect = e(this.resetTemplateSelect, this), this.filterTemplates = e(this.filterTemplates, this), 
      this.id = t.id, s.__super__.constructor.apply(this, arguments), this.forkedWorkspaceSelect = $("select#workspace_forked_workspace_id"), 
      this.imageSelect = $("#image_id"), this.el.on("change", this.filterTemplates), this.populateForkedWorkspaceSelect();
    }
    return i(s, t), s.prototype.filterTemplates = function() {
      var t;
      return this.resetTemplateSelect(), t = $("#image_id").val(), "" !== t && (this.forkedWorkspaceSelect.find("option[data-image-id!='" + t + "']").remove(), 
      this.removeEmptyCategories()), this.forkedWorkspaceSelect.trigger("change");
    }, s.prototype.resetTemplateSelect = function() {
      return this.forkedWorkspaceSelect.empty(), this.populateForkedWorkspaceSelect();
    }, s.prototype.populateForkedWorkspaceSelect = function() {
      var t, e, i;
      t = {
        "Content Templates":this.forkedWorkspaceSelect.data("content-templates"),
        Templates:this.forkedWorkspaceSelect.data("starter-templates"),
        "Your Workspaces":this.forkedWorkspaceSelect.data("user-workspaces")
      };
      for (e in t) i = t[e], this.populateTemplateGroup(e, i);
      return this.removeEmptyCategories();
    }, s.prototype.populateTemplateGroup = function(t, e) {
      var i, s, r, n, o, a;
      for (n = $("<optgroup label='" + t + "'></optgroup>"), this.forkedWorkspaceSelect.append(n), 
      o = [], i = 0, s = e.length; i < s; i++) a = e[i], r = $("<option value='" + a.id + "' data-image-id='" + a.image_id + "'></option>"), 
      r.text(a.title), o.push(n.append(r));
      return o;
    }, s.prototype.removeEmptyCategories = function() {
      return this.forkedWorkspaceSelect.find("optgroup:empty").remove();
    }, s;
  }(Treehouse.View), Featurette.register("filter-workspace-templates", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.setPopoverOffset = e(this.setPopoverOffset, this), this.hideDropdown = e(this.hideDropdown, this), 
      this.listener = e(this.listener, this), s.__super__.constructor.apply(this, arguments), 
      this.listenTo(document, "click", this.hideDropdown), this.$discussionTools = $(".discussion-tools"), 
      this.layout = Featurette.get("layout"), this.popover = this.get(".popover"), this.toggle = this.get(".popover-toggle"), 
      this.on("click", "[data-popover-toggle]", this.listener);
    }
    return i(s, t), s.prototype.listener = function() {
      return this.setPopoverOffset(), this.popover.toggle(), this.toggle.toggleClass("selected");
    }, s.prototype.hideDropdown = function(t) {
      var e;
      if (e = $(t.target).closest(".discussion-tools"), this.$discussionTools.not(e).find(".popover").hide().end().find(".popover-toggle").removeClass("selected"), 
      !e.length) return this.el.find(".popover").hide().end().find(".popover-toggle").removeClass("selected");
    }, s.prototype.setPopoverOffset = function() {
      return this.layout.isMobile() && "comment" !== this.el.data("item-type") ? this.popover.removeClass("popover-offset-right").addClass("popover-offset-left") :this.popover.removeClass("popover-offset-left").addClass("popover-offset-right");
    }, s;
  }(Treehouse.View), Featurette.register("forum-moderation-tools", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.renderRepos = e(this.renderRepos, this), this.getRepos = e(this.getRepos, this), 
      this.el = $(t), this.githubUsername = this.el.data("github-username"), this.githubSection = this.el.find("ul"), 
      this.getRepos(this.githubUsername, this.githubSection, this.renderRepos);
    }
    return t.prototype.getRepos = function(t, e) {
      var i, s;
      return i = "https://api.github.com/users/" + t + "/repos", s = this, $.ajax({
        url:i,
        dataType:"jsonp",
        crossDomain:!0,
        success:function(i) {
          var r;
          return r = i.data, r = $.grep(r, function(t) {
            return !t.fork;
          }), r.sort(function(t, e) {
            return e.watchers_count - t.watchers_count;
          }), r = $(r), s.renderRepos(r, t, e);
        }
      });
    }, t.prototype.renderRepos = function(t, e, i) {
      if (t.length > 0 && (i.parent().removeClass("hidden"), t.each(function(t) {
        var s, r;
        return s = {
          repoName:this.name,
          repoDescription:this.description,
          repoUrl:this.html_url,
          repoForksUrl:this.html_url + "/network",
          repoForks:this.forks + " fork" + (1 === this.forks ? "" :"s"),
          repoStargazersUrl:this.html_url + "/stargazers",
          repoStargazers:this.watchers + " stargazer" + (1 === this.watchers ? "" :"s"),
          repoOwner:this.owner.login === e
        }, r = HoganTemplates["profile/github_repo"].render(s), t > 1 && (r = $(r).hide()), 
        i.append(r);
      }), t.length > 2)) return this.setToggle(i);
    }, t.prototype.setToggle = function(t) {
      return t.parent().find("div.show-all-repos").removeClass("hidden"), t.parent().find("div.show-all-repos a.button").click(function() {
        return function(e) {
          var i;
          return t.find("li.grid-50.tablet-grid-50").slice(2).slideToggle(), i = $(e.target), 
          i.text("See all repositories" === i.text() ? "Hide repositories" :"See all repositories");
        };
      }());
    }, t;
  }(), Featurette.register("github-profile", t);
}.call(this), function() {
  var t;
  t = function() {
    function t(t) {
      this.id = t.id, $(t).find("#contact-form .honey-pot-field").remove(), this.resetContactForm(), 
      $(t).find("#contact-form").submit(function(t) {
        return function(e) {
          return t.handleSubmit(e);
        };
      }(this));
    }
    return t.prototype.resetContactForm = function() {
      var t;
      return t = $("#" + this.id), t.find("#contact-form input").add("#" + this.id + " #contact-form textarea").removeClass("field_with_errors"), 
      t.find(".error-message").hide(), t.find(".message").hide(), window.element = t, 
      this.hasBeenSubmitted && t.find("#contact-form").show(), this.hasBeenSubmitted && t.find(".form-footer .button").show(), 
      this.hasBeenSubmitted = !1;
    }, t.prototype.handleSubmit = function(t) {
      var e;
      return e = $("#" + this.id), this.resetContactForm(), e.find("#contact-form").hide(), 
      e.find(".form-footer .button").hide(), e.find(".message.waiting").show(), $.ajax({
        url:"/contact.json",
        type:"POST",
        dataType:"json",
        data:e.find("form").serialize(),
        error:function() {
          return function() {
            return e.find(".message").hide(), e.find(".message.error").show();
          };
        }(),
        success:function(t) {
          return function(i) {
            return e.find(".message").hide(), $.isEmptyObject(i.errors) ? (e.find(".message.success").show(), 
            t.hasBeenSubmitted = !0, e.find("#contact-form textarea").val("")) :(e.find(".message.error").show(), 
            e.find("#contact-form").show(), e.find(".form-footer .button").show(), $.each(i.errors, function(t, i) {
              return e.find("#contact_form_" + t).addClass("field_with_errors").closest("div.form-item").find(".error-message").show().text(i[0]);
            }));
          };
        }(this)
      }), t.preventDefault();
    }, t;
  }(), Featurette.register("help-form", t);
}.call(this), function() {
  var t, e, i = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, s = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  e = function(t) {
    function e() {
      this.launch = i(this.launch, this), this.onClick = i(this.onClick, this), e.__super__.constructor.apply(this, arguments), 
      this.setup(), this.el;
    }
    return s(e, t), e.prototype.setup = function() {
      return this.on("click", this.onClick);
    }, e.prototype.onClick = function(t) {
      return this.launch(this.data.id), null != t ? t.preventDefault() :void 0;
    }, e.prototype.launchOpts = "top=100,left=100,height=768,width=1024,scrollbars=0,location=0,menubar=0,toolbar=0", 
    e.prototype.launch = function(t) {
      var e, i, s;
      return e = "/workspaces/" + t, null != this.win ? this.win.location = e :this.win = window.open(e, null, this.launchOpts), 
      null == this.win && alert("It looks like your pop up blocker blocked the workspace window."), 
      this.win = null, null != (i = Featurette.get(this.el.closest(".modal").attr("id"))) && i.closeOverlay(), 
      null != (s = $(".video-alert .alert")) ? s.remove() :void 0;
    }, e;
  }(Treehouse.View), t = function(t) {
    function e() {
      return this.onError = i(this.onError, this), this.onCreate = i(this.onCreate, this), 
      this.submit = i(this.submit, this), e.__super__.constructor.apply(this, arguments);
    }
    return s(e, t), e.prototype.setup = function() {
      return this.on("submit", this.submit), this.resetErrors(), this.callbackUrl = this.data.callbackUrl, 
      this.redirectUrl = this.data.redirect_url;
    }, e.prototype.submit = function(t) {
      var e, i, s, r;
      return this.resetErrors(), r = this.get("#workspace_title"), 0 === r.val().length ? (i = "<span class='error-message'>A title is required</span>", 
      r.addClass("field_with_errors").after(i), null != t && t.preventDefault(), !1) :(this.win = window.open("about:blank", null, this.launchOpts), 
      e = {
        title:r.val(),
        item_type:this.get("#workspace_item_type").val(),
        item_id:this.get("#workspace_item_id").val(),
        forked_workspace_id:this.get("#workspace_forked_workspace_id").val(),
        workspace_template_group_id:this.get("#workspace_workspace_template_group_id").val()
      }, s = this.get("#source").val(), $.ajax({
        url:"/workspaces",
        type:"POST",
        dataType:"json",
        contentType:"application/json",
        processData:!1,
        headers:{
          "X-CSRF-Token":$("meta[name='csrf-token']").attr("content")
        },
        data:JSON.stringify({
          source:s,
          workspace:e
        }),
        success:function(t) {
          return function(e) {
            return t.onCreate(e.workspace);
          };
        }(this),
        error:function(t) {
          return function(e) {
            return t.onError(e);
          };
        }(this)
      }), null != t ? t.preventDefault() :void 0);
    }, e.prototype.onCreate = function(t) {
      return this.launch(t.id), null != this.redirectUrl ? _.delay(function(t) {
        return function() {
          return location.href = t.redirectUrl;
        };
      }(this), 1e3) :location.pathname.match(/^\/workspaces/) ? _.delay(function() {
        return location.reload();
      }, 1e3) :null != this.callbackUrl ? this.performCallback() :void 0;
    }, e.prototype.onError = function(t) {
      var e, i, s, r, n;
      n = $.parseJSON(t.responseText).errors, (i = n.base) && (delete n.base, this.get(".field-container").first().before("<div class='error message'><p>" + i[0] + "</p></div>"));
      for (e in n) s = n[e], this.get("#workspace_" + e).addClass("field_with_errors").after("<span class='error-message'>" + s[0] + "</span>");
      return null != (r = this.win) ? r.close() :void 0;
    }, e.prototype.resetErrors = function() {
      return this.get(".error-message").remove();
    }, e.prototype.performCallback = function() {
      return $.ajax({
        type:"GET",
        url:this.callbackUrl,
        success:function() {
          return function(t) {
            return $("#workspaces-tab-content").html(t), Treehouse.init();
          };
        }()
      });
    }, e;
  }(e), Featurette.register("launch-workspace", e), Featurette.register("launch-new-workspace", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.onStepPassed = e(this.onStepPassed, this), this.pollStatus = e(this.pollStatus, this), 
      this.submitFile = e(this.submitFile, this), this.showUploadDialog = e(this.showUploadDialog, this), 
      s.__super__.constructor.apply(this, arguments), this.on("click", ".upload button", this.showUploadDialog), 
      this.on("change", ".local-code-challenge-file-submission", this.submitFile), this.uploadForm = this.get(".upload form"), 
      this.uploadBtn = this.get(".upload button"), this.fileUpload = this.get(".local-code-challenge-file-submission"), 
      "submitted" === this.data.submissionStatus ? this.pollStatus() :"passed" === this.data.submissionStatus && this.data.showLastResults && _.delay(this.onStepPassed, 2e3);
    }
    return i(s, t), s.prototype.maxUploadSize = 5242880, s.prototype.validZipHeader = [ 80, 75, 3, 4 ], 
    s.prototype.showUploadDialog = function(t) {
      return t.preventDefault(), t.stopPropagation(), this.fileUpload.trigger("click"), 
      !1;
    }, s.prototype.submitFile = function(t) {
      var e;
      if (t.preventDefault(), t.stopPropagation(), e = this.fileUpload[0].files[0]) return this.validateAndUpload(e);
    }, s.prototype.validateAndUpload = function(t) {
      var e;
      return t.name.match(/\.zip$/i) ? t.size > this.maxUploadSize ? this.showUploadError(t, "cannot exceed 5 MB") :(e = new FileReader(), 
      e.onload = function(e) {
        return function(i) {
          var s;
          return s = _.toArray(new Uint8Array(i.target.result, 0, 4)), _.isEqual(s, e.validZipHeader) ? e.uploadFile() :e.showUploadError(t, "is not a valid .zip file");
        };
      }(this), e.readAsArrayBuffer(t)) :this.showUploadError(t, "is not a valid .zip file");
    }, s.prototype.uploadFile = function() {
      return this.uploadForm.submit(), this.uploadBtn.prop("disabled", !0).addClass("disabled");
    }, s.prototype.showUploadError = function(t, e) {
      return alert('Oops, "' + t.name + '" ' + e + "."), this.uploadBtn.prop("disabled", !1).removeClass("disabled"), 
      this.fileUpload.val(null), !1;
    }, s.prototype.pollStatus = function() {
      return $.getJSON(decodeURIComponent(this.data.statusUrl), function(t) {
        return function(e) {
          var i, s;
          if (location.pathname === t.data.url) return s = e.submission, "passed" === (i = s.status) || "failed" === i || "errored" === i ? location.reload() :_.delay(t.pollStatus, 2e3);
        };
      }(this));
    }, s.prototype.onStepPassed = function() {
      return $(document).trigger("step-passed");
    }, s;
  }(Treehouse.View), Featurette.register("local-code-challenge", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.locationSource = e(this.locationSource, this), this.el = $(t).autocomplete({
        minLength:5,
        source:this.locationSource,
        open:function() {
          return $(this).autocomplete("widget").zIndex(5);
        }
      });
    }
    return t.prototype.locationSource = function(t, e) {
      return $.ajax({
        url:this.el.data("autocomplete-url"),
        data:{
          q:t.term
        },
        dataType:"json",
        success:e
      });
    }, t;
  }(), Featurette.register("location-autocomplete", t);
}.call(this), function() {
  var t, e, i, s = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, r = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) n.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, n = {}.hasOwnProperty;
  t = function(t) {
    function e() {
      this.undoSelectChanges = s(this.undoSelectChanges, this), this.showError = s(this.showError, this), 
      this.hideError = s(this.hideError, this), this.showConfirmation = s(this.showConfirmation, this), 
      this.hideConfirmation = s(this.hideConfirmation, this), this.showDetails = s(this.showDetails, this), 
      this.hideDetails = s(this.hideDetails, this), this.triggerUpdate = s(this.triggerUpdate, this), 
      this.performAction = s(this.performAction, this), this.cancelAction = s(this.cancelAction, this), 
      this.disableButton = s(this.disableButton, this), this.updateStatus = s(this.updateStatus, this), 
      this.updateDepartment = s(this.updateDepartment, this), this.departmentSelect = s(this.departmentSelect, this), 
      this.statusSelect = s(this.statusSelect, this), e.__super__.constructor.apply(this, arguments), 
      this.status = this.statusSelect().find("option:selected").val(), this.department = this.departmentSelect().find("option:selected").val(), 
      this.on("change", "select[name=department]", this.updateDepartment), this.on("change", "select[name=status]", this.updateStatus), 
      this.on("click", ".member-action-confirmation button.secondary", this.cancelAction), 
      this.on("click", "button.primary", this.disableButton), this.on("click", ".update-department button.primary", this.updateDepartment), 
      this.on("click", ".member-action-confirmation button.primary", this.performAction), 
      this.on("click", ".member-action-error button", this.hideError);
    }
    return r(e, t), e.prototype.statusSelect = function() {
      return this.get("select[name=status]");
    }, e.prototype.departmentSelect = function() {
      return this.get("select[name=department]");
    }, e.prototype.updateDepartment = function() {
      var t, e, i, s;
      if (t = this.departmentSelect().data("action"), i = this.departmentSelect().data("member-type"), 
      s = this.departmentSelect().find("option:selected").val(), e = {
        member_type:i,
        department_id:s
      }, s !== this.department) return $.ajax(t, {
        type:"PUT",
        data:e
      }).done(function(t) {
        return function() {
          return t.triggerUpdate();
        };
      }(this)).fail(function(t) {
        return function() {
          return t.undoSelectChanges(), t.showError();
        };
      }(this));
    }, e.prototype.updateStatus = function() {
      var t;
      if ((t = this.statusSelect().find("option:selected").val()) !== this.status) return this.showConfirmation(t);
    }, e.prototype.disableButton = function(t) {
      return this.disable(t.target);
    }, e.prototype.cancelAction = function() {
      return this.hideConfirmation(), this.showDetails(), this.undoSelectChanges();
    }, e.prototype.performAction = function(t) {
      var e, i, s;
      return i = $(t.target).data("url"), s = $(t.target).data("method"), null != (e = Featurette.get("layout")) && e.loading(), 
      $("#member-table").addClass("transparent-while-loading"), $.ajax(i, {
        type:s
      }).done(function(t) {
        return function() {
          return t.triggerUpdate();
        };
      }(this)).fail(function(t) {
        return function(e) {
          var i, s;
          return null != (s = Featurette.get("layout")) && s.loaded(), $("#member-table").removeClass("transparent-while-loading"), 
          t.undoSelectChanges(), 422 === e.status && (i = e.responseText), t.showError(i);
        };
      }(this));
    }, e.prototype.triggerUpdate = function() {
      return this.el.trigger("organization-member:updated");
    }, e.prototype.hideDetails = function() {
      return this.hide(this.get(".member-row"));
    }, e.prototype.showDetails = function() {
      return this.show(this.get(".member-row"));
    }, e.prototype.hideConfirmation = function() {
      return this.hide(this.get(".member-action-confirmation")), this.enable(this.get("button.primary"));
    }, e.prototype.showConfirmation = function(t) {
      return this.hideDetails(), this.show(this.get(".member-action-confirmation." + t));
    }, e.prototype.hideError = function() {
      return this.hide(this.get(".member-action-error")), this.showDetails();
    }, e.prototype.showError = function(t) {
      if (this.hideDetails(), this.hideConfirmation(), this.show(this.get(".member-action-error")), 
      t) return this.get(".member-action-error span").html(t);
    }, e.prototype.undoSelectChanges = function() {
      return this.statusSelect().val(this.status).change(), this.departmentSelect().val(this.department).change();
    }, e.prototype.hide = function(t) {
      return t.addClass("hidden");
    }, e.prototype.show = function(t) {
      return t.removeClass("hidden");
    }, e.prototype.disable = function(t) {
      var e;
      return e = $(t), e.prop("disabled", !0), e.addClass("disabled");
    }, e.prototype.enable = function(t) {
      var e;
      return e = $(t), e.prop("disabled", !1), e.removeClass("disabled");
    }, e;
  }(Treehouse.View), null != (e = this.Treehouse) && null != (i = e.Organizations) && (i.MemberRow = t), 
  Featurette.register("Treehouse.Organizations.MemberRow", t);
}.call(this), function() {
  var t, e, i, s = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, r = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) n.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, n = {}.hasOwnProperty;
  t = function(t) {
    function e() {
      this.hideBulkSuccess = s(this.hideBulkSuccess, this), this.updateRowCount = s(this.updateRowCount, this), 
      this.toggleSelectAll = s(this.toggleSelectAll, this), this.performBulkAction = s(this.performBulkAction, this), 
      this.hideBulkError = s(this.hideBulkError, this), this.disableUsersBulkAction = s(this.disableUsersBulkAction, this), 
      this.confirmBulkAction = s(this.confirmBulkAction, this), this.updateMembersList = s(this.updateMembersList, this), 
      this.resetDateFilters = s(this.resetDateFilters, this), this.checkForBlankDateInputs = s(this.checkForBlankDateInputs, this), 
      this.applyDateFilters = s(this.applyDateFilters, this), this.filterOptions = s(this.filterOptions, this), 
      this.setupFilters = s(this.setupFilters, this), this.addMembersToOrganization = s(this.addMembersToOrganization, this), 
      this.disableInvitationForm = s(this.disableInvitationForm, this), this.enableInvitationForm = s(this.enableInvitationForm, this), 
      this.verifyAvailableSeats = s(this.verifyAvailableSeats, this), this.removeInvitation = s(this.removeInvitation, this), 
      this.hideCSVFileError = s(this.hideCSVFileError, this), this.uploadCSV = s(this.uploadCSV, this), 
      this.resetForm = s(this.resetForm, this), this.handlePagination = s(this.handlePagination, this), 
      this.showCSVForm = s(this.showCSVForm, this), this.showNewMemberForm = s(this.showNewMemberForm, this), 
      this.loaded = s(this.loaded, this), this.loading = s(this.loading, this), e.__super__.constructor.apply(this, arguments), 
      this.on("click", "#add-member-button", this.showNewMemberForm), this.on("click", "#toggle-csv", this.showCSVForm), 
      this.on("click", "#add-member-button.secondary, button[type=cancel]", this.resetForm), 
      this.on("click", ".upload-file", this.uploadCSV), this.on("click", "#csv-file-upload", this.hideCSVFileError), 
      this.on("click", ".remove-row", this.removeInvitation), this.on("submit", "#new-member-form", this.addMembersToOrganization), 
      this.on("click", "[data-element='apply-date-filters']", this.applyDateFilters), 
      this.on("click", "[data-element='reset-date-filters']", this.resetDateFilters), 
      this.on("click", ".pagination-container a", this.handlePagination), this.on("change", "[data-element='bulk-select-all']", this.toggleSelectAll), 
      this.on("change", "[data-element='bulk-checkbox']", this.updateRowCount), this.on("click", "[data-element='select-bulk'] button", this.confirmBulkAction), 
      this.on("click", "[data-element='confirm-bulk'] button.primary", this.performBulkAction), 
      this.on("click", "[data-element='confirm-bulk'] button.secondary", this.disableUsersBulkAction), 
      this.on("click", "[data-element='bulk-error'] button", this.hideBulkError), this.on("click", "[data-element='bulk-success'] button", this.hideBulkSuccess), 
      this.on("pjax:start", this.clearElementsCache), this.on("pjax:end", this.setupFilters), 
      this.on("pjax:start", this.loading), this.on("pjax:end", this.loaded), this.listenTo("body", "organization-member:updated", this.updateMembersList), 
      this.setupFilters();
    }
    return r(e, t), e.prototype.loading = function() {
      var t;
      return null != (t = Featurette.get("layout")) && t.loading(), this.el.addClass("transparent-while-loading");
    }, e.prototype.loaded = function() {
      var t;
      return null != (t = Featurette.get("layout")) && t.loaded(), this.el.removeClass("transparent-while-loading");
    }, e.prototype.showNewMemberForm = function() {
      return this.show(this.get("#new-member-form")), this.get("#add-member-button").addClass("secondary"), 
      this.get("#invitations__email").select();
    }, e.prototype.showCSVForm = function(t) {
      return t.preventDefault(), this.el.find("#new-member-form").addClass("csv-upload-active");
    }, e.prototype.handlePagination = function(t) {
      return this.paginatedPageState = t.currentTarget.href, $.pjax.click(t, {
        container:this.el
      });
    }, e.prototype.resetForm = function(t) {
      return t.preventDefault(), $.pjax({
        url:this.paginatedPageState || window.location.href,
        type:"GET",
        cache:!1,
        push:!1,
        scrollTo:!1,
        container:this.el
      });
    }, e.prototype.uploadCSV = function(t) {
      var e, i, s, r;
      return t.preventDefault(), e = document.getElementById("csv-file-upload").files[0], 
      r = $("meta[name='csrf-token']").attr("content"), e && this.isValidCSVFileSpec(e) ? (s = new FormData(), 
      s.append("csv_file", e, e.name), i = this.getFiltersFromUrl(), $.pjax({
        url:this.el.data("file-upload-path") + i,
        type:"POST",
        data:s,
        headers:{
          "X-CSRF-Token":r
        },
        cache:!1,
        contentType:!1,
        processData:!1,
        container:this.el,
        push:!1,
        scrollTo:!1
      })) :void this.show(this.get("[data-element='csv-file-error']"));
    }, e.prototype.hideCSVFileError = function() {
      return this.hide(this.get("[data-element='csv-file-error']"));
    }, e.prototype.isValidCSVFileSpec = function(t) {
      return t.type.match("text/csv") || /\.csv$/i.test(t.name);
    }, e.prototype.removeInvitation = function(t) {
      var e;
      return t.preventDefault(), e = $(t.currentTarget).closest(".member-upload-list"), 
      e.remove(), this.verifyAvailableSeats();
    }, e.prototype.verifyAvailableSeats = function() {
      return parseInt(this.data.seatsAvailable) < this.el.find(".member-upload-list").length ? this.disableInvitationForm() :(this.enableInvitationForm(), 
      this.get(".alert-banner.error").remove());
    }, e.prototype.enableInvitationForm = function() {
      return this.get(".send-invitations-actions button[type='submit']").attr("disabled", !1).addClass("primary").removeClass("disabled");
    }, e.prototype.disableInvitationForm = function() {
      return this.get(".send-invitations-actions button[type='submit']").attr("disabled", !1).addClass("disabled").removeClass("primary");
    }, e.prototype.addMembersToOrganization = function(t) {
      var e, i;
      return t.preventDefault(), i = this.get("#new-member-form"), e = this.getFiltersFromUrl(), 
      $.pjax({
        url:i.attr("action") + e,
        type:"POST",
        data:i.serialize(),
        container:this.el,
        push:!1,
        scrollTo:this.el.offset().top - 20
      });
    }, e.prototype.setupFilters = function() {
      return this.setupDateFilters(), _.delay(function(t) {
        return function() {
          return new Filters({
            basePath:"organization/members",
            container:t.el,
            binds:t.filterOptions()
          });
        };
      }(this), 100);
    }, e.prototype.filterOptions = function() {
      var t;
      return t = {}, t.search = this.get("#search"), t.sort = Featurette.get("org-members-sort"), 
      Featurette.get("org-members-department-filter") && (t.department = Featurette.get("org-members-department-filter")), 
      Featurette.get("org-members-curriculum-filter") && (t.curriculum = Featurette.get("org-members-curriculum-filter")), 
      t.status = Featurette.get("org-members-status-filter"), t.dates = Featurette.get("org-members-dates-filter"), 
      t;
    }, e.prototype.setupDateFilters = function() {
      var t;
      if (t = location.pathname.match(/dates:(\d{1,2}-\D{3}-\d{4}..\d{1,2}-\D{3}-\d{4})/)) return this.get("[data-element='dates-filter']").attr("data-filter-value", t[1]);
    }, e.prototype.applyDateFilters = function() {
      var t, e, i, s, r, n, o, a, l, h, u, c;
      return this.get(".org-date-picker select").parent().removeClass("field_with_errors"), 
      this.checkForBlankDateInputs() ? (s = parseInt(this.get("#from_month").val()) - 1, 
      i = parseInt(this.get("#from_day").val()), r = parseInt(this.get("#from_year").val()), 
      a = parseInt(this.get("#to_month").val()) - 1, o = parseInt(this.get("#to_day").val()), 
      l = parseInt(this.get("#to_year").val()), e = new Date(r, s, i), n = new Date(l, a, o), 
      u = Date.validateDay(i, r, s), c = Date.validateDay(o, l, a), h = e < n, this.checkFilterDates(u, c, h) ? (t = e.toString("d-MMM-yyyy") + ".." + n.toString("d-MMM-yyyy"), 
      this.get("[data-element='dates-filter']").attr("data-filter-value", t).click()) :void 0) :this.show(this.get("[data-element='dates-error']"));
    }, e.prototype.checkForBlankDateInputs = function() {
      var t;
      return t = !0, this.get(".org-date-picker select").each(function() {
        if ("" === $(this).val()) return t = !1, $(this).parent().addClass("field_with_errors");
      }), t;
    }, e.prototype.checkFilterDates = function(t, e, i) {
      return t && e ? !!i || (this.show(this.get("[data-element='dates-error']")), this.get(".org-date-picker select").parent().addClass("field_with_errors"), 
      !1) :(this.show(this.get("[data-element='dates-error']")), t || this.get("[data-element='from-date'] select").parent().addClass("field_with_errors"), 
      e || this.get("[data-element='to-date'] select").parent().addClass("field_with_errors"), 
      !1);
    }, e.prototype.resetDateFilters = function() {
      return this.get("[data-element='dates-filter']").attr("data-filter-value", "").click();
    }, e.prototype.updateMembersList = function(t, e) {
      return t.preventDefault(), t.currentTarget.href && (this.paginatedPageState = t.currentTarget.href), 
      $.pjax({
        url:this.paginatedPageState || window.location.href,
        container:this.el,
        push:!1,
        scrollTo:!!e && this.el.offset().top - 20
      }).done(function(t) {
        return function() {
          if (e) return t.showBulkSuccess(e);
        };
      }(this));
    }, e.prototype.confirmBulkAction = function() {
      var t;
      if ((t = this.get("[data-element='select-bulk'] select").val()) && this.runBulkChecks(t)) return this.hide(this.get("[data-element='select-bulk']")), 
      this.show(this.get("[data-action='" + t + "']"));
    }, e.prototype.disableUsersBulkAction = function() {
      return this.hide(this.get("[data-element='confirm-bulk']")), this.show(this.get("[data-element='select-bulk']"));
    }, e.prototype.showBulkError = function(t) {
      if (this.hide(this.get("[data-element='select-bulk']")), this.hide(this.get("[data-element='confirm-bulk']")), 
      this.show(this.get("[data-element='bulk-error']")), t) return this.get("[data-element='bulk-error'] span").html(t);
    }, e.prototype.hideBulkError = function() {
      return this.hide(this.get("[data-element='bulk-error']")), this.show(this.get("[data-element='select-bulk']"));
    }, e.prototype.performBulkAction = function(t) {
      var e, i, s, r;
      if (r = $(t.target).closest(".member-action-confirmation").data("action"), e = this.runBulkChecks(r)) return i = $(t.target).data("url"), 
      s = $(t.target).data("method"), this.loading(), $.ajax(i, {
        type:s,
        data:{
          member_ids:e
        }
      }).done(function(i) {
        return function() {
          var s;
          return s = i.bulkSuccessMessage(e.length, r), i.updateMembersList(t, s);
        };
      }(this)).fail(function(t) {
        return function(e) {
          var i;
          return t.loaded(), 422 === e.status && (i = e.responseText), t.showBulkError(i);
        };
      }(this));
    }, e.prototype.runBulkChecks = function(t) {
      var e, i, s, r;
      return i = this.getMemberInfo(), s = i.statuses, r = this.requiredStatus(t), 0 === s.length ? (this.showBulkError("You have not selected any rows."), 
      !1) :this.checkArrayItemsAreAll(s, r) ? i.ids :(e = this.actionWords(t), this.showBulkError("Not all the selected rows can have " + e[0] + "s " + e[1] + "."), 
      !1);
    }, e.prototype.requiredStatus = function(t) {
      switch (t) {
       case "enable-users":
        return "disabled";

       case "disable-users":
        return "enabled";

       case "resend-invitations":
       case "cancel-invitations":
        return "invited";
      }
    }, e.prototype.actionWords = function(t) {
      switch (t) {
       case "enable-users":
        return [ "account", "reactivated" ];

       case "disable-users":
        return [ "account", "disabled" ];

       case "resend-invitations":
        return [ "invitation", "resent" ];

       case "cancel-invitations":
        return [ "invitation", "canceled" ];
      }
    }, e.prototype.bulkSuccessMessage = function(t, e) {
      var i;
      return i = this.actionWords(e), 1 === t ? "The 1 member you selected has successfully had their " + i[0] + " " + i[1] + "." :"The " + t + " members you selected have successfully had their " + i[0] + "s " + i[1] + ".";
    }, e.prototype.getMemberInfo = function() {
      var t;
      return t = {
        ids:[],
        statuses:[]
      }, this.get("[data-element='bulk-checkbox']").filter(":checked").each(function() {
        return t.ids.push($(this).val()), t.statuses.push($(this).closest("tr").find("#status").val());
      }), t;
    }, e.prototype.checkArrayItemsAreAll = function(t, e) {
      return t.every(function(t) {
        return t === e;
      });
    }, e.prototype.toggleSelectAll = function(t) {
      return t.target.checked ? this.get("[data-element='bulk-checkbox']").prop("checked", !0) :this.get("[data-element='bulk-checkbox']").prop("checked", !1), 
      this.updateRowCount();
    }, e.prototype.updateRowCount = function() {
      var t;
      return t = this.get("[data-element='bulk-checkbox']").filter(":checked").length, 
      this.get(".selected-count").html(t), 1 === t ? this.hide(this.get(".plural")) :this.show(this.get(".plural")), 
      this.checkForSelectAll();
    }, e.prototype.checkForSelectAll = function() {
      return this.get("[data-element='bulk-checkbox']").length === this.get("[data-element='bulk-checkbox']").filter(":checked").length ? this.get("[data-element='bulk-select-all']").prop("checked", !0) :this.get("[data-element='bulk-select-all']").prop("checked", !1);
    }, e.prototype.showBulkSuccess = function(t) {
      return this.show(this.get("[data-element='bulk-success']")), this.get("[data-element='bulk-success'] span").html(t);
    }, e.prototype.hideBulkSuccess = function() {
      return this.hide(this.get("[data-element='bulk-success']"));
    }, e.prototype.show = function(t) {
      return t.removeClass("hidden");
    }, e.prototype.hide = function(t) {
      return t.addClass("hidden");
    }, e.prototype.getFiltersFromUrl = function() {
      return location.pathname.replace("/organization/members", "");
    }, e;
  }(Treehouse.View), null != (e = this.Treehouse) && null != (i = e.Organizations) && (i.MembersTable = t), 
  Featurette.register("Treehouse.Organizations.MembersTable", t);
}.call(this), function() {
  var t, e, i, s = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, r = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) n.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, n = {}.hasOwnProperty;
  t = function(t) {
    function e() {
      this.validateAllInvitations = s(this.validateAllInvitations, this), this.validateInvitation = s(this.validateInvitation, this), 
      this.validateLastName = s(this.validateLastName, this), this.validateFirstName = s(this.validateFirstName, this), 
      this.validateEmail = s(this.validateEmail, this), this.validatePassword = s(this.validatePassword, this), 
      this.completeMembersStep = s(this.completeMembersStep, this), this.completeBillingContactStep = s(this.completeBillingContactStep, this), 
      this.completePasswordStep = s(this.completePasswordStep, this), e.__super__.constructor.apply(this, arguments), 
      this.beginFirstStep(), this.on("change", "#organization_user_password", this.validatePassword), 
      this.on("change", "#organization_billing_contact_email", this.validateEmail), this.on("change", "#organization_billing_contact_first_name", this.validateFirstName), 
      this.on("change", "#organization_billing_contact_last_name", this.validateLastName), 
      this.on("change", ".organization_invitation_email", this.validateInvitation), this.on("click", "[data-onboarding-step='password'] .button.primary", this.completePasswordStep), 
      this.on("click", "[data-onboarding-step='billing_contact'] .button.primary", this.completeBillingContactStep), 
      this.on("click", "[data-onboarding-step='members'] .button.primary", this.completeMembersStep);
    }
    return r(e, t), e.prototype.beginFirstStep = function() {
      return this.get("[data-onboarding-step]").hide(), this.get("[data-onboarding-step-number='1']").show();
    }, e.prototype.completePasswordStep = function(t) {
      if (this.validatePassword()) return this.goToNextStep(t);
    }, e.prototype.completeBillingContactStep = function(t) {
      if (this.validateEmail() && this.validateFirstName() && this.validateLastName()) return this.goToNextStep(t);
    }, e.prototype.completeMembersStep = function(t) {
      if (this.validateAllInvitations()) return this.el.addClass("transparent-while-loading"), 
      $(t.target).attr("disabled", !0), this.get("#organization_onboarding_form").get(0).submit();
    }, e.prototype.goToNextStep = function(t) {
      var e, i, s, r;
      return e = $(t.target).closest("[data-onboarding-step]"), s = e.next(), i = e.data("onboardingStep"), 
      r = s.data("onboardingStep"), e.hide(), s.show(), this.get("[data-onboarding-title-step='" + i + "']").removeClass("current"), 
      this.get("[data-onboarding-title-step='" + r + "']").addClass("current"), this.get("[data-onboarding-title-step='" + i + "'] span").html("&nbsp;").addClass("finished");
    }, e.prototype.validatePassword = function() {
      var t, e, i;
      return i = this.get("#organization_user_password"), this.clearValidationError(i), 
      e = i.val(), !(e.length < 6) || (t = "Password must be at least 6 characters.", 
      this.displayValidationError(i, t), !1);
    }, e.prototype.validateEmail = function() {
      return this.validateEmailFormat(this.get("#organization_billing_contact_email"));
    }, e.prototype.validateFirstName = function() {
      return this.validatePresence(this.get("#organization_billing_contact_first_name"));
    }, e.prototype.validateLastName = function() {
      return this.validatePresence(this.get("#organization_billing_contact_last_name"));
    }, e.prototype.validateInvitation = function(t) {
      return this.validateEmailFormat($(t.target), !0);
    }, e.prototype.validateAllInvitations = function() {
      var t;
      return t = !0, this.get(".organization_invitation_email").each(function(e) {
        return function(i, s) {
          if (!e.validateEmailFormat($(s), !0)) return t = !1;
        };
      }(this)), t;
    }, e.prototype.validatePresence = function(t) {
      return this.clearValidationError(t), 0 !== t.val().length || (this.displayValidationError(t, "This is required."), 
      !1);
    }, e.prototype.validateEmailFormat = function(t, e) {
      return this.clearValidationError(t), !!this.isValidEmailFormat(t, e) || (this.displayValidationError(t, "Email address is invalid."), 
      !1);
    }, e.prototype.isValidEmailFormat = function(t, e) {
      var i;
      return i = RegExp(/^[A-Z0-9_\.%\+\-']+@(?:[A-Z0-9\-]+\.)+(?:[A-Z]{2,13})$/i), e ? i.test(t.val()) || 0 === t.val().length :i.test(t.val());
    }, e.prototype.displayValidationError = function(t, e) {
      var i, s;
      return i = t, t.is("select") && (i = t.parent()), i.siblings("label").wrap("<div class='field_with_errors'>"), 
      i.wrap("<div class='field_with_errors'>"), s = HoganTemplates["signup/field_error"].render({
        error:e
      }), i.after(s);
    }, e.prototype.clearValidationError = function(t) {
      var e;
      return e = t.closest(".field_with_errors"), this.unwrapError(e);
    }, e.prototype.unwrapError = function(t) {
      if (t) return t.find("p.error-message").remove(), t.children().unwrap();
    }, e;
  }(Treehouse.View), null != (e = this.Treehouse) && null != (i = e.Organizations) && (i.Onboarding = t), 
  Featurette.register("Treehouse.Organizations.Onboarding", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.toggleStateProvinceField = e(this.toggleStateProvinceField, this), s.__super__.constructor.apply(this, arguments), 
      this.prefix = this.el.data("prefix"), this.on("change", "#" + this.prefix + "_country", this.toggleStateProvinceField), 
      this.toggleStateProvinceField();
    }
    return i(s, t), s.prototype.toggleStateProvinceField = function() {
      return "US" === this.get("#" + this.prefix + "_country").val() ? (this.get("#state_province_non_us").addClass("hidden"), 
      this.get("#state_province").removeClass("hidden")) :(this.get("#state_province").addClass("hidden"), 
      this.get("#state_province_non_us").removeClass("hidden"));
    }, s;
  }(Treehouse.View), Featurette.register("organization-settings", t);
}.call(this), function() {
  var t, e, i, s = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, r = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) n.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, n = {}.hasOwnProperty;
  t = function(t) {
    function e() {
      this.toggleExpiredLicenses = s(this.toggleExpiredLicenses, this), e.__super__.constructor.apply(this, arguments), 
      this.on("click", "#toggle-expired", this.toggleExpiredLicenses);
    }
    return r(e, t), e.prototype.toggleExpiredLicenses = function(t) {
      return t.preventDefault(), this.expanded ? this.contract() :this.expand();
    }, e.prototype.expand = function() {
      return this.get("#expired-table").stop(!0, !0).show(), this.get("#toggle-expired").addClass("selected"), 
      this.get("#toggle-expired span").text("Hide"), this.expanded = !0;
    }, e.prototype.contract = function() {
      return this.get("#expired-table").stop(!0, !0).hide(), this.get("#toggle-expired").removeClass("selected"), 
      this.get("#toggle-expired span").text("Show"), this.expanded = !1;
    }, e;
  }(Treehouse.View), null != (e = this.Treehouse) && null != (i = e.Organizations) && (i.Degrees = t), 
  Featurette.register("Treehouse.Organizations.Degrees", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.ConfirmationBar = function(i) {
    function s() {
      this.cancel = t(this.cancel, this), this.submit = t(this.submit, this), this.showConfirmation = t(this.showConfirmation, this), 
      s.__super__.constructor.apply(this, arguments), this.on("click", ".show-confirmation", this.showConfirmation), 
      this.on("click", ".confirmation-bar-buttons .primary", this.submit), this.on("click", ".confirmation-bar-buttons .secondary", this.cancel);
    }
    return e(s, i), s.prototype.showConfirmation = function(t) {
      return t.preventDefault(), this.get(".member-row").addClass("hidden"), this.get(".techdegree-action-confirmation").removeClass("hidden");
    }, s.prototype.submit = function() {
      return this.get("form").submit(), $(".grid-container").addClass("transparent-while-loading");
    }, s.prototype.cancel = function() {
      return this.get(".techdegree-action-confirmation").addClass("hidden"), this.get(".member-row").removeClass("hidden");
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments);
    }
    return e(i, t), i.prototype.showConfirmation = function(t) {
      var e;
      if (t.preventDefault(), this.get("select").val()) return i.__super__.showConfirmation.apply(this, arguments), 
      e = this.get(".chosen-single").text().trim(), this.get(".assignee-name").text(e);
    }, i;
  }(Treehouse.ConfirmationBar), Featurette.register("assign-degree-to-user", t);
}.call(this), function() {
  var t, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments);
    }
    return e(i, t), i;
  }(Treehouse.ConfirmationBar), Featurette.register("remove-dept-degree-allocation", t);
}.call(this), function() {
  var t, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.availableSeats = parseInt(this.get(".available-seats").text());
    }
    return e(i, t), i.prototype.showConfirmation = function() {
      var t;
      return i.__super__.showConfirmation.apply(this, arguments), t = this.get("#number_to_allocate").val(), 
      this.get(".seats-to-allocate").text(t), this.get(".remaining-seats").text(this.availableSeats - t);
    }, i;
  }(Treehouse.ConfirmationBar), Featurette.register("allocate-degree-to-dept", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.dateChanged = e(this.dateChanged, this), s.__super__.constructor.apply(this, arguments), 
      this.on("change keyup", "[data-assignment-due-on]", this.dateChanged), this.dateChanged();
    }
    return i(s, t), s.prototype.dateChanged = function() {
      var t, e;
      return e = this.get("[data-assignment-due-on]").val(), t = new Date(e + " 23:59:59"), 
      this.updateHint(t);
    }, s.prototype.updateHint = function(t) {
      var e, i, s, r, n;
      if (t && !isNaN(t.getTime())) return e = (t - new Date()) / 1e3 / 60 / 60 / 24, 
      this.get("[data-due-date-hint]").hide(), Math.ceil(e) >= 7 ? (n = Math.max(1, e / 7), 
      s = this.data.estimatedMinutes / n, r = s / 5, this.get("[data-per-week]").text(this.formatMinutes(s)), 
      this.get("[data-per-weekday]").text(this.formatMinutes(r)), this.get("[data-due-date-hint-weekly]").show()) :Math.ceil(e) >= 1 ? (i = this.data.estimatedMinutes / Math.ceil(e), 
      this.get("[data-per-day]").text(this.formatMinutes(i)), this.get("[data-due-date-hint-daily]").show()) :void 0;
    }, s.prototype.formatMinutes = function(t) {
      var e;
      return e = t / 60, e = Math.round(10 * e) / 10, t = Math.ceil(t), 1 === t ? "1 minute" :t < 60 ? t + " minutes" :1 === e ? "1 hour" :e + " hours";
    }, s;
  }(Treehouse.View), Featurette.register("Treehouse.Organizations.DueDateHint", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.onFormSubmit = e(this.onFormSubmit, this);
      var i;
      this.textarea = $(t), this.form = this.textarea.closest("form"), this.textarea.mentionsInput({
        onDataRequest:this.onDataRequest,
        triggerChar:"@",
        minChars:1,
        showAvatars:!0,
        elastic:!1,
        templates:{
          autocompleteList:_.template('<ul class="user-tagging"></ul>'),
          autocompleteListItem:_.template('<li data-ref-id="<%= id %>" data-ref-type="<%= type %>" data-display="<%= display %>"><a><strong><%= content %></strong><p>@<%= username %></p></a></li>'),
          autocompleteListItemAvatar:_.template('<div class="deprecated-avatar <%= type %>" style="background-image: url(<%= avatar %>)"></div>')
        }
      }), (i = this.textarea.data("mentions")) && this.textarea.mentionsInput("setMentions", this.textarea.data("mentions-body"), i), 
      this.form.on("submit", this.onFormSubmit);
    }
    return t.prototype.onFormSubmit = function() {
      return this.textarea.mentionsInput("val", function(t) {
        return function(e) {
          var i;
          return i = $("<input type='hidden' name='" + t.textarea.attr("name") + "'/>"), i.val(e), 
          t.textarea.after(i), t.textarea.attr("name", "gui_body");
        };
      }(this));
    }, t.prototype.onDataRequest = function(t, e, i) {
      return $.getJSON("/user/mention_search.json", {
        query:e
      }, function(t) {
        return i.call(this, t);
      });
    }, t;
  }(), Featurette.register("mentions", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.always = e(this.always, this), this.fail = e(this.fail, this), this.done = e(this.done, this), 
      this.submit = e(this.submit, this), this.element = $(t), this.form = this.element.find("form#" + this.element.data("form")), 
      $(document).on("submit", "#" + this.form.attr("id"), this.submit);
    }
    return t.prototype.submit = function(t) {
      var e;
      return t.preventDefault(), e = $.ajax({
        cache:!1,
        type:"post",
        url:this.form.attr("action"),
        data:this.form.serialize(),
        dataType:"json"
      }), e.done(this.done), e.fail(this.fail), e.always(this.always);
    }, t.prototype.done = function(t) {
      return t.redirect ? location.href = t.redirect :this.element.html(response.responseText), 
      this.form.trigger("modal-form:done");
    }, t.prototype.fail = function(t) {
      var e, i, s;
      e = $.parseJSON(t.responseText).errors;
      for (i in e) s = e[i], this.form.find("[name$='[" + i + "]']").after($("<div class='field_with_errors'><p class='error-message'>" + s.shift() + "</p></div>"));
      return this.form.trigger("modal-form:fail");
    }, t.prototype.always = function() {
      return this.element.find(".form-item label:not(.prefill)").inFieldLabels();
    }, t;
  }(), Featurette.register("modal-form", t);
}.call(this), function() {
  var t, e, i = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, s = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var s in e) r.call(e, s) && (t[s] = e[s]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, r = {}.hasOwnProperty;
  e = function() {
    function t(t) {
      this.handleElementClick = i(this.handleElementClick, this), this.modal = i(this.modal, this), 
      this.triggerModal = i(this.triggerModal, this), this.id = t.id, this.element = $(t), 
      this.target = this.element.attr("data-target"), this.stack = this.element.data("stack"), 
      this.element.attr("data-mobile-fallback") && $(window).width() <= 480 || this.element.click(this.handleElementClick);
    }
    return t.prototype.triggerModal = function() {
      return this.element.trigger("modal:trigger"), this.modal().showOverlay({
        stack:this.stack
      });
    }, t.prototype.modal = function() {
      return Featurette.get(this.target);
    }, t.prototype.handleElementClick = function(t) {
      if (t.preventDefault(), !this.element.is(".disabled")) return this.triggerModal();
    }, t;
  }(), Featurette.register("modal-trigger", e), t = function(t) {
    function e(t) {
      this.loadAsyncModal = i(this.loadAsyncModal, this), this.handleElementClick = i(this.handleElementClick, this), 
      e.__super__.constructor.call(this, t), this.loading = !1, this.element.data("disable-while-loading") || this.element.data("disable-while-loading", "true"), 
      this.parentLi = this.element.parent("li");
    }
    return s(e, t), e.prototype.handleElementClick = function(t) {
      return this.element.is(".disabled") || this.loadAsyncModal(function(t) {
        return function() {
          return t.triggerModal();
        };
      }(this)), t.preventDefault();
    }, e.prototype.loadAsyncModal = function(t) {
      var e;
      return (!this.loading || !0 !== this.element.data("disable-while-loading")) && (this.loading = !0, 
      this.element.addClass("loading"), this.parentLi.addClass("loading"), this.element.trigger("loading"), 
      e = this.modal(), this.src = this.element.data("src"), this.params = this.element.data("params") || {}, 
      $.get(this.src, this.params, function(i) {
        return function(s) {
          return $(e.el).html(s), Featurette.load(), i.loading = !1, i.element.removeClass("loading"), 
          i.parentLi.removeClass("loading"), i.element.trigger("loaded"), Treehouse.init(), 
          t();
        };
      }(this)).fail(function() {
        return function(t) {
          if (401 === t.status && t.getResponseHeader("content-type").match("application/json")) return location.href = $.parseJSON(t.responseText).redirect;
        };
      }()));
    }, e;
  }(e), Featurette.register("async-modal-trigger", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.toggleButton = e(this.toggleButton, this), this.toggleForm = e(this.toggleForm, this), 
      s.__super__.constructor.apply(this, arguments), this.on("click", ".organization-goal-button", this.toggleForm);
    }
    return i(s, t), s.prototype.toggleForm = function(t) {
      return this.get(".organization-goal-form").toggleClass("viewing-org-goal editing-org-goal"), 
      this.get(".organization-goal-form").hasClass("editing-org-goal") ? (t.preventDefault(), 
      this.toggleButton("Save goal", !1)) :this.toggleButton("Save goal", !0);
    }, s.prototype.toggleButton = function(t, e) {
      return this.get(".organization-goal-button").val(t).toggleClass("button-primary"), 
      this.get(".organization-goal-input").attr("readonly", e);
    }, s;
  }(Treehouse.View), Featurette.register("organization-goal", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.hideDateFields = e(this.hideDateFields, this), this.showDateFields = e(this.showDateFields, this), 
      this.hideStatusField = e(this.hideStatusField, this), this.showStatusField = e(this.showStatusField, this), 
      this.onTypeChange = e(this.onTypeChange, this), s.__super__.constructor.apply(this, arguments), 
      this.dateFields = this.get("#content-report-dates"), this.statusField = this.get("#content-report-status"), 
      this.on("change", "[name=report_type]", this.onTypeChange);
    }
    return i(s, t), s.prototype.onTypeChange = function(t) {
      var e;
      return e = t.currentTarget.value, "course_progress" === e || "activity" === e ? this.showDateFields() :this.hideDateFields(), 
      "invites" === e ? this.hideStatusField() :this.showStatusField();
    }, s.prototype.showStatusField = function() {
      return this.statusField.removeClass("hidden");
    }, s.prototype.hideStatusField = function() {
      return this.statusField.addClass("hidden");
    }, s.prototype.showDateFields = function() {
      return this.dateFields.removeClass("hidden");
    }, s.prototype.hideDateFields = function() {
      return this.dateFields.addClass("hidden");
    }, s;
  }(Treehouse.View), Featurette.register("organization-reports-form", t);
}.call(this), function() {
  var t, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i(t) {
      this.element = $(t), this.element.hover(this.updateChart, this.restoreChart);
    }
    return e(i, t), i.prototype.updateChart = function(t) {
      var e, i, s;
      return Treehouse.restoreOrganizationStats = !1, s = $(t.target).closest(".stat"), 
      e = $(s), $(".stat").removeClass("selected"), e.addClass("selected"), i = $(e.data("target")), 
      i.data("title", e.data("title")), i.data("label", e.data("label")), i.data("stats", e.data("stats")), 
      i.data("chart-class", e.data("chart-class")), i.data("tooltip-label", e.data("tooltip-label")), 
      Featurette.get("stats-line-chart").updateChart(i);
    }, i.prototype.restoreChart = function(t) {
      return Treehouse.restoreOrganizationStats = !0, _.delay(function() {
        return function() {
          var e, i, s;
          if (Treehouse.restoreOrganizationStats) return s = $(t.target).closest(".stat"), 
          e = $(s), $(".stat").removeClass("selected"), i = $(e.data("target")), i.data("title", i.data("default-title")), 
          i.data("label", i.data("default-label")), i.data("stats", i.data("default-stats")), 
          i.data("chart-class", i.data("default-chart-class")), i.data("tooltip-label", i.data("default-tooltip-label")), 
          Featurette.get("stats-line-chart").updateChart(i);
        };
      }(), 250);
    }, i;
  }(Treehouse.View), Featurette.register("organization-stats-category", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("points-chart", function(i) {
    function s() {
      this.draw = t(this.draw, this), this.created = t(this.created, this), this.build = t(this.build, this), 
      this.collectData = t(this.collectData, this), s.__super__.constructor.apply(this, arguments), 
      this.animated = this.data.animatePoints, this.collectData(), this.data.initializeLater || this.build(), 
      this.listenTo(this.el, "chart:build", this.build);
    }
    return e(s, i), s.prototype.collectData = function() {
      if (this.points = _.map(this.data.points, function(t, e) {
        return {
          value:t,
          className:"add-" + e + "-stroke"
        };
      }), !_.reduce(this.points, function(t, e) {
        return t + e.value;
      }, 0)) return this.points.push({
        value:1
      });
    }, s.prototype.build = function() {
      if (!this.built) return this.chart = new Chartist.Pie(this.el.get(0), {
        series:this.points
      }, {
        height:this.data.height,
        width:this.data.width,
        donut:!0,
        donutWidth:this.data.donutWidth,
        chartPadding:this.data.padding || 0,
        showLabel:!1
      }).on("created", this.created).on("draw", this.draw);
    }, s.prototype.created = function() {
      return this.built = !0, this.chart.detach();
    }, s.prototype.draw = function(t) {
      var e;
      if ("slice" === t.type && this.animated) return e = t.element._node.getTotalLength(), 
      t.element.attr({
        "stroke-dasharray":e + "px " + e + "px"
      }), t.element.attr({
        "stroke-dashoffset":-e + "px"
      }), setTimeout(function() {
        return t.element.attr({
          "stroke-dashoffset":"0px"
        });
      }, 10);
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("radial-progress", function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.progress = (parseInt(this.get(".progress").text(), 10) || 0) / 100, 
      this.stroke = this.data.stroke ? parseInt(this.data.stroke, 10) :8, this.render();
    }
    return t(i, e), i.prototype.render = function() {
      var t, e, i, s;
      return t = 100 - this.stroke, e = t / 2, s = '<svg width="100%" height="100%" viewBox="0 0 100 100">\n  <path class="background" fill="none" stroke-width="' + this.stroke + '" d="\n    M50,' + this.stroke / 2 + "\n    a" + e + "," + e + " 0 0,1 0," + t + "\n    a" + e + "," + e + " 0 0,1 0," + -t + '\n  "/>\n  <path class="foreground" fill="none" stroke-width="' + this.stroke + '" d="\n    M50,' + this.stroke / 2 + "\n    a" + e + "," + e + " 0 0,1 0," + t + "\n    a" + e + "," + e + " 0 0,1 0," + -t + '\n  "/>\n</svg>', 
      this.el.append(s), this.path = this.el.find("path.foreground")[0], this.pathLength = this.path.getTotalLength(), 
      this.path.style.strokeDasharray = this.pathLength + " " + this.pathLength, this.data.animate ? (i = this.progress, 
      this.setProgress(0), _.defer(function(t) {
        return function() {
          return t.setProgress(i);
        };
      }(this))) :this.setProgress(this.progress);
    }, i.prototype.setProgress = function(t) {
      return this.progress = Math.max(0, Math.min(t, 1)), this.get(".progress").text(Math.round(100 * this.progress) + "%"), 
      this.path.style.strokeDashoffset = this.pathLength - this.progress * this.pathLength, 
      this.el.toggleClass("unstarted", 0 === this.progress);
    }, i;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.pingItGood = e(this.pingItGood, this), this.pingStyles = e(this.pingStyles, this), 
      this.el = $(t), setInterval(this.pingItGood, 5e3), this.location = this.el.data("location");
    }
    return t.prototype.pingStyles = function() {
      return {
        position:"absolute",
        top:this.el.position().top,
        left:this.el.position().left,
        width:this.el.width() + parseInt(this.el.css("border-top-width")) + parseInt(this.el.css("border-bottom-width")),
        height:this.el.height() + parseInt(this.el.css("border-left-width")) + parseInt(this.el.css("border-right-width")),
        marginTop:this.el.css("margin-top"),
        marginBottom:this.el.css("margin-bottom"),
        marginLeft:this.el.css("margin-left"),
        marginRight:this.el.css("margin-right"),
        borderTopLeftRadius:this.el.css("border-top-left-radius"),
        borderTopRightRadius:this.el.css("border-top-right-radius"),
        borderBottomLeftRadius:this.el.css("border-bottom-left-radius"),
        borderBottomRightRadius:this.el.css("border-bottom-right-radius"),
        zIndex:this.el.css("z-index") - 1,
        animation:"sonarPing" + this.location + " 1.3s ease-out 250ms"
      };
    }, t.prototype.pingItGood = function() {
      return this.ping && this.ping.remove(), this.ping = $('<span class="ping"></span>').css(this.pingStyles()), 
      this.el.after(this.ping);
    }, t;
  }(), Featurette.register("sonar-ping", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.createChart = e(this.createChart, this), this.setTitleAndLabel = e(this.setTitleAndLabel, this), 
      this.updateChart = e(this.updateChart, this), s.__super__.constructor.apply(this, arguments), 
      this.updateChart();
    }
    return i(s, t), s.prototype.updateChart = function() {
      return this.setTitleAndLabel(), this.createChart();
    }, s.prototype.setTitleAndLabel = function() {
      return this.get(".title").text(this.data.title), this.get(".label").text(this.data.label);
    }, s.prototype.createChart = function() {
      return new Chartist.Line(this.get(".chart").get(0), {
        labels:this.data.stats.map(function(t) {
          return function(e) {
            return t.labelDate(e[0]);
          };
        }(this)),
        series:[ this.data.stats.map(function(t) {
          return function(e) {
            return {
              meta:t.data.title,
              value:e[1]
            };
          };
        }(this)) ]
      }, {
        fullWidth:!0,
        lineSmooth:Chartist.Interpolation.simple({
          divisor:2
        }),
        axisY:{
          onlyInteger:!0,
          labelInterpolationFnc:function(t, e) {
            return 0 === e ? "&nbsp;" :t;
          }
        },
        axisX:{
          labelInterpolationFnc:function(t, e) {
            if (!(e % 2)) return t;
          },
          showGrid:!1
        },
        classNames:{
          chart:"ct-chart-line " + this.data.chartClass
        },
        plugins:[ Chartist.plugins.tooltip({
          tooltipFnc:function(t, e) {
            return '<div class="chartist-tooltip-box">\n  <div class="stat">\n    <span class="stat-meta">' + t + '</span>:\n    <span class="stat-data">' + (e || 0) + "</span>\n  </div>\n</div>";
          }
        }) ]
      }, [ [ "(max-width: 800px)", {
        axisX:{
          labelInterpolationFnc:function(t, e) {
            if (!(e % 5)) return t;
          }
        }
      } ] ]);
    }, s.prototype.labelDate = function(t) {
      var e, i, s;
      return e = Date.parse(t), s = e.getMonth() + 1, i = e.getDate(), s + "/" + i;
    }, s;
  }(Treehouse.View), Featurette.register("stats-line-chart", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("tabbed-content", Treehouse.TabbedContent = function(i) {
    function s() {
      this.switchTabs = t(this.switchTabs, this), this.showContent = t(this.showContent, this), 
      this.getContent = t(this.getContent, this);
      var e;
      s.__super__.constructor.apply(this, arguments), this.on("click", "> .tabs ul li", this.switchTabs), 
      e = this.data.currentTab || 0, this.showContent(e);
    }
    return e(s, i), s.prototype.getContent = function(t) {
      return this.el.find("> .tabbed-content > [data-tab-content]").eq(t);
    }, s.prototype.showContent = function(t) {
      var e;
      return e = this.getContent(t), e.trigger("tabs:show"), e.siblings().trigger("tabs:hide"), 
      e.show().siblings().hide();
    }, s.prototype.switchTabs = function(t) {
      var e;
      if (t.preventDefault(), e = $(t.currentTarget), e.addClass("current").siblings().removeClass("current"), 
      this.showContent(e.index()), this.isMobile()) return this.scrollTo(this.getContent(e.index()).offset().top);
    }, s;
  }(Treehouse.Layout));
}.call(this), function() {
  var t, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.on("click", ".test-with-content .test-name", this.toggleTest);
    }
    return e(i, t), i.prototype.toggleTest = function(t) {
      var e;
      return t.preventDefault(), e = $(t.target), e.is(".test-output") || (e = e.parents(".test-output")), 
      e.toggleClass("test-open");
    }, i;
  }(Treehouse.View), Featurette.register("test-results", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.updateButtonEnablement = e(this.updateButtonEnablement, this), this.hideAllPanels = e(this.hideAllPanels, this), 
      this.selectAssignees = e(this.selectAssignees, this), this.createAssignmentError = e(this.createAssignmentError, this), 
      this.createAssignmentSuccess = e(this.createAssignmentSuccess, this), this.createAssignment = e(this.createAssignment, this), 
      this.selectAssignmentElement = e(this.selectAssignmentElement, this), this.selectAssignment = e(this.selectAssignment, this), 
      this.showCreateAssignment = e(this.showCreateAssignment, this), this.updateDepartmentSelection = e(this.updateDepartmentSelection, this), 
      this.selectAssignee = e(this.selectAssignee, this), this.showSelectAssignees = e(this.showSelectAssignees, this), 
      this.showSelectAssignment = e(this.showSelectAssignment, this), s.__super__.constructor.apply(this, arguments), 
      Treehouse.SearchableView.mixin(this), this.on("click", "[data-select-assignment-next]:enabled", this.showSelectAssignees), 
      this.on("click", "[data-select-assignment-create]", this.showCreateAssignment), 
      this.on("click", "[data-select-assignees-assign]", this.selectAssignees), this.on("click", "[data-select-assignees-back]", this.showSelectAssignment), 
      this.on("click", "[data-create-assignment-next]", this.createAssignment), this.on("click", "[data-create-assignment-back]", this.showSelectAssignment), 
      this.on("click", "[data-select-assignee]", this.selectAssignee), this.on("click", "[data-select-assignment]", this.selectAssignment), 
      this.data.preselectedTrackAssignmentId ? (this.selectedAssignmentId = this.data.preselectedTrackAssignmentId, 
      this.showSelectAssignees()) :this.data.showCreateAssignment ? this.showCreateAssignment() :this.showSelectAssignment();
    }
    return i(s, t), s.prototype.showSelectAssignment = function(t) {
      return null != t && t.preventDefault(), this.hideAllPanels(), this.get("[data-select-assignment-panel]").show();
    }, s.prototype.showSelectAssignees = function(t) {
      return null != t && t.preventDefault(), this.hideAllPanels(), this.get("[data-select-assignees-panel]").show(), 
      this.loadAssignees();
    }, s.prototype.loadAssignees = function() {
      var t, e, i;
      if (t = this.get("[data-assignees]"), t.data("trackAssignmentId") !== this.selectedAssignmentId) return e = this.get("[data-select-assignees-panel] [data-searchable-field]"), 
      this.updateSearch(e.val("").prop("disabled", !0)), this.get("[data-select-assignees-assign]").prop("disabled", !0).addClass("disabled"), 
      i = t.data().assigneesUrl.replace(":id", this.selectedAssignmentId), t.addClass("loading").load(i, function(i) {
        return function(s, r) {
          if (t.removeClass("loading"), e.prop("disabled", !1), i.get("[data-select-assignees-assign]").prop("disabled", !1).removeClass("disabled"), 
          "error" !== r) return t.data("trackAssignmentId", i.selectedAssignmentId);
        };
      }(this));
    }, s.prototype.getAssignees = function() {
      return this.get("[data-assignees]").find("[data-user-id]");
    }, s.prototype.getMembersInDepartment = function(t) {
      var e;
      return e = t.data("userIds").toString().split(","), this.getAssignees().filter(function() {
        return e.indexOf($(this).data("userId").toString()) >= 0;
      });
    }, s.prototype.selectAssignee = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.target).closest("li"), i.data("userId") ? (i.toggleClass("selected"), 
      this.updateDepartmentSelection()) :i.data("userIds") ? (e = i.hasClass("selected"), 
      this.getMembersInDepartment(i).add(i).each(function() {
        return $(this).toggleClass("selected", !e);
      })) :void 0;
    }, s.prototype.updateDepartmentSelection = function() {
      return this.get("[data-assignees]").find("[data-user-ids]").each(function(t) {
        return function(e, i) {
          var s, r;
          return i = $(i), r = t.getMembersInDepartment(i), s = r.length > 0 && r.length === r.filter(".selected").length, 
          i.toggleClass("selected", s);
        };
      }(this));
    }, s.prototype.showCreateAssignment = function(t) {
      return null != t && t.preventDefault(), this.hideAllPanels(), this.get("[data-assignment-name]").val(""), 
      this.get("[data-assignment-due-on]").val(""), this.get("[data-create-assignment-panel]").show();
    }, s.prototype.selectAssignment = function(t) {
      var e;
      return t.preventDefault(), e = $(t.target).closest("li"), this.selectAssignmentElement(e);
    }, s.prototype.selectAssignmentElement = function(t) {
      return $("[data-select-assignment-panel] li").removeClass("selected"), t.addClass("selected"), 
      this.selectedAssignmentId = t.attr("data-track-assignment-id"), this.updateButtonEnablement();
    }, s.prototype.createAssignment = function(t) {
      var e;
      return t.preventDefault(), this.get("[data-create-assignment-error]").hide(), this.get("[data-create-assignment-progress]").show(), 
      e = $.post(this.data.createAssignmentUrl, {
        track_assignment:{
          name:this.get("[data-assignment-name]").val(),
          due_on:this.get("[data-assignment-due-on]").val()
        }
      }), e.success(this.createAssignmentSuccess), e.fail(this.createAssignmentError);
    }, s.prototype.createAssignmentSuccess = function(t) {
      var e, i;
      return this.get("[data-create-assignment-error]").hide(), this.get("[data-create-assignment-progress]").hide(), 
      this.get("[data-no-assignments]").hide(), e = this.get("[data-track-assignments]"), 
      e.prepend(t), i = e.children().first(), this.selectAssignmentElement(i), this.showSelectAssignees(event);
    }, s.prototype.createAssignmentError = function() {
      return this.get("[data-create-assignment-progress]").hide(), this.get("[data-create-assignment-error]").show();
    }, s.prototype.selectAssignees = function(t) {
      var e;
      return t.preventDefault(), this.get("[data-select-assignees-assign]").text("Saving...").prop("disabled", !0).addClass("disabled"), 
      e = this.getAssignees().filter(".selected").map(function() {
        return $(this).data("userId");
      }).toArray(), $.ajax({
        url:this.data.createAssignmentUrl + "/" + this.selectedAssignmentId,
        type:"PUT",
        contentType:"application/json",
        data:JSON.stringify({
          track_assignment:{
            user_ids:e
          }
        }),
        complete:function() {
          return location.reload();
        }
      });
    }, s.prototype.hideAllPanels = function() {
      return this.get("[data-select-assignment-panel]").hide(), this.get("[data-select-assignees-panel]").hide(), 
      this.get("[data-create-assignment-panel]").hide();
    }, s.prototype.updateButtonEnablement = function() {
      return this.get("[data-select-assignment-next]").prop("disabled", !this.selectedAssignmentId).toggleClass("disabled", !this.selectedAssignmentId);
    }, s;
  }(Treehouse.View), Featurette.register("track-assignment-modal", t);
}.call(this), function() {
  var t, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments), Treehouse.SearchableView.mixin(this);
    }
    return e(i, t), i;
  }(Treehouse.View), Featurette.register("track-progress-modal", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.clearTopicSelection = e(this.clearTopicSelection, this), this.reenableSubmitButton = e(this.reenableSubmitButton, this), 
      this.disableSubmitButton = e(this.disableSubmitButton, this), this.updateTopicNextButtonEnablement = e(this.updateTopicNextButtonEnablement, this), 
      this.updateDetailsNextButtonEnablement = e(this.updateDetailsNextButtonEnablement, this), 
      this.hideAllPanels = e(this.hideAllPanels, this), this.submitError = e(this.submitError, this), 
      this.submitSuccess = e(this.submitSuccess, this), this.submitNewTrackRequest = e(this.submitNewTrackRequest, this), 
      this.selectTopic = e(this.selectTopic, this), this.selectTrack = e(this.selectTrack, this), 
      this.showPanelByHref = e(this.showPanelByHref, this), this.initialize = e(this.initialize, this), 
      s.__super__.constructor.apply(this, arguments), this.on("click", "[data-panel-link]", this.showPanelByHref), 
      this.on("click", "[data-track-id]", this.selectTrack), this.on("click", "[data-difficulty-panel-submit]", this.submitNewTrackRequest), 
      this.on("click", "[data-topic-class]", this.selectTopic), this.on("click", ".difficulty-choice", this.selectDifficulty), 
      this.on("change keyup paste", "input:text", this.updateDetailsNextButtonEnablement), 
      this.get("[data-difficulty-sortable]").sortable(), $("#new_track_modal_id").on("modal:show", this.initialize);
    }
    return i(s, t), s.prototype.initialize = function() {
      return this.get("input:text").val(""), this.clearTopicSelection(), this.updateDetailsNextButtonEnablement(), 
      this.updateTopicNextButtonEnablement(), this.showPanel("#new-track-intro");
    }, s.prototype.showPanelByHref = function(t) {
      var e;
      if (t.preventDefault(), e = $(t.currentTarget), !e.is(".disabled")) return this.showPanel(e.attr("href"));
    }, s.prototype.showPanel = function(t) {
      return this.hideAllPanels(), this.get(t).show();
    }, s.prototype.selectTrack = function(t) {
      var e, i, s;
      return s = $(t.currentTarget).toggleClass("selected"), this.get("#new-track-select [data-track-id]").not(s).removeClass("selected"), 
      i = this.get("#new-track-select .button.next"), e = i.attr("data-href-pattern").replace(":track_id", s.attr("data-track-id")), 
      i.attr("data-src", e).toggleClass("disabled", !s.is(".selected"));
    }, s.prototype.selectTopic = function(t) {
      var e, i;
      return t.preventDefault(), e = $(t.currentTarget), e.toggleClass("selected"), i = e.attr("data-topic-class"), 
      this.updateTopicNextButtonEnablement(), this.el.find("#new-track-difficulty li.topic-" + i).toggleClass("selected");
    }, s.prototype.selectDifficulty = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.target), i.closest(".dropdown-child").find(".selected").removeClass("selected"), 
      i.addClass("selected"), e = i.text(), i.closest(".dropdown-parent").find("[data-selected-difficulty]").text(e), 
      i.closest("[data-difficulty]").attr("data-difficulty", e);
    }, s.prototype.submitNewTrackRequest = function(t) {
      var e, i;
      return t.preventDefault(), this.get("[data-submit-error]").hide(), this.disableSubmitButton(), 
      e = {
        new_track_data:{
          topic_data:this.getTopicData()
        }
      }, this.get("input:text").serializeArray().forEach(function(t) {
        return e.new_track_data[t.name] = t.value;
      }), i = $.ajax({
        url:this.data.requestNewTrackUrl,
        type:"POST",
        contentType:"application/json",
        data:JSON.stringify(e)
      }), i.success(this.submitSuccess), i.fail(this.submitError), i.always(this.reenableSubmitButton);
    }, s.prototype.getTopicData = function() {
      return $.map(this.el.find("li[data-topic-name].selected"), function(t) {
        var e;
        return e = $(t).attr("data-difficulty"), 0 === e.length && (e = "Beginner"), [ [ $(t).attr("data-topic-name"), e ] ];
      });
    }, s.prototype.submitSuccess = function() {
      return this.get("[data-submit-error]").hide(), this.showPanel("#new-track-complete");
    }, s.prototype.submitError = function() {
      return this.get("[data-submit-error]").show();
    }, s.prototype.hideAllPanels = function() {
      return this.get("[data-panel]").hide();
    }, s.prototype.updateDetailsNextButtonEnablement = function() {
      var t;
      return t = _.all(this.get("input:text"), function(t) {
        return t.value.length > 0;
      }), this.get("[data-details-panel-next]").toggleClass("disabled", !t);
    }, s.prototype.updateTopicNextButtonEnablement = function() {
      var t;
      return t = this.el.find("[data-topics] .selected").length > 0, this.get("[data-topic-panel-next]").toggleClass("disabled", !t);
    }, s.prototype.disableSubmitButton = function() {
      return this.get("[data-difficulty-panel-submit]").text("Processing...").prop("disabled", !0).addClass("disabled");
    }, s.prototype.reenableSubmitButton = function() {
      return this.get("[data-difficulty-panel-submit]").text("Request New Track").prop("disabled", !1).removeClass("disabled");
    }, s.prototype.clearTopicSelection = function() {
      return this.el.find("[data-topics] .selected").removeClass("selected"), this.el.find("[data-difficulty-sortable] .selected").removeClass("selected"), 
      this.get("[data-difficulty]").attr("data-difficulty", ""), this.get("[data-selected-difficulty]").text("Select Difficulty");
    }, s;
  }(Treehouse.View), Featurette.register("new-track-modal", t);
}.call(this);

(function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.indicateReportLoaded = e(this.indicateReportLoaded, this), this.indicateReportLoading = e(this.indicateReportLoading, this), 
      this.indicateReportSelected = e(this.indicateReportSelected, this), this.loadReport = e(this.loadReport, this), 
      this.removeMember = e(this.removeMember, this), this.filterMembersBySearch = e(this.filterMembersBySearch, this), 
      this.filterMembersByStatus = e(this.filterMembersByStatus, this), this.clearSearchOnEscape = e(this.clearSearchOnEscape, this), 
      this.clearSearchInput = e(this.clearSearchInput, this), this.clearSearch = e(this.clearSearch, this), 
      this.onSearch = e(this.onSearch, this), this.initTable = e(this.initTable, this), 
      s.__super__.constructor.apply(this, arguments), this.on("submit", "form[data-member-search]", function() {
        return !1;
      }), this.on("keyup", "form[data-member-search] input", _.debounce(this.onSearch, 200)), 
      this.on("keydown", "form[data-member-search] input", this.clearSearchOnEscape), 
      this.on("click", "[data-search-clear]", this.clearSearch), this.on("click", "[data-remove-member]", this.removeMember), 
      this.on("click", "a[data-report-detail-url]", this.loadReport), this.initTable();
    }
    return i(s, t), s.prototype.keyCodeEscape = 27, s.prototype.initTable = function() {
      return this.el.find(".members-table").tablesorter({
        sortList:[ [ 0, 0 ] ]
      });
    }, s.prototype.onSearch = function() {
      var t, e;
      return t = this.get("form[data-member-search] input"), e = t.val(), this.filterMembersBySearch(e);
    }, s.prototype.clearSearch = function(t) {
      return t.preventDefault(), this.clearSearchInput(), this.filterMembersBySearch("");
    }, s.prototype.clearSearchInput = function() {
      var t;
      return t = this.get("form[data-member-search] input"), t.val("");
    }, s.prototype.clearSearchOnEscape = function(t) {
      if (t.keyCode === this.keyCodeEscape) return this.clearSearch(t);
    }, s.prototype.filterMembersByStatus = function(t, e) {
      var i;
      return i = this.el.find("[data-row-status=" + t + "]"), i.toggle(e);
    }, s.prototype.filterMembersBySearch = function(t) {
      var e, i;
      return t = t.trim().toLowerCase(), i = this.get("[data-row-searchable]"), t && t.length ? (e = i.filter(function() {
        return $(this).attr("data-row-searchable").toLowerCase().indexOf(t) >= 0;
      }), i.hide(), e.show()) :i.show();
    }, s.prototype.removeMember = function(t) {
      var e, i, s;
      return t.preventDefault(), e = $(t.currentTarget), i = e.closest("[data-row-remove-url]"), 
      s = i.attr("data-row-remove-url"), e.html("Removing...").prop("disabled", !0).addClass("disabled"), 
      $.ajax({
        url:s,
        type:"DELETE",
        success:function(t) {
          return function() {
            return t.updateMemberCount(i.closest("tbody").children("tr").length - 1), i.fadeOut(400, function() {
              return $(this).remove();
            });
          };
        }(this)
      });
    }, s.prototype.updateMemberCount = function(t) {
      var e;
      return e = 1 === t ? "1 member" :t + " members", $("[data-assignment-count]").text(e);
    }, s.prototype.loadReport = function(t) {
      var e, i;
      return t.preventDefault(), e = $(t.currentTarget), this.indicateReportSelected(e), 
      this.indicateReportLoading(), this.clearSearchInput(), i = e.attr("data-report-detail-url"), 
      $.ajax({
        url:i,
        type:"GET",
        success:function(t) {
          return function(e) {
            return t.get("[data-details-table]").html(e), t.indicateReportLoaded(), t.initTable(), 
            t.clearElementsCache();
          };
        }(this),
        fail:function() {
          return targetDiv.html("Oops, something went wrong. Please try again.");
        }
      });
    }, s.prototype.indicateReportSelected = function(t) {
      var e;
      return this.get("a[data-report-detail-url]").removeClass("selected"), t.addClass("selected"), 
      e = t.attr("data-report-detail-label"), this.get("[data-selected-report-detail-label]").text(e);
    }, s.prototype.indicateReportLoading = function() {
      return this.get("[data-details-table]").addClass("transparent-while-loading"), this.get("[data-report-loading]").addClass("loading");
    }, s.prototype.indicateReportLoaded = function() {
      return this.get("[data-details-table]").removeClass("transparent-while-loading"), 
      this.get("[data-report-loading]").removeClass("loading");
    }, s;
  }(Treehouse.View), Featurette.register("user-track-assignments-report", t);
}).call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("video-player", function(i) {
    function s(e) {
      this.storePlaybackPreferences = t(this.storePlaybackPreferences, this), this.onLanguageSelect = t(this.onLanguageSelect, this), 
      this.onVolumeChanged = t(this.onVolumeChanged, this), this.exitFullScreen = t(this.exitFullScreen, this), 
      this.launchSqlPlayground = t(this.launchSqlPlayground, this), this.launchConsole = t(this.launchConsole, this), 
      this.launchWorkspace = t(this.launchWorkspace, this), this.addSqlPlaygroundButton = t(this.addSqlPlaygroundButton, this), 
      this.addConsoleButton = t(this.addConsoleButton, this), this.addWorkspacesButton = t(this.addWorkspacesButton, this), 
      this.rewind = t(this.rewind, this), this.getSpeedsHTML = t(this.getSpeedsHTML, this), 
      this.addSpeedControls = t(this.addSpeedControls, this), this.addRewindButton = t(this.addRewindButton, this), 
      this.getIcon = t(this.getIcon, this), this.getIcons = t(this.getIcons, this), this.appendButton = t(this.appendButton, this), 
      this.prependButton = t(this.prependButton, this), this.updateButton = t(this.updateButton, this), 
      this.getButtonHTML = t(this.getButtonHTML, this), this.markLongDurations = t(this.markLongDurations, this), 
      this.timeContainers = t(this.timeContainers, this), this.durationInSeconds = t(this.durationInSeconds, this), 
      this.durationInMinutes = t(this.durationInMinutes, this), this.updateControls = t(this.updateControls, this), 
      this.reset = t(this.reset, this), this.setSpeed = t(this.setSpeed, this), this.onSpeedChange = t(this.onSpeedChange, this), 
      this.transitionToPlaying = t(this.transitionToPlaying, this), this.transitionToPaused = t(this.transitionToPaused, this), 
      this.onEnd = t(this.onEnd, this), this.ensureCorrectPlaybackRate = t(this.ensureCorrectPlaybackRate, this), 
      this.trackVideoEnd = t(this.trackVideoEnd, this), this.trackVideoView = t(this.trackVideoView, this), 
      this.sendViewingSegment = t(this.sendViewingSegment, this), this.trackViewingSegment = t(this.trackViewingSegment, this), 
      this.setMuted = t(this.setMuted, this), this.setStartTime = t(this.setStartTime, this), 
      this.initializeStartTime = t(this.initializeStartTime, this), this.makeCaptionsDraggable = t(this.makeCaptionsDraggable, this), 
      this.addEvents = t(this.addEvents, this), this.onMediaPlayerLoad = t(this.onMediaPlayerLoad, this), 
      this.setControlsSize = t(this.setControlsSize, this), this.resetCaptionLocation = t(this.resetCaptionLocation, this), 
      this.toggleMaxWidthState = t(this.toggleMaxWidthState, this), this.setVideoHeight = t(this.setVideoHeight, this), 
      this.onResize = t(this.onResize, this);
      var i;
      s.__super__.constructor.apply(this, arguments), this.stageProgressBar = $("[data-layout-element=stage-progress]"), 
      this.header = $("[data-header]"), this.videoMaxWidth = 1280, this.cookieExpiration = 1095, 
      this.language = this.data.startLanguage || $.cookie("captionLanguage"), this.playbackRate = parseFloat(this.data.playbackRate || $.cookie("playbackRate") || 1), 
      this.resumeTime = parseInt(this.data.resume), this.data.autoplay && (this.autoplay = !0), 
      i = {
        enableAutosize:!0,
        alwaysShowControls:this.el.hasClass("fixed-controls"),
        success:this.onMediaPlayerLoad,
        startLanguage:this.language,
        setDimensions:!1,
        startVolume:$.cookie("volume") ? $.cookie("volume") :1
      }, this.data.playbackPreferencesUrl && (this.playbackPreferencesUrl = this.data.playbackPreferencesUrl), 
      this.player = new MediaElementPlayer(e, i), this.updateControls(), this.setMuted(), 
      this.setSpeed(this.playbackRate), this.playing = !1, this.enableChromeFreezeFix(), 
      this.initializeStartTime(), this.resumeTime && !this.autoplay && $("#resume-video-overlay").addClass("active"), 
      this.sendViewingSegment = _.throttle(_.bind(this.sendViewingSegment, this), 5e3), 
      this.videoViewReported = !1, setInterval(function(t) {
        return function() {
          if (t.playing) return t.sendViewingSegment(t.mejsObj.currentTime);
        };
      }(this), 15e3);
    }
    return e(s, i), s.prototype.speeds = [ .5, .75, 1, 1.1, 1.25, 1.5, 1.75, 2 ], s.prototype.onResize = function() {
      if (this.setVideoHeight(), this.toggleMaxWidthState(), this.captions) return this.resetCaptionLocation();
    }, s.prototype.setVideoHeight = function() {
      var t, e, i, s, r, n, o, a;
      return n = this.container.find("video"), a = $(window).height(), s = this.header.outerHeight(!0), 
      t = 30, r = this.stageProgressBar.height(), i = this.container.find(".mejs-controls").height(), 
      e = s + r + t, o = this.player && this.player.isFullScreen ? a - i :a - e - i - 30, 
      n.css("max-height", o);
    }, s.prototype.toggleMaxWidthState = function() {
      return this.container.toggleClass("max-width-reached", this.container.width() > this.videoMaxWidth + 20);
    }, s.prototype.resetCaptionLocation = function() {
      return this.captions.css({
        top:"",
        left:""
      });
    }, s.prototype.setControlsSize = function() {
      if (this.el.is(":visible")) return this.player.setControlsSize(), clearInterval(this.interval);
    }, s.prototype.onMediaPlayerLoad = function(t, e) {
      return this.container = this.el.parents(".mejs-container"), this.addEvents(t, e), 
      this.makeCaptionsDraggable();
    }, s.prototype.addEvents = function(t) {
      var e;
      return this.container.on("click", ".mejs-rewind-button", this.rewind).on("click", ".mejs-workspaces-button", this.launchWorkspace).on("click", ".mejs-console-button", this.launchConsole).on("click", ".mejs-sql-playground-button", this.launchSqlPlayground).on("click", ".mejs-speed", this.onSpeedChange).on("change", ".mejs-captions-selector input:radio", this.onLanguageSelect), 
      this.mejsObj = t, t.addEventListener("loadedmetadata", this.setStartTime), t.addEventListener("pause", this.transitionToPaused), 
      t.addEventListener("play", this.transitionToPlaying), t.addEventListener("timeupdate", this.trackViewingSegment), 
      null != t.playbackRate && t.addEventListener("timeupdate", this.ensureCorrectPlaybackRate), 
      t.addEventListener("ended", this.onEnd), t.addEventListener("volumechange", this.onVolumeChanged), 
      this.interval = window.setInterval(this.setControlsSize, 1e3), this.container.addClass(this.el.attr("class")), 
      this.listenTo(window, "resize", _.throttle(this.onResize, 750), {
        triggerImmediately:!0
      }), $(window).bind("beforeunload", function(t) {
        return function() {
          t.sendViewingSegment(t.mejsObj.currentTime);
        };
      }(this)), this.autoplay && (e = function() {
        return t.play();
      }, _.delay(e, 1e3)), this.listenTo("[data-start-video], [data-resume-video]", "click", function(e) {
        return function(i) {
          return e.startTime = $(i.currentTarget).is("[data-resume-video]") ? e.resumeTime :0, 
          e.hideOverlays(), t.play();
        };
      }(this));
    }, s.prototype.makeCaptionsDraggable = function() {
      return this.captions = this.container.find(".mejs-captions-text"), this.captions.draggable({
        containment:".mejs-mediaelement",
        scroll:!1
      });
    }, s.prototype.initializeStartTime = function() {
      return this.startTime = this.resumeTime && this.resumeTime < this.durationInSeconds() ? this.resumeTime :0;
    }, s.prototype.setStartTime = function() {
      if (this.startTime) return this.mejsObj.setCurrentTime(this.startTime);
    }, s.prototype.setMuted = function() {
      if (this.mejsObj && "true" === $.cookie("muted")) return this.mejsObj.setMuted(!0);
    }, s.prototype.trackViewingSegment = function() {
      if (this.playing) return null == this.startTime ? this.startTime = this.mejsObj.currentTime :Math.abs(this.currentTime - this.mejsObj.currentTime) > 2 && (this.sendViewingSegment(this.currentTime), 
      this.startTime = this.mejsObj.currentTime), this.currentTime = this.mejsObj.currentTime;
    }, s.prototype.sendViewingSegment = function(t) {
      if ($("html").hasClass("logged-in") && null != this.startTime && t > this.startTime) return t >= 10 && this.trackVideoView(), 
      $.ajax(this.data.trackVideoSegmentUrl, {
        type:"PUT",
        data:{
          admin_preview:this.data.adminPreview,
          preview:this.data.preview,
          started:this.startTime,
          ended:t
        },
        timeout:2e3
      }), this.startTime = null;
    }, s.prototype.trackVideoView = function() {
      if (!this.videoViewReported) return this.videoViewReported = !0, $.ajax(this.data.trackVideoViewUrl, {
        type:"PUT",
        timeout:2e3,
        data:{
          admin_preview:this.data.adminPreview,
          preview:this.data.preview
        }
      }).success(function() {
        return function() {
          return Treehouse.PointsCounter.updateTotalOnce();
        };
      }()).error(function(t) {
        return function() {
          return t.videoViewReported = !1;
        };
      }(this));
    }, s.prototype.trackVideoEnd = function() {
      if ($("html").hasClass("logged-in") && !this.data.preview && !this.data.adminPreview) return analytics.track("video.ended", {
        userId:Treehouse.currentUser.id,
        videoId:this.data.videoId
      });
    }, s.prototype.ensureCorrectPlaybackRate = function() {
      if (this.playbackRate !== this.player.media.playbackRate) return this.setSpeed(this.playbackRate);
    }, s.prototype.onEnd = function() {
      var t;
      return this.exitFullScreen(), this.trackVideoEnd(), t = $("#next-step-overlay"), 
      t.addClass("active"), this.player.container.addClass("mejs-treehouse-is-ended").removeClass("mejs-treehouse-is-paused mejs-treehouse-is-playing"), 
      $(document).trigger("video-ended"), !0;
    }, s.prototype.transitionToPaused = function() {
      return this.playing = !1, this.sendViewingSegment(this.mejsObj.currentTime), this.player.container.addClass("mejs-treehouse-is-paused"), 
      this.player.container.removeClass("mejs-treehouse-is-playing"), $(document).trigger("video-paused");
    }, s.prototype.transitionToPlaying = function() {
      return this.playing = !0, this.player.container.addClass("mejs-treehouse-is-playing"), 
      this.player.container.removeClass("mejs-treehouse-is-paused"), this.setSpeed(this.playbackRate), 
      $(document).trigger("video-playing"), setTimeout(this.maxWidthState, 500);
    }, s.prototype.onSpeedChange = function(t) {
      return this.setSpeed($(t.currentTarget).data("speed"));
    }, s.prototype.setSpeed = function(t) {
      var e, i;
      return t !== this.playbackRate && _.defer(this.storePlaybackPreferences), this.playbackRate = this.player.media.playbackRate = t, 
      i = $("#" + this.player.id).find(".mejs-speed"), i.removeClass("current-speed"), 
      i.filter("[data-speed='" + this.playbackRate + "']").addClass("current-speed"), 
      e = $(".mejs-speed-button"), e.removeClass("mejs-speed-15x mejs-speed-2x"), this.playbackRate >= 2 ? e.addClass("mejs-speed-2x") :this.playbackRate >= 1.5 ? e.addClass("mejs-speed-15x") :void 0;
    }, s.prototype.reset = function() {
      try {
        return this.player.pause(), this.player.setCurrentTime(0);
      } catch (t) {}
    }, s.prototype.updateControls = function() {
      return this.updateButton("playpause", {
        icons:[ "play", "pause" ]
      }), this.updateButton("volume"), this.updateButton("captions"), this.updateButton("fullscreen"), 
      this.addSpeedControls(), this.addRewindButton(), this.addConsoleButton(), this.addWorkspacesButton(), 
      this.addSqlPlaygroundButton(), this.markLongDurations(), this.disableContextMenu();
    }, s.prototype.disableContextMenu = function() {
      return $("#video-container, #video-container video").on("contextmenu", function(t) {
        return t.preventDefault(), !1;
      });
    }, s.prototype.durationInMinutes = function() {
      return this.durationInSeconds() / 60;
    }, s.prototype.durationInSeconds = function() {
      return this.data.duration / 1e3;
    }, s.prototype.timeContainers = function() {
      return this.player.container.find(".mejs-time");
    }, s.prototype.markLongDurations = function() {
      if (this.durationInMinutes() >= 60) return this.timeContainers().addClass("long-duration");
    }, s.prototype.getButtonHTML = function(t, e) {
      return '<div class="mejs-button mejs-' + t + '-button">' + e + "</div>";
    }, s.prototype.updateButton = function(t, e) {
      var i;
      return null == e && (e = {}), i = e.icons ? e.icons :[ t ], $("#" + this.player.id).find(".mejs-" + t + "-button button").html(this.getIcons(i));
    }, s.prototype.prependButton = function(t, e) {
      return $("#" + this.player.id).find(".mejs-duration-container").after(this.getButtonHTML(t, e));
    }, s.prototype.appendButton = function(t, e) {
      return $("#" + this.player.id).find(".mejs-controls").append(HoganTemplates[t].render(e));
    }, s.prototype.getIcons = function(t) {
      var e;
      return e = "", $(t).each(function(t) {
        return function(i, s) {
          return e += t.getIcon(s);
        };
      }(this)), e;
    }, s.prototype.getIcon = function(t) {
      return _.unescape(this.el.data(t + "-icon"));
    }, s.prototype.addRewindButton = function() {
      return this.prependButton("rewind", "<button>" + this.getIcon("rewind") + "</button>");
    }, s.prototype.addSpeedControls = function() {
      if (null != this.player.media.playbackRate && "flash" !== this.player.media.pluginType) return this.prependButton("speed", "<button>" + this.getIcon("speed") + '</button> <div class="mejs-speed-controls"> <ol>' + this.getSpeedsHTML() + "</ol> </div>");
    }, s.prototype.getSpeedsHTML = function() {
      var t, e, i, s, r;
      for (r = "", i = this.speeds.reverse(), t = 0, e = i.length; t < e; t++) s = i[t], 
      r += '<li class="mejs-speed" data-speed="' + s + '">' + s + 'x <span class="speed-tooltip">' + s + "x</span></li>";
      return r;
    }, s.prototype.rewind = function() {
      return this.player.setCurrentTime(this.el.context.currentTime - 10);
    }, s.prototype.addWorkspacesButton = function() {
      var t;
      if (this.el.data("workspaces")) return t = this.el.data("videoId"), this.appendButton("videos/launch_workspace", {
        videoId:t,
        icon:this.getIcon("workspaces")
      }), Treehouse.init();
    }, s.prototype.addConsoleButton = function() {
      if (this.el.data("console")) return this.appendButton("videos/launch_console", {
        icon:this.getIcon("workspaces")
      });
    }, s.prototype.addSqlPlaygroundButton = function() {
      if (this.el.data("sql-playground-url")) return this.appendButton("videos/launch_sql_playground", {
        icon:this.getIcon("workspaces")
      });
    }, s.prototype.launchWorkspace = function() {
      return this.exitFullScreen();
    }, s.prototype.launchConsole = function() {
      if (this.exitFullScreen(), !window.open("https://console.teamtreehouse.com/window", null, "top=100,left=100,height=600,width=800,scrollbars=0,location=0,menubar=0,toolbar=0")) return alert("It looks like your pop up blocker blocked the console window.");
    }, s.prototype.launchSqlPlayground = function() {
      if (this.exitFullScreen(), !window.open(this.el.data("sql-playground-url"), null, "top=100,left=100,height=600,width=1000,scrollbars=0,location=0,menubar=0,toolbar=0")) return alert("It looks like your pop up blocker blocked the console window.");
    }, s.prototype.exitFullScreen = function() {
      if (this.player.isFullScreen) return this.player.exitFullScreen();
    }, s.prototype.enableChromeFreezeFix = function() {
      return this.el.on("error", function() {
        var t, e;
        return e = this, t = e.currentTime, $(e).one("loadeddata", function() {
          return function() {
            return e.currentTime = t;
          };
        }()), setTimeout(function() {
          return function() {
            return e.load();
          };
        }(), 100);
      });
    }, s.prototype.onVolumeChanged = function() {
      return $.cookie("volume", this.mejsObj.volume, {
        expires:this.cookieExpiration
      }), $.cookie("muted", this.mejsObj.muted, {
        expires:this.cookieExpiration
      });
    }, s.prototype.onLanguageSelect = function(t) {
      var e;
      if (e = t.currentTarget.value, "none" === e && (e = null), e !== this.language) return this.language = e, 
      this.storePlaybackPreferences();
    }, s.prototype.storePlaybackPreferences = function() {
      if ($.cookie("captionLanguage", this.language, {
        expires:this.cookieExpiration
      }), $.cookie("playbackRate", this.playbackRate, {
        expires:this.cookieExpiration
      }), this.playbackPreferencesUrl) return $.post(this.playbackPreferencesUrl, {
        language:this.language,
        playback_rate:this.playbackRate
      });
    }, s.prototype.hideOverlays = function() {
      return $("#resume-video-overlay, #next-step-overlay").removeClass("active");
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s(t) {
      var i, r, n, o, a;
      this.el = t, this.updateCurrentStepClass = e(this.updateCurrentStepClass, this), 
      this.prevStep = e(this.prevStep, this), this.nextStep = e(this.nextStep, this), 
      this.handleKeyEvent = e(this.handleKeyEvent, this), this.indicatorClicked = e(this.indicatorClicked, this), 
      this.locationHash = e(this.locationHash, this), this.hashStep = e(this.hashStep, this), 
      this.onHashChange = e(this.onHashChange, this), this.onWizardClosed = e(this.onWizardClosed, this), 
      this.onWizardOpened = e(this.onWizardOpened, this), this.id = this.el.id, s.__super__.constructor.apply(this, arguments), 
      this.allowCycle = null != (i = this.el.data("wizard-cycle")) && i, this.transitionSpeed = null != (r = this.el.data("wizard-transition-speed")) ? r :300, 
      this.enableArrowKeys = null != (n = this.el.data("wizard-enable-arrow-keys")) && n, 
      this.updateLocationHash = null != (o = this.el.data("wizard-update-location-hash")) && o, 
      this.ignoreTotalSteps = null != (a = this.el.data("wizard-ignore-total-steps")) && a, 
      this.steps = this.el.find(".step"), this.stepIndicators = this.el.find(".step-indicator"), 
      this.document = $(document), this.totalSteps = this.steps.length, this.initialStep = this.el.data("wizard-initial-step") || 1, 
      this.currentStep = this.hashStep(), this.history = [], this.on("click", ".next-step:not(.disabled)", this.nextStep), 
      this.on("click", ".prev-step:not(.disabled)", this.prevStep), this.on("click", ".step-indicator", this.indicatorClicked), 
      this.enableArrowKeys && this.on("keydown", this.handleKeyEvent), this.listenTo(document, "wizard-opened", this.onWizardOpened), 
      this.listenTo(document, "wizard-closed", this.onWizardClosed), this.updateLocationHash && $(window).on("hashchange", this.onHashChange), 
      this.advanceStep(this.currentStep);
    }
    return i(s, t), s.prototype.onWizardOpened = function() {}, s.prototype.onWizardClosed = function() {
      return this.currentStep = this.initialStep, this.advanceStep(this.currentStep);
    }, s.prototype.onHashChange = function() {
      var t;
      if (location.hash !== "#step-" + this.currentStep) return t = this.hashStep(), this.advanceStep(t);
    }, s.prototype.hashStep = function() {
      var t;
      return t = location.hash.match(/^#step-(\d+)$/), t ? parseInt(t[1]) :this.initialStep;
    }, s.prototype.locationHash = function() {
      return location.hash.match(/^#(.+)/)[1];
    }, s.prototype.indicatorClicked = function(t) {
      var e;
      if (null != (null != t ? t.currentTarget :void 0)) return e = $(t.currentTarget).data("step-indicator-step"), 
      null != e && this.advanceStep(e), t.preventDefault();
    }, s.prototype.handleKeyEvent = function(t) {
      if (!this.el.find("input, textarea").is(":focus")) switch (t.keyCode) {
       case 37:
        return this.prevStep();

       case 39:
        return this.nextStep();
      }
    }, s.prototype.nextStep = function(t) {
      var e, i;
      return i = null != (e = $(null != t ? t.currentTarget :void 0).data("step")) ? e :this.currentStep + 1, 
      this.advanceStep(i), this.document.trigger("wizard-next-step"), null != t && t.preventDefault(), 
      i;
    }, s.prototype.prevStep = function(t) {
      var e, i;
      return i = null != (e = $(null != t ? t.currentTarget :void 0).data("step")) ? e :this.currentStep - 1, 
      this.advanceStep(i), this.document.trigger("wizard-previous-step"), null != t && t.preventDefault(), 
      i;
    }, s.prototype.advanceStep = function(t) {
      var e;
      return e = this.currentStep, this.ignoreTotalSteps ? this.currentStep = t :(this.allowCycle || t >= 1 && t <= this.totalSteps) && (this.currentStep = t % this.totalSteps || this.totalSteps), 
      this.currentStep === e ? (this.steps.filter(".step-" + this.currentStep).is(":visible") || (this.steps.hide(), 
      this.steps.filter(".step-" + this.currentStep + ":first").show()), this.updateCurrentStepClass()) :this.steps.filter(".current-wizard-step").fadeOut(this.transitionSpeed, function(t) {
        return function() {
          return t.get(".step-" + t.currentStep + ":first").fadeIn(t.transitionSpeed), t.updateCurrentStepClass();
        };
      }(this)), this.updateLocationHash && (location.hash = "#step-" + this.currentStep), 
      "function" == typeof this.onStepChanged ? this.onStepChanged() :void 0;
    }, s.prototype.updateCurrentStepClass = function() {
      return this.steps.removeClass("current-wizard-step"), this.stepIndicators.removeClass("current-wizard-step"), 
      this.get(".step-" + this.currentStep + ", .step-indicator-" + this.currentStep).addClass("current-wizard-step");
    }, s;
  }(Treehouse.View), window.Wizard = t, Featurette.register("wizard", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.enableForStudent = e(this.enableForStudent, this), this.removeWorkspaceNavHighlight = e(this.removeWorkspaceNavHighlight, this), 
      this.highlightWorkspaceNav = e(this.highlightWorkspaceNav, this), this.findWorkspaceNav = e(this.findWorkspaceNav, this), 
      this.addWorkspaceNav = e(this.addWorkspaceNav, this), this.onWizardClosed = e(this.onWizardClosed, this), 
      this.onWizardOpened = e(this.onWizardOpened, this), this.onStepChanged = e(this.onStepChanged, this), 
      this.selectExistingWorkspace = e(this.selectExistingWorkspace, this), s.__super__.constructor.apply(this, arguments), 
      this.launchExistingWorkspaceButton = this.el.find(".step.existing-workspace .launch-button"), 
      this.workspaceWelcomeIsPresent = this.steps.filter(".workspace-welcome").length > 0, 
      this.workspaceWelcomeIsPresent && (this.currentStep = this.initialStep = 0, this.advanceStep(this.currentStep)), 
      this.on("click", ".step.existing-workspace .workspace-heading a", this.selectExistingWorkspace);
    }
    return i(s, t), s.prototype.selectExistingWorkspace = function(t) {
      var e;
      return e = $(t.currentTarget), e.closest(".workspace-heading").addClass("selected").siblings().removeClass("selected"), 
      this.launchExistingWorkspaceButton.data("id", e.data("workspace-id")), t.preventDefault();
    }, s.prototype.onStepChanged = function() {
      if (this.workspaceWelcomeIsPresent && this.currentStep > 0) return this.initialStep = 1, 
      this.removeWorkspaceNavHighlight();
    }, s.prototype.onWizardOpened = function() {
      if (this.workspaceWelcomeIsPresent) return this.addWorkspaceNav(), 0 === this.currentStep && this.highlightWorkspaceNav(), 
      this.enableForStudent();
    }, s.prototype.onWizardClosed = function() {
      return s.__super__.onWizardClosed.apply(this, arguments), this.removeWorkspaceNavHighlight();
    }, s.prototype.addWorkspaceNav = function() {
      var t;
      if (!(this.findWorkspaceNav().length > 0)) return t = "<li>\n  <a href='/workspaces'>\n    <span class='icon icon-workspaces'></span>\n    <span class='nav-tooltip'>Workspaces</span>\n  </a>\n</li>", 
      $(".global-nav .bottom-anchored").before(t);
    }, s.prototype.findWorkspaceNav = function() {
      return $(".global-nav a[href='/workspaces']");
    }, s.prototype.highlightWorkspaceNav = function() {
      var t;
      return t = this.findWorkspaceNav(), $("#shelf").css("z-index", 501), t.addClass("selected").css({
        overflow:"visible"
      }), t.find(".nav-tooltip").css({
        left:70,
        opacity:1
      });
    }, s.prototype.removeWorkspaceNavHighlight = function() {
      var t;
      return $("#shelf").removeAttr("style"), t = this.findWorkspaceNav(), t.removeClass("selected").removeAttr("style"), 
      t.find(".nav-tooltip").removeAttr("style");
    }, s.prototype.enableForStudent = function() {
      return $.post("/workspaces/enable_for_student");
    }, s;
  }(Wizard), Featurette.register("launch-workspace-wizard", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.toggle = e(this.toggle, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", ".expandable", this.toggle), "undefined" != typeof pubnub && null !== pubnub && this.subscribe();
    }
    return i(s, t), s.prototype.subscribe = function() {
      var t;
      if (t = this.el.data("statusChannel")) return pubnub.subscribe({
        channel:t,
        message:function() {
          return location.reload();
        }
      });
    }, s.prototype.toggle = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.currentTarget).find(".expandable-toggle"), e = $(t.currentTarget).find(".expandable-content"), 
      $(i).toggleClass("selected"), e.is(":visible") ? this.contract(e) :this.expand(e);
    }, s.prototype.expand = function(t) {
      return t.stop(!0, !0).slideDown("fast");
    }, s.prototype.contract = function(t) {
      return t.stop(!0, !0).slideUp("fast");
    }, s;
  }(Treehouse.View), Featurette.register("degree-project-content", t);
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Treehouse.MarketingTrackVisit = function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.optimizely = window.optimizely, 
      this.optimizelyIds = {}, this.optimizely && (this.state = this.optimizely.data.state, 
      this.optimizelyIds = JSON.stringify(this.optimizelyExperimentData(this.state))), 
      $.ajax("/track_visit", {
        type:"POST",
        data:{
          page:this.data.page,
          optimizelyIds:this.optimizelyIds
        },
        timeout:2e3
      });
    }
    return t(i, e), i.prototype.optimizelyExperimentData = function(t) {
      var e, i, s, r, n;
      for (r = [], s = n = t.activeExperiments.length - 1; n >= 0; s = n += -1) e = t.activeExperiments[s], 
      i = {
        optimizelyExperimentId:e,
        optimizelyVariationId:t.variationIdsMap[e][0],
        optimizelyVariationName:t.variationNamesMap[e]
      }, r.push(i);
      return r;
    }, i;
  }(Treehouse.View), Featurette.register("marketing-track-visit", Treehouse.MarketingTrackVisit);
}.call(this), function() {
  var t, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  t = function(t) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.formId = this.data.formid, 
      this.marketoAppId = this.data.marketoAppid, this.marketoEndpoint = this.data.marketoEndpoint, 
      this.successBlock = this.get(".show-on-form-success"), this.showSuccessMessage = this.data.showSuccessMessage, 
      this.loadForm(this.formId, this.marketoAppId, this.marketoEndpoint, this.onSuccess);
    }
    return e(i, t), i.prototype.loadForm = function(t, e, i, s) {
      return MktoForms2.loadForm(i, e, t, function(t) {
        return function(e) {
          t.el.trigger("marketoform:loaded", e.getFormElem()), t.showSuccessMessage && e.onSuccess(function(t, i) {
            return s(e, t, i);
          });
        };
      }(this));
    }, i.prototype.onSuccess = function(t) {
      return t.getFormElem().hide(), $(".show-on-form-success").removeClass("hide-xs"), 
      !1;
    }, i;
  }(Treehouse.View), Featurette.register("marketo-form", t);
}.call(this), function() {
  var TreehouseTour, bind = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  TreehouseTour = function() {
    function TreehouseTour(t) {
      this.element = t, this.killTour = bind(this.killTour, this), this.prevTourStep = bind(this.prevTourStep, this), 
      this.nextTourStep = bind(this.nextTourStep, this), this.startTour = bind(this.startTour, this), 
      this.moveTour = bind(this.moveTour, this), this.scrollStep = bind(this.scrollStep, this), 
      this.stepIndicator = bind(this.stepIndicator, this), this.fadeOutStep = bind(this.fadeOutStep, this), 
      this.positionElement = bind(this.positionElement, this), this.fadeInStep = bind(this.fadeInStep, this), 
      this.handleKeyEvent = bind(this.handleKeyEvent, this), this.offscreenCheck = bind(this.offscreenCheck, this), 
      this.handlePosition = bind(this.handlePosition, this), this.applyOffsets = bind(this.applyOffsets, this), 
      this.tourSteps = bind(this.tourSteps, this), this.tourRefresh = bind(this.tourRefresh, this), 
      this.element.length && ($(document).on("tour:refresh", this.tourRefresh), $(document).on("pjax:end", function(t) {
        return function() {
          return _.delay(t.tourRefresh, 2500);
        };
      }(this)), $(document).trigger("tour:refresh"), $(window).on("resize", _.throttle(function(t) {
        return function() {
          if ($(window).width() < 1022) return t.killTour();
        };
      }(this), 200)));
    }
    return TreehouseTour.prototype.tourRefresh = function() {
      var t, e, i, s;
      return this.$modalTarp = $(".modal-tarp"), this.$tourContainer = $("[data-tour]"), 
      this.$tourTips = $(this.tourSteps()), this.$window = $(window), this.$body = $("body"), 
      this.$headerElements = $("[data-content], .fixed-heading"), this.totalTourSteps = this.$tourTips.length - 1, 
      this.windowHeight = this.$window.height(), this.windowWidth = this.$window.width(), 
      this.modalTarpWidth = this.$modalTarp.outerWidth(), this.classToggleSpeed = 100, 
      this.fadeSpeed = 300, this.smoothScrollSpeed = 400, this.currentStep = 0, this.parentCollection = [], 
      this.tourControlBarClass = "tour-control-bar", this.tourBarPrevClass = "tour-prev", 
      this.tourBarNextClass = "tour-next", this.tourBarCloseClass = "tour-close", this.tourStepIndicatorClass = "step-indicator", 
      this.tourActionListClass = "tour-actions", this.tourTitle = this.$tourContainer.data("tour"), 
      this.tourControlBar = "<div class='" + this.tourControlBarClass + " closed'><div><h3>" + this.tourTitle + "</h3><ul class='" + this.tourActionListClass + "'><li><a class='" + this.tourBarPrevClass + "' data-tour-trigger-prev>Previous Step<svg viewBox='0 0 12 12' class='left-arrow-icon icon'><path d='M0.3,5.3C0.3,5.3,0.3,5.3,0.3,5.3l5-5c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L3.4,5H11c0.6,0,1,0.4,1,1s-0.4,1-1,1H3.5l3.3,3.3c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0l-5-5C-0.1,6.3-0.1,5.7,0.3,5.3z'/></svg></a></li><li class='" + this.tourStepIndicatorClass + "'><span>- of -</span></li><li><a class='" + this.tourBarNextClass + "' data-tour-trigger-step>Next Step<svg viewBox='0 0 12 12'class='right-arrow-icon icon'><path d='M11.7,6.7l-5,5c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4L8.6,7H1C0.5,7,0,6.6,0,6s0.4-1,1-1h7.6L5.3,1.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5c0,0,0,0,0,0C12.1,5.7,12.1,6.3,11.7,6.7z'/></svg></a></li><li><a class='" + this.tourBarCloseClass + "' data-tour-trigger-death>Close Tour<svg viewBox='0 0 12 12'class='close-icon icon'><path d='M8.2,6l3.3-3.3c0.6-0.6,0.6-1.6,0-2.2s-1.6-0.6-2.2,0L6,3.8L2.7,0.5c-0.6-0.6-1.6-0.6-2.2,0s-0.6,1.6,0,2.2L3.8,6L0.5,9.3c-0.6,0.6-0.6,1.6,0,2.2c0.6,0.6,1.6,0.6,2.2,0L6,8.2l3.3,3.3c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.6,0-2.2L8.2,6z'/> </svg></a></li></ul></div></div>", 
      this.applyOffsets(), this.$body.append(this.tourControlBar), this.$tourContainer.children("a").on("click", function(t) {
        return t.preventDefault();
      }), i = "[data-tour-trigger-start]", s = "[data-tour-trigger-step]", e = "[data-tour-trigger-prev]", 
      t = "[data-tour-trigger-death]", $(i).off("click", this.startTour), $(s).off("click", this.nextTourStep), 
      $(e).off("click", this.prevTourStep), $(t).off("click", this.killTour), $(i).on("click", this.startTour), 
      $(s).on("click", this.nextTourStep), $(e).on("click", this.prevTourStep), $(t).on("click", this.killTour), 
      $(document).keydown(this.handleKeyEvent);
    }, TreehouseTour.prototype.tourSteps = function() {
      return _.filter(this.$tourContainer.children("li"), function() {
        return function(t) {
          var e;
          return null == (e = $(t).data("tour-step-if")) || $(e).length > 0;
        };
      }());
    }, TreehouseTour.prototype.applyOffsets = function() {
      return $(this.$tourTips).each(function() {
        var t, e;
        return e = $(this).data("tour-step-selector"), t = $(e).offset().top, $(this).attr("data-offset", t);
      });
    }, TreehouseTour.prototype.handlePosition = function(t, e) {
      var i, s;
      return s = t.data("tour-position"), i = this.offscreenCheck(t, e), i && ("top" === s ? (s = "bottom", 
      t.removeClass("tour-top").addClass("tour-bottom")) :"right" === s ? (s = "left", 
      t.removeClass("tour-right").addClass("tour-left")) :"bottom" === s ? (s = "top", 
      t.removeClass("tour-bottom").addClass("tour-top")) :"left" === s && (s = "right", 
      t.removeClass("tour-left").addClass("tour-right"))), t.attr("data-tour-position", s), 
      t.css({
        left:e[s].left,
        top:e[s].top
      });
    }, TreehouseTour.prototype.offscreenCheck = function(t, e) {
      var i, s;
      return t.offset(), s = t.data("tour-position"), i = !1, "top" === s ? i = e[s].top < 0 :"right" === s ? i = e[s].left + t.outerWidth() > this.windowWidth :"bottom" === s ? i = e[s].top + t.height() > $(document).height() :"left" === s && (i = e[s].left < 0), 
      i;
    }, TreehouseTour.prototype.handleKeyEvent = function(t) {
      var e, i, s;
      if ("[data-tour-trigger-start]", s = "[data-tour-trigger-step]", i = "[data-tour-trigger-prev]", 
      e = "[data-tour-trigger-death]", this.$modalTarp.hasClass("tarp-opened")) switch (t.keyCode) {
       case 27:
        return this.killTour(), $(e).addClass("active"), setTimeout(function() {
          return $(e).removeClass("active");
        }, this.classToggleSpeed);

       case 37:
        return $(i).hasClass("inactive-step") || ($(i).addClass("active"), setTimeout(function() {
          return $(i).removeClass("active");
        }, this.classToggleSpeed)), this.prevTourStep();

       case 39:
        return $(s).hasClass("inactive-step") || ($(s).addClass("active"), setTimeout(function() {
          return $(s).removeClass("active");
        }, this.classToggleSpeed)), this.nextTourStep();
      }
    }, TreehouseTour.prototype.fadeInStep = function(firstStep) {
      var currentStep;
      return currentStep = $(this.$tourTips[this.currentStep]), currentStep.data("on-enter") && eval(currentStep.data("on-enter")), 
      this.positionElement(currentStep, firstStep), currentStep.delay(this.smoothScrollSpeed - 100).fadeIn(this.fadeSpeed), 
      $(this.parentCollection[this.currentStep]).addClass("active-tour-step");
    }, TreehouseTour.prototype.positionElement = function(t) {
      var e, i, s, r, n, o, a, l, h, u, c, p, d, f, g, m;
      return e = $(t.data("tour-step-selector")), 0 === e.length ? null :(e.is(":visible") || e.show(), 
      n = e.offset().top, r = e.offset().left, a = e.outerWidth(), s = e.outerHeight(), 
      c = 10, i = r + a / 2, o = n + s / 2, p = parseInt(t.data("tour-step-width"), 10), 
      parseInt(t.height(), 10), t.css("width", null != (h = p + "px") ? h :""), m = t.outerWidth(), 
      f = t.outerHeight(), d = m / 2, g = f / 2, e.addClass("tour-parent"), this.parentCollection.push(e), 
      void 0 !== $(t).data("tour-step-include-siblings") && (u = e.siblings(":visible"), 
      u.addClass("active-tour-siblings")), l = {
        top:{
          left:i - d,
          top:n - f - c
        },
        right:{
          left:r + a + c,
          top:o - g
        },
        bottom:{
          left:i - d,
          top:n + s + c
        },
        left:{
          left:r - m - c,
          top:o - g
        }
      }, this.handlePosition(t, l));
    }, TreehouseTour.prototype.fadeOutStep = function() {
      var t;
      return t = $(".tour-parent"), t.removeClass("active-tour-step"), t.siblings().removeClass("active-tour-siblings"), 
      this.$tourTips.fadeOut(this.fadeSpeed);
    }, TreehouseTour.prototype.stepIndicator = function() {
      return $("." + this.tourStepIndicatorClass + " span").text(this.currentStep + 1 + " of " + (this.totalTourSteps + 1));
    }, TreehouseTour.prototype.scrollStep = function() {
      var t, e, i, s;
      switch (this.$tourTips = $(this.$tourTips), i = this.$tourTips.eq(this.currentStep).data("offset"), 
      t = this.$tourTips.eq(this.currentStep).outerHeight(), e = this.$tourTips.eq(this.currentStep).data("tour-position"), 
      $(this.$tourTips.eq(this.currentStep)).outerHeight(), s = $(this.$tourTips.eq(this.currentStep).data("tour-step-selector")).height() > this.windowHeight ? i / 2 - t :i - t - this.windowHeight / 3, 
      e) {
       case "top":
        return $("html, body").animate({
          scrollTop:s
        }, this.smoothScrollSpeed);

       case "right":
        return $("html, body").animate({
          scrollTop:i - this.windowHeight / 2
        }, this.smoothScrollSpeed);

       case "bottom":
        return $("html, body").animate({
          scrollTop:i + (t - this.windowHeight / 2)
        }, this.smoothScrollSpeed);

       case "left":
        return $("html, body").animate({
          scrollTop:i - this.windowHeight / 2
        }, this.smoothScrollSpeed);
      }
    }, TreehouseTour.prototype.moveTour = function(t, e) {
      switch (null == e && (e = !1), this.fadeOutStep(), t) {
       case 1:
        this.currentStep = this.currentStep + 1;
        break;

       case 0:
        this.currentStep = 0;
        break;

       case -1:
        this.currentStep = this.currentStep - 1;
        break;

       case null:
        this.currentStep = !1;
      }
      return this.scrollStep(), this.fadeInStep(e), this.stepIndicator(), 0 === this.currentStep ? $("." + this.tourBarPrevClass).addClass("inactive-step") :this.currentStep === this.totalTourSteps ? $("." + this.tourBarNextClass).addClass("inactive-step") :($("." + this.tourBarNextClass).removeClass("inactive-step"), 
      $("." + this.tourBarPrevClass).removeClass("inactive-step"));
    }, TreehouseTour.prototype.startTour = function(t) {
      return t.preventDefault(), this.moveTour(0, !0), this.$modalTarp.addClass("tarp-opened"), 
      this.$headerElements.addClass("tour-active"), $("." + this.tourControlBarClass).removeClass("closed"), 
      "undefined" != typeof Sidebar && null !== Sidebar && (Sidebar.nofix = !0), $(window).trigger("resize");
    }, TreehouseTour.prototype.nextTourStep = function() {
      if (this.currentStep < this.totalTourSteps) return this.moveTour(1);
    }, TreehouseTour.prototype.prevTourStep = function() {
      if (this.currentStep > 0) return this.moveTour(-1);
    }, TreehouseTour.prototype.killTour = function() {
      if (this.$headerElements.hasClass("tour-active")) return this.fadeOutStep(), $("." + this.tourControlBarClass).addClass("closed"), 
      this.$headerElements.removeClass("tour-active"), this.$modalTarp.delay(50).removeClass("tarp-opened"), 
      $("html, body").animate({
        scrollTop:0
      }, 5), "undefined" != typeof Sidebar && null !== Sidebar && (Sidebar.nofix = !1), 
      $(window).trigger("resize");
    }, TreehouseTour;
  }(), $(function() {
    return new TreehouseTour($("[data-tour]"));
  });
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  window.Filters = function() {
    function e(e) {
      if (this.options = e, this.deserializeState = t(this.deserializeState, this), this.serializeState = t(this.serializeState, this), 
      this.reset = t(this.reset, this), this.update = t(this.update, this), this.data = t(this.data, this), 
      "object" != typeof this.options) throw "options are not an object literal";
      if (null == this.options.container) throw "didn't pass 'container' option";
      if ("object" != typeof this.options.binds) throw "didn't pass 'binds' option";
      if ("string" != typeof this.options.basePath) throw "didn't pass 'basePath' option";
      this.binds = this.options.binds, this.container = $(this.options.container), _.each(this.binds, function(t) {
        return function(e) {
          var i;
          return e instanceof jQuery && e.is("[type='text']") ? (i = null, e.on("keyup", function() {
            return clearTimeout(i), i = setTimeout(t.update, 750);
          }), e.on("keydown", function() {
            return clearTimeout(i);
          }), e.on("keydown", function(t) {
            if (13 === t.which) return t.preventDefault();
          })) :e instanceof jQuery && e.is("[type='hidden']") ? e.on("filter:change", t.update) :e.el.on("change", t.update);
        };
      }(this)), this.container.on("pjax:error pjax:timeout", function() {
        return !1;
      }), this.container.on("pjax:end", function() {
        return Treehouse.init();
      }), $(document).on("click", ".filter-reset", this.reset), $(document).on("click", "[data-filter-list-val]", function(t) {
        return function(e) {
          var i, s, r;
          if (e.preventDefault(), s = $(e.currentTarget), s.toggleClass("selected"), i = s.data("filter-list-val").split(":"), 
          r = t.binds[i[0]], r.val(i[1]), r instanceof jQuery) return r.trigger("filter:change");
        };
      }(this)), this.deserializeState();
    }
    return e.prototype.data = function() {
      var t;
      return t = new Object(), _.each(this.binds, function(e, i) {
        return t[i] = e.val();
      }), t;
    }, e.prototype.update = function(t) {
      return t && t.preventDefault(), this.serializeState(), $.pjax({
        push:!1,
        url:"/" + this.options.basePath,
        container:this.container,
        data:this.data(),
        scrollTo:!1
      }), !1;
    }, e.prototype.reset = function() {
      return _.each(this.binds, function(t) {
        return t.val("");
      });
    }, e.prototype.serializeState = function() {
      var t;
      return t = _.reduce(this.binds, function() {
        return function(t, e, i) {
          return e = e.val(), void 0 === e && (e = ""), e = String(e).replace(" ", "-"), e && t.push(i + ":" + e), 
          t;
        };
      }(), []), t = t.join("/"), history.replaceState(null, null, "/" + this.options.basePath + "/" + t), 
      $(document).trigger("filters:serialized");
    }, e.prototype.deserializeState = function() {
      var t;
      return t = location.pathname.split("?")[0], t = t.replace(this.options.basePath, ""), 
      t = t.split("/"), _.each(t, function(t) {
        return function(e) {
          var i, s, r;
          if ("" !== e) return s = e.split(":"), i = s[0], r = s[1], t.binds[i].val(r, !1), 
          $(document).trigger("filter:deserialized", [ e ]);
        };
      }(this)), $(document).trigger("filters:deserialized"), Treehouse.init();
    }, e;
  }();
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("dashboard-index", function(i) {
    function s() {
      this.toggleCardVisibility = t(this.toggleCardVisibility, this), this.loadFilters = t(this.loadFilters, this), 
      s.__super__.constructor.apply(this, arguments), this.viewingAll = !1, this.listenTo(document, "bookmark:removed", function(t) {
        return function(e) {
          return t.filters.update(e);
        };
      }(this)), this.on("click", ".view-all", this.toggleCardVisibility), _.delay(this.loadFilters, 100), 
      this.on("pjax:end", this.clearElementsCache), this.document = $(document);
    }
    return e(s, i), s.prototype.loadFilters = function() {
      return this.filters || (this.filters = new Filters({
        basePath:"home",
        container:"#home-pjax",
        binds:{
          view:Featurette.get("view")
        }
      }));
    }, s.prototype.toggleCardVisibility = function(t) {
      var e, i, s;
      return e = $(t.target), i = e.parents(".collapsible-container"), s = i.find("ul.card-list"), 
      s.hasClass("collapsed") ? (s.removeClass("collapsed"), e.text(e.data("view-all-text"))) :(s.addClass("collapsed"), 
      e.text(e.data("view-collapsed-text"))), this.document.trigger("personalization.load");
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("degree-marketing-banner", Treehouse.DegreeMarketingBanner = function(i) {
    function s() {
      this.click = t(this.click, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", "[data-close-marketing-banner]", this.click);
    }
    return e(s, i), s.prototype.click = function() {
      return this.el.remove(), $.post("/degree_memberships/optout");
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.SubuserDegreeAlert = function(i) {
    function s() {
      this.dismissExpirationAlert = t(this.dismissExpirationAlert, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", ".subuser-expired-td-alert .close-alert", this.dismissExpirationAlert);
    }
    return e(s, i), s.prototype.dismissExpirationAlert = function() {
      return $.post(this.el.data("dismiss-expiration-alert-path"));
    }, s;
  }(Treehouse.View), Featurette.register("subuser-degree-alert", Treehouse.SubuserDegreeAlert);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("questions-tab", Treehouse.QuestionsTab = function(i) {
    function s() {
      this.loadQuestions = t(this.loadQuestions, this), s.__super__.constructor.apply(this, arguments), 
      this.tab = $("#tab-questions"), this.discussions = this.get(".discussion-list"), 
      this.step_id = this.discussions.data("step-id") || 0, this.step_id && this.discussions.size() && this.loadQuestions();
    }
    return e(s, i), s.prototype.loadQuestions = function() {
      return $.ajax({
        url:"/community/video_suggested_posts",
        data:{
          video:this.step_id,
          limit:15,
          sort:"high-quality"
        },
        dataType:"json",
        success:function(t) {
          return function(e) {
            return t.discussions.html(e.html), "" === e.html ? (t.el.addClass("no-questions"), 
            t.el.find("[data-related-questions]").attr("class", "grid-100")) :t.tab.find("a").append('<span class="discussions-counter">' + t.discussions.find(".discussion-meta").size() + "</span>");
          };
        }(this)
      });
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, i) {
    function s() {
      this.constructor = t;
    }
    for (var r in i) e.call(i, r) && (t[r] = i[r]);
    return s.prototype = i.prototype, t.prototype = new s(), t.__super__ = i.prototype, 
    t;
  }, e = {}.hasOwnProperty;
  Featurette.register("teachers-notes-tab", Treehouse.TeachersNotesTab = function(e) {
    function i() {
      i.__super__.constructor.apply(this, arguments), this.el.find("[data-teachers-notes] a").attr("target", "_blank");
    }
    return t(i, e), i;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("radial-progress-example", Treehouse.RadialProgressExample = function(i) {
    function s() {
      this.updateProgress = t(this.updateProgress, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", "ul li", this.updateProgress);
    }
    return e(s, i), s.prototype.updateProgress = function(t) {
      var e;
      return t.preventDefault(), e = $(t.currentTarget), e.addClass("current").siblings().removeClass("current"), 
      Featurette.get(this.el.find("svg").attr("id")).setProgress(parseInt(e.find("a").get(0).text));
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("treehouse-email-notifications", Treehouse.TreehouseEmailNotifications = function(i) {
    function s() {
      this.disableAllEmail = t(this.disableAllEmail, this), this.emailPreferenceSelect = t(this.emailPreferenceSelect, this), 
      this.hideDesktopNotificationCheckbox = t(this.hideDesktopNotificationCheckbox, this), 
      this.desktopPermissionIs = t(this.desktopPermissionIs, this), this.toggleDesktopNotification = t(this.toggleDesktopNotification, this), 
      this.updateCheckbox = t(this.updateCheckbox, this), this.desktopCheckbox = t(this.desktopCheckbox, this), 
      s.__super__.constructor.apply(this, arguments), this.on("click", "[name='notification_preferences[disable_all_email]']", this.disableAllEmail), 
      this.on("click", "[data-email-preference]", this.emailPreferenceSelect), "undefined" != typeof Notification && null !== Notification ? (this.on("click", "[data-desktop-notifications-toggle]", this.toggleDesktopNotification), 
      this.desktopNotification = Notification, (this.desktopPermissionIs("granted") || this.desktopPermissionIs("denied")) && this.hideDesktopNotificationCheckbox()) :this.hideDesktopNotificationCheckbox();
    }
    return e(s, i), s.prototype.desktopCheckbox = function() {
      return this.get("[data-desktop-notifications-toggle]");
    }, s.prototype.updateCheckbox = function() {
      return this.desktopPermissionIs("granted") ? this.desktopCheckbox().attr("checked", !0) :this.desktopPermissionIs("denied") ? this.desktopCheckbox().removeAttr("checked") :void 0;
    }, s.prototype.toggleDesktopNotification = function(t) {
      return t.preventDefault(), this.desktopNotification.requestPermission(this.updateCheckbox);
    }, s.prototype.desktopPermissionIs = function(t) {
      return this.desktopNotification.permission === t;
    }, s.prototype.hideDesktopNotificationCheckbox = function() {
      return this.el.removeClass("with-bottom-border"), this.desktopCheckbox().parents("li").remove();
    }, s.prototype.emailPreferenceSelect = function(t) {
      if (t.target.checked) return this.get("[name='notification_preferences[disable_all_email]']").prop("checked", !1);
    }, s.prototype.disableAllEmail = function(t) {
      if (t.target.checked) return this.get("[data-email-preference]").prop("checked", !1);
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s(t) {
      this.onHelpVideoEnd = e(this.onHelpVideoEnd, this), this.playHelpVideo = e(this.playHelpVideo, this), 
      this.collectSurveyData = e(this.collectSurveyData, this), this.submitSurveyData = e(this.submitSurveyData, this), 
      this.onSkipSurvey = e(this.onSkipSurvey, this), this.onCompleteSurvey = e(this.onCompleteSurvey, this), 
      this.onTopicFilterClicked = e(this.onTopicFilterClicked, this), this.onTrackListing = e(this.onTrackListing, this), 
      this.onHashChange = e(this.onHashChange, this), this.onHelpClicked = e(this.onHelpClicked, this), 
      this.unanswerQuestion = e(this.unanswerQuestion, this), this.answerQuestion = e(this.answerQuestion, this), 
      this.advanceStep = e(this.advanceStep, this), this.nextStep = e(this.nextStep, this), 
      this.listenToEvents = e(this.listenToEvents, this), s.__super__.constructor.call(this, t), 
      this.helpVideo = this.get("[data-help-video]"), this.helpVideoContainer = this.helpVideo.parents("[data-help-video-container]"), 
      this.surveyData = {}, this.listenToEvents();
    }
    return i(s, t), s.prototype.listenToEvents = function() {
      if (this.on("click", "li.topic-filter a", this.onTopicFilterClicked), this.on("click", "[data-submit-survey]", this.onCompleteSurvey), 
      this.on("click", "[data-replay-help-video]", this.playHelpVideo), this.on("click", "[data-back-button]", this.onBackClicked), 
      this.on("click", "[data-leads-to=help]", this.onHelpClicked), this.on("click", "[data-skip-survey]", this.onSkipSurvey), 
      this.on("click", "[data-leads-to=track_listing]", this.onTrackListing), this.helpVideo && this.helpVideo.get(0)) return this.helpVideo.get(0).addEventListener("ended", this.onHelpVideoEnd);
    }, s.prototype.nextStep = function(t) {
      return this.answerQuestion(t), s.__super__.nextStep.apply(this, arguments);
    }, s.prototype.advanceStep = function() {
      return s.__super__.advanceStep.apply(this, arguments), this.unanswerQuestion();
    }, s.prototype.answerQuestion = function(t) {
      var e;
      return e = $(t.currentTarget), $.ajax("/surveys/" + this.el.data("purpose") + "/answer_question", {
        data:{
          question_id:e.closest(".step").data("question-id"),
          answer_id:e.data("answer-id")
        },
        type:"PUT"
      });
    }, s.prototype.unanswerQuestion = function() {
      var t;
      if (t = $("." + this.locationHash()).data("question-id")) return $.ajax("/surveys/" + this.el.data("purpose") + "/unanswer_question", {
        data:{
          question_id:t
        },
        type:"DELETE"
      });
    }, s.prototype.onBackClicked = function(t) {
      return t.preventDefault(), window.history.go(-1);
    }, s.prototype.onHelpClicked = function() {
      return this.surveyData.not_sure = !0;
    }, s.prototype.onHashChange = function(t) {
      var e, i, r, n, o;
      for (t.preventDefault(), n = this.get("[data-featurette='video-player']"), i = 0, 
      r = n.length; i < r; i++) e = n[i], null != (o = Featurette.get(e.id)) && o.reset();
      return $("html,body").animate({
        scrollTop:0
      }), s.__super__.onHashChange.apply(this, arguments);
    }, s.prototype.onTrackListing = function(t) {
      return t.stopPropagation(), t.preventDefault(), this.surveyData.action_to_take = "track_listing", 
      this.onCompleteSurvey(t);
    }, s.prototype.onTopicFilterClicked = function(t) {
      return t.stopPropagation(), t.preventDefault(), this.surveyData.topic_id = $(t.currentTarget).parent().data("topic-id"), 
      this.surveyData.action_to_take = "library", this.onCompleteSurvey(t);
    }, s.prototype.onCompleteSurvey = function(t) {
      var e;
      return t.preventDefault(), this.collectSurveyData(t), e = $(t.currentTarget).data("track-join-url"), 
      e ? ($.rails.disableFormElements(this.el), this.joinTrack(e).fail(this.redirectToDashboard).done(function(t) {
        return function() {
          return t.submitSurveyData("PUT", "/surveys/" + t.el.data("purpose") + "/complete");
        };
      }(this))) :this.submitSurveyData("PUT", "/surveys/" + this.el.data("purpose") + "/complete");
    }, s.prototype.joinTrack = function(t) {
      return $.ajax(t, {
        type:"PUT"
      });
    }, s.prototype.onSkipSurvey = function(t) {
      return t.preventDefault(), this.surveyData.skipped = !0, this.surveyData.step_skipped = $(t.currentTarget).closest(".step").data("step-skipped"), 
      this.submitSurveyData("PUT", "/surveys/" + this.el.data("purpose") + "/complete");
    }, s.prototype.submitSurveyData = function(t, e) {
      return $.ajax(e, {
        data:{
          survey_response:this.surveyData
        },
        type:t,
        error:this.redirectToDashboard,
        success:this.redirectAfterSubmit
      });
    }, s.prototype.redirectAfterSubmit = function(t, e, i) {
      return window.location = i.getResponseHeader("Location");
    }, s.prototype.redirectToDashboard = function() {
      return window.location.replace("/home");
    }, s.prototype.collectSurveyData = function(t) {
      var e;
      return this.surveyData.track_to_join = $(t.currentTarget).data("track-id"), (e = this.surveyData).action_to_take || (e.action_to_take = $(t.currentTarget).data("action-to-take"));
    }, s.prototype.playHelpVideo = function(t) {
      return t.preventDefault(), this.helpVideoContainer.removeClass("video-ended"), this.helpVideo.trigger("play");
    }, s.prototype.onHelpVideoEnd = function() {
      return this.helpVideoContainer.addClass("video-ended").removeClass("box-content").addClass("box-header"), 
      this.get("[data-help-video-box-header]").addClass("video-ended");
    }, s;
  }(Wizard), Featurette.register("surveys-wizard", t), window.SurveyWizard = t;
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.SurveysToggleDescription = function(i) {
    function s() {
      this.toggleDescription = t(this.toggleDescription, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", "[data-show-track-card=true], [data-info-icon]", this.toggleDescription);
    }
    return e(s, i), s.prototype.toggleDescription = function(t) {
      return t.preventDefault(), t.stopPropagation(), this.el.toggleClass("showing-description").siblings().removeClass("showing-description");
    }, s;
  }(Treehouse.View), Featurette.register("surveys-toggle-description", Treehouse.SurveysToggleDescription);
}.call(this), function() {
  var t;
  t = function() {
    function t(t) {
      this.$el = $(t), this.id = this.$el.data("item-id"), this.type = this.$el.data("item-type"), 
      this.$showEl = $("#show-" + this.type + "-" + this.id), this.$editEl = $("#edit-" + this.type + "-" + this.id), 
      this.$cancelEl = $("#cancel-edit-" + this.type + "-" + this.id), this.$followButton = $("a[data-featurette='follow']"), 
      this.$el.click(function(t) {
        return function() {
          if (t.previousValue = t.$editEl.find(".new-discussion textarea").val(), t.$showEl.hide(), 
          t.$editEl.show(), "post" === t.type) return t.$followButton.hide();
        };
      }(this)), this.$cancelEl.click(function(t) {
        return function(e) {
          return e.preventDefault(), t.$editEl.hide(), t.$showEl.show(), t.$editEl.find(".new-discussion textarea").val(t.previousValue), 
          t.$followButton.show();
        };
      }(this));
    }
    return t;
  }(), Featurette.register("forum-editing", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.success = e(this.success, this), this.dismissAnswerRequest = e(this.dismissAnswerRequest, this), 
      this.$el = $(t), this.post = this.$el.closest(".discussion-item-sticky"), this.post_link = this.post.find(".discussion-title a"), 
      this.post_link.size() ? (this.view = "index", this.post_slug_url = this.post_link.prop("href")) :(this.view = "show", 
      this.post_slug_url = window.location.pathname), this.$el.click(this.dismissAnswerRequest);
    }
    return t.prototype.dismissAnswerRequest = function() {
      return $.post(this.post_slug_url + "/dismiss_request", {}, this.success);
    }, t.prototype.success = function() {
      return "index" === this.view ? $("#sort a.selected").click() :this.$el.parent().hide();
    }, t;
  }(), Featurette.register("forum-answer-request-dismissal", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("forum-post-preview", function(i) {
    function s(e) {
      this.reset = t(this.reset, this), this.togglePreviewButton = t(this.togglePreviewButton, this), 
      this.error = t(this.error, this), this.success = t(this.success, this), this.listener = t(this.listener, this), 
      s.__super__.constructor.apply(this, arguments), this.$el = $(e), this.$formitem = this.$el.closest(".form-item"), 
      this.$textarea = this.$formitem.find("textarea"), this.$mentions = this.$formitem.find(".mentions"), 
      this.$preview = this.$formitem.find(".forum-preview"), this.$attachedCode = this.$el.closest("form").find("#attached_code"), 
      this.$tooltip = this.$el.find(".tooltip strong"), this.on("click", this.listener), 
      this.$textarea.on("input", this.togglePreviewButton);
    }
    return e(s, i), s.prototype.listener = function(t) {
      var e, i;
      return t.preventDefault(), this.$textarea.focus(), this.$el.toggleClass("selected"), 
      this.$formitem.find("label").focus(), this.$el.hasClass("selected") ? (this.$tooltip.text("Compose"), 
      e = this.$textarea.val(), this.$el.closest("form").find("#attach_code").is(":checked") && (e = this.$textarea.val() + "\n\n" + this.$attachedCode.val()), 
      i = $.post("/community/preview", {
        post_body:e
      }), i.success(this.success), i.fail(this.error)) :(this.$tooltip.text("Preview"), 
      this.$preview.hide(), this.$textarea.show(), this.$textarea.focus());
    }, s.prototype.success = function(t) {
      return this.$preview.html(t.html), this.$preview.show(), this.$mentions.hide(), 
      this.$textarea.hide();
    }, s.prototype.error = function() {
      return alert("There was a problem generating a preview. Please try again."), this.$preview.html(""), 
      this.$mentions.show(), this.$textarea.show();
    }, s.prototype.togglePreviewButton = function(t) {
      return t.preventDefault(), "" === this.$textarea.val() ? this.$el.fadeOut() :this.$el.fadeIn();
    }, s.prototype.reset = function() {
      return this.$preview.html("").hide(), this.$textarea.show(), this.$tooltip.text("Preview"), 
      this.$el.removeClass("selected");
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("filter-tag-breadcrumb", function(i) {
    function s() {
      this.render = t(this.render, this), this.callback = t(this.callback, this), this.updateBreadcrumb = t(this.updateBreadcrumb, this), 
      this.clearBreadcrumb = t(this.clearBreadcrumb, this);
      var e;
      s.__super__.constructor.apply(this, arguments), e = $(document), e.on("click", "#filter-breadcrumb [data-filter-tag]", this.updateBreadcrumb), 
      e.on("click", ".tags [data-filter-tag]", this.render), e.on("filter:deserialized", this.callback), 
      this.on("click", "[data-filter-clear-tags]", this.clearBreadcrumb);
    }
    return e(s, i), s.prototype.clearBreadcrumb = function(t) {
      return Featurette.get("forum-index").deselectAll(t), this.el.hide();
    }, s.prototype.updateBreadcrumb = function(t) {
      var e, i;
      return e = $(t.target), i = e.data("filter-list-val"), "topic" === e.data("filter-tag-type") ? this.clearBreadcrumb() :this.el.find("[data-filter-list-val='" + i + "'][data-filter-tag]").parent().nextUntil("li.clear-results").remove();
    }, s.prototype.callback = function(t, e) {
      var i;
      if (i = $("[data-filter-list-val='" + e + "'][data-filter-tag]"), i.length) return this.render({
        target:i
      });
    }, s.prototype.render = function(t) {
      var e, i, s;
      if (e = $(t.target), "topic" !== e.data("filter-tag-type")) return i = e.data("filter-list-val"), 
      e = e.closest("ul.tags").clone(), e.find("[data-filter-list-val='" + i + "'][data-filter-tag]").parent().nextAll().remove(), 
      s = HoganTemplates["community/filter_breadcrumb"].render({
        tags:e.html(),
        icon_close:this.el.data("icon-close")
      }), this.el.html(s), this.el.show();
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("forum-index", function(i) {
    function s() {
      this.deselectAll = t(this.deselectAll, this), this.onPjaxEnd = t(this.onPjaxEnd, this), 
      this.onPjaxStart = t(this.onPjaxStart, this), this.listeners = t(this.listeners, this), 
      s.__super__.constructor.apply(this, arguments), this.container = $("[data-forums-pjax]"), 
      _.defer(this.listeners);
    }
    return e(s, i), s.prototype.listeners = function() {
      return this.container.on("pjax:start", this.onPjaxStart), this.container.on("pjax:end", this.onPjaxEnd), 
      this.filters = new Filters({
        basePath:"community",
        container:"[data-forums-pjax]",
        binds:{
          sort:Featurette.get("sort"),
          topic:Featurette.get("topic"),
          q:$("#q"),
          stage:$("#stage_id"),
          syllabus:$("#syllabus_id"),
          video:$("#video_id"),
          quiz:$("#quiz_id"),
          "code-challenge":$("#code-challenge_id"),
          "degree-project":$("#degree-project_id"),
          "local-code-challenge":$("#local-code-challenge_id")
        }
      }), this.on("click", ".form-search .search-button", function(t) {
        return function(e) {
          return t.filters.update(e);
        };
      }(this)), this.on("click", "[data-filter-tag]", this.deselectAll), this.on("click", "#topic li", function(t) {
        return function(e) {
          return t.deselectAll(e), Featurette.get("filter-breadcrumb").clearBreadcrumb(e), 
          t.filters.update(e), $(".filters-container").hide();
        };
      }(this)), $(document).on("filters:serialized", function() {
        return function() {
          return $("#forum_post_topic_id option").each(function() {
            if (this.text.toLowerCase() === Featurette.get("topic").val().replace("-", " ")) return this.selected = !0;
          }), $.uniform.update();
        };
      }());
    }, s.prototype.onPjaxStart = function() {
      return this.container.addClass("transparent-while-loading");
    }, s.prototype.onPjaxEnd = function() {
      return this.container.removeClass("transparent-while-loading");
    }, s.prototype.deselectAll = function(t) {
      return $("#stage_id, #syllabus_id, #video_id, #quiz_id, #code-challenge_id, #degree-project_id, #local-code-challenge-id").not($(t.currentTarget).data("filter-tag-type") + "_id").val("");
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.loadForumTips = e(this.loadForumTips, this), this.findAttachedCode = e(this.findAttachedCode, this), 
      this.toggleAttachedCode = e(this.toggleAttachedCode, this), this.searchForSimilarPosts = e(this.searchForSimilarPosts, this), 
      this.pollQuestions = e(this.pollQuestions, this), this.syncQuestion = e(this.syncQuestion, this), 
      this.nextStep = e(this.nextStep, this), this.onWizardClosed = e(this.onWizardClosed, this), 
      this.onWizardOpened = e(this.onWizardOpened, this), s.__super__.constructor.apply(this, arguments), 
      this.on("keyup", "[data-post-title], [data-question-details]", this.handleTextInputKeys), 
      this.titles = [ "Ask a Question", "Is your question unique?", "Add question details" ], 
      this.title = this.el.closest(".contained").find("h1"), this.noResults = this.el.find(".no-existing-questions"), 
      this.questionsContainer = this.el.find(".suggested-questions ul"), this.postBody = this.el.find("#forum_post_body"), 
      this.attachedCode = this.el.find("#attached_code"), this.attachedFiles = this.el.find(".code-attachments"), 
      this.has_errors = !1, this.transitionSpeed = 0, this.steps.filter(".step-2").find('[name="forum_post[subject]"]').on("keyup", _.throttle(this.pollQuestions, 2e3)), 
      this.el.find("#attach_code").on("change", this.toggleAttachedCode), this.steps.find("textarea").on("change, blur, keyup", $.proxy(this.validate, this)), 
      this.steps.find("select").on("change", $.proxy(this.validate, this));
    }
    return i(s, t), s.prototype.onWizardOpened = function() {
      return this.currentStepPage = this.steps.filter(".step-" + this.currentStep), this.setStepTitle(), 
      this.clearFields(), this.validate(), this.findAttachedCode(), this.loadForumTips();
    }, s.prototype.onWizardClosed = function() {
      return s.__super__.onWizardClosed.apply(this, arguments), this.clearFields(), this.question = "";
    }, s.prototype.nextStep = function() {
      return s.__super__.nextStep.apply(this, arguments), this.currentStepPage = this.steps.filter(".step-" + this.currentStep), 
      this.syncQuestion(), this.setStepTitle(), this.validate();
    }, s.prototype.clearFields = function() {
      return this.el.find("textarea").val("").blur(), Featurette.get("forum-post-preview").reset();
    }, s.prototype.syncQuestion = function() {
      return this.question = this.currentStepPage.prev().find('[name="forum_post[subject]"]').val(), 
      this.steps.find('[name="forum_post[subject]"]').val(this.question).blur(), 2 === this.currentStep && this.searchForSimilarPosts(), 
      this.steps.find('[name="forum_post[subject]"]:visible').trigger("autosize.resize");
    }, s.prototype.pollQuestions = function() {
      var t;
      if (t = this.question, this.question = this.currentStepPage.find('[name="forum_post[subject]"]').val().trim(), 
      t !== this.question && "" !== this.question) return this.searchForSimilarPosts();
    }, s.prototype.validate = function() {
      var t, e, i;
      return t = this.currentStepPage.find("textarea"), e = this.el, i = !1, t.each(function() {
        if ("" === this.value.trim()) return i = !0;
      }), 3 === this.currentStep && "Choose a topic..." === this.currentStepPage.find("select option:selected").text() && (i = !0), 
      this.has_errors = i, this.has_errors ? e.find("button.button-primary").attr("disabled", !0).addClass("inactive disabled") :this.resetErrors(), 
      !0;
    }, s.prototype.resetErrors = function() {
      return this.currentStepPage.find(".error-message").remove(), this.currentStepPage.find("button").attr("disabled", !1).removeClass("inactive disabled"), 
      this.has_errors = !1, !0;
    }, s.prototype.setStepTitle = function() {
      return this.title.text(this.titles[this.currentStep - 1]);
    }, s.prototype.searchForSimilarPosts = function() {
      return $.ajax({
        url:window.location.origin + "/community/suggested_posts",
        data:{
          q:this.question
        },
        dataType:"json",
        success:function(t) {
          return function(e) {
            return t.questionsContainer.empty(), "" === e.html.trim() ? (t.noResults.show(), 
            t.questionsContainer.hide()) :(t.noResults.hide(), t.questionsContainer.show().append(e.html));
          };
        }(this)
      });
    }, s.prototype.toggleAttachedCode = function() {
      return this.attachedFiles.toggle();
    }, s.prototype.findAttachedCode = function() {
      var t, e, i, s, r, n, o, a;
      if (t = "", null != Featurette.get("cc-container") && (a = Featurette.get("cc-container").workspace)) for (n = a.editors, 
      s = 0, r = n.length; s < r; s++) e = n[s], o = $(e.codeMirror.getTextArea()), i = o.data("file"), 
      this.attachedFiles.empty(), this.attachedFiles.append("<div class='file'><span class='icon icon-doc'></span>" + i + "</div>"), 
      t += "\n\n```" + i + "\n" + e.getValue() + "\n```";
      return this.attachedCode.val(t);
    }, s.prototype.loadForumTips = function() {
      return $.ajax({
        url:"/community/forum_tips",
        dataType:"html",
        success:function() {
          return function(t) {
            return $("body").append($(t)), Featurette.load();
          };
        }()
      });
    }, s.prototype.handleTextInputKeys = function(t) {
      return t.stopPropagation();
    }, s;
  }(Wizard), window.ForumPostWizard = t, Featurette.register("forum-post-wizard", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.error = e(this.error, this), this.success = e(this.success, this), this.listener = e(this.listener, this), 
      s.__super__.constructor.apply(this, arguments), this.on("click", this.listener);
    }
    return i(s, t), s.prototype.listener = function(t) {
      var e;
      return t.stopPropagation(), t.preventDefault(), this.el.attr("disabled", "disabled"), 
      e = $.post(this.el.prop("href"), {
        _method:this.data.method
      }), e.success(this.success), e.fail(this.error);
    }, s.prototype.success = function() {
      return this.el.removeAttr("disabled"), "not-following" === this.data.status ? (this.el.html(this.data.unfollowHtml).addClass("secondary").attr("href", this.data.unfollowUrl), 
      this.data.status = "following", this.data.method = "delete") :(this.el.html(this.data.followHtml).removeClass("secondary").attr("href", this.data.followUrl), 
      this.data.status = "not-following", this.data.method = "put");
    }, s.prototype.error = function() {
      return this.el.removeAttr("disabled"), alert("Doh! There was a problem with your request. Try again.");
    }, s;
  }(Treehouse.View), Featurette.register("follow", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.cancelNewComment = e(this.cancelNewComment, this), this.showNewComment = e(this.showNewComment, this), 
      this.$el = $(t), this.id = this.$el.data("item-id"), this.type = this.$el.data("item-type"), 
      this.$newEl = $("#new-" + this.type + "-comment-" + this.id), this.$cancelEl = $("#cancel-new-" + this.type + "-comment-" + this.id), 
      this.$followButton = $("a[data-featurette='follow']"), this.$mobileDiscussionButtons = $(".discussion-mobile-buttons"), 
      this.$editForumPost = $(".edit_forum_post"), this.$el.click(this.showNewComment), 
      this.$cancelEl.click(this.cancelNewComment);
    }
    return t.prototype.showNewComment = function(t) {
      return t.preventDefault(), "post" === this.type && this.$followButton.hide(), this.$mobileDiscussionButtons.hide(), 
      this.$mobileDiscussionButtons.find(".discussion-answer-post").hide(), this.$newEl.show();
    }, t.prototype.cancelNewComment = function(t) {
      if (t.preventDefault(), this.$newEl.hide().find("textarea").val(""), this.$mobileDiscussionButtons.show(), 
      this.$mobileDiscussionButtons.find("#discussion-answer-post-alt").show(), !this.$editForumPost.is(":visible")) return this.$followButton.show();
    }, t;
  }(), Featurette.register("forum-commenting", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("bookmark-actions", function(i) {
    function s() {
      this.confirmAction = t(this.confirmAction, this), this.cancelAction = t(this.cancelAction, this), 
      this.triggerAction = t(this.triggerAction, this), s.__super__.constructor.apply(this, arguments), 
      this.on("pjax:end", _.bind(this.init, this)), this.init();
    }
    return e(s, i), s.prototype.init = function() {
      return this.clearElementsCache(), this.stopListening(), this.on("click", "[data-add-bookmark]", this.triggerAction), 
      this.on("click", "[data-cancel-bookmark]", this.cancelAction), this.on("click", "[data-confirm-bookmark]", this.confirmAction);
    }, s.prototype.triggerAction = function(t) {
      return t.preventDefault(), this.get("[data-bookmark-tarp]").show().css({
        opacity:"1"
      });
    }, s.prototype.cancelAction = function(t) {
      return t.preventDefault(), this.get("[data-bookmark-tarp]").css({
        opacity:"0"
      }), this.el.delay(200).queue(function(t) {
        return function() {
          return t.get("[data-bookmark-tarp]").hide(), t.el.dequeue();
        };
      }(this));
    }, s.prototype.confirmAction = function(t) {
      return t.preventDefault(), this.el.data("remove-card-url") ? (this.removeCard(), 
      this.get("[data-bookmark-tarp]").css({
        opacity:"0"
      }), this.el.closest("li").addClass("destroyed"), this.el.delay(500).queue(function(t) {
        return function() {
          return t.el.closest("li").hide(), t.el.dequeue();
        };
      }(this))) :(this.addCard(), this.get("[data-bookmark-tarp-text]").html("<h4>Bookmarked!</h4>"), 
      this.el.delay(1e3).queue(function(t) {
        return function() {
          return t.get("[data-bookmark-tarp]").css({
            opacity:"0"
          }), t.el.closest(".lesson-card").find(".lesson-progress").removeClass("toggle-add-option"), 
          t.el.dequeue, t.el.remove();
        };
      }(this)));
    }, s.prototype.removeCard = function() {
      return $.ajax(this.el.data("remove-card-url"), {
        type:"DELETE"
      });
    }, s.prototype.addCard = function() {
      return $.post(this.el.data("add-card-url"));
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  null == Treehouse.LearningQueue && (Treehouse.LearningQueue = {}), Treehouse.LearningQueue.TrackActions = function(i) {
    function s() {
      this.trackQueuedState = t(this.trackQueuedState, this), this.hideAddConfirmation = t(this.hideAddConfirmation, this), 
      this.showAddConfirmation = t(this.showAddConfirmation, this), this.updateElementClasses = t(this.updateElementClasses, this), 
      s.__super__.constructor.apply(this, arguments), this.queueableItems = $(".card [data-featurette='learning-queue/item']"), 
      this.addConfirmation = this.get(".confirmation-container"), this.missingActivities = $("#track-queue"), 
      this.on("click", "[data-queue-action='confirm-add']", this.showAddConfirmation), 
      this.on("click", "[data-queue-action='cancel-add']", this.hideAddConfirmation), 
      this.listenTo("body", "queue:changed", this.updateElementClasses);
    }
    return e(s, i), s.prototype.updateElementClasses = function() {
      switch (this.trackQueuedState()) {
       case "queued":
        return this.el.addClass("queued"), this.missingActivities.addClass("queued"), this.missingActivities.removeClass("unqueued");

       case "unqueued":
        return this.el.addClass("u nqueued"), this.el.removeClass("queued"), this.missingActivities.addClass("unqueued"), 
        this.missingActivities.removeClass("queued");

       default:
        return this.el.removeClass("queued"), this.el.removeClass("unqueued"), this.missingActivities.removeClass("queued"), 
        this.missingActivities.removeClass("unqueued");
      }
    }, s.prototype.showAddConfirmation = function() {
      return this.addConfirmation.addClass("active");
    }, s.prototype.hideAddConfirmation = function() {
      return this.addConfirmation.removeClass("active");
    }, s.prototype.trackQueuedState = function() {
      return 0 === this.queueableItems.not(".queued").length ? "queued" :this.queueableItems.not(".queued").length === this.queueableItems.length ? "unqueued" :void 0;
    }, s;
  }(Treehouse.View), Featurette.register("learning-queue/track", Treehouse.LearningQueue.TrackActions);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.loadMobileAnswerForm = e(this.loadMobileAnswerForm, this), this.dismissAnswer = e(this.dismissAnswer, this), 
      s.__super__.constructor.apply(this, arguments), this.on("click", "[data-cancel-forum-answer]", this.dismissAnswer), 
      this.$mobileButtons = this.el.closest(".discussion-mobile-buttons"), this.$mobileAddAnswerButton = this.$mobileButtons.find("#discussion-answer-post-alt"), 
      this.$mobileAddAnswerButton.on("click", this.loadMobileAnswerForm);
    }
    return i(s, t), s.prototype.dismissAnswer = function(t) {
      return t.stopPropagation(), t.preventDefault(), this.el.hide(), this.$mobileAddAnswerButton.show();
    }, s.prototype.loadMobileAnswerForm = function(t) {
      return t.preventDefault(), this.$mobileButtons.find(".discussion-answer-post").show(), 
      this.$mobileAddAnswerButton.hide();
    }, s;
  }(Treehouse.View), Featurette.register("forum-answering", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.updateVotingCount = e(this.updateVotingCount, this), this.vote = e(this.vote, this), 
      this.selectBest = e(this.selectBest, this), this.$el = $(t), this.id = this.$el.data("answer-id"), 
      this.cancelVoteUrl = this.$el.data("cancel-vote-url"), this.$answerWrap = this.$el.find(".discussion-highlight"), 
      this.$avatar = this.$el.find(".avatar"), this.$bestEl = this.$el.find(".vote-best-answer"), 
      this.$upvoteEl = this.$el.find(".vote-up"), this.$downvoteEl = this.$el.find(".vote-down"), 
      this.$bestEl.find("a").click(this.selectBest), this.$upvoteEl.find("a").click(this.vote), 
      this.$downvoteEl.find("a").click(this.vote);
    }
    return t.prototype.selectBest = function(t) {
      var e, i;
      return t.preventDefault(), i = this.$bestEl.find("a").data("url"), this.$answerWrap.hasClass("discussion-answer-best") ? (e = this.$answerWrap, 
      this.$answerWrap.removeClass("discussion-answer-best"), this.$avatar.removeClass("avatar-light-green-bg"), 
      this.$bestEl.addClass("selected")) :(e = $(".discussion-answer-best"), e.removeClass("discussion-answer-best"), 
      e.find(".vote-best-answer").addClass("selected"), this.$answerWrap.addClass("discussion-answer-best"), 
      this.$avatar.addClass("avatar-light-green-bg"), this.$bestEl.removeClass("selected")), 
      $.ajax({
        url:i,
        type:"POST",
        error:function(t) {
          return function() {
            return t.$answerWrap.removeClass("discussion-answer-best"), t.$bestEl.addClass("selected"), 
            e.addClass("discussion-answer-best"), e.find(".vote-best-answer").removeClass("selected"), 
            alert("There was a problem marking the answer as best.");
          };
        }(this)
      });
    }, t.prototype.vote = function(t) {
      var e, i, s, r, n, o, a, l, h, u, c, p;
      return t.preventDefault(), e = $(t.currentTarget), l = this.$upvoteEl.find(".vote-count").text(), 
      r = this.$el.find(".voted"), r.length > 0 && (h = r.parent().hasClass("vote-up") ? 1 :-1), 
      o = e.parent().hasClass("vote-up") ? 1 :-1, i = this.$upvoteEl.find(".vote-count"), 
      e.hasClass("voted") ? (p = this.cancelVoteUrl, e.removeClass("voted"), a = parseInt(null != (u = i.text()) ? u :0) - o) :(p = e.data("url"), 
      s = this.$el.find(".voted"), s.removeClass("voted"), e.addClass("voted"), n = parseInt(null != (c = i.text()) ? c :0), 
      a = null != h ? n - (h - o) :n + o), i.text(a), $.ajax({
        url:p,
        type:"POST",
        success:this.updateVotingCount,
        error:function(t) {
          return function() {
            return e.removeClass("voted"), s.addClass("voted"), t.updateVotingCount(l), alert("There was a problem counting your vote.");
          };
        }(this)
      });
    }, t.prototype.updateVotingCount = function(t) {
      var e, i;
      return i = null != (e = parseInt(t)) ? e :0, this.$upvoteEl.find(".vote-count").text(i), 
      this.$upvoteEl.find("a").toggleClass("vote-count-zero", 0 === i);
    }, t;
  }(), Featurette.register("forum-voting", t);
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  t = function() {
    function t(t) {
      this.loadBoard = e(this.loadBoard, this), this.selectTopic = e(this.selectTopic, this), 
      this.selectPeriod = e(this.selectPeriod, this), this.el = $(t), this.type = this.el.data("type"), 
      this.periodSelector = this.el.find(".periods a"), this.topicSelector = this.el.find("select"), 
      this.board = this.el.siblings(".leaderboard-list"), this.topicSelector.on("change", this.selectTopic), 
      this.periodSelector.on("click", this.selectPeriod);
    }
    return t.prototype.selectPeriod = function(t) {
      return t.preventDefault(), $(t.target).addClass("selected").closest("li").siblings().find("a").removeClass("selected"), 
      this.loadBoard();
    }, t.prototype.selectTopic = function() {
      return this.topicSelector.siblings("span").text(this.topicSelector.find("option:selected").text()), 
      this.loadBoard();
    }, t.prototype.loadBoard = function() {
      return $.ajax({
        url:"/community/leaderboard",
        data:{
          board_type:this.type,
          topic:this.topicSelector.find("option:selected").val(),
          period:this.periodSelector.closest("ul").find("a.selected").data("period")
        },
        success:function(t) {
          return function(e) {
            return t.board.empty(), t.board.append(e), t.board.find(".icon").css("background-color", t.topicSelector.find(":selected").data("color"));
          };
        }(this)
      });
    }, t;
  }(), Featurette.register("leaderboards-navigation", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Treehouse.CreditCardValidator = function(i) {
    function s() {
      this.clearErrors = t(this.clearErrors, this), this.addError = t(this.addError, this), 
      this.validateLuhn = t(this.validateLuhn, this), this.validateCardNumber = t(this.validateCardNumber, this), 
      this.validatePresence = t(this.validatePresence, this), this.validate = t(this.validate, this), 
      s.__super__.constructor.apply(this, arguments), this.fieldPrefix = "credit_card", 
      this.fields = [ "number", "cvv", "month", "year" ], this.errors = {};
    }
    return e(s, i), s.prototype.validate = function() {
      return this.clearErrors(), this.validatePresence() && this.validateCardNumber();
    }, s.prototype.validatePresence = function() {
      var t, e, i, s;
      s = !0, i = this.fields;
      for (e in i) t = i[e], "" === this.get("#" + this.fieldPrefix + "_" + t).val() && (this.addError(t, "This is required."), 
      s = !1);
      return s;
    }, s.prototype.validateCardNumber = function() {
      var t;
      return t = new RegExp("^[0-9]{14,20}$"), !(!t.test(this.get("#" + this.fieldPrefix + "_number").val().replace(/\s+/g, "")) || !this.validateLuhn()) || (this.addError("number", "There was a problem verifying your credit card details."), 
      !1);
    }, s.prototype.validateLuhn = function() {
      var t, e;
      return e = !0, t = this.get("#" + this.fieldPrefix + "_number").val().replace(/\s+/g, ""), 
      _(t.split("")).reduceRight(function(t, i) {
        return i = parseInt(i), (e = !e) && (i *= 2), i > 9 && (i -= 9), t + i;
      }, 0) % 10 == 0;
    }, s.prototype.addError = function(t, e) {
      return this.errors[this.fieldPrefix + "_" + t] = e;
    }, s.prototype.clearErrors = function() {
      return this.errors = {};
    }, s;
  }(Treehouse.View);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  };
  Treehouse.CreditCardTokenizer = function() {
    function e(e, i, s, r) {
      this.updateNonce = t(this.updateNonce, this), this.tokenizeCard = t(this.tokenizeCard, this), 
      this.form = $("#" + e), this.paymentMethodNonce = this.form.find("[data-braintree-name=payment_method_nonce]"), 
      this.successCallback = s, this.failureCallback = r, this.client = new braintree.api.Client({
        clientToken:i.client_token
      }), BraintreeData.setup(i.merchant_id, e, i.environment);
    }
    return e.prototype.tokenizeCard = function(t, e, i, s) {
      return this.client.tokenizeCard({
        number:t,
        expirationDate:e + "/" + i,
        cvv:s
      }, this.updateNonce);
    }, e.prototype.updateNonce = function(t, e) {
      return t ? this.failureCallback() :(this.paymentMethodNonce.val(e), this.successCallback());
    }, e;
  }();
}.call(this);

var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global :this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
  "use strict";
  _gsScope._gsDefine("TweenMax", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(t, e, i) {
    var s = function(t) {
      var e, i = [], s = t.length;
      for (e = 0; e !== s; i.push(t[e++])) ;
      return i;
    }, r = function(t, e, i) {
      var s, r, n = t.cycle;
      for (s in n) r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) :r[i % r.length];
      delete t.cycle;
    }, n = function(t, e, s) {
      i.call(this, t, e, s), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, 
      this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = n.prototype.render;
    }, o = 1e-10, a = i._internals, l = a.isSelector, h = a.isArray, u = n.prototype = i.to({}, .1, {}), c = [];
    n.version = "1.18.2", u.constructor = n, u.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, 
    n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, 
    n.render = i.render, u.invalidate = function() {
      return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, 
      this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this);
    }, u.updateTo = function(t, e) {
      var s, r = this.ratio, n = this.vars.immediateRender || t.immediateRender;
      e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, 
      this._uncache(!1), this._gc ? this._enabled(!0, !1) :this._timeline.insert(this, this._startTime - this._delay));
      for (s in t) this.vars[s] = t[s];
      if (this._initted || n) if (e) this._initted = !1, n && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), 
      this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), 
      this._time / this._duration > .998) {
        var o = this._totalTime;
        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1);
      } else if (this._initted = !1, this._init(), this._time > 0 || n) for (var a, l = 1 / (1 - r), h = this._firstPT; h; ) a = h.s + h.c, 
      h.c *= l, h.s = a - h.c, h = h._next;
      return this;
    }, u.render = function(t, e, i) {
      this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
      var s, r, n, l, h, u, c, p, d = this._dirty ? this.totalDuration() :this._totalDuration, f = this._time, g = this._totalTime, m = this._cycle, y = this._duration, _ = this._rawPrevTime;
      if (t >= d - 1e-7 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, 
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) :0) :(this._time = y, 
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) :1), this._reversed || (s = !0, 
      r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), 
      (0 > _ || 0 >= t && t >= -1e-7 || _ === o && "isPause" !== this.data) && _ !== t && (i = !0, 
      _ > o && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || _ === t ? t :o)) :1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, 
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) :0, (0 !== g || 0 === y && _ > 0) && (r = "onReverseComplete", 
      s = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), 
      this._rawPrevTime = p = !e || t || _ === t ? t :o)), this._initted || (i = !0)) :(this._totalTime = this._time = t, 
      0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 
      0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, 
      this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y :this._time < 0 && (this._time = 0)), 
      this._easeType ? (h = this._time / y, u = this._easeType, c = this._easePower, (1 === u || 3 === u && h >= .5) && (h = 1 - h), 
      3 === u && (h *= 2), 1 === c ? h *= h :2 === c ? h *= h * h :3 === c ? h *= h * h * h :4 === c && (h *= h * h * h * h), 
      1 === u ? this.ratio = 1 - h :2 === u ? this.ratio = h :this._time / y < .5 ? this.ratio = h / 2 :this.ratio = 1 - h / 2) :this.ratio = this._ease.getRatio(this._time / y)), 
      f === this._time && !i && m === this._cycle) return void (g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
      if (!this._initted) {
        if (this._init(), !this._initted || this._gc) return;
        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = f, 
        this._totalTime = g, this._rawPrevTime = _, this._cycle = m, a.lazyTweens.push(this), 
        void (this._lazy = [ t, e ]);
        this._time && !s ? this.ratio = this._ease.getRatio(this._time / y) :s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 :1));
      }
      for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 
      0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) :r || (r = "_dummyGS")), 
      this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this._callback("onStart"))), 
      n = this._firstPT; n; ) n.f ? n.t[n.p](n.c * this.ratio + n.s) :n.t[n.p] = n.c * this.ratio + n.s, 
      n = n._next;
      this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), 
      e || (this._totalTime !== g || s) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), 
      r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), 
      s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), 
      !e && this.vars[r] && this._callback(r), 0 === y && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0));
    }, n.to = function(t, e, i) {
      return new n(t, e, i);
    }, n.from = function(t, e, i) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i);
    }, n.fromTo = function(t, e, i, s) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, 
      new n(t, e, s);
    }, n.staggerTo = n.allTo = function(t, e, o, a, u, p, d) {
      a = a || 0;
      var f, g, m, y, _ = 0, v = [], b = function() {
        o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), u.apply(d || o.callbackScope || this, p || c);
      }, w = o.cycle, k = o.startAt && o.startAt.cycle;
      for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), 
      t = t || [], 0 > a && (t = s(t), t.reverse(), a *= -1), f = t.length - 1, m = 0; f >= m; m++) {
        g = {};
        for (y in o) g[y] = o[y];
        if (w && r(g, t, m), k) {
          k = g.startAt = {};
          for (y in o.startAt) k[y] = o.startAt[y];
          r(g.startAt, t, m);
        }
        g.delay = _ + (g.delay || 0), m === f && u && (g.onComplete = b), v[m] = new n(t[m], e, g), 
        _ += a;
      }
      return v;
    }, n.staggerFrom = n.allFrom = function(t, e, i, s, r, o, a) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, s, r, o, a);
    }, n.staggerFromTo = n.allFromTo = function(t, e, i, s, r, o, a, l) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, 
      n.staggerTo(t, e, s, r, o, a, l);
    }, n.delayedCall = function(t, e, i, s, r) {
      return new n(e, 0, {
        delay:t,
        onComplete:e,
        onCompleteParams:i,
        callbackScope:s,
        onReverseComplete:e,
        onReverseCompleteParams:i,
        immediateRender:!1,
        useFrames:r,
        overwrite:0
      });
    }, n.set = function(t, e) {
      return new n(t, 0, e);
    }, n.isTweening = function(t) {
      return i.getTweensOf(t, !0).length > 0;
    };
    var p = function(t, e) {
      for (var s = [], r = 0, n = t._first; n; ) n instanceof i ? s[r++] = n :(e && (s[r++] = n), 
      s = s.concat(p(n, e)), r = s.length), n = n._next;
      return s;
    }, d = n.getAllTweens = function(e) {
      return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e));
    };
    n.killAll = function(t, i, s, r) {
      null == i && (i = !0), null == s && (s = !0);
      var n, o, a, l = d(0 != r), h = l.length, u = i && s && r;
      for (a = 0; h > a; a++) o = l[a], (u || o instanceof e || (n = o.target === o.vars.onComplete) && s || i && !n) && (t ? o.totalTime(o._reversed ? 0 :o.totalDuration()) :o._enabled(!1, !1));
    }, n.killChildTweensOf = function(t, e) {
      if (null != t) {
        var r, o, u, c, p, d = a.tweenLookup;
        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t)) for (c = t.length; --c > -1; ) n.killChildTweensOf(t[c], e); else {
          r = [];
          for (u in d) for (o = d[u].target.parentNode; o; ) o === t && (r = r.concat(d[u].tweens)), 
          o = o.parentNode;
          for (p = r.length, c = 0; p > c; c++) e && r[c].totalTime(r[c].totalDuration()), 
          r[c]._enabled(!1, !1);
        }
      }
    };
    var f = function(t, i, s, r) {
      i = !1 !== i, s = !1 !== s, r = !1 !== r;
      for (var n, o, a = d(r), l = i && s && r, h = a.length; --h > -1; ) o = a[h], (l || o instanceof e || (n = o.target === o.vars.onComplete) && s || i && !n) && o.paused(t);
    };
    return n.pauseAll = function(t, e, i) {
      f(!0, t, e, i);
    }, n.resumeAll = function(t, e, i) {
      f(!1, t, e, i);
    }, n.globalTimeScale = function(e) {
      var s = t._rootTimeline, r = i.ticker.time;
      return arguments.length ? (e = e || o, s._startTime = r - (r - s._startTime) * s._timeScale / e, 
      s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, 
      s._timeScale = t._rootTimeline._timeScale = e, e) :s._timeScale;
    }, u.progress = function(t) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t :t) + this._cycle * (this._duration + this._repeatDelay), !1) :this._time / this.duration();
    }, u.totalProgress = function(t) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, !1) :this._totalTime / this.totalDuration();
    }, u.time = function(t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), 
      this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) :0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), 
      this.totalTime(t, e)) :this._time;
    }, u.duration = function(e) {
      return arguments.length ? t.prototype.duration.call(this, e) :this._duration;
    }, u.totalDuration = function(t) {
      return arguments.length ? -1 === this._repeat ? this :this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) :(this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 :this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, 
      this._dirty = !1), this._totalDuration);
    }, u.repeat = function(t) {
      return arguments.length ? (this._repeat = t, this._uncache(!0)) :this._repeat;
    }, u.repeatDelay = function(t) {
      return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) :this._repeatDelay;
    }, u.yoyo = function(t) {
      return arguments.length ? (this._yoyo = t, this) :this._yoyo;
    }, n;
  }, !0), _gsScope._gsDefine("TimelineLite", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(t, e, i) {
    var s = function(t) {
      e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, 
      this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, 
      this._onUpdate = this.vars.onUpdate;
      var i, s, r = this.vars;
      for (s in r) i = r[s], l(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
      l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
    }, r = 1e-10, n = i._internals, o = s._internals = {}, a = n.isSelector, l = n.isArray, h = n.lazyTweens, u = n.lazyRender, c = _gsScope._gsDefine.globals, p = function(t) {
      var e, i = {};
      for (e in t) i[e] = t[e];
      return i;
    }, d = function(t, e, i) {
      var s, r, n = t.cycle;
      for (s in n) r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) :r[i % r.length];
      delete t.cycle;
    }, f = o.pauseCallback = function() {}, g = function(t) {
      var e, i = [], s = t.length;
      for (e = 0; e !== s; i.push(t[e++])) ;
      return i;
    }, m = s.prototype = new e();
    return s.version = "1.18.2", m.constructor = s, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, 
    m.to = function(t, e, s, r) {
      var n = s.repeat && c.TweenMax || i;
      return e ? this.add(new n(t, e, s), r) :this.set(t, s, r);
    }, m.from = function(t, e, s, r) {
      return this.add((s.repeat && c.TweenMax || i).from(t, e, s), r);
    }, m.fromTo = function(t, e, s, r, n) {
      var o = r.repeat && c.TweenMax || i;
      return e ? this.add(o.fromTo(t, e, s, r), n) :this.set(t, r, n);
    }, m.staggerTo = function(t, e, r, n, o, l, h, u) {
      var c, f, m = new s({
        onComplete:l,
        onCompleteParams:h,
        callbackScope:u,
        smoothChildTiming:this.smoothChildTiming
      }), y = r.cycle;
      for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = g(t)), 
      n = n || 0, 0 > n && (t = g(t), t.reverse(), n *= -1), f = 0; f < t.length; f++) c = p(r), 
      c.startAt && (c.startAt = p(c.startAt), c.startAt.cycle && d(c.startAt, t, f)), 
      y && d(c, t, f), m.to(t[f], e, c, f * n);
      return this.add(m, o);
    }, m.staggerFrom = function(t, e, i, s, r, n, o, a) {
      return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, o, a);
    }, m.staggerFromTo = function(t, e, i, s, r, n, o, a, l) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, 
      this.staggerTo(t, e, s, r, n, o, a, l);
    }, m.call = function(t, e, s, r) {
      return this.add(i.delayedCall(0, t, e, s), r);
    }, m.set = function(t, e, s) {
      return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), 
      this.add(new i(t, 0, e), s);
    }, s.exportRoot = function(t, e) {
      t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
      var r, n, o = new s(t), a = o._timeline;
      for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, 
      r = a._first; r; ) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), 
      r = n;
      return a.add(o, 0), o;
    }, m.add = function(r, n, o, a) {
      var h, u, c, p, d, f;
      if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
        if (r instanceof Array || r && r.push && l(r)) {
          for (o = o || "normal", a = a || 0, h = n, u = r.length, c = 0; u > c; c++) l(p = r[c]) && (p = new s({
            tweens:p
          })), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === o ? h = p._startTime + p.totalDuration() / p._timeScale :"start" === o && (p._startTime -= p.delay())), 
          h += a;
          return this._uncache(!0);
        }
        if ("string" == typeof r) return this.addLabel(r, n);
        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
        r = i.delayedCall(0, r);
      }
      if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (d = this, 
      f = d.rawTime() > r._startTime; d._timeline; ) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) :d._gc && d._enabled(!0, !1), 
      d = d._timeline;
      return this;
    }, m.remove = function(e) {
      if (e instanceof t) {
        this._remove(e, !1);
        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline :t._rootTimeline;
        return e._startTime = (e._paused ? e._pauseTime :i._time) - (e._reversed ? e.totalDuration() - e._totalTime :e._totalTime) / e._timeScale, 
        this;
      }
      if (e instanceof Array || e && e.push && l(e)) {
        for (var s = e.length; --s > -1; ) this.remove(e[s]);
        return this;
      }
      return "string" == typeof e ? this.removeLabel(e) :this.kill(null, e);
    }, m._remove = function(t, i) {
      e.prototype._remove.call(this, t, i);
      var s = this._last;
      return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), 
      this._totalTime = this._totalDuration) :this._time = this._totalTime = this._duration = this._totalDuration = 0, 
      this;
    }, m.append = function(t, e) {
      return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
    }, m.insert = m.insertMultiple = function(t, e, i, s) {
      return this.add(t, e || 0, i, s);
    }, m.appendMultiple = function(t, e, i, s) {
      return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
    }, m.addLabel = function(t, e) {
      return this._labels[t] = this._parseTimeOrLabel(e), this;
    }, m.addPause = function(t, e, s, r) {
      var n = i.delayedCall(0, f, s, r || this);
      return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, 
      this.add(n, t);
    }, m.removeLabel = function(t) {
      return delete this._labels[t], this;
    }, m.getLabelTime = function(t) {
      return null != this._labels[t] ? this._labels[t] :-1;
    }, m._parseTimeOrLabel = function(e, i, s, r) {
      var n;
      if (r instanceof t && r.timeline === this) this.remove(r); else if (r && (r instanceof Array || r.push && l(r))) for (n = r.length; --n > -1; ) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
      if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() :0, s);
      if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration()); else {
        if (-1 === (n = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i :i :this._labels[e] + i;
        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) :this.duration();
      }
      return Number(e) + i;
    }, m.seek = function(t, e) {
      return this.totalTime("number" == typeof t ? t :this._parseTimeOrLabel(t), !1 !== e);
    }, m.stop = function() {
      return this.paused(!0);
    }, m.gotoAndPlay = function(t, e) {
      return this.play(t, e);
    }, m.gotoAndStop = function(t, e) {
      return this.pause(t, e);
    }, m.render = function(t, e, i) {
      this._gc && this._enabled(!0, !1);
      var s, n, o, a, l, c, p, d = this._dirty ? this.totalDuration() :this._totalDuration, f = this._time, g = this._startTime, m = this._timeScale, y = this._paused;
      if (t >= d - 1e-7) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (n = !0, 
      a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, 
      this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t :r, 
      t = d + 1e-4; else if (1e-7 > t) if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", 
      n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, 
      a = "onReverseComplete") :this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t; else {
        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t :r, 
        0 === t && n) for (s = this._first; s && 0 === s._startTime; ) s._duration || (n = !1), 
        s = s._next;
        t = 0, this._initted || (l = !0);
      } else {
        if (this._hasPause && !this._forcingPlayhead && !e) {
          if (t >= f) for (s = this._first; s && s._startTime <= t && !c; ) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (c = s), 
          s = s._next; else for (s = this._last; s && s._startTime >= t && !c; ) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (c = s), 
          s = s._prev;
          c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay));
        }
        this._totalTime = this._time = this._rawPrevTime = t;
      }
      if (this._time !== f && this._first || i || l || c) {
        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 
        0 === f && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), 
        (p = this._time) >= f) for (s = this._first; s && (o = s._next, p === this._time && (!this._paused || y)); ) (s._active || s._startTime <= p && !s._paused && !s._gc) && (c === s && this.pause(), 
        s._reversed ? s.render((s._dirty ? s.totalDuration() :s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) :s.render((t - s._startTime) * s._timeScale, e, i)), 
        s = o; else for (s = this._last; s && (o = s._prev, p === this._time && (!this._paused || y)); ) {
          if (s._active || s._startTime <= f && !s._paused && !s._gc) {
            if (c === s) {
              for (c = s._prev; c && c.endTime() > this._time; ) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale :(t - c._startTime) * c._timeScale, e, i), 
              c = c._prev;
              c = null, this.pause();
            }
            s._reversed ? s.render((s._dirty ? s.totalDuration() :s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) :s.render((t - s._startTime) * s._timeScale, e, i);
          }
          s = o;
        }
        this._onUpdate && (e || (h.length && u(), this._callback("onUpdate"))), a && (this._gc || (g === this._startTime || m !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (n && (h.length && u(), 
        this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), 
        !e && this.vars[a] && this._callback(a)));
      }
    }, m._hasPausedChild = function() {
      for (var t = this._first; t; ) {
        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
        t = t._next;
      }
      return !1;
    }, m.getChildren = function(t, e, s, r) {
      r = r || -9999999999;
      for (var n = [], o = this._first, a = 0; o; ) o._startTime < r || (o instanceof i ? !1 !== e && (n[a++] = o) :(!1 !== s && (n[a++] = o), 
      !1 !== t && (n = n.concat(o.getChildren(!0, e, s)), a = n.length))), o = o._next;
      return n;
    }, m.getTweensOf = function(t, e) {
      var s, r, n = this._gc, o = [], a = 0;
      for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1; ) (s[r].timeline === this || e && this._contains(s[r])) && (o[a++] = s[r]);
      return n && this._enabled(!1, !0), o;
    }, m.recent = function() {
      return this._recent;
    }, m._contains = function(t) {
      for (var e = t.timeline; e; ) {
        if (e === this) return !0;
        e = e.timeline;
      }
      return !1;
    }, m.shiftChildren = function(t, e, i) {
      i = i || 0;
      for (var s, r = this._first, n = this._labels; r; ) r._startTime >= i && (r._startTime += t), 
      r = r._next;
      if (e) for (s in n) n[s] >= i && (n[s] += t);
      return this._uncache(!0);
    }, m._kill = function(t, e) {
      if (!t && !e) return this._enabled(!1, !1);
      for (var i = e ? this.getTweensOf(e) :this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1; ) i[s]._kill(t, e) && (r = !0);
      return r;
    }, m.clear = function(t) {
      var e = this.getChildren(!1, !0, !0), i = e.length;
      for (this._time = this._totalTime = 0; --i > -1; ) e[i]._enabled(!1, !1);
      return !1 !== t && (this._labels = {}), this._uncache(!0);
    }, m.invalidate = function() {
      for (var e = this._first; e; ) e.invalidate(), e = e._next;
      return t.prototype.invalidate.call(this);
    }, m._enabled = function(t, i) {
      if (t === this._gc) for (var s = this._first; s; ) s._enabled(t, !0), s = s._next;
      return e.prototype._enabled.call(this, t, i);
    }, m.totalTime = function() {
      this._forcingPlayhead = !0;
      var e = t.prototype.totalTime.apply(this, arguments);
      return this._forcingPlayhead = !1, e;
    }, m.duration = function(t) {
      return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), 
      this) :(this._dirty && this.totalDuration(), this._duration);
    }, m.totalDuration = function(t) {
      if (!arguments.length) {
        if (this._dirty) {
          for (var e, i, s = 0, r = this._last, n = 999999999999; r; ) e = r._prev, r._dirty && r.totalDuration(), 
          r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) :n = r._startTime, 
          r._startTime < 0 && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), 
          this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, 
          i > s && (s = i), r = e;
          this._duration = this._totalDuration = s, this._dirty = !1;
        }
        return this._totalDuration;
      }
      return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) :this;
    }, m.paused = function(e) {
      if (!e) for (var i = this._first, s = this._time; i; ) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), 
      i = i._next;
      return t.prototype.paused.apply(this, arguments);
    }, m.usesFrames = function() {
      for (var e = this._timeline; e._timeline; ) e = e._timeline;
      return e === t._rootFramesTimeline;
    }, m.rawTime = function() {
      return this._paused ? this._totalTime :(this._timeline.rawTime() - this._startTime) * this._timeScale;
    }, s;
  }, !0), _gsScope._gsDefine("TimelineMax", [ "TimelineLite", "TweenLite", "easing.Ease" ], function(t, e, i) {
    var s = function(e) {
      t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, 
      this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0;
    }, r = 1e-10, n = e._internals, o = n.lazyTweens, a = n.lazyRender, l = new i(null, null, 1, 0), h = s.prototype = new t();
    return h.constructor = s, h.kill()._gc = !1, s.version = "1.18.2", h.invalidate = function() {
      return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, 
      this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this);
    }, h.addCallback = function(t, i, s, r) {
      return this.add(e.delayedCall(0, t, s, r), i);
    }, h.removeCallback = function(t, e) {
      if (t) if (null == e) this._kill(null, t); else for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1; ) i[s]._startTime === r && i[s]._enabled(!1, !1);
      return this;
    }, h.removePause = function(e) {
      return this.removeCallback(t._internals.pauseCallback, e);
    }, h.tweenTo = function(t, i) {
      i = i || {};
      var s, r, n, o = {
        ease:l,
        useFrames:this.usesFrames(),
        immediateRender:!1
      };
      for (r in i) o[r] = i[r];
      return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, 
      n = new e(this, s, o), o.onStart = function() {
        n.target.paused(!0), n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), 
        i.onStart && n._callback("onStart");
      }, n;
    }, h.tweenFromTo = function(t, e, i) {
      i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
        onComplete:this.seek,
        onCompleteParams:[ t ],
        callbackScope:this
      }, i.immediateRender = !1 !== i.immediateRender;
      var s = this.tweenTo(e, i);
      return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001);
    }, h.render = function(t, e, i) {
      this._gc && this._enabled(!0, !1);
      var s, n, l, h, u, c, p, d, f = this._dirty ? this.totalDuration() :this._totalDuration, g = this._duration, m = this._time, y = this._totalTime, _ = this._startTime, v = this._timeScale, b = this._rawPrevTime, w = this._paused, k = this._cycle;
      if (t >= f - 1e-7) this._locked || (this._totalTime = f, this._cycle = this._repeat), 
      this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", u = !!this._timeline.autoRemoveChildren, 
      0 === this._duration && (0 >= t && t >= -1e-7 || 0 > b || b === r) && b !== t && this._first && (u = !0, 
      b > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t :r, 
      this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 :(this._time = g, t = g + 1e-4); else if (1e-7 > t) if (this._locked || (this._totalTime = this._cycle = 0), 
      this._time = 0, (0 !== m || 0 === g && b !== r && (b > 0 || 0 > t && b >= 0) && !this._locked) && (h = "onReverseComplete", 
      n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = n = !0, 
      h = "onReverseComplete") :b >= 0 && this._first && (u = !0), this._rawPrevTime = t; else {
        if (this._rawPrevTime = g || !e || t || this._rawPrevTime === t ? t :r, 0 === t && n) for (s = this._first; s && 0 === s._startTime; ) s._duration || (n = !1), 
        s = s._next;
        t = 0, this._initted || (u = !0);
      } else if (0 === g && 0 > b && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 
      0 !== this._repeat && (c = g + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 
      0 !== this._cycle && this._cycle === this._totalTime / c && this._cycle--, this._time = this._totalTime - this._cycle * c, 
      this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? (this._time = g, 
      t = g + 1e-4) :this._time < 0 ? this._time = t = 0 :t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
        if ((t = this._time) >= m) for (s = this._first; s && s._startTime <= t && !p; ) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (p = s), 
        s = s._next; else for (s = this._last; s && s._startTime >= t && !p; ) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (p = s), 
        s = s._prev;
        p && (this._time = t = p._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay));
      }
      if (this._cycle !== k && !this._locked) {
        var T = this._yoyo && 0 != (1 & k), C = T === (this._yoyo && 0 != (1 & this._cycle)), S = this._totalTime, x = this._cycle, P = this._rawPrevTime, $ = this._time;
        if (this._totalTime = k * g, this._cycle < k ? T = !T :this._totalTime += g, this._time = m, 
        this._rawPrevTime = 0 === g ? b - 1e-4 :b, this._cycle = k, this._locked = !0, m = T ? 0 :g, 
        this.render(m, e, 0 === g), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), 
        m !== this._time) return;
        if (C && (m = T ? g + 1e-4 :-1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !w) return;
        this._time = $, this._totalTime = S, this._cycle = x, this._rawPrevTime = P;
      }
      if (!(this._time !== m && this._first || i || u || p)) return void (y !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
      if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== y && t > 0 && (this._active = !0), 
      0 === y && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), 
      (d = this._time) >= m) for (s = this._first; s && (l = s._next, d === this._time && (!this._paused || w)); ) (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (p === s && this.pause(), 
      s._reversed ? s.render((s._dirty ? s.totalDuration() :s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) :s.render((t - s._startTime) * s._timeScale, e, i)), 
      s = l; else for (s = this._last; s && (l = s._prev, d === this._time && (!this._paused || w)); ) {
        if (s._active || s._startTime <= m && !s._paused && !s._gc) {
          if (p === s) {
            for (p = s._prev; p && p.endTime() > this._time; ) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale :(t - p._startTime) * p._timeScale, e, i), 
            p = p._prev;
            p = null, this.pause();
          }
          s._reversed ? s.render((s._dirty ? s.totalDuration() :s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) :s.render((t - s._startTime) * s._timeScale, e, i);
        }
        s = l;
      }
      this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), h && (this._locked || this._gc || (_ === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (n && (o.length && a(), 
      this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), 
      !e && this.vars[h] && this._callback(h)));
    }, h.getActive = function(t, e, i) {
      null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
      var s, r, n = [], o = this.getChildren(t, e, i), a = 0, l = o.length;
      for (s = 0; l > s; s++) r = o[s], r.isActive() && (n[a++] = r);
      return n;
    }, h.getLabelAfter = function(t) {
      t || 0 !== t && (t = this._time);
      var e, i = this.getLabelsArray(), s = i.length;
      for (e = 0; s > e; e++) if (i[e].time > t) return i[e].name;
      return null;
    }, h.getLabelBefore = function(t) {
      null == t && (t = this._time);
      for (var e = this.getLabelsArray(), i = e.length; --i > -1; ) if (e[i].time < t) return e[i].name;
      return null;
    }, h.getLabelsArray = function() {
      var t, e = [], i = 0;
      for (t in this._labels) e[i++] = {
        time:this._labels[t],
        name:t
      };
      return e.sort(function(t, e) {
        return t.time - e.time;
      }), e;
    }, h.progress = function(t, e) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t :t) + this._cycle * (this._duration + this._repeatDelay), e) :this._time / this.duration();
    }, h.totalProgress = function(t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) :this._totalTime / this.totalDuration();
    }, h.totalDuration = function(e) {
      return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) :this :(this._dirty && (t.prototype.totalDuration.call(this), 
      this._totalDuration = -1 === this._repeat ? 999999999999 :this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), 
      this._totalDuration);
    }, h.time = function(t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), 
      this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) :0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), 
      this.totalTime(t, e)) :this._time;
    }, h.repeat = function(t) {
      return arguments.length ? (this._repeat = t, this._uncache(!0)) :this._repeat;
    }, h.repeatDelay = function(t) {
      return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) :this._repeatDelay;
    }, h.yoyo = function(t) {
      return arguments.length ? (this._yoyo = t, this) :this._yoyo;
    }, h.currentLabel = function(t) {
      return arguments.length ? this.seek(t, !0) :this.getLabelBefore(this._time + 1e-8);
    }, s;
  }, !0), function() {
    var t = 180 / Math.PI, e = [], i = [], s = [], r = {}, n = _gsScope._gsDefine.globals, o = function(t, e, i, s) {
      this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, 
      this.ba = e - t;
    }, a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", l = function(t, e, i, s) {
      var r = {
        a:t
      }, n = {}, o = {}, a = {
        c:s
      }, l = (t + e) / 2, h = (e + i) / 2, u = (i + s) / 2, c = (l + h) / 2, p = (h + u) / 2, d = (p - c) / 8;
      return r.b = l + (t - l) / 4, n.b = c + d, r.c = n.a = (r.b + n.b) / 2, n.c = o.a = (c + p) / 2, 
      o.b = p - d, a.b = u + (s - u) / 4, o.c = a.a = (o.b + a.b) / 2, [ r, n, o, a ];
    }, h = function(t, r, n, o, a) {
      var h, u, c, p, d, f, g, m, y, _, v, b, w, k = t.length - 1, T = 0, C = t[0].a;
      for (h = 0; k > h; h++) d = t[T], u = d.a, c = d.d, p = t[T + 1].d, a ? (v = e[h], 
      b = i[h], w = (b + v) * r * .25 / (o ? .5 :s[h] || .5), f = c - (c - u) * (o ? .5 * r :0 !== v ? w / v :0), 
      g = c + (p - c) * (o ? .5 * r :0 !== b ? w / b :0), m = c - (f + ((g - f) * (3 * v / (v + b) + .5) / 4 || 0))) :(f = c - (c - u) * r * .5, 
      g = c + (p - c) * r * .5, m = c - (f + g) / 2), f += m, g += m, d.c = y = f, d.b = 0 !== h ? C :C = d.a + .6 * (d.c - d.a), 
      d.da = c - u, d.ca = y - u, d.ba = C - u, n ? (_ = l(u, C, y, c), t.splice(T, 1, _[0], _[1], _[2], _[3]), 
      T += 4) :T++, C = g;
      d = t[T], d.b = C, d.c = C + .4 * (d.d - C), d.da = d.d - d.a, d.ca = d.c - d.a, 
      d.ba = C - d.a, n && (_ = l(d.a, C, d.c, d.d), t.splice(T, 1, _[0], _[1], _[2], _[3]));
    }, u = function(t, s, r, n) {
      var a, l, h, u, c, p, d = [];
      if (n) for (t = [ n ].concat(t), l = t.length; --l > -1; ) "string" == typeof (p = t[l][s]) && "=" === p.charAt(1) && (t[l][s] = n[s] + Number(p.charAt(0) + p.substr(2)));
      if (0 > (a = t.length - 2)) return d[0] = new o(t[0][s], 0, 0, t[-1 > a ? 0 :1][s]), 
      d;
      for (l = 0; a > l; l++) h = t[l][s], u = t[l + 1][s], d[l] = new o(h, 0, 0, u), 
      r && (c = t[l + 2][s], e[l] = (e[l] || 0) + (u - h) * (u - h), i[l] = (i[l] || 0) + (c - u) * (c - u));
      return d[l] = new o(t[l][s], 0, 0, t[l + 1][s]), d;
    }, c = function(t, n, o, l, c, p) {
      var d, f, g, m, y, _, v, b, w = {}, k = [], T = p || t[0];
      c = "string" == typeof c ? "," + c + "," :a, null == n && (n = 1);
      for (f in t[0]) k.push(f);
      if (t.length > 1) {
        for (b = t[t.length - 1], v = !0, d = k.length; --d > -1; ) if (f = k[d], Math.abs(T[f] - b[f]) > .05) {
          v = !1;
          break;
        }
        v && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3]);
      }
      for (e.length = i.length = s.length = 0, d = k.length; --d > -1; ) f = k[d], r[f] = -1 !== c.indexOf("," + f + ","), 
      w[f] = u(t, f, r[f], p);
      for (d = e.length; --d > -1; ) e[d] = Math.sqrt(e[d]), i[d] = Math.sqrt(i[d]);
      if (!l) {
        for (d = k.length; --d > -1; ) if (r[f]) for (g = w[k[d]], _ = g.length - 1, m = 0; _ > m; m++) y = g[m + 1].da / i[m] + g[m].da / e[m], 
        s[m] = (s[m] || 0) + y * y;
        for (d = s.length; --d > -1; ) s[d] = Math.sqrt(s[d]);
      }
      for (d = k.length, m = o ? 4 :1; --d > -1; ) f = k[d], g = w[f], h(g, n, o, l, r[f]), 
      v && (g.splice(0, m), g.splice(g.length - m, m));
      return w;
    }, p = function(t, e, i) {
      e = e || "soft";
      var s, r, n, a, l, h, u, c, p, d, f, g = {}, m = "cubic" === e ? 3 :2, y = "soft" === e, _ = [];
      if (y && i && (t = [ i ].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
      for (p in t[0]) _.push(p);
      for (h = _.length; --h > -1; ) {
        for (p = _[h], g[p] = l = [], d = 0, c = t.length, u = 0; c > u; u++) s = null == i ? t[u][p] :"string" == typeof (f = t[u][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) :Number(f), 
        y && u > 1 && c - 1 > u && (l[d++] = (s + l[d - 2]) / 2), l[d++] = s;
        for (c = d - m + 1, d = 0, u = 0; c > u; u += m) s = l[u], r = l[u + 1], n = l[u + 2], 
        a = 2 === m ? 0 :l[u + 3], l[d++] = f = 3 === m ? new o(s, r, n, a) :new o(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
        l.length = d;
      }
      return g;
    }, d = function(t, e, i) {
      for (var s, r, n, o, a, l, h, u, c, p, d, f = 1 / i, g = t.length; --g > -1; ) for (p = t[g], 
      n = p.a, o = p.d - n, a = p.c - n, l = p.b - n, s = r = 0, u = 1; i >= u; u++) h = f * u, 
      c = 1 - h, s = r - (r = (h * h * o + 3 * c * (h * a + c * l)) * h), d = g * i + u - 1, 
      e[d] = (e[d] || 0) + s * s;
    }, f = function(t, e) {
      e = e >> 0 || 6;
      var i, s, r, n, o = [], a = [], l = 0, h = 0, u = e - 1, c = [], p = [];
      for (i in t) d(t[i], o, e);
      for (r = o.length, s = 0; r > s; s++) l += Math.sqrt(o[s]), n = s % e, p[n] = l, 
      n === u && (h += l, n = s / e >> 0, c[n] = p, a[n] = h, l = 0, p = []);
      return {
        length:h,
        lengths:a,
        segments:c
      };
    }, g = _gsScope._gsDefine.plugin({
      propName:"bezier",
      priority:-1,
      version:"1.3.4",
      API:2,
      global:!0,
      init:function(t, e, i) {
        this._target = t, e instanceof Array && (e = {
          values:e
        }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 :parseInt(e.timeResolution, 10);
        var s, r, n, o, a, l = e.values || [], h = {}, u = l[0], d = e.autoRotate || i.vars.orientToBezier;
        this._autoRotate = d ? d instanceof Array ? d :[ [ "x", "y", "rotation", !0 === d ? 0 :Number(d) || 0 ] ] :null;
        for (s in u) this._props.push(s);
        for (n = this._props.length; --n > -1; ) s = this._props[n], this._overwriteProps.push(s), 
        r = this._func[s] = "function" == typeof t[s], h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s :"get" + s.substr(3)]() :parseFloat(t[s]), 
        a || h[s] !== l[0][s] && (a = h);
        if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(l, isNaN(e.curviness) ? 1 :e.curviness, !1, "thruBasic" === e.type, e.correlate, a) :p(l, e.type, h), 
        this._segCount = this._beziers[s].length, this._timeRes) {
          var g = f(this._beziers, this._timeRes);
          this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, 
          this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], 
          this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
        }
        if (d = this._autoRotate) for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [ d ]), 
        n = d.length; --n > -1; ) {
          for (o = 0; 3 > o; o++) s = d[n][o], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s :"get" + s.substr(3)];
          s = d[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) :this._target[s];
        }
        return this._startRatio = i.vars.runBackwards ? 1 :0, !0;
      },
      set:function(e) {
        var i, s, r, n, o, a, l, h, u, c, p = this._segCount, d = this._func, f = this._target, g = e !== this._startRatio;
        if (this._timeRes) {
          if (u = this._lengths, c = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
            for (h = p - 1; h > r && (this._l2 = u[++r]) <= e; ) ;
            this._l1 = u[r - 1], this._li = r, this._curSeg = c = this._segments[r], this._s2 = c[this._s1 = this._si = 0];
          } else if (e < this._l1 && r > 0) {
            for (;r > 0 && (this._l1 = u[--r]) >= e; ) ;
            0 === r && e < this._l1 ? this._l1 = 0 :r++, this._l2 = u[r], this._li = r, this._curSeg = c = this._segments[r], 
            this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si];
          }
          if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < c.length - 1) {
            for (h = c.length - 1; h > r && (this._s2 = c[++r]) <= e; ) ;
            this._s1 = c[r - 1], this._si = r;
          } else if (e < this._s1 && r > 0) {
            for (;r > 0 && (this._s1 = c[--r]) >= e; ) ;
            0 === r && e < this._s1 ? this._s1 = 0 :r++, this._s2 = c[r], this._si = r;
          }
          a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
        } else i = 0 > e ? 0 :e >= 1 ? p - 1 :p * e >> 0, a = (e - i * (1 / p)) * p;
        for (s = 1 - a, r = this._props.length; --r > -1; ) n = this._props[r], o = this._beziers[n][i], 
        l = (a * a * o.da + 3 * s * (a * o.ca + s * o.ba)) * a + o.a, this._round[n] && (l = Math.round(l)), 
        d[n] ? f[n](l) :f[n] = l;
        if (this._autoRotate) {
          var m, y, _, v, b, w, k, T = this._autoRotate;
          for (r = T.length; --r > -1; ) n = T[r][2], w = T[r][3] || 0, k = !0 === T[r][4] ? 1 :t, 
          o = this._beziers[T[r][0]], m = this._beziers[T[r][1]], o && m && (o = o[i], m = m[i], 
          y = o.a + (o.b - o.a) * a, v = o.b + (o.c - o.b) * a, y += (v - y) * a, v += (o.c + (o.d - o.c) * a - v) * a, 
          _ = m.a + (m.b - m.a) * a, b = m.b + (m.c - m.b) * a, _ += (b - _) * a, b += (m.c + (m.d - m.c) * a - b) * a, 
          l = g ? Math.atan2(b - _, v - y) * k + w :this._initialRotations[r], d[n] ? f[n](l) :f[n] = l);
        }
      }
    }), m = g.prototype;
    g.bezierThrough = c, g.cubicToQuadratic = l, g._autoCSS = !0, g.quadraticToCubic = function(t, e, i) {
      return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
    }, g._cssRegister = function() {
      var t = n.CSSPlugin;
      if (t) {
        var e = t._internals, i = e._parseToProxy, s = e._setPluginRatio, r = e.CSSPropTween;
        e._registerComplexSpecialProp("bezier", {
          parser:function(t, e, n, o, a, l) {
            e instanceof Array && (e = {
              values:e
            }), l = new g();
            var h, u, c, p = e.values, d = p.length - 1, f = [], m = {};
            if (0 > d) return a;
            for (h = 0; d >= h; h++) c = i(t, p[h], o, a, l, d !== h), f[h] = c.end;
            for (u in e) m[u] = e[u];
            return m.values = f, a = new r(t, "bezier", 0, 0, c.pt, 2), a.data = c, a.plugin = l, 
            a.setRatio = s, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = !0 === m.autoRotate ? 0 :Number(m.autoRotate), 
            m.autoRotate = null != c.end.left ? [ [ "left", "top", "rotation", h, !1 ] ] :null != c.end.x && [ [ "x", "y", "rotation", h, !1 ] ]), 
            m.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform), 
            l._onInitTween(c.proxy, m, o._tween), a;
          }
        });
      }
    }, m._roundProps = function(t, e) {
      for (var i = this._overwriteProps, s = i.length; --s > -1; ) (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e);
    }, m._kill = function(t) {
      var e, i, s = this._props;
      for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], 
      i = s.length; --i > -1; ) s[i] === e && s.splice(i, 1);
      return this._super._kill.call(this, t);
    };
  }(), _gsScope._gsDefine("plugins.CSSPlugin", [ "plugins.TweenPlugin", "TweenLite" ], function(t, e) {
    var i, s, r, n, o = function() {
      t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio;
    }, a = _gsScope._gsDefine.globals, l = {}, h = o.prototype = new t("css");
    h.constructor = o, o.version = "1.18.2", o.API = 2, o.defaultTransformPerspective = 0, 
    o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, h = "px", o.suffixMap = {
      top:h,
      right:h,
      bottom:h,
      left:h,
      width:h,
      height:h,
      fontSize:h,
      padding:h,
      margin:h,
      perspective:h,
      lineHeight:""
    };
    var u, c, p, d, f, g, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g, y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, b = /(?:\d|\-|\+|=|#|\.)*/g, w = /opacity *= *([^)]*)/i, k = /opacity:([^;]*)/i, T = /alpha\(opacity *=.+?\)/i, C = /^(rgb|hsl)/, S = /([A-Z])/g, x = /-([a-z])/gi, P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, $ = function(t, e) {
      return e.toUpperCase();
    }, D = /(?:Left|Right|Width)/i, F = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, A = /,(?=[^\)]*(?:\(|$))/gi, O = Math.PI / 180, R = 180 / Math.PI, z = {}, I = document, B = function(t) {
      return I.createElementNS ? I.createElementNS("http://www.w3.org/1999/xhtml", t) :I.createElement(t);
    }, M = B("div"), q = B("img"), L = o._internals = {
      _specialProps:l
    }, V = navigator.userAgent, j = function() {
      var t = V.indexOf("Android"), e = B("a");
      return p = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === t || Number(V.substr(t + 8, 1)) > 3), 
      f = p && Number(V.substr(V.indexOf("Version/") + 8, 1)) < 6, d = -1 !== V.indexOf("Firefox"), 
      (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (g = parseFloat(RegExp.$1)), 
      !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity));
    }(), N = function(t) {
      return w.test("string" == typeof t ? t :(t.currentStyle ? t.currentStyle.filter :t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 :1;
    }, H = function(t) {
      window.console && console.log(t);
    }, U = "", W = "", Q = function(t, e) {
      e = e || M;
      var i, s, r = e.style;
      if (void 0 !== r[t]) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1), i = [ "O", "Moz", "ms", "Ms", "Webkit" ], 
      s = 5; --s > -1 && void 0 === r[i[s] + t]; ) ;
      return s >= 0 ? (W = 3 === s ? "ms" :i[s], U = "-" + W.toLowerCase() + "-", W + t) :null;
    }, X = I.defaultView ? I.defaultView.getComputedStyle :function() {}, K = o.getStyle = function(t, e, i, s, r) {
      var n;
      return j || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] :(i = i || X(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) :t.currentStyle && (n = t.currentStyle[e]), 
      null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n :r) :N(t);
    }, Y = L.convertToPixels = function(t, i, s, r, n) {
      if ("px" === r || !r) return s;
      if ("auto" === r || !s) return 0;
      var a, l, h, u = D.test(i), c = t, p = M.style, d = 0 > s;
      if (d && (s = -s), "%" === r && -1 !== i.indexOf("border")) a = s / 100 * (u ? t.clientWidth :t.clientHeight); else {
        if (p.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", 
        "%" !== r && c.appendChild && "v" !== r.charAt(0) && "rem" !== r) p[u ? "borderLeftWidth" :"borderTopWidth"] = s + r; else {
          if (c = t.parentNode || I.body, l = c._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * s / 100;
          p[u ? "width" :"height"] = s + r;
        }
        c.appendChild(M), a = parseFloat(M[u ? "offsetWidth" :"offsetHeight"]), c.removeChild(M), 
        u && "%" === r && !1 !== o.cacheWidths && (l = c._gsCache = c._gsCache || {}, l.time = h, 
        l.width = a / s * 100), 0 !== a || n || (a = Y(t, i, s, r, !0));
      }
      return d ? -a :a;
    }, G = L.calculateOffset = function(t, e, i) {
      if ("absolute" !== K(t, "position", i)) return 0;
      var s = "left" === e ? "Left" :"Top", r = K(t, "margin" + s, i);
      return t["offset" + s] - (Y(t, e, parseFloat(r), r.replace(b, "")) || 0);
    }, Z = function(t, e) {
      var i, s, r, n = {};
      if (e = e || X(t, null)) if (i = e.length) for (;--i > -1; ) r = e[i], (-1 === r.indexOf("-transform") || St === r) && (n[r.replace(x, $)] = e.getPropertyValue(r)); else for (i in e) (-1 === i.indexOf("Transform") || Ct === i) && (n[i] = e[i]); else if (e = t.currentStyle || t.style) for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(x, $)] = e[i]);
      return j || (n.opacity = N(t)), s = Bt(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, 
      n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Pt && (n.z = s.z, 
      n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, 
      n;
    }, J = function(t, e, i, s, r) {
      var n, o, a, l = {}, h = t.style;
      for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (n = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[o] = "auto" !== n || "left" !== o && "top" !== o ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[o] || "" === e[o].replace(v, "") ? n :0 :G(t, o), 
      void 0 !== h[o] && (a = new ft(h, o, h[o], a)));
      if (s) for (o in s) "className" !== o && (l[o] = s[o]);
      return {
        difs:l,
        firstMPT:a
      };
    }, tt = {
      width:[ "Left", "Right" ],
      height:[ "Top", "Bottom" ]
    }, et = [ "marginLeft", "marginRight", "marginTop", "marginBottom" ], it = function(t, e, i) {
      var s = parseFloat("width" === e ? t.offsetWidth :t.offsetHeight), r = tt[e], n = r.length;
      for (i = i || X(t, null); --n > -1; ) s -= parseFloat(K(t, "padding" + r[n], i, !0)) || 0, 
      s -= parseFloat(K(t, "border" + r[n] + "Width", i, !0)) || 0;
      return s;
    }, st = function(t, e) {
      if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
      (null == t || "" === t) && (t = "0 0");
      var i = t.split(" "), s = -1 !== t.indexOf("left") ? "0%" :-1 !== t.indexOf("right") ? "100%" :i[0], r = -1 !== t.indexOf("top") ? "0%" :-1 !== t.indexOf("bottom") ? "100%" :i[1];
      return null == r ? r = "center" === s ? "50%" :"0" :"center" === r && (r = "50%"), 
      ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), 
      t = s + " " + r + (i.length > 2 ? " " + i[2] :""), e && (e.oxp = -1 !== s.indexOf("%"), 
      e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), 
      e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, "")), e.v = t), 
      e || t;
    }, rt = function(t, e) {
      return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) :parseFloat(t) - parseFloat(e);
    }, nt = function(t, e) {
      return null == t ? e :"string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e :parseFloat(t);
    }, ot = function(t, e, i, s) {
      var r, n, o, a, l, h = 1e-6;
      return null == t ? a = e :"number" == typeof t ? a = t :(r = 360, n = t.split("_"), 
      l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) :parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 :R) - (l ? 0 :e), 
      n.length && (s && (s[i] = e + o), -1 !== t.indexOf("short") && (o %= r) !== o % (r / 2) && (o = 0 > o ? o + r :o - r), 
      -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (o / r | 0) * r :-1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), 
      a = e + o), h > a && a > -h && (a = 0), a;
    }, at = {
      aqua:[ 0, 255, 255 ],
      lime:[ 0, 255, 0 ],
      silver:[ 192, 192, 192 ],
      black:[ 0, 0, 0 ],
      maroon:[ 128, 0, 0 ],
      teal:[ 0, 128, 128 ],
      blue:[ 0, 0, 255 ],
      navy:[ 0, 0, 128 ],
      white:[ 255, 255, 255 ],
      fuchsia:[ 255, 0, 255 ],
      olive:[ 128, 128, 0 ],
      yellow:[ 255, 255, 0 ],
      orange:[ 255, 165, 0 ],
      gray:[ 128, 128, 128 ],
      purple:[ 128, 0, 128 ],
      green:[ 0, 128, 0 ],
      red:[ 255, 0, 0 ],
      pink:[ 255, 192, 203 ],
      cyan:[ 0, 255, 255 ],
      transparent:[ 255, 255, 255, 0 ]
    }, lt = function(t, e, i) {
      return t = 0 > t ? t + 1 :t > 1 ? t - 1 :t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 :.5 > t ? i :2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 :e) + .5 | 0;
    }, ht = o.parseColor = function(t, e) {
      var i, s, r, n, o, a, l, h, u, c, p;
      if (t) if ("number" == typeof t) i = [ t >> 16, t >> 8 & 255, 255 & t ]; else {
        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t]) i = at[t]; else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), 
        r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n), t = parseInt(t.substr(1), 16), 
        i = [ t >> 16, t >> 8 & 255, 255 & t ]; else if ("hsl" === t.substr(0, 3)) if (i = p = t.match(m), 
        e) {
          if (-1 !== t.indexOf("=")) return t.match(y);
        } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, 
        r = .5 >= l ? l * (a + 1) :l + a - l * a, s = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), 
        i[0] = lt(o + 1 / 3, s, r), i[1] = lt(o, s, r), i[2] = lt(o - 1 / 3, s, r); else i = t.match(m) || at.transparent;
        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]));
      } else i = at.black;
      return e && !p && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, h = Math.max(s, r, n), 
      u = Math.min(s, r, n), l = (h + u) / 2, h === u ? o = a = 0 :(c = h - u, a = l > .5 ? c / (2 - h - u) :c / (h + u), 
      o = h === s ? (r - n) / c + (n > r ? 6 :0) :h === r ? (n - s) / c + 2 :(s - r) / c + 4, 
      o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), 
      i;
    }, ut = function(t, e) {
      var i, s, r, n = t.match(ct) || [], o = 0, a = n.length ? "" :t;
      for (i = 0; i < n.length; i++) s = n[i], r = t.substr(o, t.indexOf(s, o) - o), o += r.length + s.length, 
      s = ht(s, e), 3 === s.length && s.push(1), a += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] :"rgba(" + s.join(",")) + ")";
      return a;
    }, ct = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
    for (h in at) ct += "|" + h + "\\b";
    ct = new RegExp(ct + ")", "gi"), o.colorStringFilter = function(t) {
      var e, i = t[0] + t[1];
      ct.lastIndex = 0, ct.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), 
      t[0] = ut(t[0], e), t[1] = ut(t[1], e));
    }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
    var pt = function(t, e, i, s) {
      if (null == t) return function(t) {
        return t;
      };
      var r, n = e ? (t.match(ct) || [ "" ])[0] :"", o = t.split(n).join("").match(_) || [], a = t.substr(0, t.indexOf(o[0])), l = ")" === t.charAt(t.length - 1) ? ")" :"", h = -1 !== t.indexOf(" ") ? " " :",", u = o.length, c = u > 0 ? o[0].replace(m, "") :"";
      return u ? r = e ? function(t) {
        var e, p, d, f;
        if ("number" == typeof t) t += c; else if (s && A.test(t)) {
          for (f = t.replace(A, "|").split("|"), d = 0; d < f.length; d++) f[d] = r(f[d]);
          return f.join(",");
        }
        if (e = (t.match(ct) || [ n ])[0], p = t.split(e).join("").match(_) || [], d = p.length, 
        u > d--) for (;++d < u; ) p[d] = i ? p[(d - 1) / 2 | 0] :o[d];
        return a + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" :"");
      } :function(t) {
        var e, n, p;
        if ("number" == typeof t) t += c; else if (s && A.test(t)) {
          for (n = t.replace(A, "|").split("|"), p = 0; p < n.length; p++) n[p] = r(n[p]);
          return n.join(",");
        }
        if (e = t.match(_) || [], p = e.length, u > p--) for (;++p < u; ) e[p] = i ? e[(p - 1) / 2 | 0] :o[p];
        return a + e.join(h) + l;
      } :function(t) {
        return t;
      };
    }, dt = function(t) {
      return t = t.split(","), function(e, i, s, r, n, o, a) {
        var l, h = (i + "").split(" ");
        for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
        return r.parse(e, a, n, o);
      };
    }, ft = (L._setPluginRatio = function(t) {
      this.plugin.setRatio(t);
      for (var e, i, s, r, n, o = this.data, a = o.proxy, l = o.firstMPT, h = 1e-6; l; ) e = a[l.v], 
      l.r ? e = Math.round(e) :h > e && e > -h && (e = 0), l.t[l.p] = e, l = l._next;
      if (o.autoRotate && (o.autoRotate.rotation = a.rotation), 1 === t || 0 === t) for (l = o.firstMPT, 
      n = 1 === t ? "e" :"b"; l; ) {
        if (i = l.t, i.type) {
          if (1 === i.type) {
            for (r = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) r += i["xn" + s] + i["xs" + (s + 1)];
            i[n] = r;
          }
        } else i[n] = i.s + i.xs0;
        l = l._next;
      }
    }, function(t, e, i, s, r) {
      this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s);
    }), gt = (L._parseToProxy = function(t, e, i, s, r, n) {
      var o, a, l, h, u, c = s, p = {}, d = {}, f = i._transform, g = z;
      for (i._transform = null, z = e, s = u = i.parse(t, e, s, r), z = g, n && (i._transform = f, 
      c && (c._prev = null, c._prev && (c._prev._next = null))); s && s !== c; ) {
        if (s.type <= 1 && (a = s.p, d[a] = s.s + s.c, p[a] = s.s, n || (h = new ft(s, "s", a, h, s.r), 
        s.c = 0), 1 === s.type)) for (o = s.l; --o > 0; ) l = "xn" + o, a = s.p + "_" + l, 
        d[a] = s.data[l], p[a] = s[l], n || (h = new ft(s, l, a, h, s.rxp[l]));
        s = s._next;
      }
      return {
        proxy:p,
        end:d,
        firstMPT:h,
        pt:u
      };
    }, L.CSSPropTween = function(t, e, s, r, o, a, l, h, u, c, p) {
      this.t = t, this.p = e, this.s = s, this.c = r, this.n = l || e, t instanceof gt || n.push(this.n), 
      this.r = h, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === c ? s :c, 
      this.e = void 0 === p ? s + r :p, o && (this._next = o, o._prev = this);
    }), mt = function(t, e, i, s, r, n) {
      var o = new gt(t, e, i, s - i, r, -1, n);
      return o.b = i, o.e = o.xs0 = s, o;
    }, yt = o.parseComplex = function(t, e, i, s, r, n, o, a, l, h) {
      i = i || n || "", o = new gt(t, e, 0, 0, o, h ? 2 :1, null, !1, a, i, s), s += "";
      var c, p, d, f, g, _, v, b, w, k, T, C, S, x = i.split(", ").join(",").split(" "), P = s.split(", ").join(",").split(" "), $ = x.length, D = !1 !== u;
      for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (x = x.join(" ").replace(A, ", ").split(" "), 
      P = P.join(" ").replace(A, ", ").split(" "), $ = x.length), $ !== P.length && (x = (n || "").split(" "), 
      $ = x.length), o.plugin = l, o.setRatio = h, ct.lastIndex = 0, c = 0; $ > c; c++) if (f = x[c], 
      g = P[c], (b = parseFloat(f)) || 0 === b) o.appendXtra("", b, rt(g, b), g.replace(y, ""), D && -1 !== g.indexOf("px"), !0); else if (r && ct.test(f)) C = "," === g.charAt(g.length - 1) ? ")," :")", 
      S = -1 !== g.indexOf("hsl") && j, f = ht(f, S), g = ht(g, S), w = f.length + g.length > 6, 
      w && !j && 0 === g[3] ? (o["xs" + o.l] += o.l ? " transparent" :"transparent", o.e = o.e.split(P[c]).join("transparent")) :(j || (w = !1), 
      S ? o.appendXtra(w ? "hsla(" :"hsl(", f[0], rt(g[0], f[0]), ",", !1, !0).appendXtra("", f[1], rt(g[1], f[1]), "%,", !1).appendXtra("", f[2], rt(g[2], f[2]), w ? "%," :"%" + C, !1) :o.appendXtra(w ? "rgba(" :"rgb(", f[0], g[0] - f[0], ",", !0, !0).appendXtra("", f[1], g[1] - f[1], ",", !0).appendXtra("", f[2], g[2] - f[2], w ? "," :C, !0), 
      w && (f = f.length < 4 ? 1 :f[3], o.appendXtra("", f, (g.length < 4 ? 1 :g[3]) - f, C, !1))), 
      ct.lastIndex = 0; else if (_ = f.match(m)) {
        if (!(v = g.match(y)) || v.length !== _.length) return o;
        for (d = 0, p = 0; p < _.length; p++) T = _[p], k = f.indexOf(T, d), o.appendXtra(f.substr(d, k - d), Number(T), rt(v[p], T), "", D && "px" === f.substr(k + T.length, 2), 0 === p), 
        d = k + T.length;
        o["xs" + o.l] += f.substr(d);
      } else o["xs" + o.l] += o.l ? " " + g :g;
      if (-1 !== s.indexOf("=") && o.data) {
        for (C = o.xs0 + o.data.s, c = 1; c < o.l; c++) C += o["xs" + c] + o.data["xn" + c];
        o.e = C + o["xs" + c];
      }
      return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o;
    }, _t = 9;
    for (h = gt.prototype, h.l = h.pr = 0; --_t > 0; ) h["xn" + _t] = 0, h["xs" + _t] = "";
    h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, 
    h.appendXtra = function(t, e, i, s, r, n) {
      var o = this, a = o.l;
      return o["xs" + a] += n && a ? " " + t :t || "", i || 0 === a || o.plugin ? (o.l++, 
      o.type = o.setRatio ? 2 :1, o["xs" + o.l] = s || "", a > 0 ? (o.data["xn" + a] = e + i, 
      o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new gt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), 
      o.xfirst.xs0 = 0), o) :(o.data = {
        s:e + i
      }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) :(o["xs" + a] += e + (s || ""), o);
    };
    var vt = function(t, e) {
      e = e || {}, this.p = e.prefix ? Q(t) || t :t, l[t] = l[this.p] = this, this.format = e.formatter || pt(e.defaultValue, e.color, e.collapsible, e.multi), 
      e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, 
      this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0;
    }, bt = L._registerComplexSpecialProp = function(t, e, i) {
      "object" != typeof e && (e = {
        parser:i
      });
      var s, r = t.split(","), n = e.defaultValue;
      for (i = i || [ n ], s = 0; s < r.length; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || n, 
      new vt(r[s], e);
    }, wt = function(t) {
      if (!l[t]) {
        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
        bt(t, {
          parser:function(t, i, s, r, n, o, h) {
            var u = a.com.greensock.plugins[e];
            return u ? (u._cssRegister(), l[s].parse(t, i, s, r, n, o, h)) :(H("Error: " + e + " js file not loaded."), 
            n);
          }
        });
      }
    };
    h = vt.prototype, h.parseComplex = function(t, e, i, s, r, n) {
      var o, a, l, h, u, c, p = this.keyword;
      if (this.multi && (A.test(i) || A.test(e) ? (a = e.replace(A, "|").split("|"), l = i.replace(A, "|").split("|")) :p && (a = [ e ], 
      l = [ i ])), l) {
        for (h = l.length > a.length ? l.length :a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt, 
        i = l[o] = l[o] || this.dflt, p && (u = e.indexOf(p), c = i.indexOf(p), u !== c && (-1 === c ? a[o] = a[o].split(p).join("") :-1 === u && (a[o] += " " + p)));
        e = a.join(", "), i = l.join(", ");
      }
      return yt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n);
    }, h.parse = function(t, e, i, s, n, o) {
      return this.parseComplex(t.style, this.format(K(t, this.p, r, !1, this.dflt)), this.format(e), n, o);
    }, o.registerSpecialProp = function(t, e, i) {
      bt(t, {
        parser:function(t, s, r, n, o, a) {
          var l = new gt(t, r, 0, 0, o, 2, r, !1, i);
          return l.plugin = a, l.setRatio = e(t, s, n._tween, r), l;
        },
        priority:i
      });
    }, o.useSVGTransformAttr = p || d;
    var kt, Tt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Ct = Q("transform"), St = U + "transform", xt = Q("transformOrigin"), Pt = null !== Q("perspective"), $t = L.Transform = function() {
      this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !Pt) && (o.defaultForce3D || "auto");
    }, Dt = window.SVGElement, Ft = function(t, e, i) {
      var s, r = I.createElementNS("http://www.w3.org/2000/svg", t), n = /([a-z])([A-Z])/g;
      for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
      return e.appendChild(r), r;
    }, Et = I.documentElement, At = function() {
      var t, e, i, s = g || /Android/i.test(V) && !window.chrome;
      return I.createElementNS && !s && (t = Ft("svg", Et), e = Ft("rect", t, {
        width:100,
        height:50,
        x:100
      }), i = e.getBoundingClientRect().width, e.style[xt] = "50% 50%", e.style[Ct] = "scaleX(0.5)", 
      s = i === e.getBoundingClientRect().width && !(d && Pt), Et.removeChild(t)), s;
    }(), Ot = function(t, e, i, s, r) {
      var n, a, l, h, u, c, p, d, f, g, m, y, _, v, b = t._gsTransform, w = It(t, !0);
      b && (_ = b.xOrigin, v = b.yOrigin), (!s || (n = s.split(" ")).length < 2) && (p = t.getBBox(), 
      e = st(e).split(" "), n = [ (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width :parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height :parseFloat(e[1])) + p.y ]), 
      i.xOrigin = h = parseFloat(n[0]), i.yOrigin = u = parseFloat(n[1]), s && w !== zt && (c = w[0], 
      p = w[1], d = w[2], f = w[3], g = w[4], m = w[5], y = c * f - p * d, a = h * (f / y) + u * (-d / y) + (d * m - f * g) / y, 
      l = h * (-p / y) + u * (c / y) - (c * m - p * g) / y, h = i.xOrigin = n[0] = a, 
      u = i.yOrigin = n[1] = l), b && (r || !1 !== r && !1 !== o.defaultSmoothOrigin ? (a = h - _, 
      l = u - v, b.xOffset += a * w[0] + l * w[2] - a, b.yOffset += a * w[1] + l * w[3] - l) :b.xOffset = b.yOffset = 0), 
      t.setAttribute("data-svg-origin", n.join(" "));
    }, Rt = function(t) {
      return !!(Dt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM));
    }, zt = [ 1, 0, 0, 1, 0, 0 ], It = function(t, e) {
      var i, s, r, n, o, a = t._gsTransform || new $t(), l = 1e5;
      if (Ct ? s = K(t, St, null, !0) :t.currentStyle && (s = t.currentStyle.filter.match(F), 
      s = s && 4 === s.length ? [ s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), a.x || 0, a.y || 0 ].join(",") :""), 
      i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, (a.svg || t.getBBox && Rt(t)) && (i && -1 !== (t.style[Ct] + "").indexOf("matrix") && (s = t.style[Ct], 
      i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (s = r, 
      i = 0) :-1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", 
      i = 0))), i) return zt;
      for (r = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], _t = r.length; --_t > -1; ) n = Number(r[_t]), 
      r[_t] = (o = n - (n |= 0)) ? (o * l + (0 > o ? -.5 :.5) | 0) / l + n :n;
      return e && r.length > 6 ? [ r[0], r[1], r[4], r[5], r[12], r[13] ] :r;
    }, Bt = L.getTransform = function(t, i, s, n) {
      if (t._gsTransform && s && !n) return t._gsTransform;
      var a, l, h, u, c, p, d = s ? t._gsTransform || new $t() :new $t(), f = d.scaleX < 0, g = 2e-5, m = 1e5, y = Pt ? parseFloat(K(t, xt, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 :0, _ = parseFloat(o.defaultTransformPerspective) || 0;
      if (d.svg = !(!t.getBBox || !Rt(t)), d.svg && (Ot(t, K(t, xt, r, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), 
      kt = o.useSVGTransformAttr || At), (a = It(t)) !== zt) {
        if (16 === a.length) {
          var v, b, w, k, T, C = a[0], S = a[1], x = a[2], P = a[3], $ = a[4], D = a[5], F = a[6], E = a[7], A = a[8], O = a[9], z = a[10], I = a[12], B = a[13], M = a[14], q = a[11], L = Math.atan2(F, z);
          d.zOrigin && (M = -d.zOrigin, I = A * M - a[12], B = O * M - a[13], M = z * M + d.zOrigin - a[14]), 
          d.rotationX = L * R, L && (k = Math.cos(-L), T = Math.sin(-L), v = $ * k + A * T, 
          b = D * k + O * T, w = F * k + z * T, A = $ * -T + A * k, O = D * -T + O * k, z = F * -T + z * k, 
          q = E * -T + q * k, $ = v, D = b, F = w), L = Math.atan2(-x, z), d.rotationY = L * R, 
          L && (k = Math.cos(-L), T = Math.sin(-L), v = C * k - A * T, b = S * k - O * T, 
          w = x * k - z * T, O = S * T + O * k, z = x * T + z * k, q = P * T + q * k, C = v, 
          S = b, x = w), L = Math.atan2(S, C), d.rotation = L * R, L && (k = Math.cos(-L), 
          T = Math.sin(-L), C = C * k + $ * T, b = S * k + D * T, D = S * -T + D * k, F = x * -T + F * k, 
          S = b), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, 
          d.rotationY = 180 - d.rotationY), d.scaleX = (Math.sqrt(C * C + S * S) * m + .5 | 0) / m, 
          d.scaleY = (Math.sqrt(D * D + O * O) * m + .5 | 0) / m, d.scaleZ = (Math.sqrt(F * F + z * z) * m + .5 | 0) / m, 
          d.skewX = 0, d.perspective = q ? 1 / (0 > q ? -q :q) :0, d.x = I, d.y = B, d.z = M, 
          d.svg && (d.x -= d.xOrigin - (d.xOrigin * C - d.yOrigin * $), d.y -= d.yOrigin - (d.yOrigin * S - d.xOrigin * D));
        } else if ((!Pt || n || !a.length || d.x !== a[4] || d.y !== a[5] || !d.rotationX && !d.rotationY) && (void 0 === d.x || "none" !== K(t, "display", i))) {
          var V = a.length >= 6, j = V ? a[0] :1, N = a[1] || 0, H = a[2] || 0, U = V ? a[3] :1;
          d.x = a[4] || 0, d.y = a[5] || 0, h = Math.sqrt(j * j + N * N), u = Math.sqrt(U * U + H * H), 
          c = j || N ? Math.atan2(N, j) * R :d.rotation || 0, p = H || U ? Math.atan2(H, U) * R + c :d.skewX || 0, 
          Math.abs(p) > 90 && Math.abs(p) < 270 && (f ? (h *= -1, p += 0 >= c ? 180 :-180, 
          c += 0 >= c ? 180 :-180) :(u *= -1, p += 0 >= p ? 180 :-180)), d.scaleX = h, d.scaleY = u, 
          d.rotation = c, d.skewX = p, Pt && (d.rotationX = d.rotationY = d.z = 0, d.perspective = _, 
          d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * j + d.yOrigin * H), d.y -= d.yOrigin - (d.xOrigin * N + d.yOrigin * U));
        }
        d.zOrigin = y;
        for (l in d) d[l] < g && d[l] > -g && (d[l] = 0);
      }
      return s && (t._gsTransform = d, d.svg && (kt && t.style[Ct] ? e.delayedCall(.001, function() {
        Vt(t.style, Ct);
      }) :!kt && t.getAttribute("transform") && e.delayedCall(.001, function() {
        t.removeAttribute("transform");
      }))), d;
    }, Mt = function(t) {
      var e, i, s = this.data, r = -s.rotation * O, n = r + s.skewX * O, o = 1e5, a = (Math.cos(r) * s.scaleX * o | 0) / o, l = (Math.sin(r) * s.scaleX * o | 0) / o, h = (Math.sin(n) * -s.scaleY * o | 0) / o, u = (Math.cos(n) * s.scaleY * o | 0) / o, c = this.t.style, p = this.t.currentStyle;
      if (p) {
        i = l, l = -h, h = -i, e = p.filter, c.filter = "";
        var d, f, m = this.t.offsetWidth, y = this.t.offsetHeight, _ = "absolute" !== p.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + u, k = s.x + m * s.xPercent / 100, T = s.y + y * s.yPercent / 100;
        if (null != s.ox && (d = (s.oxp ? m * s.ox * .01 :s.ox) - m / 2, f = (s.oyp ? y * s.oy * .01 :s.oy) - y / 2, 
        k += d - (d * a + f * l), T += f - (d * h + f * u)), _ ? (d = m / 2, f = y / 2, 
        v += ", Dx=" + (d - (d * a + f * l) + k) + ", Dy=" + (f - (d * h + f * u) + T) + ")") :v += ", sizingMethod='auto expand')", 
        -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(E, v) :c.filter = v + " " + e, 
        (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === u && (_ && -1 === v.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), 
        !_) {
          var C, S, x, P = 8 > g ? 1 :-1;
          for (d = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((0 > a ? -a :a) * m + (0 > l ? -l :l) * y)) / 2 + k), 
          s.ieOffsetY = Math.round((y - ((0 > u ? -u :u) * y + (0 > h ? -h :h) * m)) / 2 + T), 
          _t = 0; 4 > _t; _t++) S = et[_t], C = p[S], i = -1 !== C.indexOf("px") ? parseFloat(C) :Y(this.t, S, parseFloat(C), C.replace(b, "")) || 0, 
          x = i !== s[S] ? 2 > _t ? -s.ieOffsetX :-s.ieOffsetY :2 > _t ? d - s.ieOffsetX :f - s.ieOffsetY, 
          c[S] = (s[S] = Math.round(i - x * (0 === _t || 2 === _t ? 1 :P))) + "px";
        }
      }
    }, qt = L.set3DTransformRatio = L.setTransformRatio = function(t) {
      var e, i, s, r, n, o, a, l, h, u, c, p, f, g, m, y, _, v, b, w, k, T, C, S = this.data, x = this.t.style, P = S.rotation, $ = S.rotationX, D = S.rotationY, F = S.scaleX, E = S.scaleY, A = S.scaleZ, R = S.x, z = S.y, I = S.z, B = S.svg, M = S.perspective, q = S.force3D;
      if (((1 === t || 0 === t) && "auto" === q && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !q) && !I && !M && !D && !$ && 1 === A || kt && B || !Pt) return void (P || S.skewX || B ? (P *= O, 
      T = S.skewX * O, C = 1e5, e = Math.cos(P) * F, r = Math.sin(P) * F, i = Math.sin(P - T) * -E, 
      n = Math.cos(P - T) * E, T && "simple" === S.skewType && (_ = Math.tan(T), _ = Math.sqrt(1 + _ * _), 
      i *= _, n *= _, S.skewY && (e *= _, r *= _)), B && (R += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, 
      z += S.yOrigin - (S.xOrigin * r + S.yOrigin * n) + S.yOffset, kt && (S.xPercent || S.yPercent) && (g = this.t.getBBox(), 
      R += .01 * S.xPercent * g.width, z += .01 * S.yPercent * g.height), g = 1e-6, g > R && R > -g && (R = 0), 
      g > z && z > -g && (z = 0)), b = (e * C | 0) / C + "," + (r * C | 0) / C + "," + (i * C | 0) / C + "," + (n * C | 0) / C + "," + R + "," + z + ")", 
      B && kt ? this.t.setAttribute("transform", "matrix(" + b) :x[Ct] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" :"matrix(") + b) :x[Ct] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" :"matrix(") + F + ",0,0," + E + "," + R + "," + z + ")");
      if (d && (g = 1e-4, g > F && F > -g && (F = A = 2e-5), g > E && E > -g && (E = A = 2e-5), 
      !M || S.z || S.rotationX || S.rotationY || (M = 0)), P || S.skewX) P *= O, m = e = Math.cos(P), 
      y = r = Math.sin(P), S.skewX && (P -= S.skewX * O, m = Math.cos(P), y = Math.sin(P), 
      "simple" === S.skewType && (_ = Math.tan(S.skewX * O), _ = Math.sqrt(1 + _ * _), 
      m *= _, y *= _, S.skewY && (e *= _, r *= _))), i = -y, n = m; else {
        if (!(D || $ || 1 !== A || M || B)) return void (x[Ct] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" :"translate3d(") + R + "px," + z + "px," + I + "px)" + (1 !== F || 1 !== E ? " scale(" + F + "," + E + ")" :""));
        e = n = 1, i = r = 0;
      }
      h = 1, s = o = a = l = u = c = 0, p = M ? -1 / M :0, f = S.zOrigin, g = 1e-6, w = ",", 
      k = "0", P = D * O, P && (m = Math.cos(P), y = Math.sin(P), a = -y, u = p * -y, 
      s = e * y, o = r * y, h = m, p *= m, e *= m, r *= m), P = $ * O, P && (m = Math.cos(P), 
      y = Math.sin(P), _ = i * m + s * y, v = n * m + o * y, l = h * y, c = p * y, s = i * -y + s * m, 
      o = n * -y + o * m, h *= m, p *= m, i = _, n = v), 1 !== A && (s *= A, o *= A, h *= A, 
      p *= A), 1 !== E && (i *= E, n *= E, l *= E, c *= E), 1 !== F && (e *= F, r *= F, 
      a *= F, u *= F), (f || B) && (f && (R += s * -f, z += o * -f, I += h * -f + f), 
      B && (R += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, z += S.yOrigin - (S.xOrigin * r + S.yOrigin * n) + S.yOffset), 
      g > R && R > -g && (R = k), g > z && z > -g && (z = k), g > I && I > -g && (I = 0)), 
      b = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" :"matrix3d(", 
      b += (g > e && e > -g ? k :e) + w + (g > r && r > -g ? k :r) + w + (g > a && a > -g ? k :a), 
      b += w + (g > u && u > -g ? k :u) + w + (g > i && i > -g ? k :i) + w + (g > n && n > -g ? k :n), 
      $ || D || 1 !== A ? (b += w + (g > l && l > -g ? k :l) + w + (g > c && c > -g ? k :c) + w + (g > s && s > -g ? k :s), 
      b += w + (g > o && o > -g ? k :o) + w + (g > h && h > -g ? k :h) + w + (g > p && p > -g ? k :p) + w) :b += ",0,0,0,0,1,0,", 
      b += R + w + z + w + I + w + (M ? 1 + -I / M :1) + ")", x[Ct] = b;
    };
    h = $t.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, 
    h.scaleX = h.scaleY = h.scaleZ = 1, bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
      parser:function(t, e, i, s, n, a, l) {
        if (s._lastParsedTransform === l) return n;
        s._lastParsedTransform = l;
        var h, u, c, p, d, f, g, m, y, _, v = t._gsTransform, b = t.style, w = 1e-6, k = Tt.length, T = l, C = {}, S = "transformOrigin";
        if (l.display ? (p = K(t, "display"), b.display = "block", h = Bt(t, r, !0, l.parseTransform), 
        b.display = p) :h = Bt(t, r, !0, l.parseTransform), s._transform = h, "string" == typeof T.transform && Ct) p = M.style, 
        p[Ct] = T.transform, p.display = "block", p.position = "absolute", I.body.appendChild(M), 
        u = Bt(M, null, !1), I.body.removeChild(M), u.perspective || (u.perspective = h.perspective), 
        null != T.xPercent && (u.xPercent = nt(T.xPercent, h.xPercent)), null != T.yPercent && (u.yPercent = nt(T.yPercent, h.yPercent)); else if ("object" == typeof T) {
          if (u = {
            scaleX:nt(null != T.scaleX ? T.scaleX :T.scale, h.scaleX),
            scaleY:nt(null != T.scaleY ? T.scaleY :T.scale, h.scaleY),
            scaleZ:nt(T.scaleZ, h.scaleZ),
            x:nt(T.x, h.x),
            y:nt(T.y, h.y),
            z:nt(T.z, h.z),
            xPercent:nt(T.xPercent, h.xPercent),
            yPercent:nt(T.yPercent, h.yPercent),
            perspective:nt(T.transformPerspective, h.perspective)
          }, null != (m = T.directionalRotation)) if ("object" == typeof m) for (p in m) T[p] = m[p]; else T.rotation = m;
          "string" == typeof T.x && -1 !== T.x.indexOf("%") && (u.x = 0, u.xPercent = nt(T.x, h.xPercent)), 
          "string" == typeof T.y && -1 !== T.y.indexOf("%") && (u.y = 0, u.yPercent = nt(T.y, h.yPercent)), 
          u.rotation = ot("rotation" in T ? T.rotation :"shortRotation" in T ? T.shortRotation + "_short" :"rotationZ" in T ? T.rotationZ :h.rotation, h.rotation, "rotation", C), 
          Pt && (u.rotationX = ot("rotationX" in T ? T.rotationX :"shortRotationX" in T ? T.shortRotationX + "_short" :h.rotationX || 0, h.rotationX, "rotationX", C), 
          u.rotationY = ot("rotationY" in T ? T.rotationY :"shortRotationY" in T ? T.shortRotationY + "_short" :h.rotationY || 0, h.rotationY, "rotationY", C)), 
          u.skewX = null == T.skewX ? h.skewX :ot(T.skewX, h.skewX), u.skewY = null == T.skewY ? h.skewY :ot(T.skewY, h.skewY), 
          (c = u.skewY - h.skewY) && (u.skewX += c, u.rotation += c);
        }
        for (Pt && null != T.force3D && (h.force3D = T.force3D, g = !0), h.skewType = T.skewType || h.skewType || o.defaultSkewType, 
        (f = h.force3D || h.z || h.rotationX || h.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == T.scale || (u.scaleZ = 1); --k > -1; ) i = Tt[k], 
        ((d = u[i] - h[i]) > w || -w > d || null != T[i] || null != z[i]) && (g = !0, n = new gt(h, i, h[i], d, n), 
        i in C && (n.e = C[i]), n.xs0 = 0, n.plugin = a, s._overwriteProps.push(n.n));
        return d = T.transformOrigin, h.svg && (d || T.svgOrigin) && (y = h.xOffset, _ = h.yOffset, 
        Ot(t, st(d), u, T.svgOrigin, T.smoothOrigin), n = mt(h, "xOrigin", (v ? h :u).xOrigin, u.xOrigin, n, S), 
        n = mt(h, "yOrigin", (v ? h :u).yOrigin, u.yOrigin, n, S), (y !== h.xOffset || _ !== h.yOffset) && (n = mt(h, "xOffset", v ? y :h.xOffset, h.xOffset, n, S), 
        n = mt(h, "yOffset", v ? _ :h.yOffset, h.yOffset, n, S)), d = kt ? null :"0px 0px"), 
        (d || Pt && f && h.zOrigin) && (Ct ? (g = !0, i = xt, d = (d || K(t, i, r, !1, "50% 50%")) + "", 
        n = new gt(b, i, 0, 0, n, -1, S), n.b = b[i], n.plugin = a, Pt ? (p = h.zOrigin, 
        d = d.split(" "), h.zOrigin = (d.length > 2 && (0 === p || "0px" !== d[2]) ? parseFloat(d[2]) :p) || 0, 
        n.xs0 = n.e = d[0] + " " + (d[1] || "50%") + " 0px", n = new gt(h, "zOrigin", 0, 0, n, -1, n.n), 
        n.b = p, n.xs0 = n.e = h.zOrigin) :n.xs0 = n.e = d) :st(d + "", h)), g && (s._transformType = h.svg && kt || !f && 3 !== this._transformType ? 2 :3), 
        n;
      },
      prefix:!0
    }), bt("boxShadow", {
      defaultValue:"0px 0px 0px 0px #999",
      prefix:!0,
      color:!0,
      multi:!0,
      keyword:"inset"
    }), bt("borderRadius", {
      defaultValue:"0px",
      parser:function(t, e, i, n, o) {
        e = this.format(e);
        var a, l, h, u, c, p, d, f, g, m, y, _, v, b, w, k, T = [ "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius" ], C = t.style;
        for (g = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), a = e.split(" "), 
        l = 0; l < T.length; l++) this.p.indexOf("border") && (T[l] = Q(T[l])), c = u = K(t, T[l], r, !1, "0px"), 
        -1 !== c.indexOf(" ") && (u = c.split(" "), c = u[0], u = u[1]), p = h = a[l], d = parseFloat(c), 
        _ = c.substr((d + "").length), v = "=" === p.charAt(1), v ? (f = parseInt(p.charAt(0) + "1", 10), 
        p = p.substr(2), f *= parseFloat(p), y = p.substr((f + "").length - (0 > f ? 1 :0)) || "") :(f = parseFloat(p), 
        y = p.substr((f + "").length)), "" === y && (y = s[i] || _), y !== _ && (b = Y(t, "borderLeft", d, _), 
        w = Y(t, "borderTop", d, _), "%" === y ? (c = b / g * 100 + "%", u = w / m * 100 + "%") :"em" === y ? (k = Y(t, "borderLeft", 1, "em"), 
        c = b / k + "em", u = w / k + "em") :(c = b + "px", u = w + "px"), v && (p = parseFloat(c) + f + y, 
        h = parseFloat(u) + f + y)), o = yt(C, T[l], c + " " + u, p + " " + h, !1, "0px", o);
        return o;
      },
      prefix:!0,
      formatter:pt("0px 0px 0px 0px", !1, !0)
    }), bt("backgroundPosition", {
      defaultValue:"0 0",
      parser:function(t, e, i, s, n, o) {
        var a, l, h, u, c, p, d = "background-position", f = r || X(t, null), m = this.format((f ? g ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") :f.getPropertyValue(d) :t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), y = this.format(e);
        if (-1 !== m.indexOf("%") != (-1 !== y.indexOf("%")) && (p = K(t, "backgroundImage").replace(P, "")) && "none" !== p) {
          for (a = m.split(" "), l = y.split(" "), q.setAttribute("src", p), h = 2; --h > -1; ) m = a[h], 
          (u = -1 !== m.indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (c = 0 === h ? t.offsetWidth - q.width :t.offsetHeight - q.height, 
          a[h] = u ? parseFloat(m) / 100 * c + "px" :parseFloat(m) / c * 100 + "%");
          m = a.join(" ");
        }
        return this.parseComplex(t.style, m, y, n, o);
      },
      formatter:st
    }), bt("backgroundSize", {
      defaultValue:"0 0",
      formatter:st
    }), bt("perspective", {
      defaultValue:"0px",
      prefix:!0
    }), bt("perspectiveOrigin", {
      defaultValue:"50% 50%",
      prefix:!0
    }), bt("transformStyle", {
      prefix:!0
    }), bt("backfaceVisibility", {
      prefix:!0
    }), bt("userSelect", {
      prefix:!0
    }), bt("margin", {
      parser:dt("marginTop,marginRight,marginBottom,marginLeft")
    }), bt("padding", {
      parser:dt("paddingTop,paddingRight,paddingBottom,paddingLeft")
    }), bt("clip", {
      defaultValue:"rect(0px,0px,0px,0px)",
      parser:function(t, e, i, s, n, o) {
        var a, l, h;
        return 9 > g ? (l = t.currentStyle, h = 8 > g ? " " :",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", 
        e = this.format(e).split(",").join(h)) :(a = this.format(K(t, this.p, r, !1, this.dflt)), 
        e = this.format(e)), this.parseComplex(t.style, a, e, n, o);
      }
    }), bt("textShadow", {
      defaultValue:"0px 0px 0px #999",
      color:!0,
      multi:!0
    }), bt("autoRound,strictUnits", {
      parser:function(t, e, i, s, r) {
        return r;
      }
    }), bt("border", {
      defaultValue:"0px solid #000",
      parser:function(t, e, i, s, n, o) {
        return this.parseComplex(t.style, this.format(K(t, "borderTopWidth", r, !1, "0px") + " " + K(t, "borderTopStyle", r, !1, "solid") + " " + K(t, "borderTopColor", r, !1, "#000")), this.format(e), n, o);
      },
      color:!0,
      formatter:function(t) {
        var e = t.split(" ");
        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ct) || [ "#000" ])[0];
      }
    }), bt("borderWidth", {
      parser:dt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
    }), bt("float,cssFloat,styleFloat", {
      parser:function(t, e, i, s, r) {
        var n = t.style, o = "cssFloat" in n ? "cssFloat" :"styleFloat";
        return new gt(n, o, 0, 0, r, -1, i, !1, 0, n[o], e);
      }
    });
    var Lt = function(t) {
      var e, i = this.t, s = i.filter || K(this.data, "filter") || "", r = this.s + this.c * t | 0;
      100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), 
      e = !K(this.data, "filter")) :(i.filter = s.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), 
      -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") :i.filter = s.replace(w, "opacity=" + r));
    };
    bt("opacity,alpha,autoAlpha", {
      defaultValue:"1",
      parser:function(t, e, i, s, n, o) {
        var a = parseFloat(K(t, "opacity", r, !1, "1")), l = t.style, h = "autoAlpha" === i;
        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 :1) * parseFloat(e.substr(2)) + a), 
        h && 1 === a && "hidden" === K(t, "visibility", r) && 0 !== e && (a = 0), j ? n = new gt(l, "opacity", a, e - a, n) :(n = new gt(l, "opacity", 100 * a, 100 * (e - a), n), 
        n.xn1 = h ? 1 :0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", 
        n.data = t, n.plugin = o, n.setRatio = Lt), h && (n = new gt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== a ? "inherit" :"hidden", 0 === e ? "hidden" :"inherit"), 
        n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n;
      }
    });
    var Vt = function(t, e) {
      e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), 
      t.removeProperty(e.replace(S, "-$1").toLowerCase())) :t.removeAttribute(e));
    }, jt = function(t) {
      if (this.t._gsClassPT = this, 1 === t || 0 === t) {
        this.t.setAttribute("class", 0 === t ? this.b :this.e);
        for (var e = this.data, i = this.t.style; e; ) e.v ? i[e.p] = e.v :Vt(i, e.p), e = e._next;
        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
      } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
    };
    bt("className", {
      parser:function(t, e, s, n, o, a, l) {
        var h, u, c, p, d, f = t.getAttribute("class") || "", g = t.style.cssText;
        if (o = n._classNamePT = new gt(t, s, 0, 0, o, 2), o.setRatio = jt, o.pr = -11, 
        i = !0, o.b = f, u = Z(t, r), c = t._gsClassPT) {
          for (p = {}, d = c.data; d; ) p[d.p] = 1, d = d._next;
          c.setRatio(1);
        }
        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e :f.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) :""), 
        t.setAttribute("class", o.e), h = J(t, u, Z(t), l, p), t.setAttribute("class", f), 
        o.data = h.firstMPT, t.style.cssText = g, o = o.xfirst = n.parse(t, h.difs, o, a);
      }
    });
    var Nt = function(t) {
      if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
        var e, i, s, r, n, o = this.t.style, a = l.transform.parse;
        if ("all" === this.e) o.cssText = "", r = !0; else for (e = this.e.split(" ").join("").split(","), 
        s = e.length; --s > -1; ) i = e[s], l[i] && (l[i].parse === a ? r = !0 :i = "transformOrigin" === i ? xt :l[i].p), 
        Vt(o, i);
        r && (Vt(o, Ct), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), 
        this.t.removeAttribute("transform")), delete this.t._gsTransform));
      }
    };
    for (bt("clearProps", {
      parser:function(t, e, s, r, n) {
        return n = new gt(t, s, 0, 0, n, 2), n.setRatio = Nt, n.e = e, n.pr = -10, n.data = r._tween, 
        i = !0, n;
      }
    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), _t = h.length; _t--; ) wt(h[_t]);
    h = o.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, a) {
      if (!t.nodeType) return !1;
      this._target = t, this._tween = a, this._vars = e, u = e.autoRound, i = !1, s = e.suffixMap || o.suffixMap, 
      r = X(t, ""), n = this._overwriteProps;
      var h, d, g, m, y, _, v, b, w, T = t.style;
      if (c && "" === T.zIndex && ("auto" === (h = K(t, "zIndex", r)) || "" === h) && this._addLazySet(T, "zIndex", 0), 
      "string" == typeof e && (m = T.cssText, h = Z(t, r), T.cssText = m + ";" + e, h = J(t, h, Z(t)).difs, 
      !j && k.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, T.cssText = m), e.className ? this._firstPT = d = l.className.parse(t, e.className, "className", this, null, null, e) :this._firstPT = d = this.parse(t, e, null), 
      this._transformType) {
        for (w = 3 === this._transformType, Ct ? p && (c = !0, "" === T.zIndex && ("auto" === (v = K(t, "zIndex", r)) || "" === v) && this._addLazySet(T, "zIndex", 0), 
        f && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" :"hidden"))) :T.zoom = 1, 
        g = d; g && g._next; ) g = g._next;
        b = new gt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, g), b.setRatio = Ct ? qt :Mt, 
        b.data = this._transform || Bt(t, r, !0), b.tween = a, b.pr = -1, n.pop();
      }
      if (i) {
        for (;d; ) {
          for (_ = d._next, g = m; g && g.pr > d.pr; ) g = g._next;
          (d._prev = g ? g._prev :y) ? d._prev._next = d :m = d, (d._next = g) ? g._prev = d :y = d, 
          d = _;
        }
        this._firstPT = m;
      }
      return !0;
    }, h.parse = function(t, e, i, n) {
      var o, a, h, c, p, d, f, g, m, y, _ = t.style;
      for (o in e) d = e[o], a = l[o], a ? i = a.parse(t, d, o, this, i, n, e) :(p = K(t, o, r) + "", 
      m = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && C.test(d) ? (m || (d = ht(d), 
      d = (d.length > 3 ? "rgba(" :"rgb(") + d.join(",") + ")"), i = yt(_, o, p, d, !0, "transparent", i, 0, n)) :!m || -1 === d.indexOf(" ") && -1 === d.indexOf(",") ? (h = parseFloat(p), 
      f = h || 0 === h ? p.substr((h + "").length) :"", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (h = it(t, o, r), 
      f = "px") :"left" === o || "top" === o ? (h = G(t, o, r), f = "px") :(h = "opacity" !== o ? 0 :1, 
      f = "")), y = m && "=" === d.charAt(1), y ? (c = parseInt(d.charAt(0) + "1", 10), 
      d = d.substr(2), c *= parseFloat(d), g = d.replace(b, "")) :(c = parseFloat(d), 
      g = m ? d.replace(b, "") :""), "" === g && (g = o in s ? s[o] :f), d = c || 0 === c ? (y ? c + h :c) + g :e[o], 
      f !== g && "" !== g && (c || 0 === c) && h && (h = Y(t, o, h, f), "%" === g ? (h /= Y(t, o, 100, "%") / 100, 
      !0 !== e.strictUnits && (p = h + "%")) :"em" === g || "rem" === g || "vw" === g || "vh" === g ? h /= Y(t, o, 1, g) :"px" !== g && (c = Y(t, o, c, g), 
      g = "px"), y && (c || 0 === c) && (d = c + h + g)), y && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== _[o] && (d || d + "" != "NaN" && null != d) ? (i = new gt(_, o, c || h || 0, 0, i, -1, o, !1, 0, p, d), 
      i.xs0 = "none" !== d || "display" !== o && -1 === o.indexOf("Style") ? d :p) :H("invalid " + o + " tween value: " + e[o]) :(i = new gt(_, o, h, c - h, i, 0, o, !1 !== u && ("px" === g || "zIndex" === o), 0, p, d), 
      i.xs0 = g)) :i = yt(_, o, p, d, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
      return i;
    }, h.setRatio = function(t) {
      var e, i, s, r = this._firstPT, n = 1e-6;
      if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime) for (;r; ) {
        if (e = r.c * t + r.s, r.r ? e = Math.round(e) :n > e && e > -n && (e = 0), r.type) if (1 === r.type) if (2 === (s = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2; else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3; else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4; else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5; else {
          for (i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
          r.t[r.p] = i;
        } else -1 === r.type ? r.t[r.p] = r.xs0 :r.setRatio && r.setRatio(t); else r.t[r.p] = e + r.xs0;
        r = r._next;
      } else for (;r; ) 2 !== r.type ? r.t[r.p] = r.b :r.setRatio(t), r = r._next; else for (;r; ) {
        if (2 !== r.type) if (r.r && -1 !== r.type) if (e = Math.round(r.s + r.c), r.type) {
          if (1 === r.type) {
            for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
            r.t[r.p] = i;
          }
        } else r.t[r.p] = e + r.xs0; else r.t[r.p] = r.e; else r.setRatio(t);
        r = r._next;
      }
    }, h._enableTransforms = function(t) {
      this._transform = this._transform || Bt(this._target, r, !0), this._transformType = this._transform.svg && kt || !t && 3 !== this._transformType ? 2 :3;
    };
    var Ht = function() {
      this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
    };
    h._addLazySet = function(t, e, i) {
      var s = this._firstPT = new gt(t, e, 0, 0, this._firstPT, 2);
      s.e = i, s.setRatio = Ht, s.data = this;
    }, h._linkCSSP = function(t, e, i, s) {
      return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next :this._firstPT === t && (this._firstPT = t._next, 
      s = !0), i ? i._next = t :s || null !== this._firstPT || (this._firstPT = t), t._next = e, 
      t._prev = i), t;
    }, h._kill = function(e) {
      var i, s, r, n = e;
      if (e.autoAlpha || e.alpha) {
        n = {};
        for (s in e) n[s] = e[s];
        n.opacity = 1, n.autoAlpha && (n.visibility = 1);
      }
      return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) :r === this._firstPT && (this._firstPT = i._next), 
      i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), 
      t.prototype._kill.call(this, n);
    };
    var Ut = function(t, e, i) {
      var s, r, n, o;
      if (t.slice) for (r = t.length; --r > -1; ) Ut(t[r], e, i); else for (s = t.childNodes, 
      r = s.length; --r > -1; ) n = s[r], o = n.type, n.style && (e.push(Z(n)), i && i.push(n)), 
      1 !== o && 9 !== o && 11 !== o || !n.childNodes.length || Ut(n, e, i);
    };
    return o.cascadeTo = function(t, i, s) {
      var r, n, o, a, l = e.to(t, i, s), h = [ l ], u = [], c = [], p = [], d = e._internals.reservedProps;
      for (t = l._targets || l.target, Ut(t, u, p), l.render(i, !0, !0), Ut(t, c), l.render(0, !0, !0), 
      l._enabled(!0), r = p.length; --r > -1; ) if (n = J(p[r], u[r], c[r]), n.firstMPT) {
        n = n.difs;
        for (o in s) d[o] && (n[o] = s[o]);
        a = {};
        for (o in n) a[o] = u[r][o];
        h.push(e.fromTo(p[r], i, a, n));
      }
      return h;
    }, t.activate([ o ]), o;
  }, !0), function() {
    var t = _gsScope._gsDefine.plugin({
      propName:"roundProps",
      version:"1.5",
      priority:-1,
      API:2,
      init:function(t, e, i) {
        return this._tween = i, !0;
      }
    }), e = function(t) {
      for (;t; ) t.f || t.blob || (t.r = 1), t = t._next;
    }, i = t.prototype;
    i._onInitAllProps = function() {
      for (var t, i, s, r = this._tween, n = r.vars.roundProps.join ? r.vars.roundProps :r.vars.roundProps.split(","), o = n.length, a = {}, l = r._propLookup.roundProps; --o > -1; ) a[n[o]] = 1;
      for (o = n.length; --o > -1; ) for (t = n[o], i = r._firstPT; i; ) s = i._next, 
      i.pg ? i.t._roundProps(a, !0) :i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) :(this._add(i.t, t, i.s, i.c), 
      s && (s._prev = i._prev), i._prev ? i._prev._next = s :r._firstPT === i && (r._firstPT = s), 
      i._next = i._prev = null, r._propLookup[t] = l)), i = s;
      return !1;
    }, i._add = function(t, e, i, s) {
      this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e);
    };
  }(), function() {
    _gsScope._gsDefine.plugin({
      propName:"attr",
      API:2,
      version:"0.5.0",
      init:function(t, e) {
        var i;
        if ("function" != typeof t.setAttribute) return !1;
        for (i in e) this._addTween(t, "setAttribute", t.getAttribute(i) + "", e[i] + "", i, !1, i), 
        this._overwriteProps.push(i);
        return !0;
      }
    });
  }(), _gsScope._gsDefine.plugin({
    propName:"directionalRotation",
    version:"0.2.1",
    API:2,
    init:function(t, e) {
      "object" != typeof e && (e = {
        rotation:e
      }), this.finals = {};
      var i, s, r, n, o, a, l = !0 === e.useRadians ? 2 * Math.PI :360, h = 1e-6;
      for (i in e) "useRadians" !== i && (a = (e[i] + "").split("_"), s = a[0], r = parseFloat("function" != typeof t[i] ? t[i] :t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i :"get" + i.substr(3)]()), 
      n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) :Number(s) || 0, 
      o = n - r, a.length && (s = a.join("_"), -1 !== s.indexOf("short") && (o %= l) !== o % (l / 2) && (o = 0 > o ? o + l :o - l), 
      -1 !== s.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (o / l | 0) * l :-1 !== s.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (o / l | 0) * l)), 
      (o > h || -h > o) && (this._addTween(t, i, r, r + o, i), this._overwriteProps.push(i)));
      return !0;
    },
    set:function(t) {
      var e;
      if (1 !== t) this._super.setRatio.call(this, t); else for (e = this._firstPT; e; ) e.f ? e.t[e.p](this.finals[e.p]) :e.t[e.p] = this.finals[e.p], 
      e = e._next;
    }
  })._autoCSS = !0, _gsScope._gsDefine("easing.Back", [ "easing.Ease" ], function(t) {
    var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope, n = r.com.greensock, o = 2 * Math.PI, a = Math.PI / 2, l = n._class, h = function(e, i) {
      var s = l("easing." + e, function() {}, !0), r = s.prototype = new t();
      return r.constructor = s, r.getRatio = i, s;
    }, u = t.register || function() {}, c = function(t, e, i, s) {
      var r = l("easing." + t, {
        easeOut:new e(),
        easeIn:new i(),
        easeInOut:new s()
      }, !0);
      return u(r, t), r;
    }, p = function(t, e, i) {
      this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t);
    }, d = function(e, i) {
      var s = l("easing." + e, function(t) {
        this._p1 = t || 0 === t ? t :1.70158, this._p2 = 1.525 * this._p1;
      }, !0), r = s.prototype = new t();
      return r.constructor = s, r.getRatio = i, r.config = function(t) {
        return new s(t);
      }, s;
    }, f = c("Back", d("BackOut", function(t) {
      return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
    }), d("BackIn", function(t) {
      return t * t * ((this._p1 + 1) * t - this._p1);
    }), d("BackInOut", function(t) {
      return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) :.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
    })), g = l("easing.SlowMo", function(t, e, i) {
      e = e || 0 === e ? e :.7, null == t ? t = .7 :t > 1 && (t = 1), this._p = 1 !== t ? e :0, 
      this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i;
    }, !0), m = g.prototype = new t();
    return m.constructor = g, m.getRatio = function(t) {
      var e = t + (.5 - t) * this._p;
      return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t :e - (t = 1 - t / this._p1) * t * t * t * e :t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t :e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t :this._calcEnd ? 1 :e;
    }, g.ease = new g(.7, .7), m.config = g.config = function(t, e, i) {
      return new g(t, e, i);
    }, e = l("easing.SteppedEase", function(t) {
      t = t || 1, this._p1 = 1 / t, this._p2 = t + 1;
    }, !0), m = e.prototype = new t(), m.constructor = e, m.getRatio = function(t) {
      return 0 > t ? t = 0 :t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1;
    }, m.config = e.config = function(t) {
      return new e(t);
    }, i = l("easing.RoughEase", function(e) {
      e = e || {};
      for (var i, s, r, n, o, a, l = e.taper || "none", h = [], u = 0, c = 0 | (e.points || 20), d = c, f = !1 !== e.randomize, g = !0 === e.clamp, m = e.template instanceof t ? e.template :null, y = "number" == typeof e.strength ? .4 * e.strength :.4; --d > -1; ) i = f ? Math.random() :1 / c * d, 
      s = m ? m.getRatio(i) :i, "none" === l ? r = y :"out" === l ? (n = 1 - i, r = n * n * y) :"in" === l ? r = i * i * y :.5 > i ? (n = 2 * i, 
      r = n * n * .5 * y) :(n = 2 * (1 - i), r = n * n * .5 * y), f ? s += Math.random() * r - .5 * r :d % 2 ? s += .5 * r :s -= .5 * r, 
      g && (s > 1 ? s = 1 :0 > s && (s = 0)), h[u++] = {
        x:i,
        y:s
      };
      for (h.sort(function(t, e) {
        return t.x - e.x;
      }), a = new p(1, 1, null), d = c; --d > -1; ) o = h[d], a = new p(o.x, o.y, a);
      this._prev = new p(0, 0, 0 !== a.t ? a :a.next);
    }, !0), m = i.prototype = new t(), m.constructor = i, m.getRatio = function(t) {
      var e = this._prev;
      if (t > e.t) {
        for (;e.next && t >= e.t; ) e = e.next;
        e = e.prev;
      } else for (;e.prev && t <= e.t; ) e = e.prev;
      return this._prev = e, e.v + (t - e.t) / e.gap * e.c;
    }, m.config = function(t) {
      return new i(t);
    }, i.ease = new i(), c("Bounce", h("BounceOut", function(t) {
      return 1 / 2.75 > t ? 7.5625 * t * t :2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 :2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 :7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    }), h("BounceIn", function(t) {
      return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t :2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) :2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) :1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
    }), h("BounceInOut", function(t) {
      var e = .5 > t;
      return t = e ? 1 - 2 * t :2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t :2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 :2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 :7.5625 * (t -= 2.625 / 2.75) * t + .984375, 
      e ? .5 * (1 - t) :.5 * t + .5;
    })), c("Circ", h("CircOut", function(t) {
      return Math.sqrt(1 - (t -= 1) * t);
    }), h("CircIn", function(t) {
      return -(Math.sqrt(1 - t * t) - 1);
    }), h("CircInOut", function(t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) :.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    })), s = function(e, i, s) {
      var r = l("easing." + e, function(t, e) {
        this._p1 = t >= 1 ? t :1, this._p2 = (e || s) / (1 > t ? t :1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), 
        this._p2 = o / this._p2;
      }, !0), n = r.prototype = new t();
      return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
        return new r(t, e);
      }, r;
    }, c("Elastic", s("ElasticOut", function(t) {
      return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1;
    }, .3), s("ElasticIn", function(t) {
      return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2);
    }, .3), s("ElasticInOut", function(t) {
      return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 :this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1;
    }, .45)), c("Expo", h("ExpoOut", function(t) {
      return 1 - Math.pow(2, -10 * t);
    }), h("ExpoIn", function(t) {
      return Math.pow(2, 10 * (t - 1)) - .001;
    }), h("ExpoInOut", function(t) {
      return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) :.5 * (2 - Math.pow(2, -10 * (t - 1)));
    })), c("Sine", h("SineOut", function(t) {
      return Math.sin(t * a);
    }), h("SineIn", function(t) {
      return 1 - Math.cos(t * a);
    }), h("SineInOut", function(t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    })), l("easing.EaseLookup", {
      find:function(e) {
        return t.map[e];
      }
    }, !0), u(r.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), 
    f;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function(t, e) {
  "use strict";
  var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
  if (!i.TweenLite) {
    var s, r, n, o, a, l = function(t) {
      var e, s = t.split("."), r = i;
      for (e = 0; e < s.length; e++) r[s[e]] = r = r[s[e]] || {};
      return r;
    }, h = l("com.greensock"), u = 1e-10, c = function(t) {
      var e, i = [], s = t.length;
      for (e = 0; e !== s; i.push(t[e++])) ;
      return i;
    }, p = function() {}, d = function() {
      var t = Object.prototype.toString, e = t.call([]);
      return function(i) {
        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e);
      };
    }(), f = {}, g = function(s, r, n, o) {
      this.sc = f[s] ? f[s].sc :[], f[s] = this, this.gsClass = null, this.func = n;
      var a = [];
      this.check = function(h) {
        for (var u, c, p, d, m, y = r.length, _ = y; --y > -1; ) (u = f[r[y]] || new g(r[y], [])).gsClass ? (a[y] = u.gsClass, 
        _--) :h && u.sc.push(this);
        if (0 === _ && n) for (c = ("com.greensock." + s).split("."), p = c.pop(), d = l(c.join("."))[p] = this.gsClass = n.apply(n, a), 
        o && (i[p] = d, m = "undefined" != typeof module && module.exports, !m && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" :"") + s.split(".").pop(), [], function() {
          return d;
        }) :s === e && m && (module.exports = d)), y = 0; y < this.sc.length; y++) this.sc[y].check();
      }, this.check(!0);
    }, m = t._gsDefine = function(t, e, i, s) {
      return new g(t, e, i, s);
    }, y = h._class = function(t, e, i) {
      return e = e || function() {}, m(t, [], function() {
        return e;
      }, i), e;
    };
    m.globals = i;
    var _ = [ 0, 0, 1, 1 ], v = [], b = y("easing.Ease", function(t, e, i, s) {
      this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? _.concat(e) :_;
    }, !0), w = b.map = {}, k = b.register = function(t, e, i, s) {
      for (var r, n, o, a, l = e.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1; ) for (n = l[u], 
      r = s ? y("easing." + n, null, !0) :h.easing[n] || {}, o = c.length; --o > -1; ) a = c[o], 
      w[n + "." + a] = w[a + n] = r[a] = t.getRatio ? t :t[a] || new t();
    };
    for (n = b.prototype, n._calcEnd = !1, n.getRatio = function(t) {
      if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
      var e = this._type, i = this._power, s = 1 === e ? 1 - t :2 === e ? t :.5 > t ? 2 * t :2 * (1 - t);
      return 1 === i ? s *= s :2 === i ? s *= s * s :3 === i ? s *= s * s * s :4 === i && (s *= s * s * s * s), 
      1 === e ? 1 - s :2 === e ? s :.5 > t ? s / 2 :1 - s / 2;
    }, s = [ "Linear", "Quad", "Cubic", "Quart", "Quint,Strong" ], r = s.length; --r > -1; ) n = s[r] + ",Power" + r, 
    k(new b(null, null, 1, r), n, "easeOut", !0), k(new b(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" :"")), 
    k(new b(null, null, 3, r), n, "easeInOut");
    w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
    var T = y("events.EventDispatcher", function(t) {
      this._listeners = {}, this._eventTarget = t || this;
    });
    n = T.prototype, n.addEventListener = function(t, e, i, s, r) {
      r = r || 0;
      var n, l, h = this._listeners[t], u = 0;
      for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1; ) n = h[l], 
      n.c === e && n.s === i ? h.splice(l, 1) :0 === u && n.pr < r && (u = l + 1);
      h.splice(u, 0, {
        c:e,
        s:i,
        up:s,
        pr:r
      }), this !== o || a || o.wake();
    }, n.removeEventListener = function(t, e) {
      var i, s = this._listeners[t];
      if (s) for (i = s.length; --i > -1; ) if (s[i].c === e) return void s.splice(i, 1);
    }, n.dispatchEvent = function(t) {
      var e, i, s, r = this._listeners[t];
      if (r) for (e = r.length, i = this._eventTarget; --e > -1; ) (s = r[e]) && (s.up ? s.c.call(s.s || i, {
        type:t,
        target:i
      }) :s.c.call(s.s || i));
    };
    var C = t.requestAnimationFrame, S = t.cancelAnimationFrame, x = Date.now || function() {
      return new Date().getTime();
    }, P = x();
    for (s = [ "ms", "moz", "webkit", "o" ], r = s.length; --r > -1 && !C; ) C = t[s[r] + "RequestAnimationFrame"], 
    S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
    y("Ticker", function(t, e) {
      var i, s, r, n, l, h = this, c = x(), d = !(!1 === e || !C) && "auto", f = 500, g = 33, m = "tick", y = function(t) {
        var e, o, a = x() - P;
        a > f && (c += a - g), P += a, h.time = (P - c) / 1e3, e = h.time - l, (!i || e > 0 || !0 === t) && (h.frame++, 
        l += e + (e >= n ? .004 :n - e), o = !0), !0 !== t && (r = s(y)), o && h.dispatchEvent(m);
      };
      T.call(h), h.time = h.frame = 0, h.tick = function() {
        y(!0);
      }, h.lagSmoothing = function(t, e) {
        f = t || 1 / u, g = Math.min(e, f, 0);
      }, h.sleep = function() {
        null != r && (d && S ? S(r) :clearTimeout(r), s = p, r = null, h === o && (a = !1));
      }, h.wake = function(t) {
        null !== r ? h.sleep() :t ? c += -P + (P = x()) :h.frame > 10 && (P = x() - f + 5), 
        s = 0 === i ? p :d && C ? C :function(t) {
          return setTimeout(t, 1e3 * (l - h.time) + 1 | 0);
        }, h === o && (a = !0), y(2);
      }, h.fps = function(t) {
        return arguments.length ? (i = t, n = 1 / (i || 60), l = this.time + n, void h.wake()) :i;
      }, h.useRAF = function(t) {
        return arguments.length ? (h.sleep(), d = t, void h.fps(i)) :d;
      }, h.fps(t), setTimeout(function() {
        "auto" === d && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1);
      }, 1500);
    }), n = h.Ticker.prototype = new h.events.EventDispatcher(), n.constructor = h.Ticker;
    var $ = y("core.Animation", function(t, e) {
      if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, 
      this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, 
      this._reversed = !0 === e.reversed, Q) {
        a || o.wake();
        var i = this.vars.useFrames ? W :Q;
        i.add(this, i._time), this.vars.paused && this.paused(!0);
      }
    });
    o = $.ticker = new h.Ticker(), n = $.prototype, n._dirty = n._gc = n._initted = n._paused = !1, 
    n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, 
    n._paused = !1;
    var D = function() {
      a && x() - P > 2e3 && o.wake(), setTimeout(D, 2e3);
    };
    D(), n.play = function(t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, n.pause = function(t, e) {
      return null != t && this.seek(t, e), this.paused(!0);
    }, n.resume = function(t, e) {
      return null != t && this.seek(t, e), this.paused(!1);
    }, n.seek = function(t, e) {
      return this.totalTime(Number(t), !1 !== e);
    }, n.restart = function(t, e) {
      return this.reversed(!1).paused(!1).totalTime(t ? -this._delay :0, !1 !== e, !0);
    }, n.reverse = function(t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, n.render = function() {}, n.invalidate = function() {
      return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, 
      (this._gc || !this.timeline) && this._enabled(!0), this;
    }, n.isActive = function() {
      var t, e = this._timeline, i = this._startTime;
      return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale;
    }, n._enabled = function(t, e) {
      return a || o.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) :!t && this.timeline && this._timeline._remove(this, !0)), 
      !1;
    }, n._kill = function() {
      return this._enabled(!1, !1);
    }, n.kill = function(t, e) {
      return this._kill(t, e), this;
    }, n._uncache = function(t) {
      for (var e = t ? this :this.timeline; e; ) e._dirty = !0, e = e.timeline;
      return this;
    }, n._swapSelfInParams = function(t) {
      for (var e = t.length, i = t.concat(); --e > -1; ) "{self}" === t[e] && (i[e] = this);
      return i;
    }, n._callback = function(t) {
      var e = this.vars;
      e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || v);
    }, n.eventCallback = function(t, e, i, s) {
      if ("on" === (t || "").substr(0, 2)) {
        var r = this.vars;
        if (1 === arguments.length) return r[t];
        null == e ? delete r[t] :(r[t] = e, r[t + "Params"] = d(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) :i, 
        r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e);
      }
      return this;
    }, n.delay = function(t) {
      return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), 
      this._delay = t, this) :this._delay;
    }, n.duration = function(t) {
      return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), 
      this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), 
      this) :(this._dirty = !1, this._duration);
    }, n.totalDuration = function(t) {
      return this._dirty = !1, arguments.length ? this.duration(t) :this._totalDuration;
    }, n.time = function(t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration :t, e)) :this._time;
    }, n.totalTime = function(t, e, i) {
      if (a || o.wake(), !arguments.length) return this._totalTime;
      if (this._timeline) {
        if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
          this._dirty && this.totalDuration();
          var s = this._totalDuration, r = this._timeline;
          if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime :r._time) - (this._reversed ? s - t :t) / this._timeScale, 
          r._dirty || this._uncache(!1), r._timeline) for (;r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), 
          r = r._timeline;
        }
        this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (R.length && K(), 
        this.render(t, e, !1), R.length && K());
      }
      return this;
    }, n.progress = n.totalProgress = function(t, e) {
      var i = this.duration();
      return arguments.length ? this.totalTime(i * t, e) :i ? this._time / i :this.ratio;
    }, n.startTime = function(t) {
      return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), 
      this) :this._startTime;
    }, n.endTime = function(t) {
      return this._startTime + (0 != t ? this.totalDuration() :this.duration()) / this._timeScale;
    }, n.timeScale = function(t) {
      if (!arguments.length) return this._timeScale;
      if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
        var e = this._pauseTime, i = e || 0 === e ? e :this._timeline.totalTime();
        this._startTime = i - (i - this._startTime) * this._timeScale / t;
      }
      return this._timeScale = t, this._uncache(!1);
    }, n.reversed = function(t) {
      return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime :this._totalTime, !0)), 
      this) :this._reversed;
    }, n.paused = function(t) {
      if (!arguments.length) return this._paused;
      var e, i, s = this._timeline;
      return t != this._paused && s && (a || t || o.wake(), e = s.rawTime(), i = e - this._pauseTime, 
      !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e :null, 
      this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime :(e - this._startTime) / this._timeScale, 
      this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), 
      this;
    };
    var F = y("core.SimpleTimeline", function(t) {
      $.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0;
    });
    n = F.prototype = new $(), n.constructor = F, n.kill()._gc = !1, n._first = n._last = n._recent = null, 
    n._sortChildren = !1, n.add = n.insert = function(t, e) {
      var i, s;
      if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), 
      t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), 
      i = this._last, this._sortChildren) for (s = t._startTime; i && i._startTime > s; ) i = i._prev;
      return i ? (t._next = i._next, i._next = t) :(t._next = this._first, this._first = t), 
      t._next ? t._next._prev = t :this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), 
      this;
    }, n._remove = function(t, e) {
      return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next :this._first === t && (this._first = t._next), 
      t._next ? t._next._prev = t._prev :this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, 
      t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), 
      this;
    }, n.render = function(t, e, i) {
      var s, r = this._first;
      for (this._totalTime = this._time = this._rawPrevTime = t; r; ) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() :r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) :r.render((t - r._startTime) * r._timeScale, e, i)), 
      r = s;
    }, n.rawTime = function() {
      return a || o.wake(), this._totalTime;
    };
    var E = y("TweenLite", function(e, i, s) {
      if ($.call(this, i, s), this.render = E.prototype.render, null == e) throw "Cannot tween a null target.";
      this.target = e = "string" != typeof e ? e :E.selector(e) || e;
      var r, n, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
      if (this._overwrite = l = null == l ? U[E.defaultOverwrite] :"number" == typeof l ? l >> 0 :U[l], 
      (a || e instanceof Array || e.push && d(e)) && "number" != typeof e[0]) for (this._targets = o = c(e), 
      this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++) n = o[r], 
      n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (o.splice(r--, 1), 
      this._targets = o = o.concat(c(n))) :(this._siblings[r] = Y(n, this, !1), 1 === l && this._siblings[r].length > 1 && Z(n, this, null, 1, this._siblings[r])) :"string" == typeof (n = o[r--] = E.selector(n)) && o.splice(r + 1, 1) :o.splice(r--, 1); else this._propLookup = {}, 
      this._siblings = Y(e, this, !1), 1 === l && this._siblings.length > 1 && Z(e, this, null, 1, this._siblings);
      (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -u, 
      this.render(-this._delay));
    }, !0), A = function(e) {
      return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType);
    }, O = function(t, e) {
      var i, s = {};
      for (i in t) H[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!V[i] || V[i] && V[i]._autoCSS) || (s[i] = t[i], 
      delete t[i]);
      t.css = s;
    };
    n = E.prototype = new $(), n.constructor = E, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, 
    n._notifyPluginsOfEnabled = n._lazy = !1, E.version = "1.18.2", E.defaultEase = n._ease = new b(null, null, 1, 1), 
    E.defaultOverwrite = "auto", E.ticker = o, E.autoSleep = 120, E.lagSmoothing = function(t, e) {
      o.lagSmoothing(t, e);
    }, E.selector = t.$ || t.jQuery || function(e) {
      var i = t.$ || t.jQuery;
      return i ? (E.selector = i, i(e)) :"undefined" == typeof document ? e :document.querySelectorAll ? document.querySelectorAll(e) :document.getElementById("#" === e.charAt(0) ? e.substr(1) :e);
    };
    var R = [], z = {}, I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, B = function(t) {
      for (var e, i = this._firstPT, s = 1e-6; i; ) e = i.blob ? t ? this.join("") :this.start :i.c * t + i.s, 
      i.r ? e = Math.round(e) :s > e && e > -s && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) :i.t[i.p](e) :i.t[i.p] = e, 
      i = i._next;
    }, M = function(t, e, i, s) {
      var r, n, o, a, l, h, u, c = [ t, e ], p = 0, d = "", f = 0;
      for (c.start = t, i && (i(c), t = c[0], e = c[1]), c.length = 0, r = t.match(I) || [], 
      n = e.match(I) || [], s && (s._next = null, s.blob = 1, c._firstPT = s), l = n.length, 
      a = 0; l > a; a++) u = n[a], h = e.substr(p, e.indexOf(u, p) - p), d += h || !a ? h :",", 
      p += h.length, f ? f = (f + 1) % 5 :"rgba(" === h.substr(-5) && (f = 1), u === r[a] || r.length <= a ? d += u :(d && (c.push(d), 
      d = ""), o = parseFloat(r[a]), c.push(o), c._firstPT = {
        _next:c._firstPT,
        t:c,
        p:c.length - 1,
        s:o,
        c:("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) :parseFloat(u) - o) || 0,
        f:0,
        r:f && 4 > f
      }), p += u.length;
      return d += e.substr(p), d && c.push(d), c.setRatio = B, c;
    }, q = function(t, e, i, s, r, n, o, a) {
      var l, h, u = "get" === i ? t[e] :i, c = typeof t[e], p = "string" == typeof s && "=" === s.charAt(1), d = {
        t:t,
        p:e,
        s:u,
        f:"function" === c,
        pg:0,
        n:r || e,
        r:n,
        pr:0,
        c:p ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) :parseFloat(s) - u || 0
      };
      return "number" !== c && ("function" === c && "get" === i && (h = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e :"get" + e.substr(3), 
      d.s = u = o ? t[h](o) :t[h]()), "string" == typeof u && (o || isNaN(u)) ? (d.fp = o, 
      l = M(u, s, a || E.defaultStringFilter, d), d = {
        t:l,
        p:"setRatio",
        s:0,
        c:1,
        f:2,
        pg:0,
        n:r || e,
        pr:0
      }) :p || (d.s = parseFloat(u), d.c = parseFloat(s) - d.s || 0)), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), 
      this._firstPT = d, d) :void 0;
    }, L = E._internals = {
      isArray:d,
      isSelector:A,
      lazyTweens:R,
      blobDif:M
    }, V = E._plugins = {}, j = L.tweenLookup = {}, N = 0, H = L.reservedProps = {
      ease:1,
      delay:1,
      overwrite:1,
      onComplete:1,
      onCompleteParams:1,
      onCompleteScope:1,
      useFrames:1,
      runBackwards:1,
      startAt:1,
      onUpdate:1,
      onUpdateParams:1,
      onUpdateScope:1,
      onStart:1,
      onStartParams:1,
      onStartScope:1,
      onReverseComplete:1,
      onReverseCompleteParams:1,
      onReverseCompleteScope:1,
      onRepeat:1,
      onRepeatParams:1,
      onRepeatScope:1,
      easeParams:1,
      yoyo:1,
      immediateRender:1,
      repeat:1,
      repeatDelay:1,
      data:1,
      paused:1,
      reversed:1,
      autoCSS:1,
      lazy:1,
      onOverwrite:1,
      callbackScope:1,
      stringFilter:1
    }, U = {
      none:0,
      all:1,
      auto:2,
      concurrent:3,
      allOnStart:4,
      preexisting:5,
      "true":1,
      "false":0
    }, W = $._rootFramesTimeline = new F(), Q = $._rootTimeline = new F(), X = 30, K = L.lazyRender = function() {
      var t, e = R.length;
      for (z = {}; --e > -1; ) (t = R[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), 
      t._lazy = !1);
      R.length = 0;
    };
    Q._startTime = o.time, W._startTime = o.frame, Q._active = W._active = !0, setTimeout(K, 1), 
    $._updateRoot = E.render = function() {
      var t, e, i;
      if (R.length && K(), Q.render((o.time - Q._startTime) * Q._timeScale, !1, !1), W.render((o.frame - W._startTime) * W._timeScale, !1, !1), 
      R.length && K(), o.frame >= X) {
        X = o.frame + (parseInt(E.autoSleep, 10) || 120);
        for (i in j) {
          for (e = j[i].tweens, t = e.length; --t > -1; ) e[t]._gc && e.splice(t, 1);
          0 === e.length && delete j[i];
        }
        if ((!(i = Q._first) || i._paused) && E.autoSleep && !W._first && 1 === o._listeners.tick.length) {
          for (;i && i._paused; ) i = i._next;
          i || o.sleep();
        }
      }
    }, o.addEventListener("tick", $._updateRoot);
    var Y = function(t, e, i) {
      var s, r, n = t._gsTweenID;
      if (j[n || (t._gsTweenID = n = "t" + N++)] || (j[n] = {
        target:t,
        tweens:[]
      }), e && (s = j[n].tweens, s[r = s.length] = e, i)) for (;--r > -1; ) s[r] === e && s.splice(r, 1);
      return j[n].tweens;
    }, G = function(t, e, i, s) {
      var r, n, o = t.vars.onOverwrite;
      return o && (r = o(t, e, i, s)), o = E.onOverwrite, o && (n = o(t, e, i, s)), !1 !== r && !1 !== n;
    }, Z = function(t, e, i, s, r) {
      var n, o, a, l;
      if (1 === s || s >= 4) {
        for (l = r.length, n = 0; l > n; n++) if ((a = r[n]) !== e) a._gc || a._kill(null, t, e) && (o = !0); else if (5 === s) break;
        return o;
      }
      var h, c = e._startTime + u, p = [], d = 0, f = 0 === e._duration;
      for (n = r.length; --n > -1; ) (a = r[n]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || J(e, 0, f), 
      0 === J(a, h, f) && (p[d++] = a)) :a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((f || !a._initted) && c - a._startTime <= 2e-10 || (p[d++] = a)));
      for (n = d; --n > -1; ) if (a = p[n], 2 === s && a._kill(i, t, e) && (o = !0), 2 !== s || !a._firstPT && a._initted) {
        if (2 !== s && !G(a, e)) continue;
        a._enabled(!1, !1) && (o = !0);
      }
      return o;
    }, J = function(t, e, i) {
      for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline; ) {
        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
        s = s._timeline;
      }
      return n /= r, n > e ? n - e :i && n === e || !t._initted && 2 * u > n - e ? u :(n += t.totalDuration() / t._timeScale / r) > e + u ? 0 :n - e - u;
    };
    n._init = function() {
      var t, e, i, s, r, n = this.vars, o = this._overwrittenProps, a = this._duration, l = !!n.immediateRender, h = n.ease;
      if (n.startAt) {
        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
        for (s in n.startAt) r[s] = n.startAt[s];
        if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && !1 !== n.lazy, r.startAt = r.delay = null, 
        this._startAt = E.to(this.target, 0, r), l) if (this._time > 0) this._startAt = null; else if (0 !== a) return;
      } else if (n.runBackwards && 0 !== a) if (this._startAt) this._startAt.render(-1, !0), 
      this._startAt.kill(), this._startAt = null; else {
        0 !== this._time && (l = !1), i = {};
        for (s in n) H[s] && "autoCSS" !== s || (i[s] = n[s]);
        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && !1 !== n.lazy, i.immediateRender = l, 
        this._startAt = E.to(this.target, 0, i), l) {
          if (0 === this._time) return;
        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
      }
      if (this._ease = h = h ? h instanceof b ? h :"function" == typeof h ? new b(h, n.easeParams) :w[h] || E.defaultEase :E.defaultEase, 
      n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), 
      this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, 
      this._targets) for (t = this._targets.length; --t > -1; ) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] :null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, o);
      if (e && E._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), 
      n.runBackwards) for (i = this._firstPT; i; ) i.s += i.c, i.c = -i.c, i = i._next;
      this._onUpdate = n.onUpdate, this._initted = !0;
    }, n._initProps = function(e, i, s, r) {
      var n, o, a, l, h, u;
      if (null == e) return !1;
      z[e._gsTweenID] && K(), this.vars.css || e.style && e !== t && e.nodeType && V.css && !1 !== this.vars.autoCSS && O(this.vars, e);
      for (n in this.vars) if (u = this.vars[n], H[n]) u && (u instanceof Array || u.push && d(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[n] = u = this._swapSelfInParams(u, this)); else if (V[n] && (l = new V[n]())._onInitTween(e, this.vars[n], this)) {
        for (this._firstPT = h = {
          _next:this._firstPT,
          t:l,
          p:"setRatio",
          s:0,
          c:1,
          f:1,
          n:n,
          pg:1,
          pr:l._priority
        }, o = l._overwriteProps.length; --o > -1; ) i[l._overwriteProps[o]] = this._firstPT;
        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), 
        h._next && (h._next._prev = h);
      } else i[n] = q.call(this, e, n, "get", u, n, 0, null, this.vars.stringFilter);
      return r && this._kill(r, e) ? this._initProps(e, i, s, r) :this._overwrite > 1 && this._firstPT && s.length > 1 && Z(e, this, i, this._overwrite, s) ? (this._kill(i, e), 
      this._initProps(e, i, s, r)) :(this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (z[e._gsTweenID] = !0), 
      a);
    }, n.render = function(t, e, i) {
      var s, r, n, o, a = this._time, l = this._duration, h = this._rawPrevTime;
      if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) :1, 
      this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 
      0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), 
      (0 > h || 0 >= t && t >= -1e-7 || h === u && "isPause" !== this.data) && h !== t && (i = !0, 
      h > u && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t :u); else if (1e-7 > t) this._totalTime = this._time = 0, 
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) :0, (0 !== a || 0 === l && h > 0) && (r = "onReverseComplete", 
      s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), 
      this._rawPrevTime = o = !e || t || h === t ? t :u)), this._initted || (i = !0); else if (this._totalTime = this._time = t, 
      this._easeType) {
        var c = t / l, p = this._easeType, d = this._easePower;
        (1 === p || 3 === p && c >= .5) && (c = 1 - c), 3 === p && (c *= 2), 1 === d ? c *= c :2 === d ? c *= c * c :3 === d ? c *= c * c * c :4 === d && (c *= c * c * c * c), 
        this.ratio = 1 === p ? 1 - c :2 === p ? c :.5 > t / l ? c / 2 :1 - c / 2;
      } else this.ratio = this._ease.getRatio(t / l);
      if (this._time !== a || i) {
        if (!this._initted) {
          if (this._init(), !this._initted || this._gc) return;
          if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, 
          this._rawPrevTime = h, R.push(this), void (this._lazy = [ t, e ]);
          this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) :s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 :1));
        }
        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 
        0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) :r || (r = "_dummyGS")), 
        this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), 
        n = this._firstPT; n; ) n.f ? n.t[n.p](n.c * this.ratio + n.s) :n.t[n.p] = n.c * this.ratio + n.s, 
        n = n._next;
        this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), 
        e || (this._time !== a || s) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), 
        s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), 
        !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === u && o !== u && (this._rawPrevTime = 0));
      }
    }, n._kill = function(t, e, i) {
      if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, 
      this._enabled(!1, !1);
      e = "string" != typeof e ? e || this._targets || this.target :E.selector(e) || e;
      var s, r, n, o, a, l, h, u, c, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
      if ((d(e) || A(e)) && "number" != typeof e[0]) for (s = e.length; --s > -1; ) this._kill(t, e[s], i) && (l = !0); else {
        if (this._targets) {
          for (s = this._targets.length; --s > -1; ) if (e === this._targets[s]) {
            a = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], 
            r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} :"all";
            break;
          }
        } else {
          if (e !== this.target) return !1;
          a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} :"all";
        }
        if (a) {
          if (h = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), 
          i && (E.onOverwrite || this.vars.onOverwrite)) {
            for (n in h) a[n] && (c || (c = []), c.push(n));
            if ((c || !t) && !G(this, i, e, c)) return !1;
          }
          for (n in h) (o = a[n]) && (p && (o.f ? o.t[o.p](o.s) :o.t[o.p] = o.s, l = !0), 
          o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next :o === this._firstPT && (this._firstPT = o._next), 
          o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[n]), u && (r[n] = 1);
          !this._firstPT && this._initted && this._enabled(!1, !1);
        }
      }
      return l;
    }, n.invalidate = function() {
      return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, 
      this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} :[], 
      $.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, 
      this.render(-this._delay)), this;
    }, n._enabled = function(t, e) {
      if (a || o.wake(), t && this._gc) {
        var i, s = this._targets;
        if (s) for (i = s.length; --i > -1; ) this._siblings[i] = Y(s[i], this, !0); else this._siblings = Y(this.target, this, !0);
      }
      return $.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && E._onPluginEvent(t ? "_onEnable" :"_onDisable", this);
    }, E.to = function(t, e, i) {
      return new E(t, e, i);
    }, E.from = function(t, e, i) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new E(t, e, i);
    }, E.fromTo = function(t, e, i, s) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, 
      new E(t, e, s);
    }, E.delayedCall = function(t, e, i, s, r) {
      return new E(e, 0, {
        delay:t,
        onComplete:e,
        onCompleteParams:i,
        callbackScope:s,
        onReverseComplete:e,
        onReverseCompleteParams:i,
        immediateRender:!1,
        lazy:!1,
        useFrames:r,
        overwrite:0
      });
    }, E.set = function(t, e) {
      return new E(t, 0, e);
    }, E.getTweensOf = function(t, e) {
      if (null == t) return [];
      t = "string" != typeof t ? t :E.selector(t) || t;
      var i, s, r, n;
      if ((d(t) || A(t)) && "number" != typeof t[0]) {
        for (i = t.length, s = []; --i > -1; ) s = s.concat(E.getTweensOf(t[i], e));
        for (i = s.length; --i > -1; ) for (n = s[i], r = i; --r > -1; ) n === s[r] && s.splice(i, 1);
      } else for (s = Y(t).concat(), i = s.length; --i > -1; ) (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
      return s;
    }, E.killTweensOf = E.killDelayedCallsTo = function(t, e, i) {
      "object" == typeof e && (i = e, e = !1);
      for (var s = E.getTweensOf(t, e), r = s.length; --r > -1; ) s[r]._kill(i, t);
    };
    var tt = y("plugins.TweenPlugin", function(t, e) {
      this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], 
      this._priority = e || 0, this._super = tt.prototype;
    }, !0);
    if (n = tt.prototype, tt.version = "1.18.0", tt.API = 2, n._firstPT = null, n._addTween = q, 
    n.setRatio = B, n._kill = function(t) {
      var e, i = this._overwriteProps, s = this._firstPT;
      if (null != t[this._propName]) this._overwriteProps = []; else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
      for (;s; ) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, 
      s._prev = null) :this._firstPT === s && (this._firstPT = s._next)), s = s._next;
      return !1;
    }, n._roundProps = function(t, e) {
      for (var i = this._firstPT; i; ) (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), 
      i = i._next;
    }, E._onPluginEvent = function(t, e) {
      var i, s, r, n, o, a = e._firstPT;
      if ("_onInitAllProps" === t) {
        for (;a; ) {
          for (o = a._next, s = r; s && s.pr > a.pr; ) s = s._next;
          (a._prev = s ? s._prev :n) ? a._prev._next = a :r = a, (a._next = s) ? s._prev = a :n = a, 
          a = o;
        }
        a = e._firstPT = r;
      }
      for (;a; ) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
      return i;
    }, tt.activate = function(t) {
      for (var e = t.length; --e > -1; ) t[e].API === tt.API && (V[new t[e]()._propName] = t[e]);
      return !0;
    }, m.plugin = function(t) {
      if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
      var e, i = t.propName, s = t.priority || 0, r = t.overwriteProps, n = {
        init:"_onInitTween",
        set:"setRatio",
        kill:"_kill",
        round:"_roundProps",
        initAll:"_onInitAllProps"
      }, o = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
        tt.call(this, i, s), this._overwriteProps = r || [];
      }, !0 === t.global), a = o.prototype = new tt(i);
      a.constructor = o, o.API = t.API;
      for (e in n) "function" == typeof t[e] && (a[n[e]] = t[e]);
      return o.version = t.version, tt.activate([ o ]), o;
    }, s = t._gsQueue) {
      for (r = 0; r < s.length; r++) s[r]();
      for (n in f) f[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n);
    }
    a = !1;
  }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global :this || window, "TweenMax");

var $pinata = $("#pinata-body"), pinataLeft, pinataTop, tween = TweenMax.from("#pinata", 3, {
  y:-50,
  ease:Elastic.easeOut
}), tl = new TimelineMax({
  repeat:-1
}), tweenEye = TweenMax.to(".pinata-eye", 10, {
  rotation:720,
  transformOrigin:"90% 55%",
  ease:Elastic.easeOut,
  paused:!0
});

tl.to("#pinata", .5, {
  transformOrigin:"center top",
  rotation:3,
  repeat:1,
  yoyo:!0,
  ease:Sine.easeOut
}).to("#pinata", .5, {
  transformOrigin:"center top",
  rotation:-3,
  repeat:1,
  yoyo:!0,
  ease:Sine.easeOut
}), $(".pinata-container").click(function(t) {
  function e() {
    tl.restart() ? tweenEye.restart() :tl.restart();
  }
  tl.pause(), tweenEye.restart() ? tweenEye.play() :tweenEye.restart();
  var i = $pinata.offset().top - t.pageY + 83, s = $pinata.offset().left - t.pageX + 83;
  TweenMax.to("#pinata", .5, {
    rotation:(i - s) / 3,
    repeat:1,
    yoyo:!0,
    ease:Circ.easeOut,
    paused:!0,
    onComplete:e
  }).play();
}), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("degrees-show", Treehouse.DegreesShow = function(i) {
    function s() {
      this.toggleCurriculum = t(this.toggleCurriculum, this), this.toggleProjects = t(this.toggleProjects, this), 
      this.onScroll = t(this.onScroll, this), this.onResize = t(this.onResize, this), 
      s.__super__.constructor.apply(this, arguments), this.document = $(document), this.window = $(window), 
      this.skillsSection = this.el.find("[data-section-skills]"), this.skillsSectionPosition = this.skillsSection.offset().top, 
      this.skillsSectionHeight = this.skillsSection.outerHeight(), this.topicCharts = this.el.find("[data-degree-topic-chart]"), 
      this.on("click", "[data-show-projects-button]", this.toggleProjects), this.on("click", "[data-project]", this.showProjectDescription), 
      this.on("click", "[data-show-curriculum-button]", this.toggleCurriculum), this.listenTo(this.document, "scroll", this.onScroll, {
        triggerImmediately:!0
      }), this.listenTo(this.window, "resize", this.onResize, {
        triggerImmediately:!0
      }), this.buildTopicDonuts();
    }
    return e(s, i), s.prototype.showProjectDescription = function(t) {
      var e;
      return e = $(t.currentTarget), e.addClass("card-description-show").siblings().removeClass("card-description-show"), 
      setTimeout(function() {
        return function() {
          return $("html, body").animate({
            scrollTop:e.offset().top - 90,
            600:600
          });
        };
      }(), 300);
    }, s.prototype.onResize = function() {
      return this.windowHeight = this.window.height();
    }, s.prototype.onScroll = function() {
      if (!this.classAdded && this.document.scrollTop() + this.windowHeight >= this.skillsSectionPosition + this.skillsSectionHeight) return this.skillsSection.addClass("animate-donuts"), 
      this.classAdded = !0;
    }, s.prototype.toggleProjects = function(t) {
      return t.preventDefault(), this.el.toggleClass("degrees-show-projects-show");
    }, s.prototype.toggleCurriculum = function(t) {
      return t.preventDefault(), this.el.toggleClass("degrees-show-stats-show");
    }, s.prototype.buildTopicDonuts = function() {
      var t;
      return t = _.map(this.skillsSection.data("topics"), function(t) {
        return {
          name:t.name,
          value:t.value,
          className:"add-" + t.slug + "-stroke"
        };
      }), $(t).each(function(t) {
        return function(e, i) {
          var s, r, n;
          return r = 8, s = 2 * r * e + 110, n = t.topicCharts.length - e - 1, new Chartist.Pie(t.topicCharts.get(n), {
            series:[ i, {
              name:"",
              value:100 - i.value,
              className:""
            } ]
          }, {
            height:s + "px",
            width:s + "px",
            high:100,
            low:0,
            donut:!0,
            donutWidth:0 === e ? r :r + 1,
            showLabel:!1,
            startAngle:15 * e,
            chartPadding:0
          }).on("draw", t.drawDonut);
        };
      }(this));
    }, s.prototype.drawDonut = function(t) {
      var e;
      if ("slice" === t.type) return e = t.element._node.getTotalLength(), t.element.attr({
        "stroke-dasharray":e + "px " + e + "px"
      }), t.element.attr({
        "stroke-dashoffset":-e + "px"
      });
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("degrees-pricing", Treehouse.DegreesPricing = function(i) {
    function s() {
      this.toggleTdTopicChoice = t(this.toggleTdTopicChoice, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", "[data-toggle-td-choice]", this.toggleTdTopicChoice);
    }
    return e(s, i), s.prototype.toggleTdTopicChoice = function(t) {
      return t.preventDefault(), this.get(".degrees-index-enroll-degrees").removeClass("hidden");
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s() {
      this.backToPlans = e(this.backToPlans, this), this.choosePlan = e(this.choosePlan, this), 
      s.__super__.constructor.apply(this, arguments), this.on("click", "[data-choose-plan]", this.choosePlan), 
      this.on("click", "[data-back-to-plans]", this.backToPlans);
    }
    return i(s, t), s.prototype.choosePlan = function(t) {
      var e, i;
      return t.preventDefault(), i = $(t.currentTarget), e = this.get(".degree-selection-" + i.data("choose-plan")), 
      this.get("#degrees-index-enroll").fadeOut(0, function() {
        return e.fadeIn(250);
      });
    }, s.prototype.backToPlans = function(t) {
      var e;
      return t.preventDefault(), e = this.get("#degrees-index-enroll"), this.get(".degrees-selection-panel").fadeOut(0, function() {
        return e.fadeIn(250);
      });
    }, s;
  }(Treehouse.View), Featurette.register("degree-plans", t);
}.call(this), function() {
  var t = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, e = function(t, e) {
    function s() {
      this.constructor = t;
    }
    for (var r in e) i.call(e, r) && (t[r] = e[r]);
    return s.prototype = e.prototype, t.prototype = new s(), t.__super__ = e.prototype, 
    t;
  }, i = {}.hasOwnProperty;
  Featurette.register("degree-selection", function(i) {
    function s() {
      this.selectDegree = t(this.selectDegree, this), s.__super__.constructor.apply(this, arguments), 
      this.on("click", ".degrees-index-enroll-degrees-button", this.selectDegree);
    }
    return e(s, i), s.prototype.selectDegree = function(t) {
      var e;
      return e = $(t.currentTarget), this.el.find(".selected").removeClass("selected"), 
      e.addClass("selected");
    }, s;
  }(Treehouse.View));
}.call(this), function() {
  var t, e = function(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }, i = function(t, e) {
    function i() {
      this.constructor = t;
    }
    for (var r in e) s.call(e, r) && (t[r] = e[r]);
    return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
    t;
  }, s = {}.hasOwnProperty;
  t = function(t) {
    function s(t) {
      this.collectSurveyData = e(this.collectSurveyData, this), this.redirectToSurvey = e(this.redirectToSurvey, this), 
      this.redirectToSignup = e(this.redirectToSignup, this), this.redirectAfterSubmit = e(this.redirectAfterSubmit, this), 
      this.submitSurveyData = e(this.submitSurveyData, this), this.onSkipSurvey = e(this.onSkipSurvey, this), 
      this.onCompleteSurvey = e(this.onCompleteSurvey, this), this.onHashChange = e(this.onHashChange, this), 
      this.nextStep = e(this.nextStep, this), this.onSelectAnswer = e(this.onSelectAnswer, this), 
      this.onFirstAnswer = e(this.onFirstAnswer, this), this.onBackClicked = e(this.onBackClicked, this), 
      this.listenToEvents = e(this.listenToEvents, this), s.__super__.constructor.call(this, t), 
      this.el.find(".next-step").addClass("disabled");
    }
    return i(s, t), s.prototype.listenToEvents = function() {
      return this.on("click", "[data-submit-survey]", this.onCompleteSurvey), this.on("click", "[data-back-button]", this.onBackClicked), 
      this.on("click", "[data-skip-survey]", this.onSkipSurvey), this.on("click", "[data-answer]", this.onSelectAnswer), 
      this.on("click", "[data-answer-first-question]", this.onFirstAnswer);
    }, s.prototype.onBackClicked = function() {
      if (this.currentStep !== this.initialStep) return s.__super__.onBackClicked.apply(this, arguments);
    }, s.prototype.onFirstAnswer = function(t) {
      var e;
      return e = $(t.currentTarget), $.ajax("/surveys/" + this.el.data("purpose") + "/answer_question", {
        data:{
          question_id:this.el.data("wizard-initial-step"),
          answer_id:e.data("answer-id")
        },
        type:"PUT",
        error:this.redirectToSurvey,
        success:this.redirectToSurvey
      });
    }, s.prototype.onSelectAnswer = function(t) {
      var e, i;
      return e = $(t.currentTarget), i = this.el.find(".next-step:visible"), i.data("step", e.data("step")), 
      i.data("answer-id", e.data("answer-id")), this.el.find(".survey-marketing-button").removeClass("disabled").addClass("button-primary"), 
      i.removeClass("disabled");
    }, s.prototype.nextStep = function() {
      return !this.el.find(".next-step:visible").hasClass("disabled") && s.__super__.nextStep.apply(this, arguments);
    }, s.prototype.onHashChange = function(t) {
      return t.preventDefault(), $("html,body").animate({
        scrollTop:0
      }), s.__super__.onHashChange.apply(this, arguments);
    }, s.prototype.onCompleteSurvey = function(t) {
      return t.preventDefault(), this.collectSurveyData(t), this.submitSurveyData("PUT", "/surveys/" + this.el.data("purpose") + "/complete");
    }, s.prototype.onSkipSurvey = function(t) {
      return t.preventDefault(), this.surveyData.skipped = !0, this.surveyData.step_skipped = $(t.currentTarget).closest(".step").data("step-skipped"), 
      this.submitSurveyData("PUT", "/surveys/" + this.el.data("purpose") + "/complete");
    }, s.prototype.submitSurveyData = function(t, e) {
      return $.ajax(e, {
        data:{
          survey_response:this.surveyData
        },
        type:t,
        error:this.redirectToSignup,
        success:this.redirectAfterSubmit
      });
    }, s.prototype.redirectAfterSubmit = function(t, e, i) {
      return this.signupLocation ? window.location = this.signupLocation :window.location = i.getResponseHeader("Location");
    }, s.prototype.redirectToSignup = function() {
      return this.signupLocation ? window.location.replace(this.signupLocation) :window.location.replace("/");
    }, s.prototype.redirectToSurvey = function() {
      return window.location.replace(this.el.data("survey-path"));
    }, s.prototype.collectSurveyData = function(t) {
      var e;
      return this.signupLocation = $(t.currentTarget).attr("href"), this.surveyData.degree_to_join = $(t.currentTarget).data("degree-id"), 
      this.surveyData.track_to_join = $(t.currentTarget).data("track-id"), (e = this.surveyData).action_to_take || (e.action_to_take = $(t.currentTarget).data("action-to-take")), 
      this.surveyData.skipped = !1;
    }, s;
  }(SurveyWizard), Featurette.register("marketing-survey-wizard", t);
}.call(this), Treehouse.init();
//# sourceMappingURL=/assets/maps/application-c87b627edb1e6782904f2191608c09d382f57b05e39db05ff80869d6b64433b5.js.map
