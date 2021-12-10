// A simple Google-spreadsheet-based event logging framework.
//
// This is currently set up to log every mousedown and keydown
// event, as well as any events that might be triggered within
// the app by triggering the 'log' event anywhere in the doc
// as follows:
//
// document.dispatchEvent(new CustomEvent('log', { detail: {
//   name: 'myevent',
//   info: {key1: val1, key2: val2}
// }}));

// Parse user agent string by looking for recognized substring.
function findFirstString(str, choices) {
    for (var j = 0; j < choices.length; j++) {
      if (str.indexOf(choices[j]) >= 0) {
        return choices[j];
      }
    }
    return '?';
  }
  
  function getUniqueId() {
    if (!('uid' in localStorage)) {
      var browser = findFirstString(navigator.userAgent, [
        'Seamonkey', 'Firefox', 'Chromium', 'Chrome', 'Safari', 'OPR', 'Opera',
        'Edge', 'MSIE', 'Blink', 'Webkit', 'Gecko', 'Trident', 'Mozilla']);
      var os = findFirstString(navigator.userAgent, [
        'Android', 'iOS', 'Symbian', 'Blackberry', 'Windows Phone', 'Windows',
        'OS X', 'Linux', 'iOS', 'CrOS']).replace(/ /g, '_');
      var unique = ('' + Math.random()).substr(2);
      localStorage['uid'] = os + '-' + browser + '-' + unique;
    }
    return localStorage['uid'];
  }
  
  var uid = getUniqueId();
  
  
  var ENABLE_NETWORK_LOGGING = true; // Controls network logging.
  var ENABLE_CONSOLE_LOGGING = true; // Controls console logging.
  var LOG_VERSION = 'A';             // Labels every entry with version: "A".
  
  // These event types are intercepted for logging before jQuery handlers.
  var EVENT_TYPES_TO_LOG = {
    mousedown: true,
    keydown: true
  };
  
  // These event properties are copied to the log if present.
  var EVENT_PROPERTIES_TO_LOG = {
    which: true,
    pageX: true,
    pageY: true
  };
  
  
  
  /////////////////////////////////////////////////////////////////////////////
  // CHANGE ME:
  // ** Replace the function below by substituting your own google form. **
  /////////////////////////////////////////////////////////////////////////////
  //
  // 1. Create a Google form called "Network Log" at forms.google.com.
  // 2. Set it up to have several "short answer" questions; here we assume
  //    seven questions: uid, time, name, target, info, state, version.
  // 3. Run googlesender.py (at goo.gl/jUkahv) to make a javascript
  //    function that submits records directly to the form.
  // 4. Put that function in here, and replace the current sendNetworkLog
  //    so that your version is called to log events to your form.
  //
  // For example, the following code was written as follows:
  // curl -sL goo.gl/jUkahv | python - https://docs.google.com/forms/d/1A...0/edit
  //
  // This preocess changes the ids below to direct your data into your own
  // form and spreadsheet. The formid must be customized, and also the form
  // field names such as "entry.1291686978" must be matched to your form.
  // (The numerical field names for a Google form can be found by inspecting
  // the form input fields.) This can be done manually, but since this is an
  // error-prone process, it can be easier to use googlesender.py.
  //
  /////////////////////////////////////////////////////////////////////////////
  
  // Network Log submission function
  // submits to the google form at this URL:
  // https://forms.gle/rNrAeZrTLHWU1ru59
  function sendResponse(
    suggestedHeadlineIndexInSequence,
    customTitleId,
    readInterestYesOrNo,
    whichOfTheTwoHeadlinesWouldYouPreferToSeeForTheArticle,
    headlineChoiceForSeeingOriginalOrAlt,
    whyReadPreference,
    linkedClicked,
    sonaId,
    sonaEmail) {
  var formid = "e/1FAIpQLSclGRE-K7EX8-6nxEB6iEPJCyEwd9Tf0KDtIxI7YzARj7ZT1Q";
  var data = {
    "entry.327417926": suggestedHeadlineIndexInSequence,
    "entry.569297778": customTitleId,
    "entry.711912188": readInterestYesOrNo,
    "entry.1489252714": whichOfTheTwoHeadlinesWouldYouPreferToSeeForTheArticle,
    "entry.1640319863": headlineChoiceForSeeingOriginalOrAlt,
    "entry.825371173": whyReadPreference,
    "entry.528381619": linkedClicked,
    "entry.1232894431": sonaId,
    "entry.621492409": sonaEmail
  };
      var params = [];
      for (const key in data) {
        params.push(key + "=" + encodeURIComponent(data[key]));
      }
      // Submit the form using an image to avoid CORS warnings.
      (new Image).src = "https://docs.google.com/forms/d/" + formid +
         "/formResponse?" + params.join("&");
    }
    


export default {
    sendResponse
}
