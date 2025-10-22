# VoIP Commit History Report

This report summarizes **548** commits extracted from `data/voip-commits.tsv`, focusing on the evolution of the VoIP module in Odoo Enterprise.

## Activity by Year

| Year | Commit Count |
| ---: | -----------: |
| 2025 | 145 |
| 2024 | 60 |
| 2023 | 49 |
| 2022 | 110 |
| 2021 | 30 |
| 2020 | 43 |
| 2019 | 36 |
| 2018 | 23 |
| 2017 | 32 |
| 2016 | 16 |
| 2015 | 4 |

## Detailed Commit Log

The table below lists each commit with a quick summary. Click on a title to open the commit on GitHub.

<style>
.voip-commit-table {
  margin-top: 1rem;
}
.voip-commit-table table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}
.voip-commit-table th,
.voip-commit-table td {
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid var(--md-default-fg-color--light, rgba(0, 0, 0, 0.12));
  vertical-align: top;
  text-align: left;
  white-space: normal;
  word-break: break-word;
  hyphens: auto;
}
.voip-commit-table th:nth-child(1),
.voip-commit-table td:nth-child(1) {
  width: 7rem;
  font-variant-numeric: tabular-nums;
}
.voip-commit-table th:nth-child(2),
.voip-commit-table td:nth-child(2) {
  width: 9rem;
}
.voip-commit-table td:nth-child(3) a {
  font-weight: 600;
}
.voip-commit-table td:nth-child(4) p {
  margin: 0 0 0.5rem;
}
.voip-commit-table td:nth-child(4) p:last-child {
  margin-bottom: 0;
}
</style>

<div class="voip-commit-table">
<table>
<thead>
<tr><th>Date</th><th>Author</th><th>Title</th><th>Summary</th></tr>
</thead>
<tbody>
<tr>
<td>2025-10-10</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9fe278f41ba5c98c1d7550d65ee84f7109b38b2d" target="_blank" rel="noopener">[FIX] voip: fix phone field margin when there is no flag</a></td>
<td><p>In the voip.call list view, when no flag is displayed, the phone number is slightly offset to the right.</p><p>This is because the margin that separates the flag from the phone number is still present.</p><p>This commit moves the margin from the phone number (always displayed) to the flag (sometimes absent).</p><p>How to reproduce: 1. Make a call to an invalid phone number 2. Go to voip.call list view 3. Look at the numbers without a flag</p><p>closes odoo/enterprise#97054</p><p>X-original-commit: 75ce52865d46d2a7372ffceeac34c373b585e538 Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-10-06</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/d788c3455d34829602f24ba94824d2bf5eda0d4b" target="_blank" rel="noopener">[IMP] voip: add Telnyx to the list of suggested providers</a></td>
<td><p>Task-5144121</p><p>closes odoo/enterprise#96439</p><p>Signed-off-by: Bruno Boi (boi) &lt;boi@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-10-03</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/0041043aafdbc0de74511b989cae745d0b9623ea" target="_blank" rel="noopener">[IMP] voip: downmix recordings to mono for better storage</a></td>
<td><p>Task-5082457</p><p>closes odoo/enterprise#96453</p><p>X-original-commit: 401ac46fcfc989daaf85f0ea1bff2fd07d863f6d Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-30</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/e36e8f85ca42be7146336d4c6d7e9f128cb591cc" target="_blank" rel="noopener">[IMP] voip, voip_ai: add recording and transcription icons.</a></td>
<td><p>Task-4962728</p><p>closes odoo/enterprise#96108</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-30</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/a9fe70b779354b8b54cf136859e8011442449e0d" target="_blank" rel="noopener">[IMP] voip: add internal link for call form view.</a></td>
<td><p>Task-4962728</p><p>closes odoo/enterprise#96113</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-29</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/535a7aef3e410d997baa093cc111527814c29253" target="_blank" rel="noopener">[IMP] voip: enhance &quot;Demo Mode&quot; title in VoIP.</a></td>
<td><p>This commit enhance the UX of the &quot;Demo Mode&quot; title in softphone by making it clickable and descriptive. When clicked, it leads to the providers&#x27; list. A tooltip was added to the button as well.</p><p>Task-5108061</p><p>closes odoo/enterprise#95742</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-23</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/64b82ad3aea568ed36759851a5a59a9a62091e0e" target="_blank" rel="noopener">[IMP] voip: move session-related methods from UserAgent to Session</a></td>
<td><p>The original VoIP code was written under the assumption that there would only ever be one session at a time. Consequently, much of the session state was stored in a global object called the UserAgent.</p><p>However, Odoo 19 implemented an attended transfer in VoIP, creating situations in which two sessions occur simultaneously. For this reason, the asynchronous code should no longer update session properties stored on the global UserAgent, as the session may have changed in the meantime, which could lead to race conditions.</p><p>This commit moves some logic from the UserAgent to the Session, and ensures all callbacks are properly mapped to the relevant session.</p><p>closes odoo/enterprise#96259</p><p>X-original-commit: 82d4a37eaa2531df98ef2640797ccf7be76be566 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-10</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b0047db6038977676762833dd8c765b66a4715de" target="_blank" rel="noopener">[IMP] voip{,_onsip}: improve user preferences</a></td>
<td><p>Task-5075195</p><p>closes odoo/enterprise#94690</p><p>X-original-commit: d0d29dcf866b70e7aec5e5b75d6fc3d0eb1cd278 Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-09</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/f3fcfeff92b7af5490408b209d35524239ab23b9" target="_blank" rel="noopener">[IMP] voip: lint</a></td>
<td><p>X-original-commit: 99649ccb6e6b9aa2f48b285c33886966924e56dd Part-of: odoo/enterprise#94537 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-09</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/f0cc155e1617a5b678d06422330cd4bbcced8e3e" target="_blank" rel="noopener">[IMP] voip: Add visual indicator that VoIP is in demo mode</a></td>
<td><p>Task-5055883</p><p>closes odoo/enterprise#94537</p><p>X-original-commit: 66ddba4cc4ade081ab5f0bd2d48b99803d5f9373 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-08</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b61148ca7cf86ab9237e39e6304c889e612311e0" target="_blank" rel="noopener">[FIX] voip: rename userAgent.session to userAgent.activeSession in VoIP.</a></td>
<td><p>This commit renames the missing values of `userAgent.session` to be `userAgent.activeSession`. This change was introduced in https://github.com/odoo/enterprise/pull/92315</p><p>closes odoo/enterprise#94086</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-08</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/19c2521f3d9e33059c47065bbc7deae5766490d2" target="_blank" rel="noopener">[IMP] voip_ai: improve demo data</a></td>
<td><p>- Add explicit create_date to avoid having all the calls created at the same time - Remove useless country_id - Pick fictitious phone numbers that will allow the unambiguous computation of the related country</p><p>Task-5059990</p><p>closes odoo/enterprise#94054</p><p>Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-05</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/32a5273dcd15709534ff35704fac224320081b42" target="_blank" rel="noopener">[IMP] voip: set bitrate of audio recordings to 8 kbps</a></td>
<td><p>This commit changes the bitrate of call recordings to 8 kbps. This change is intended to reduce the file size. A higher bitrate is not useful anyways, since most VoIP proivders use a similarly low bitrate.</p><p>closes odoo/enterprise#94022</p><p>Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-04</td>
<td>Soumya M</td>
<td><a href="https://github.com/odoo/enterprise/commit/bcf7918ad8abfeba151fe8b1312f8b2791b03725" target="_blank" rel="noopener">[FIX] voip_ai: demo data partner reference</a></td>
<td><p>This commit removes unnecessarily added new partner references in demo data, and sets country_id to US in voip call demo data.</p><p>Task-5059990</p><p>closes odoo/enterprise#93991</p><p>Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-03</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/e15de641415ec8f9a33ea885c6c4a84afd7ceaed" target="_blank" rel="noopener">[IMP] voip: /voip/get_country_code has no reason to be public</a></td>
<td><p>Change the authentication method of the /voip/get_country_code route from public to user.</p><p>closes odoo/enterprise#93788</p><p>Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-03</td>
<td>Andrzej(pian)</td>
<td><a href="https://github.com/odoo/enterprise/commit/37945ca05fa80984c94a301bbe792dfc24d60fa7" target="_blank" rel="noopener">[FIX] voip_ai: ensure call creation order in test</a></td>
<td><p>Before this commit in `test_cron_transcribe_recent_voip_call_two_calls_at_same_time` test, we were attempting to have two calls one created after another. However since the creating of the second (earlier) call was based on the absolute date, when the setUp took longer then anticipated the order was the opposite of the desired.</p><p>With this commit we ensure that the 2nd call will have create_date before 1st by pushing it back from the 1st call create date (not with creation of the 1st call)</p><p>closes odoo/enterprise#93807</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-02</td>
<td>akpu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/cf346d6c3b43af3493ac3313234296f5c99cf22e" target="_blank" rel="noopener">[IMP] voip: add no-content help for call and provider views</a></td>
<td><p>This commit adds no-content guides to improve usability.</p><p>Previously, there was no help message shown in the VoIP Call and VoIP Provider views.</p><p>Task - 5058364</p><p>closes odoo/enterprise#93778</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-09-01</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/f4ce2f5b28d63c14f833f6539b6f4938045ff8c1" target="_blank" rel="noopener">[IMP] voip: add successfuly tested providers&#x27; data in VoIP.</a></td>
<td><p>This commit makes working providers more discoverable for users and ease the providers&#x27; configurations by adding those providers&#x27; data in VoIP be default.</p><p>Task-4987919</p><p>closes odoo/enterprise#93596</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-28</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/ec9bcb28825457de9a9e0eb20a64fb6a73ce8769" target="_blank" rel="noopener">[IMP] voip{,_ai}: introduce Session class</a></td>
<td><p>Introduce a Session class to hold the ever-growing amount of session-related logic.</p><p>closes odoo/enterprise#93539</p><p>Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-28</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/72f1aaa050f2e86ad576d7c0fe920cbbaabb3aac" target="_blank" rel="noopener">[FIX] voip_hr: fix voip_hr record rules.</a></td>
<td><p>This commit fixes the record rules that specifies the users that can read phone calls made through VoIP. Currently, managers can only access call records of their direct subordinates. They should have access also to calls made by employees that are managed by their direct subordinates. This commit fixes that.</p><p>Task-5033984</p><p>closes odoo/enterprise#93379</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-28</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/626bce64b5f0f3695238a81e1d8799ee2e65a61b" target="_blank" rel="noopener">[FIX] voip_crm: add groups on session info</a></td>
<td><p>Since the VoIP app use some groups at startup[1], it&#x27;s made sense to adds it inside the session_info bundle to avoid RPCs at webclient startup.</p><p>[1]: https://github.com/odoo/enterprise/commit/9d3a13e9adae3a6b1c44b70a52b2fd74ef9dcc1a#diff-e8144e1aa7d3b4933985de5693d78e8c392bce8f7150ad186a04b8c87c7cd32aR14-R16</p><p>closes odoo/enterprise#93493</p><p>X-original-commit: 4f867f4549d2a21d2819b4169677ba1612330f7a Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-27</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/24d69fcbfcfa2805548424c2a3426fd8bf8ec183" target="_blank" rel="noopener">[IMP] voip: add simple calendar view for voip call.</a></td>
<td><p>Task-5043948</p><p>closes odoo/enterprise#93267</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-26</td>
<td>Soumya M</td>
<td><a href="https://github.com/odoo/enterprise/commit/ee8b9d831aeb10a5d05d0cd7f0c6460f0a4d2a01" target="_blank" rel="noopener">[IMP] voip: harmonize call status</a></td>
<td><p>Aim of this commit is to harmonize call status messages in voip.call and softphone history.</p><p>Task-4915054</p><p>closes odoo/enterprise#93394</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-25</td>
<td>akpu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/d150beab39605034fcc7a849e3295cbef38fd924" target="_blank" rel="noopener">[FIX] voip:  remove should_auto_reject_incoming_calls functionality</a></td>
<td><p>Removed the unnecessary auto-reject incoming calls functionality, as standard DND is already available.</p><p>Task - 5003485</p><p>closes odoo/enterprise#93079</p><p>Related: odoo/upgrade#8286 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-25</td>
<td>Andrzej(pian)</td>
<td><a href="https://github.com/odoo/enterprise/commit/c4e3fe61a51dd22b3bf791c46691dc1d5eedf086" target="_blank" rel="noopener">[IMP] voip_ai: Added demo data</a></td>
<td><p>With this commit we have a demo call in all of the transcription_status variations.</p><p>Related task task-4532108</p><p>Part-of: odoo/enterprise#92954 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-25</td>
<td>Andrzej(pian)</td>
<td><a href="https://github.com/odoo/enterprise/commit/c05e71b2a6dd559eadd4b91167ff84672a4a4acf" target="_blank" rel="noopener">[IMP] voip_ai: Call from view shows transcription_status as a banner</a></td>
<td><p>Before this commit transcription_status was presented as a selection field on the voip.call form view.</p><p>With this commit we move this information out of there and put it in a banner that only shows up when transcription is in progress or in error.</p><p>related tasks task-5026049</p><p>Part-of: odoo/enterprise#92954 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-25</td>
<td>Andrzej(pian)</td>
<td><a href="https://github.com/odoo/enterprise/commit/3638ea0aa2db34935549195f363fb41ee3f7e77d" target="_blank" rel="noopener">[FIX] voip_ai: Ensure correct transcription status with error handling</a></td>
<td><p>Previously, if a call transcription request failed due to an oversized file, the `RequestEntityTooLarge` exception would cause the entire transaction to roll back. This meant that any attempt to set the `transcription_status` to an error state (e.g., &quot;too_big_to_process&quot;) would be reverted, leaving the call in a &quot;pending&quot; state and obscuring the actual reason for failure.</p><p>With this commit we don&#x27;t raise error anymore. Instead an appropriate status code is returned as an response, this way transcription status persists yet client is notified.</p><p>related task task-4532108</p><p>Part-of: odoo/enterprise#92954 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-25</td>
<td>Andrzej(pian)</td>
<td><a href="https://github.com/odoo/enterprise/commit/15a604c0109b3e56319c0cff580e423700fb6cc6" target="_blank" rel="noopener">[IMP] voip_ai: Generate and display call&#x27;s transcript summary</a></td>
<td><p>This commit introduces the functionality to generate a one-liner summary for VoIP call transcripts.</p><p>We also skip adding datetime to the generated transcript as it is no longer required.</p><p>Part of the followup to the commit introducing transcriptions: f96d1f4cc52c009a4f55cfaabf7b683bdf9e170d [ADD] ai_voip: end-to-end post-call recording &amp; transcription</p><p>Related to task-4532108</p><p>Part-of: odoo/enterprise#92954 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-22</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/2657a5aea5dd9e39d9a79709d780d1aafe5583c8" target="_blank" rel="noopener">[IMP] voip: remove provider_id and company_id from voip.call</a></td>
<td><p>Task-5034202</p><p>closes odoo/enterprise#92996</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-21</td>
<td>Andrzej(pian)</td>
<td><a href="https://github.com/odoo/enterprise/commit/acb4d13cddf9705533c1797eba0812175fb10f24" target="_blank" rel="noopener">[IMP] voip_ai: Introduce backend tests</a></td>
<td><p>This commit introduces tests of &quot;Backend Controller&quot; and &quot;Cron&quot; parts of the following flow.</p><p>Frontend ┌───────────────────┐ │                   │ │ Call Established  │ │                   │ │ Recorder Started  │ │                   │ │ Call Finished     │  ──────┐Recording File │                   │        │  &amp; call id │ Recording Uploaded│        │ └───────────────────┘        │ │ Backend Controller          ▼ ┌──────────────────────────────────┐ │                                  │ │ Checks file and access rights    │ │                                  │ │ Updates call transcription status│  Recording attached │                                  │    to a call  with │ Schedules cron                   │  pending transcription │                                  │ ────┐ │                                  │     │ └──────────────────────────────────┘     │ │ Cron                                    ▼ ┌─────────────────────────────────────────┐ │ Finds recent call                       │ │                                         │ │ Identifies related most recent recording│ │                                         │ │ Updates call transcription status       │ │                                         │ │ Requests transcription                  │ │                                         │ │ Updates call transcription txt          │ └─────────────┬───────────────────────────┘ │          ▲ Audio ▼          │ Transcription ┌───────────┴─┐ │External api │ └─────────────┘</p><p>Note: the cron’s early `cr.commit()` is now skipped in test mode (`modules.module.current_test`), so tests run in a single cursor/env without `enter_registry_test_mode()` gymnastics. Production behavior is unchanged: we still early-commit outside tests to persist the queued status</p><p>Related task task-4532108</p><p>closes odoo/enterprise#92954</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-20</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/da12b3c97a29e8b94a55c5bf7aa96ae981870434" target="_blank" rel="noopener">[IMP] voip: show recent calls first in voip.call list view</a></td>
<td><p>closes odoo/enterprise#92767</p><p>Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-20</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b31de6317d497398476dc44efb9c777078bc00ff" target="_blank" rel="noopener">[IMP] voip: lint code</a></td>
<td><p>Part-of: odoo/enterprise#93690 Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-20</td>
<td>Brieuc-brd</td>
<td><a href="https://github.com/odoo/enterprise/commit/97ec439bfe387a6ca32cf55b05a3175768ce196c" target="_blank" rel="noopener">[IMP] voip, voip_ai: finetune call statuses</a></td>
<td><p>This commit refines the design of the call statuses to ensure consistency across them.</p><p>task-5026907</p><p>closes odoo/enterprise#92743</p><p>Related: odoo/odoo#223557 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-20</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/2cd0c7252fe5a98bb010d46bb32e48e0a4a7397e" target="_blank" rel="noopener">[IMP] voip: add call recording</a></td>
<td><p>Task-4417073</p><p>closes odoo/enterprise#93690</p><p>Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-19</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/aac266d886a74987eb3bfef8454d0cd31a2f7bb1" target="_blank" rel="noopener">[IMP] voip: rename VoIP to Phone</a></td>
<td><p>Task-4987530</p><p>closes odoo/enterprise#92827</p><p>Related: odoo/odoo#223691 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-19</td>
<td>akpu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/8b7c3f4d64f7585b2e7acc9eb7ed5c474253903b" target="_blank" rel="noopener">[FIX] voip:  fix incorrect error message on voip softphone</a></td>
<td><p>Previously, the error message shown to fix setting in general setting.</p><p>After this commit, the error message shows the correct location of the PBX server.</p><p>task-5022401</p><p>closes odoo/enterprise#92630</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-19</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/353d630e188b200d5dcb9d6519dfad479ad704e9" target="_blank" rel="noopener">[IMP] voip_sms: change wording to use &quot;text message&quot; instead of &quot;SMS&quot;</a></td>
<td><p>According to feedback, &quot;SMS&quot; is not a really common word in English. &quot;Text message&quot; is more frequent.</p><p>closes odoo/enterprise#92681</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-13</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/4b24943e1f84be0964bc84d4154401a1feba7a56" target="_blank" rel="noopener">[IMP] voip: enhance VoIP transfer options.</a></td>
<td><p>This commit introduces several new options to the transfer feature that already exists in VoIP. Those options are: 1. The user can choose between transferring the current call diretly to a chosen poterntial transferee or to ask them first (point 2). 2. The user is able to make another call to the potential transferee before making the transfer. 3. The user can switch between the two active call (the customer and the potential transferee) freely. 4. The user is able to terminate any call of the two calls while having the other one active.</p><p>Techincal changes to achieve the above options include: - Introduced another session `transferSession` along with `defaultSession`. Both session are handeled through the getter/setter `session` and through the `activeSession` attribute in the softphone model. - Changed several functions in the userAgent service and the call_model.js to handle both sessions smoothly. - Changing the ContactInfo component props to accept a contact and a phoneNumber instead of a call object. - Introducing a TransferConfirmation component that gives the user the options listed above. - Introducing a CallBanner component that shows the other call when having two calls. - filtered the potential transferee contacts not to have the current call contact.</p><p>Task-4866867</p><p>closes odoo/enterprise#92315</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-08</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/a35b8af24b51dc3f20f465d8e5b73b45a4f5c1e6" target="_blank" rel="noopener">[REF] voip_ai: lint</a></td>
<td><p>Part-of: odoo/enterprise#92296 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-08</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/4af225403e4bb6e5618d528a286d4c453a5859cb" target="_blank" rel="noopener">[IMP] voip{,_ai}: move the recording logic out of voip_ai</a></td>
<td><p>The recording feature should be available even without AI installed. This commit moves the recording client code into a dedicated service, and polish the server side logic a bit.</p><p>Part of task-4417073.</p><p>closes odoo/enterprise#92296</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-08</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/0db63705e363fd1d746d2364670e10fcc1c4a47d" target="_blank" rel="noopener">[REF] voip_ai: remove useless directories</a></td>
<td><p>Part-of: odoo/enterprise#92296 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-08</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/0ccbddaf4934fff09db010d9c0f253d3fa9a2c84" target="_blank" rel="noopener">[MOV] move ai_voip to voip_ai</a></td>
<td><p>So that all modules extending VoIP follow the same naming convention. It also makes sense for the base module being extended to come first.</p><p>Part-of: odoo/enterprise#92296 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-07</td>
<td>Claire Nguyen (clan)</td>
<td><a href="https://github.com/odoo/enterprise/commit/ec808436595b0884ea4f098f44976ee3bcbaddae" target="_blank" rel="noopener">[IMP] voip: change app icon</a></td>
<td><p>This commit updates the voip png icon to the new one.</p><p>task-4987745</p><p>closes odoo/enterprise#91894</p><p>Related: odoo/odoo#222175 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-07</td>
<td>aath-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/94d28d0580837626dbc78eb4f928b460a43fbd78" target="_blank" rel="noopener">[IMP] voip: identify internal calls by extension</a></td>
<td><p>Purpose: Improve the user experience by identifying internal calls made using extension numbers (voip usernames) by displaying the corresponding user&#x27;s name.</p><p>Specification: Enhance the get_contact_info method in the voip.call model to resolve internal extensions by matching the call&#x27;s phone_number with the voip_username field on res.users.</p><p>Task-4997542</p><p>closes odoo/enterprise#91998</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-07</td>
<td>Soumya M</td>
<td><a href="https://github.com/odoo/enterprise/commit/42356217ce25228adb1bb319d7ca3f0c20ce486f" target="_blank" rel="noopener">[IMP] voip: Removed create button from call list view</a></td>
<td><p>Purpose: Creating a new voip.call record from the backend should not be allowed. Since it is a log of the calls that are taking place via the widget.</p><p>Specification: Removed the option to create records from call list view.</p><p>Task-4988885</p><p>closes odoo/enterprise#91991</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-05</td>
<td>Andrzej(pian)</td>
<td><a href="https://github.com/odoo/enterprise/commit/df402bcdd9023157ee3661e453002bacb421384c" target="_blank" rel="noopener">[IMP] ai_voip: introduce per-provider transcription setting</a></td>
<td><p>Until now (after ref.1) call transcription was globally enabled by default once the `ai_voip` module was installed. The only way to prevent transcriptions (and sending data to external entities) was to uninstall the module entirely.</p><p>This commit introduces a new `transcription_policy` field on the `voip.provider`, allowing transcription to be explicitly disabled per provider. Since providers are typically tied to specific regions, this enhancement improves compliance control across geographies.</p><p>Planned followup: --- Transcription policy selection field should be expanded with a &quot;user&quot; option, that will allow users to decide if they want their individual calls transcribed.</p><p>References --- (ref.1) f96d1f4cc52c009a4f55cfaabf7b683bdf9e170d [ADD] ai_voip: end-to-end post-call recording &amp; transcription</p><p>Related ticket task-4532108</p><p>closes odoo/enterprise#91763</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-05</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/d3c13ae01ebd61bea82bcfe05584d072abd0c63d" target="_blank" rel="noopener">[IMP] voip: do not allow editing dtmf result</a></td>
<td><p>The already sended DTMF signal can&#x27;t be changed. In this commit, we ignore the useSelection effect when sending DTMF, user can only append new value to sended vulues. we also make the input readonly so that user can only send DTMF from the softphone keypad, since normally DTMF only support &quot;123456789*0#&quot;</p><p>closes odoo/enterprise#91739</p><p>X-original-commit: 50a5aeb5bc8eff42b05f56bb764eaefc169e38cb Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-08-05</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/7045b6e7732a19ff61bc6013476356a6db09d2bf" target="_blank" rel="noopener">[FIX] voip: don&#x27;t mix server and client values when computing time</a></td>
<td><p>It was reported that the timer for the call would sometimes start as a negative number. Examining the code that computes it suggests that the timestamp sent by the server was a few seconds in the future compared to luxon.DateTime.now() (client time). This discrepancy is most likely due to the clock skew between the client and the server.</p><p>This commit adapts the code so that it only computes time based on client-side values, effectively preventing clock skew issues.</p><p>Task-4930666</p><p>closes odoo/enterprise#91951</p><p>X-original-commit: 35d9d55a2f0bf76b0ab4cf4f62cb7b3d0a07248c Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-30</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/66c9a360c69d634b598f0bc507831bf0dde63c78" target="_blank" rel="noopener">[IMP] voip: don&#x27;t show VoIP as the first app on the homepage</a></td>
<td><p>Change the sequence id of the VoIP root menu so that it doesn&#x27;t show up as the first app on the homepage.</p><p>The sequence number is set to 261 in order to put VoIP right after WhatsApp, which is 260 at the time.</p><p>closes odoo/enterprise#91353</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-30</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/4f63bdf29289b2d712758546607b57a677079095" target="_blank" rel="noopener">[IMP] voip: improve handling of invite failures</a></td>
<td><p>If the PBX is not configured to use SRTP-DTLS, trying to invite a user in Odoo would result in rather obscure errors: - Chrome: Called with SDP without DTLS fingerprint - Firefox: Invalid description, no fingerprint attribute at level 0</p><p>This commit gets rid of the traceback and shows a meaningful message instead.</p><p>Task-4972773</p><p>closes odoo/enterprise#91454</p><p>Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-30</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/338feaa92b4d7a4b132e4236eb1e7d99b004de3b" target="_blank" rel="noopener">[FIX] voip: remove unused kwarg</a></td>
<td><p>&quot;state&quot; is no longer accepted as a kwarg of create_and_format, resulting in a crash when provided.</p><p>This commit removes a leftover occurrence of the &quot;state&quot; kwarg.</p><p>closes odoo/enterprise#91359</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-28</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/8f368d9a49df1dcf9530d0d7e73eae9437da94f6" target="_blank" rel="noopener">[IMP] voip: clean session when call end</a></td>
<td><p>Instead of clean session in every function that can end a call, it&#x27;s better that we do it when call model state is changed.</p><p>closes odoo/enterprise#91280</p><p>X-original-commit: bd87444b2eb0925b9599fdecbb18bb272673c739 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-28</td>
<td>aath-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/8ea26c3823143fd54c223cc290ec1591941e95b9" target="_blank" rel="noopener">[IMP] voip: improve input field visibility</a></td>
<td><p>Purpose The main input field in the keypad widget was visually unclear, leading to confusion. Users often clicked near the field without realizing it, as there was no visible cursor or indication of focus. This change aims to make the input area more obvious and user-friendly.</p><p>Specification -Added a placeholder text (&quot;Type a name or number&quot;) to the input field. -Added a border-bottom to the .o-voip-Keypad-searchBar container to visibly frame the input area. -Added border highlight to the input container when the user is typing or input is focused.</p><p>Task-4922706</p><p>closes odoo/enterprise#90390</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-24</td>
<td>akpu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/d911dfd6992ddfb9ed5512c51b4f14e15f881767" target="_blank" rel="noopener">[IMP] voip_crm: improve display logic of VoIP lead button.</a></td>
<td><p>Previously, the lead button always displayed &#x27;Lead&#x27; as its title, regardless of context.</p><p>With this change, the button title now adapts based on opportunity count — showing &#x27;Create Lead&#x27; or &#x27;View Leads&#x27; appropriately.</p><p>Task-4938144</p><p>closes odoo/enterprise#91713</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-24</td>
<td>akpu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/7e01454c15f492a55230e150b84c87c7ffb90275" target="_blank" rel="noopener">[IMP] voip: automatically focus softphone when opening softphone.</a></td>
<td><p>This commit ensures the VoIP softphone is automatically focused when opened with keyborad shortcut.</p><p>Previously, the softphone would lose focus when opened with keyboard.</p><p>Task-4936059</p><p>closes odoo/enterprise#90881</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-24</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/777ebe3918aacdfe3f09078f542e2a784f72a67f" target="_blank" rel="noopener">[IMP] voip_{ crm, hr }: adapt security groups in voip_ bridge modules.</a></td>
<td><p>This commit improves the use of security groups in the bridge modules: `voip_hr` and `voip_crm` to use specific groups from `crm` and `hr` modules.</p><p>Instead of using `base.group_user`, I used `group_sale_salesman` for `crm` and `group_hr_user` for `hr`. This way the rules are more tailored to the real use of `crm` and `hr`.</p><p>see also: https://github.com/odoo/enterprise/pull/75445</p><p>closes odoo/enterprise#90897</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-23</td>
<td>aath-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/a06c02e8e163ed052c1c4d25a56bea9b6409abde" target="_blank" rel="noopener">[FIX] voip: prevent mobile keypad popup</a></td>
<td><p>Purpose: When using the softphone keypad on mobile, pressing any key would automatically trigger the native keyboard, creating a frustrating user experience and making it tedious to dial numbers.</p><p>Specification: Adjusted the behavior so that: -The keyboard drawer still appears the first time the VoIP widget is opened. -However, subsequent key presses on the softphone keypad no longer trigger the native keyboard. -If the user wants to bring up the native keyboard (e.g., to enter letters), they can explicitly tap the top input field.</p><p>Task-4964776</p><p>closes odoo/enterprise#91762</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-18</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9343bae5615021eefe6b36ed329034d33303d0a4" target="_blank" rel="noopener">[FIX] voip: fix incmoing calls error in `create_and_format`</a></td>
<td><p>This commit fixes an error that arises on incoming call because the front end tries to create data with the attribute `state` which is not defined in the called method `create_and_format`. This commit adds this attribute with &quot;calling&quot; state in `create_and_format`.</p><p>closes odoo/enterprise#90495</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-16</td>
<td>Soumya M</td>
<td><a href="https://github.com/odoo/enterprise/commit/c995b7df3fc6ff541dc65d8b28661ab03f4a8c08" target="_blank" rel="noopener">[IMP] voip: show recent calls tab incase of missed calls</a></td>
<td><p>Purpose: To open recent calls tab in softphone interface when there are missed calls.</p><p>Specification: This commit updates the VoIP systray item behavior to ensure that, when a user has missed calls, the softphone interface will automatically switch to the &quot;recent&quot; calls tab.</p><p>Incase of an ignored incoming call, the softphone will now switch to the &quot;recent&quot; tab instead of the &quot;dialer&quot;.</p><p>Task-4917354</p><p>closes odoo/enterprise#90431</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-16</td>
<td>akpu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/c40032b1d2aeffc8b6c174984a0b2c10b62eb5ce" target="_blank" rel="noopener">[IMP] voip: add hotkey and command palette entry for VoIP Softphone.</a></td>
<td><p>This commit adds a data hotkey and command palette entry for toggling the VoIP Softphone.</p><p>Previously, there was no shortcut or command to toggle the VoIP Softphone.</p><p>Task-4936059</p><p>closes odoo/enterprise#90389</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-14</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/ad1a8d36b51a656ad973a0fbee1dca95ee490e6a" target="_blank" rel="noopener">[IMP] *: add voip.call form view.</a></td>
<td><p>*: voip, voip_{ crm, helpdesk, hr_recruitment, sale_subscription }</p><p>This commit adds the form view of the voip.call model in VoIP + several enhancements to the VoIP call management system. Key changes include:</p><p>- Updated the `voip.call` model to inherit from both `mail.thread`, allowing the form view to have a chatter. - Added new computed/related fields such as `calls_count`, `image_1920`, and `avatar_128` to improve the information available for each call. - Enhanced the `write` method to update the partner&#x27;s phone number when the `partner_id` is changed. - Introduced a new `CallStatusBadgeField` component to visually represent call statuses in the UI. - Added buttons for viewing related calls, opportunities, applications, tickets, and subscriptions directly from the call form.</p><p>Task-4909097</p><p>Part-of: odoo/enterprise#89781 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-14</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/70213090dfbb0b6177aedf79dd027bf9fcb3deee" target="_blank" rel="noopener">[IMP] voip: handle error messages as plain text</a></td>
<td><p>To display line breaks in error messages, voip.triggerError replaced the \n with a `&lt;br&gt;` tag. This required taking some precautions to avoid making the error message an XSS vector.</p><p>Rather than using `&lt;br&gt;` tags—and therefore promoting the error message to dangerous HTML—we now use the CSS property &quot;white-space: pre-line&quot;, which preserves line breaks in text nodes.</p><p>closes odoo/enterprise#90139</p><p>Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-11</td>
<td>Kevin Gerard (kege)</td>
<td><a href="https://github.com/odoo/enterprise/commit/8a8845ef23bd6ef43e21f96bf4e1f1a184ef1433" target="_blank" rel="noopener">[IMP] mail,*: Make Store in mock server more generic</a></td>
<td><p>*: calendar, hr_holidays, im_livechat, rating, website, website_livechat, website_slides, approvals, voip, whatsapp</p><p>The goal of this commit is to make the Store in the mock server more like the actual store.</p><p>This allows to add generic models without _to_store methods to be added to the store as well as allowing to follow more the same structure as the actual server.</p><p>It adds support for: - _to_store_defaults method on models - _to_store now uses the current model - add method was split and we can now use _add_records_field like in the actual server - Store.attr, Store.one, Store.many can now support lists, and other Store.attr inherited object</p><p>task-4789853</p><p>closes odoo/enterprise#90046</p><p>Related: odoo/odoo#218376 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-10</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/7ba74fe45c256c8bd6cd1d84632e810b3eedc512" target="_blank" rel="noopener">[FIX] voip: replace &quot;minus&quot; icon with &quot;minimize&quot; icon</a></td>
<td><p>Following feedback from the designers.</p><p>closes odoo/enterprise#90009</p><p>X-original-commit: 339aec8e9a22c897c340855551d1c78f3bb080f8 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-09</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/12072238db47ec8fe6e3708193e5962107569337" target="_blank" rel="noopener">[IMP] voip: integrate search bar component across softphone tabs</a></td>
<td><p>This commit adds an expand button to the recent calls tab in the voip wizard so that the user can open the full list view of the recent calls. Also, it adds some predefined filters to the `voip.call` views.</p><p>Also, it introduces a new `SearchBar` component to enhance the user experience in the softphone interface. The search bar is now included in the address book, agenda, history, and keypad tabs, allowing users to filter entries more efficiently.</p><p>Additionally, the `onInputSearch` functionality has been debounced in the agenda to improve performance during searches. The history tab now features an expandable button for viewing recent calls, further streamlining navigation.</p><p>Task-4642428 Task-4791182</p><p>closes odoo/enterprise#84981</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-08</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/35df1a695b42311cdcda4c425b4c22521abb1d21" target="_blank" rel="noopener">[REF] voip: clean up markup usage</a></td>
<td><p>Use markup template and html functions to make the code cleaner and safer while no longer triggering ci/security flag.</p><p>closes odoo/enterprise#88754</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-07</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/da1bd473698c7ded0372681ec4405c20c68be55c" target="_blank" rel="noopener">[FIX] voip: properly sanitize phone numbers</a></td>
<td><p>Add parentheses to the list of characters that are stripped from phone numbers.</p><p>Part of task-4891947.</p><p>closes odoo/enterprise#89754</p><p>X-original-commit: 4c209abc03dc7103fb51f749817b1a0c8d353603 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-07</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/97ef9e0a21c8ca083b2b3f8ff38421f048c7ed4d" target="_blank" rel="noopener">[IMP] room,voip: adapt code for SharedWorker master tab election</a></td>
<td><p>odoo/odoo#218332 introduced a new master tab election mechanism. Adapt enterprise code for it.</p><p>closes odoo/enterprise#89941</p><p>Community: odoo/odoo#218332 Signed-off-by: Matthieu Stockbauer (tsm) &lt;tsm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-04</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/7e5da9b54e02c9b5a0c73b32dcee68d449ecd0ba" target="_blank" rel="noopener">[FIX] voip: avoid autofocus when typing</a></td>
<td><p>Before switching the focus back to the softphone after a call, make sure the user isn&#x27;t typing somewhere else. Only autofocus if the focus is not on an editable element.</p><p>Task-4997513</p><p>closes odoo/enterprise#92043</p><p>X-original-commit: 6834f3acac16a753a75ab6e6a791ee8957e9cb59 Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-04</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/0f4f82267ec8007cb799042eaf6a475a199e5171" target="_blank" rel="noopener">[FIX] voip: replace cross icon with a minus icon</a></td>
<td><p>The &quot;cross icon&quot; (X) is believed to be too &quot;scary&quot;; people don&#x27;t dare to click it in the middle of a call out of fear of hanging up, even though the softphone window might be in their way.</p><p>The &quot;minus icon&quot; (-) might deceive one&#x27;s expectations by hiding the window rather than minimizing it, but we decided that it was still better this way.</p><p>Part of task-4891947.</p><p>closes odoo/enterprise#89691</p><p>X-original-commit: fa59bb332f73b0fab50c88cb0ed6701e6459f71b Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-01</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/5e5c108280940bada9fea1d8a5006ac2d936e699" target="_blank" rel="noopener">[REF] voip: refactor keypad search tests.</a></td>
<td><p>This commit splits the &quot;search for name&quot; test into smaller tests for clarity and readability. It also removes the use of `edit` in tests and uses `insertText` instead in order for the tests to be deterministic. This test was introduced in: https://github.com/odoo/enterprise/pull/87328</p><p>closes odoo/enterprise#89201</p><p>X-original-commit: 8491c9d3e66274d27cad58434c0de38a57d06161 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-07-01</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/057a649d5ffee0e59fe6a6c2486eb17887c4529b" target="_blank" rel="noopener">[FIX] voip: fix cursor displacement in keypad input on mobile.</a></td>
<td><p>This commit fixes a bug that caused the cursor in the keypad input to be displaced when typing on mobile. So, the first entered number was always to the end. This happens because the `on-touchend` event was calling another event (click) which may involve some changes in the UI that caused this.</p><p>Steps to produce the bug: 1. Open VoIP wizard from mobile. 2. try to add numbers to the keypad. 3. You will see that the first number is always at the end.</p><p>closes odoo/enterprise#89232</p><p>X-original-commit: 668467678312632b5b9ecf234280690151bf3078 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-30</td>
<td>Brieuc-brd</td>
<td><a href="https://github.com/odoo/enterprise/commit/a3aed8e81fc04abbfd6ddfcb7e444efdd2a4512d" target="_blank" rel="noopener">[FIX] voip: adapt layouts on small screens</a></td>
<td><p>This commits fixes minor layout issues: - It adapts some views that had no scroll bar when the viewport was small. This prevented access to part of content. - It revises some spacing and alignment on small screens. - It defines small transfer buttons in &quot;outline&quot; style to maintain consistency with the others tabs.</p><p>task-4908502</p><p>closes odoo/enterprise#90000</p><p>X-original-commit: b15b97c850e17affd2bff8dd7246ee992cdb2edd Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-27</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/49568889c51d60b7c8f71968766fef2663822a31" target="_blank" rel="noopener">[FIX] mail_enterprise, *: define Store bus_target</a></td>
<td><p>* = approvals, knowledge, l10n_mx_edi, voip, website_helpdesk_livechat, whatsapp</p><p>Enterprise counter-part.</p><p>closes odoo/enterprise#89650</p><p>X-original-commit: 5317987b8566e4ab7d375f617801255e5e02058d Related: odoo/odoo#217745 Signed-off-by: Matthieu Stockbauer (tsm) &lt;tsm@odoo.com&gt; Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-26</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/ac47e46160c4f9603926a0dd02c2530a03b783f8" target="_blank" rel="noopener">[IMP] voip: improve handling of markups</a></td>
<td><p>Make the most of the newly introduced HTML helpers in the VoIP code.</p><p>closes odoo/enterprise#88676</p><p>Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-25</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/1f6220bef6432a1ff0edd112306c22aa06906606" target="_blank" rel="noopener">[IMP] voip, voip hr_recruitment: rename `applicant-xpathTarget`</a></td>
<td><p>This commit renames all xpath targets that has the suffix `applicant-xpathTarget` to remove `applicant` from it. This is because there are modules other than `voip_hr_recruitment` that use that xpath target.</p><p>X-original-commit: 798db990396cc3a18f3749b3f58f7f5dea32375a Part-of: odoo/enterprise#89173 Related: odoo/odoo#216947 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-24</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/91e983b7db22be94347a27c01b836a7ed9138535" target="_blank" rel="noopener">[FIX] voip: correctly parse HTML in error messages</a></td>
<td><p>`&lt;br&gt;` tags in VoIP error messages are rendered as text. This is because the code uses t-esc instead of t-out, and t-esc never renders inner HTML.</p><p>This commit just replace t-esc with the proper t-out directive.</p><p>closes odoo/enterprise#89978</p><p>X-original-commit: 26282aeaa1250eeab22fa6e95d0f4cbec2387811 Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-24</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/91739e631bed9552eba308edd013b105b2dcbeb8" target="_blank" rel="noopener">[REF] ai, stock_barcode, voip: allow separator in htmlJoin</a></td>
<td><p>Enterprise counter-part.</p><p>closes odoo/enterprise#88120</p><p>Related: odoo/odoo#215145 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-24</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/8666dc7206f4d25ab2dca2abc8d4db5ee47aa182" target="_blank" rel="noopener">[FIX] voip: resolve non-blocking errors on click</a></td>
<td><p>UI-wise, there are two types of VoIP errors: blocking and non-blocking. Blocking errors are unrecoverable, they&#x27;re displayed at the top of the UI and prevent further use of the softphone. Non-blocking errors, on the other hand, can be dismissed by a simple click on the error screen.</p><p>Problem: the handler that hides the error screen in case of non-blocking errors wasn&#x27;t attached to anything, and even if it was, its implementation was wrong! This commit makes it work as intended.</p><p>Part of task-4891947</p><p>closes odoo/enterprise#88437</p><p>X-original-commit: fa284901468911108210c9d4a5a6934188bbcc6d Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-24</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/1278d2157958c40c928bd5fa0f6dd7bbc327a60c" target="_blank" rel="noopener">[IMP] voip: show DND state text on voip header</a></td>
<td><p>Show the Do Not Disturb state text on the voip header</p><p>Task-4891947</p><p>closes odoo/enterprise#88877</p><p>X-original-commit: 130a0f422443b6a5516468d76a4ab7e6beb201c7 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-20</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/c192fc6be5e0b808c57819f2ed08ac28ec8e5123" target="_blank" rel="noopener">[REF] ai, voip, website_helpdesk_livechat: move html utils to web</a></td>
<td><p>Enterprise counter-part.</p><p>Part-of: odoo/enterprise#88120 Related: odoo/odoo#215145 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-18</td>
<td>assh-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/a8392223532e12871565c7d239ddc713c0110199" target="_blank" rel="noopener">[FIX] voip: prevent error in voip config if no phonecall activity type exists</a></td>
<td><p>Currently, an error occurs when the system initializes the voip configuration for the currently logged-in internal user.</p><p>Steps to Reproduce:</p><p>- Install the voip module. - Delete the activity type where the Action is &#x27;Phonecall&#x27;, and then refresh the page.</p><p>IndexError: tuple index out of range.</p><p>This error occurs when the system initializes the voip configuration and no phonecall activity type exists. The system attempts to search for activity types with the &#x27;phonecall&#x27; category, which returns an empty recordset. Then it tries to access the first record of this empty recordset[1], which raises an error.</p><p>[1] https://github.com/odoo/enterprise/blob/2896974e9eda61bfe5e1d67423dc56f6ab17b2af/voip/models/res_users.py#L128</p><p>This commit ensures that if activity type with the &#x27;phonecall&#x27; category is present, it store the activity type id, otherwise, it stores False as the activity type id.</p><p>sentry-6689050392</p><p>closes odoo/enterprise#88876</p><p>X-original-commit: 4c4253c0ec3d1e8f11677fe18d73f0d015f5569e Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Ashutosh Sharma (assh) &lt;assh@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-17</td>
<td>Brieuc-brd</td>
<td><a href="https://github.com/odoo/enterprise/commit/f8aaf2699bcdd87c7304291669b2f731278b3e16" target="_blank" rel="noopener">[FIX] voip: adapt transfer shortcut and back button design</a></td>
<td><p>This commit fixes the alignment of the &quot;back&quot; button of the transfer view. It also removes the label from small &quot;Transfer&quot; buttons to remain consistent with the other buttons of the same type.</p><p>task-4875960</p><p>closes odoo/enterprise#87962</p><p>X-original-commit: 2666b475869dfbda0fd2b63bc64120a22802a0fc Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-17</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/08558c50389558ef0426ffa859fa644a7681e43a" target="_blank" rel="noopener">[IMP] voip: change ui style of transfer button in VoIP.</a></td>
<td><p>This commit changes the style of the transfer button in the transfer view to be solid instead of outlined.</p><p>closes odoo/enterprise#88056</p><p>X-original-commit: a584eb1050032c09fde79dc7757cc6e1ff6f9c23 Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt; Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-16</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/3468cb0d7dc8c8a774f3843a5adcaf6673b3b6a5" target="_blank" rel="noopener">[REF] voip, whatsapp: move isInternalUser to user model</a></td>
<td><p>Enterprise counter-part.</p><p>Part of task-3208257</p><p>closes odoo/enterprise#87524</p><p>Related: odoo/odoo#214021 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-12</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/98affd09558112082b5d6cfcbfa6c9d7d87107d3" target="_blank" rel="noopener">[FIX] voip: handle contacts with falsy/undefined name.</a></td>
<td><p>An error was arising when making the following steps: 1. create a company contact with a proper name. 2. create an invoice address for that company through the company form view. 3. set a phone number for the invoice. 4. leave the `name` empty. 5. open the contacts tab on VoIP.</p><p>This happened because the code was trying to access the first charachater of a falsy string which is `voipName` in this case. A solution to this was to guard falsy names of contacts and add a section for contacts with empty string. This section will have a title of &quot;#&quot; and will appear at the end of the list.</p><p>closes odoo/enterprise#87675</p><p>X-original-commit: e98cc48b0725dd9bb1308317010e5e3cadab4847 Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt; Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-10</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/d5244e597ba8bd038a522ae7eb22a81caadee735" target="_blank" rel="noopener">[IMP] voip, voip_crm: add &quot;Leads&quot; button to VoIP.</a></td>
<td><p>This commit adds a button that connects the contacts to its leads via the VoIP module. It uses the same logic as &quot;Applicant&quot; button introduced before.</p><p>Task-4855484</p><p>closes odoo/enterprise#89173</p><p>X-original-commit: ea2d733df97033a20d69e5e89f694fc252d28702 Related: odoo/odoo#216947 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-10</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/3c3a300460a40a33514aeb8a9c81c8bcc0dd5a6f" target="_blank" rel="noopener">[FIX] voip: fix falsy `t9_name` when the partner name is `False`.</a></td>
<td><p>This commit fixes a bug that happens when the partner name is a falsy value like a `&quot; &quot;`. This made the `t9_name` to be `false` and then to give an error when trying to access the `trim()` function.</p><p>A solution for this was to guard it with a condition to check if the t9_name is falsy or not.</p><p>Reproduction steps of the bug: 1. Create a contact where their name is a space (`&quot; &quot;`). 2. Include a phone number for this contact. 3. Open the VoIP wizard then the keypad tab. 4. try to search for that contact using the keypad numbers. 5. you will get the error saying that `trim()` is not a function.</p><p>closes odoo/enterprise#87560</p><p>X-original-commit: 614b509b79ab36cdc4c4aa6bf2404fc4ed91e952 Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt; Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-04</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b3969caf2b6ee4466712b280885135f6073dda38" target="_blank" rel="noopener">[FIX] voip: fix keypad stuck in `in call view`.</a></td>
<td><p>In VoIP, the keypad state wasn&#x27;t updated after the user hangs up with the other part. So, when making a new call, the keypad appears again with its last state in the previous call. This commit fixes this by reseting the keypad state everytime the user makes a call.</p><p>Task-4848365</p><p>closes odoo/enterprise#87453</p><p>X-original-commit: bf77c8c3c7c1003a0755fbd67c6c41fe2e9a91ff Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-06-03</td>
<td>Didier (did)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9ddd3c7586855ca5bdd22d073be276011018f5a8" target="_blank" rel="noopener">[IMP] whatsapp,voip,*: introduce res.partner and mail.guest model</a></td>
<td><p>* test_whatsapp, voip_hr_recruitment</p><p>This PR removes the `persona_model` and introduce {res_partner|mail_guest}_model to be closer of the python part.</p><p>task-4675821</p><p>closes odoo/enterprise#88014</p><p>Related: odoo/odoo#214943 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-22</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/62d8bfaad77a6d5cc4e7b381c09016bd52d3b4f0" target="_blank" rel="noopener">[IMP] voip: move i18n helpers from voip to web</a></td>
<td><p>closes odoo/enterprise#86232</p><p>Related: odoo/odoo#211279 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-22</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/3bb82be6539a1e32a0f46ba53cffd69b01dfc4bd" target="_blank" rel="noopener">[FIX] voip: send keep-alives to avoid silent disconnection</a></td>
<td><p>PR #64267 implemented a reconnection mechanism, but it is only triggered when the WebSocket close event is fired. In practice, we noticed that the WebSocket would sometimes silently lose connection. When this happens, one should just send data through the WebSocket to refresh it.</p><p>This commit enables SIP.js keep-alive feature, hopefully reducing the number of disconnections, or at least preventing them to go unnoticed.</p><p>closes odoo/enterprise#86365</p><p>X-original-commit: 26b8521b45b6c6abbcf0e35fd47948e27f7cd868 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-22</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/282ed9ee9bfd8753ac0946ab5645ea94be3c842e" target="_blank" rel="noopener">[FIX] voip: fix ill-formatted format specifier</a></td>
<td><p>closes odoo/enterprise#86567</p><p>X-original-commit: 44d987a14d07da5506dd65e4af08410be1737021 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-20</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/d33f2ef934062fa8b37a7cbfab7f1da00fc27b6e" target="_blank" rel="noopener">[REF] voip, voip_{ hr_recruitment, sms }: rename `partner` into `partner_id`.</a></td>
<td><p>The discuss team maintaining the `Store` code is getting rid of the `rename` feature. So, this commit updates the code of the VoIP JS models to use the same naming convention as the python code.</p><p>Task-4801651</p><p>Part-of: odoo/enterprise#85887 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-19</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/efb9f4ea0d7628a8e7ca0f09f58e9256d8d9faed" target="_blank" rel="noopener">[REF] voip, voip_sms : rename `phoneNumber` into `phone_number`.</a></td>
<td><p>The discuss team maintaining the `Store` code is getting rid of the `rename` feature. So, this commit updates the code of the VoIP JS models to use the same naming convention as the python code.</p><p>Task-4801651</p><p>Part-of: odoo/enterprise#85887 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-19</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/cf2ac0c1c1ff83e9c787d49ac63bda03ec5feb04" target="_blank" rel="noopener">[REF] voip: rename `creationDate` into `create_date`.</a></td>
<td><p>The discuss team maintaining the `Store` code is getting rid of the `rename` feature. So, this commit updates the code of the VoIP JS models to use the same naming convention as the python code.</p><p>Task-4801651</p><p>Part-of: odoo/enterprise#85887 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-19</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/cae7a95e2837aa9ff6b08f038d78421ddf96d516" target="_blank" rel="noopener">[REF] voip: rename `startDate` into `start_date`.</a></td>
<td><p>The discuss team maintaining the `Store` code is getting rid of the `rename` feature. So, this commit updates the code of the VoIP JS models to use the same naming convention as the python code.</p><p>Task-4801651</p><p>closes odoo/enterprise#85887</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-19</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/200a3a255f68333cef884aee9e5d42ca66e01c2e" target="_blank" rel="noopener">[FIX] voip: no crash on activity rescheduling call activities (2)</a></td>
<td><p>Before this commit, when re-scheduling a call activity to a date of today or older, it raised the following error:</p><p>``` Caused by: TypeError: Cannot read properties of undefined (reading &#x27;avatarUrl&#x27;) at ActivityListPopoverItem.template ```</p><p>This happens because in this specific case of change of call activity deadline date, the VOIP softphone code is fetching activity data of today faster than odoo views, thanks to relying on bus notification, whereas odoo views and chatter rely on mostly on returned RPCs. The code of VOIP returns activity data with a custom formatter, which omits `persona` that is important for the good templating of an activity in Chatter otherwise there&#x27;s the crash above.</p><p>A recent PR [1] attempted to fix this issue, but the syntax for Store was wrong: it used the syntax for an item in field list (e.g. in `_to_store_defaults`) instead of pure store data from a specific record. This bad use of Store.One() resulted in actually returning `False`.</p><p>[1]: https://github.com/odoo/enterprise/pull/84970</p><p>opw-4586756</p><p>closes odoo/enterprise#86122</p><p>X-original-commit: 53548694f8db1ed1095bf62a8a1aef90bbd3e2a6 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-19</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/1b6b84293d8a62656a8725ff82a3530a093db681" target="_blank" rel="noopener">[REF] voip: rename `endDate` into `end_date`.</a></td>
<td><p>The discuss team maintaining the `Store` code is getting rid of the `rename` feature. So, this commit updates the code of the VoIP JS models to use the same naming convention as the python code.</p><p>Task-4801651</p><p>Part-of: odoo/enterprise#85887 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-19</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/09c31deb8240052c3f4f8ad66543a394c0798533" target="_blank" rel="noopener">[REF] voip: rename `displayName` into `display_name`.</a></td>
<td><p>The discuss team maintaining the `Store` code is getting rid of the `rename` feature. So, this commit updates the code of the VoIP JS models to use the same naming convention as the python code.</p><p>Task-4801651</p><p>Part-of: odoo/enterprise#85887 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-16</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/7755d9be848de0ce186483875674006c4b369898" target="_blank" rel="noopener">[IMP] voip: remove useless space in the caleeSuggestions tab</a></td>
<td><p>This commit removes the useless big space between the entered phone number and the list of suggestions in the calee suggestions tab.</p><p>closes odoo/enterprise#85820</p><p>X-original-commit: 8b349404a60162a4bde9b44d3493ef0f4aee8af5 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-15</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/79bb50a489be862c3f835af9884d0a960a201fdd" target="_blank" rel="noopener">[IMP] voip: enhance keypad input font size dynamically</a></td>
<td><p>This commit adds a new method to dynamically adjust the input font size based on the length of the input value in the softphone keypad.</p><p>closes odoo/enterprise#86010</p><p>X-original-commit: c2fc0c4a83903d67a51d259627e340eda59c1fef Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-15</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/1b26180dfb709e4d0f7645e14bdca85cd3fc1794" target="_blank" rel="noopener">[FIX] voip: update call status icons for better user feedback.</a></td>
<td><p>This commit modifies the icons displayed in the softphone interface to provide clearer feedback on call status. Now, when the ongoing call is on hold, the user will see a pause icon in the top bar and the systray item.</p><p>closes odoo/enterprise#86542</p><p>X-original-commit: 44ba5ced9e5f62e494baf2e353f8d9f919423238 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-09</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/568d29af1e1d792642f0dc288d57871fc7781f38" target="_blank" rel="noopener">[IMP] voip: put back Transfer feature</a></td>
<td><p>Task-4417102</p><p>closes odoo/enterprise#87639</p><p>Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-09</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/3f99a9c0e16a66551bd4233300c70c1f76563202" target="_blank" rel="noopener">[IMP] voip: expand ligatures before converting names to T9</a></td>
<td><p>Expand ligatures (IJ, œ, æ...) to their constituent letters, so that they can be converted to T9.</p><p>closes odoo/enterprise#85206</p><p>X-original-commit: 60b2cbc7ce275f04f61ef515ac7308ade53dc527 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-09</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/2ab340151b612023e842836c2714e40b47791e2c" target="_blank" rel="noopener">[FIX] voip: hide transfer button</a></td>
<td><p>The feature is not implemented yet. Don&#x27;t show buttons that aren&#x27;t mapped to anything.</p><p>closes odoo/enterprise#85313</p><p>X-original-commit: 1b99cb2f23eb93a196f5a06223cf14b6b3112f37 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-08</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/88b8de95e1a28a8037a386fc8fb6a044a98217e7" target="_blank" rel="noopener">[IMP] voip: enhance access control/access rights.</a></td>
<td><p>- Introduced new user groups for VoIP officers and  administrators with specific access rights to calls and providers. - Updated access rules to restrict CRUD operations based on company affiliation. - Added demo data for testing user access rights.</p><p>This commit improves the overall security and usability of the VoIP module, ensuring that users can only access relevant data based on their roles and company associations.</p><p>Task-3695951</p><p>closes odoo/enterprise#75445</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-08</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/382be1ef889cc6c16a1eb0bc8eab5ad0db82e9a1" target="_blank" rel="noopener">[IMP] voip: enhance call management/reporting and logs.</a></td>
<td><p>This commit introduces several improvements to the VoIP module, including the addition of a new button for viewing call history in user settings and the implementation of a detailed call view with enhanced data fields such as duration, day of the week, and time slot. The call model now computes the duration and time slot based on the start date, and the user interface has been updated to include new menu items for better navigation. Additionally, tests have been added to ensure the correct computation of time slots during different seasons.</p><p>Task-3695951</p><p>Part-of: odoo/enterprise#84981 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-08</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/2e9713e0c06f161f30a453d7a4ab829ec8da90d7" target="_blank" rel="noopener">[FIX] voip: no crash on activity rescheduling call activities</a></td>
<td><p>Before this commit, when rescheduling call activities, this could lead to the following crash:</p><p>``` Caused by: TypeError: Cannot read properties of undefined (reading &#x27;avatarUrl&#x27;) at ActivityListPopoverItem.template ```</p><p>This error state that the activity has no related persona in order to its avatar in the popover. The persona data must be returned with activity data, and this is a required field therefore any activity should necessarily have a persona in their data.</p><p>The reason of crash comes from voip method `_format_call_activities` that returns custom activity data that do not pass `persona`. This commit fixes the issue by passing `persona` data like in the usual `_to_store` of activity.</p><p>The crash occurs since https://github.com/odoo/odoo/pull/190161</p><p>opw-4586756</p><p>closes odoo/enterprise#85209</p><p>X-original-commit: 15af95c483951f305b9aa6990e0985e75b0d549a Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-07</td>
<td>Andrzej(pian)</td>
<td><a href="https://github.com/odoo/enterprise/commit/f96d1f4cc52c009a4f55cfaabf7b683bdf9e170d" target="_blank" rel="noopener">[ADD] ai_voip: end-to-end post-call recording &amp; transcription</a></td>
<td><p>This commit makes the following flow possible:</p><p>Call has been established ││ │└───────► Capture data (#1) │┌──────── during the call ││ ▼▼ Call finished │ ├─► Upload call data (as attachment) │ ├─► Request asynchronous transcription │   │ │   └─► Process transcripts with cron (#2) ▼ Inspect transcript in the VoIP call form</p><p>1. Capture call data (frontend) --- Introduces implementation to record SIP call audio directly in the browser using the MediaRecorder and Web Audio APIs.</p><p>- Hooks into the SIP session state transitions (Established / Terminated) to start and stop recording. - Mixes mic and remote audio using AudioContext (work around MediaRecorder’s single-stream limitation. - Uploads .ogg file to /web/binary/upload_attachment at the end of the call</p><p>2. Processing attachments asynchronously --- Crons are used to process the call attachments, by requesting transcripts from OpenAI.</p><p>During development it was observed that oRFT stayed at the level of 0.3 That would mean that we need ~2 min to transcribe ~6min audio. To keep UI snappy we only request transcription job and forget about it.</p><p>Crons run in the dedicated scheduler thread, so 2-3 min Whisper jobs do not occupy HTTP workers.</p><p>UI additions --- - Added green “Post-call transcription on” badge in the in call view (of softphone) - Grey notice in demo mode - New `Transcript` tab on the VoIP call form.</p><p>Other Remarks --- - Raised transcript call timeout to 550 s (~30 min at oRTF 0.3) - Fixed duplicate `/v1` in Whisper URL. (it was causing InvalidChunkLength when processing the response) - Failed transcription jobs render attachments remained in the pending state for retrying</p><p>related task task-4532108</p><p>closes odoo/enterprise#87645</p><p>Signed-off-by: Panagiotis Kyriakou (paky) &lt;paky@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-07</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/68f8381524c6bd4db544680139968ed592d058db" target="_blank" rel="noopener">[IMP] voip: remove useless trigram index</a></td>
<td><p>The trigram index on res.partner/t9_name is not useful. The &quot;t9 encoding&quot; reduces the set of possible trigrams far too much for the trigram to be effective in discriminating between large amounts of results.</p><p>In consideration of the above, this commit removes the trigram index.</p><p>closes odoo/enterprise#85049</p><p>X-original-commit: 9afe2828fbd41b1de83cae19f8b6f86207c7b4b8 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-05</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/aae9421704b66407b98cf086bbb979d7b692c9bf" target="_blank" rel="noopener">[FIX] voip: correct handler for ontouchend</a></td>
<td><p>The touchend event must be preventDefault-ed to prevent zooming on double-tab on mobile. However, the touchend handler was incorrectly set to this.props.onClickKey, which doesn&#x27;t exist.</p><p>This commit updates the code to trigger a click event on touchend so that the same handler is used whether the button is tapped or clicked, preventing similar situations where the click handler is updated but not the touchend handler, leaving the latter broken.</p><p>closes odoo/enterprise#84740</p><p>X-original-commit: c3e809a807a3704e8e418f6232a7e1cfb9e8c3e1 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-05</td>
<td>Brieuc-brd</td>
<td><a href="https://github.com/odoo/enterprise/commit/a3dc3e89803404be1d7efaa7cd0f20716182bdfe" target="_blank" rel="noopener">[IMP] voip: adapt keypad colors for pending calls</a></td>
<td><p>part of task-4642428</p><p>closes odoo/enterprise#84904</p><p>X-original-commit: 4f35c1c862cfb6b42953c52d2f18c931f2954fee Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-05-05</td>
<td>Brieuc-brd</td>
<td><a href="https://github.com/odoo/enterprise/commit/56601bd4a332caeaa9caf99da8ef2b1d45eb009f" target="_blank" rel="noopener">[IMP] voip: review softphone tabs UI</a></td>
<td><p>This commit refines the softphone tabs UI for a cleaner and more modern look.</p><p>task-4768693</p><p>closes odoo/enterprise#85702</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-30</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/83f5b4dcc36a6abb7b551bea96349a4d71418d43" target="_blank" rel="noopener">[IMP] voip: introduce keypad to send DTMF in call</a></td>
<td><p>part of task-4642428</p><p>X-original-commit: 3f8285899c110f1be9d945eea70c0959a5f368fe Part-of: odoo/enterprise#84904 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-29</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/e2f63ce67047706ea02fa8d9c740cb27a376156d" target="_blank" rel="noopener">[FIX] voip: fix failing DND selector test</a></td>
<td><p>&quot;Do not disturb selector changes state correctly with limited time&quot; is failing with this error:</p><p>``` 9. [toBe] Failed to find 1 of &quot;p&quot; with text &quot;Until Jan 1, 2025, 1:15 AM&quot; (Timeout of 3 seconds). Found 0 instead. &gt; Expected: true &gt; Received: false ```</p><p>Depending on the environment, it seems that the time is sometimes formatted with a nonbreaking space before the AM, and sometimes not. This is likely the reason for the failure.</p><p>This commit adapts the test in order to exclude the problematic space from the selector.</p><p>closes odoo/enterprise#84433</p><p>X-original-commit: d19c3a750f912bf8fb10a91f968c9634b94f33fa Signed-off-by: Aaron Bohy (aab) &lt;aab@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-29</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/139890c427e1b0890e89ff0037e20631efac07c7" target="_blank" rel="noopener">[IMP] voip: allow digits in t9_name</a></td>
<td><p>Prior to this commit, digits in a partner name would be converted to an x, preventing you from searching for digits in a T9 name search.</p><p>After this commit, the digits remain as they are, so they can be searched for in a T9 name search.</p><p>closes odoo/enterprise#84905</p><p>X-original-commit: 410d5a824a1909a9413f68b331ca437a6cb10d43 Signed-off-by: Nicolas Seinlet (nse) &lt;nse@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-25</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/de6b9cfea874426e70e540a4a27d9a1f16bf5439" target="_blank" rel="noopener">[FIX] voip: fix dropdown race conditions</a></td>
<td><p>According to f02e8173ef0b73ff4f3933fe8296c9c98c0d57ea, tests can click on a dropdown before its click handler is set (because it is set in a useEffect), causing tests to fail undeterministically if they are too fast.</p><p>This commit adds an extra step to prevent the dropdown from being clicked too early in VoIP tests.</p><p>closes odoo/enterprise#84254</p><p>X-original-commit: 1e4d2629edc919245a4cfa9386ee037d0207dc9a Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-25</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/dccad6da0af9a6ea8c2197012c4199b3381bf4a2" target="_blank" rel="noopener">[IMP] voip: rewrite domains with Domain</a></td>
<td><p>odoo.osv is on its way to being deprecated. This commit replaces its usage with Domain, along with rewriting some domains with the new super cool syntax.</p><p>closes odoo/enterprise#84138</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-25</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/091c82530abb665d2cb22d494e0bb2bbfaa2e9ac" target="_blank" rel="noopener">[FIX] voip: fix viewing incorrect caller in VoIP.</a></td>
<td><p>This is a fix for a bug that happens from time to time. It was reported more than once that another user was viewed as a caller instead of the actual caller.</p><p>This happened because when someone calls from a local number, they have a `0` at the beginning of their number. For that case, we use a wildcard that matches anything that the phone number is a suffix to. So, it happened that it matched more than one number when the calling local number is a suffix to more than one international number. Then, the code just picks the first one randomly, which may be incorrect.</p><p>This commit fixes this bug by removing the logic of using a wildcard when the call is made through a local number. Instead, we use an exact match.</p><p>Task-4707543</p><p>closes odoo/enterprise#84367</p><p>X-original-commit: d683e53b6f158dcda002317e9b60fb305646a7d6 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Mohammed Basioni (basm) &lt;basm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-24</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9953f334ded2db0c7fbffadf404e0ad8c1918d70" target="_blank" rel="noopener">[IMP] voip{,_hr_applicant}: filter out forbidden records from activities</a></td>
<td><p>If an activity is created for a record that the responsible user does not have access to, trying to fetch &quot;today&#x27;s activities&quot; would result in an access error.</p><p>This commit adapts the get_today_call_activities code to filter out activities associated with a record that the current user does not have access to.</p><p>closes odoo/enterprise#84039</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-24</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/38c1311a707252e2c745a41f9e20b92837ddff82" target="_blank" rel="noopener">[IMP] voip: add no-search-results buttons.</a></td>
<td><p>In voip, you may search for different things through different tabs. For example, you may search for recent calls in the recent tab, or for specific contacts in the contacts tab. When there is not matching result, there should be a button that guides you to a some page that may be relevant to your search. For example, if you can&#x27;t find a specific contact in the contacts tab, you may have a button to direct you to create that contact as it seems like you don&#x27;t have it on your list.</p><p>This commit introduces those guide button on the following tabs: `contacts`, `recent_calls`, and `activities`.</p><p>closes odoo/enterprise#84028</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-23</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/fa6656437deb4119b0b82fe909f01bca251da7fc" target="_blank" rel="noopener">[FIX] voip: fix missing getter for contact.</a></td>
<td><p>The incoming invitation interface didn&#x27;t display contact button althought the caller is already in the contacts. Also, after accepting a call from a caller that is in the contact, a button &quot;Add contact&quot; was dispalyed. This happened because the template was trying to retrieve a `contact` variable but there was not getter implemented for this variable.</p><p>closes odoo/enterprise#83640</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-23</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/e1ecc127c276d182ac084c6344fcbd0daee63537" target="_blank" rel="noopener">[IMP] voip: remove &quot;calling&quot; notification.</a></td>
<td><p>This commit removes the &quot;calling&quot; notification that appears when a call is initiated. It turns out that it&#x27;s useless and not needed anymore.</p><p>closes odoo/enterprise#83919</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-22</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/c8c83c158b08f63b34358d72da24da810410e1ec" target="_blank" rel="noopener">[FIX] voip: block timers in test and wait for bus notifications</a></td>
<td><p>Restore b9853be51a16d800b9b131a8c59c6c92a22c9552, inadvertently reverted during refactoring.</p><p>closes odoo/enterprise#83801</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-22</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/76b223904926d9458c3a711ee13998f287c1a56e" target="_blank" rel="noopener">[IMP] voip: display callee suggestions</a></td>
<td><p>Display Callee Suggestions ========================== The dialer&#x27;s &quot;Show More&quot; button - which appears when your search returns more than one result - can now be clicked and open a list of all the results, grouped by whether they match the contact&#x27;s name or phone number.</p><p>Separate Dialer from Keypad =========================== The &quot;keypad&quot; part of the Dialer component is extracted into its own component, as it will be reused in the upcoming Transfer view.</p><p>Improve i18n support ==================== Normalization helpers needed by the match function are added. These are more complete than the ones in web/ and are based, among other things, on the list of characters handled by PostgreSQL&#x27;s unaccent function. At some point it&#x27;d be nice to move the helpers to web.</p><p>Part of task-4642428</p><p>X-original-commit: 637c7ea983dbf34d1c9341cad11162f69c3a33d0 Part-of: odoo/enterprise#84254 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-22</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/383e3a8aecc8bacdfdc3301647f3ac953062d043" target="_blank" rel="noopener">[REF] voip: remove `browser` from voip.</a></td>
<td><p>In the past, all browser function/objects were used through the `browser` object. Now, the only property that you need to use through `browser` is `location`. For everything else you can use global functions/objects by calling them directly.</p><p>closes odoo/enterprise#83796</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-22</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/0b98200d68d6f6a1bf474f96cbfd9babef0a1a0c" target="_blank" rel="noopener">[FIX] voip_hr_recruitment: load contacts without hr.applicant access</a></td>
<td><p>Before this commit, the code unconditionnally reads and sends hr.applicant records linked to a VoIP contact, leading to a crash in case the current user doesn&#x27;t have access to hr.applicant records.</p><p>After this commit, applicant data are only sent if the user has access to hr.applicant.</p><p>closes odoo/enterprise#83844</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-18</td>
<td>Brieuc-brd</td>
<td><a href="https://github.com/odoo/enterprise/commit/b06899f7c8254f24b1e6b089949e4294f9fc8b8c" target="_blank" rel="noopener">[FIX] voip: adjusts softphone height</a></td>
<td><p>Since the redesign of VOIP in commit 52b3065993c41c6b7c65dda586a66fdd865b3afd, the height of the softphone component wasn&#x27;t responsive. This could prevent access to the entire layout if the viewport was too small.</p><p>This commit adjusts the height of softphone to suit the viewport.</p><p>task-4413793</p><p>closes odoo/enterprise#83679</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-16</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b004d0e954f2d024b483668c576cbe1b65a96e1a" target="_blank" rel="noopener">[IMP] voip: merge CallView into UserInfo</a></td>
<td><p>CallView was introduced to avoid code duplication between CallInvitation, InCallView, and CallSummary, which have some data in common.</p><p>The concept of CallView is no longer useful since the part that is shared is fully encompassed by the UserInfo component that was added later. This commit merges the two to keep only one component.</p><p>Part-of: odoo/enterprise#83544 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-16</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9ba9b1056e9a80346798caf148fa65dc26494dd9" target="_blank" rel="noopener">[MOV] voip: rename UserInfo to ContactInfo</a></td>
<td><p>ContactInfo is believed to be more in line with the terminology in use in VoIP, and less confusing than &quot;UserInfo&quot; since &quot;user&quot; in the context of Odoo refers to another concept entirely.</p><p>closes odoo/enterprise#83544</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-16</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/60d69b5884c68b023389094212871d1de9fe7d76" target="_blank" rel="noopener">[FIX] voip_hr_recruitment: traceback on incoming call</a></td>
<td><p>The patch of CallInvitation components was not done correctly and failed to redefine the original list of child components. As a result, Owl couldn&#x27;t find the definitions of ActionButton and UserInfo and would crash when trying to render the CallInvitation.</p><p>Part-of: odoo/enterprise#83544 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-16</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/52b3065993c41c6b7c65dda586a66fdd865b3afd" target="_blank" rel="noopener">[REF] VoIP revamp</a></td>
<td><p>This commit introduces a complete rewrite of the Odoo Softphone UI.</p><p>## Model changes: - The computed field &quot;t9_name&quot; is added to res.partner to allow efficient searching by &quot;[T9 code](https://en.wikipedia.org/wiki/T9_(predictive_text))&quot;. - The computed field &quot;country_code_from_phone&quot; is added to res.partner, mail.activity and voip.phone. It computes the ISO country code corresponding to the country contained in their phone number field.</p><p>## Bridge modules: - Introduction of the voip_sms bridge module, adding a button to the VoIP softphone to send SMS if both voip and sms are installed. - Introduction of the voip_hr_recruitment bridge module, adding a button to open the form view of applicants linked to a VoIP contact.</p><p>Task-4642428</p><p>closes odoo/enterprise#81257</p><p>Community: https://github.com/odoo/odoo/pull/202558 Related: odoo/odoo#202558 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Co-authored-by: Basioni (basm) &lt;basm@odoo.com&gt; Co-authored-by: Brieuc-brd &lt;brd@odoo.com&gt; Co-authored-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Co-authored-by: yhu-odoo &lt;yhu@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-04-02</td>
<td>Julien Mougenot</td>
<td><a href="https://github.com/odoo/enterprise/commit/6e728fdd9e630998d03a10553f3843e3c2dfad74" target="_blank" rel="noopener">[FIX] voip: fix tests taking too long</a></td>
<td><p>This commit fixes a couple of unit tests in the VOIP addon which performed `advanceTime` calls with huge time leaps (e.g. 24h), which triggered a whole lot of `heartbeat` calls from the &quot;multi_tab&quot; service.</p><p>This caused long needless CPU locks that may crash these tests.</p><p>To fix this issue, this commit adds some `blockTimers: true` options to the `advanceTime` calls to prevent more timers to be added during the time leaps, and thus speeding up the tests to only take the time they actually need.</p><p>Additionally, these tests were not properly awaiting changes made on the &quot;res.users.settings&quot; model when setting &quot;Do not disturb&quot; values, resulting in non-deterministic failures. This has been fixed as well, by properly awaiting changes on the model before proceeding.</p><p>Part-of: odoo/enterprise#82734 Related: odoo/odoo#204471 Signed-off-by: Michaël Mattiello (mcm) &lt;mcm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-03-20</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/3f59cba608655b097781f2387727d589de61fc66" target="_blank" rel="noopener">[FIX] voip: fix loading flags from all pages.</a></td>
<td><p>When opening the VoIP interface from any page other than the home page, it doesn&#x27;t show the flag as the uri for the flag was relative. This commit fixes that by changing the relative uri (`base/...) to an absolute uri.</p><p>closes odoo/enterprise#81866</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-03-14</td>
<td>Pierre Paridans</td>
<td><a href="https://github.com/odoo/enterprise/commit/5791eda6d0e551da929e08a700173744855d5075" target="_blank" rel="noopener">[IMP] voip: removes unused CSS animation</a></td>
<td><p>This commit removes the unused `o-voip-SystrayItem-vibrateAnimation` CSS animation and also removes the `vibrate` animation as it is an unknown CSS animation-name.</p><p>Reference: - https://developer.mozilla.org/en-US/docs/Web/CSS/animation</p><p>closes odoo/enterprise#81593</p><p>Signed-off-by: Romain Estievenart (res) &lt;res@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-03-13</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/3b5d0089e37b329b435983847854922a7acecc61" target="_blank" rel="noopener">[FIX] voip: remove extra OR from get_contacts domain</a></td>
<td><p>PR #75203 removed the mobile field, and so updated search domains that used it in VoIP, but the corresponding ORs weren&#x27;t correctly cleaned up, breaking the search.</p><p>This commit gets rid of the obsolete ORs.</p><p>closes odoo/enterprise#81458</p><p>X-original-commit: 354568e22787e9b0c1153085086b9ca0bca69c9c Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-03-12</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/50b539e00bace8306063b1df2e9eddac8568ae7f" target="_blank" rel="noopener">[FIX] voip: VoIP systray item must respect DND status</a></td>
<td><p>Adapt the condition in VoIP systray item code so that it takes into account the Do Not Disturb (DND) status and doesn&#x27;t play the ringtone when it shouldn&#x27;t.</p><p>closes odoo/enterprise#81283</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-03-06</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/4e588dfbe8141c730dea146ef408ba3667b99d56" target="_blank" rel="noopener">[IMP] voip: add a shortcut button to the providers&#x27; list.</a></td>
<td><p>This commit adds a button next to the providers&#x27; dropdown menu in the users&#x27; settings/preferences to lead to the providers&#x27; list view.</p><p>Task-4416699</p><p>closes odoo/enterprise#80448</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-03-05</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/4c7dabd6710138f017c26e399454f680f88741a9" target="_blank" rel="noopener">[FIX] voip: clean code related to `mobile` field</a></td>
<td><p>Field `mobile` has been removed from `res.partner`. Clean the code related to it in voip.</p><p>Task-4624455</p><p>closes odoo/enterprise#80915</p><p>X-original-commit: 788415867c851a8593131939b03dad3b11ac88f3 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-03-04</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/1086888a07efd6876950d116a154c17e1ab2f781" target="_blank" rel="noopener">[IMP] voip: lint numpad.js</a></td>
<td><p>closes odoo/enterprise#77271</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-02-27</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/441dbdd1c03d1801fa0d157427d2b7da3c314210" target="_blank" rel="noopener">[FIX] voip: missing &quot;user_id&quot; in _to_store_defaults</a></td>
<td><p>After fff2083, by default we don&#x27;t provide the user_id of mail.activity for Store. However, in voip, we need user_id to filter activities for current user: https://github.com/odoo/enterprise/blob/60137cdea6412278ce9b94852926f09d61e9cb38/voip/static/src/softphone/softphone_model.js#L38 To fix, add this field in _to_store_defaults for voip.</p><p>closes odoo/enterprise#80351</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-02-10</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/8242e3d718e155464b80714902f380334948722e" target="_blank" rel="noopener">[FIX] voip: change `landlineNumber` field name and fix related issues.</a></td>
<td><p>This commit fixes the naming of the `landlineNumber` field. Previously, this field was referred to as the `phone` field. This commit changes its name to `phoneNumber`. Also, we had a `mobile` field that was removed in this PR: https://github.com/odoo/odoo/pull/189739 and it resulted in a bug in the `mobileNumber` getter in `correspondence_details.js` as it was retrieving a `phoneNumber` attribute from the `partner` model. In contrast, it doesn&#x27;t have this attribute.</p><p>closes odoo/enterprise#78996</p><p>Related: odoo/odoo#197205 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-01-16</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/86d121782c260179fd25e3c871aa473bc4da758a" target="_blank" rel="noopener">[IMP] voip: improve keypad and add countries&#x27; flags.</a></td>
<td><p>This commit improves the keypad of the VoIP modules through two main features: - Adds the flag of the country of the number the user types. - Improves the style of numbers on the numpad to have a modern look.</p><p>Task-4416929</p><p>Part-of: odoo/enterprise#77271 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2025-01-08</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/b06b249b16981a8947e942921c8fcb3db1c29921" target="_blank" rel="noopener">[IMP] voip: Add Do Not Disturb mode</a></td>
<td><p>Add Do Not Disturb mode to VoIp. When user in DND mode, incoming calls won&#x27;t ring.</p><p>Task-4398564</p><p>closes odoo/enterprise#76799</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-12-19</td>
<td>Basioni (basm)</td>
<td><a href="https://github.com/odoo/enterprise/commit/87ff0acb9fcc7c1b388333986fe9ef3b49108368" target="_blank" rel="noopener">[IMP] voip: add &quot;In call&quot; status and close options.</a></td>
<td><p>1. When you close the VoIP widget while you are in a call, it won&#x27;t hang up but there is nothing to show that you are still in a call. So, this commit solves this by adding an &quot;In call&quot; status next to the voip icon when you are in a call. 2. When someone is calling you and you are busy, you close the widget, the call will stop ringing and a small vibration is added to the voip icon to show that there&#x27;s an incoming call.</p><p>Task-4398564 Subtask-4416855</p><p>closes odoo/enterprise#75869</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-12-12</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/55a80b7e2067624609e5cc6425599f0872099da2" target="_blank" rel="noopener">[FIX] voip: only play incoming ringtone on master tab</a></td>
<td><p>Currently when receiving incoming calls, it&#x27;s possible that all opened tabs will play the ringtone. To reduce the chaos, we now only play the incoming ringtone on the master tab.</p><p>Task-4402909</p><p>closes odoo/enterprise#75637</p><p>X-original-commit: ab318282d9d852f1182a83cb62690e17ca65c363 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-12-10</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/5e702810241ad9c74e3b74f42c4974a0830e3e7a" target="_blank" rel="noopener">[FIX] voip: no input when click between buttons</a></td>
<td><p>Issue: Clicking the space between buttons but no click on any buttons, a input of &quot;123456789*0#&quot; will be generated.</p><p>Fix: Do nothing when click in this situation, only generate input when clicking on buttons.</p><p>closes odoo/enterprise#75576</p><p>X-original-commit: 4c97a1a1ea80e499f76c471a0447d99c17d24275 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-12-06</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/b65163a71a0ac1a9bad545ddb9ec0b80922021ee" target="_blank" rel="noopener">[REF] mail_enterprise, *: clean Store, simplify _to_store and improve relation</a></td>
<td><p>* = approvals, documents, knowledge, voip, website_helpdesk_livechat, whatsapp</p><p>Enterprise counter-part.</p><p>closes odoo/enterprise#72312</p><p>Related: odoo/odoo#184344 Signed-off-by: Matthieu Stockbauer (tsm) &lt;tsm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-11-26</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/fd5116b5cf159cd38c9915711971872bf217073c" target="_blank" rel="noopener">[IMP] knowledge, voip: speed up test contains with focus or value</a></td>
<td><p>Enterprise counter-part.</p><p>closes odoo/enterprise#74605</p><p>Related: odoo/odoo#188638 Signed-off-by: Matthieu Stockbauer (tsm) &lt;tsm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-11-18</td>
<td>Xavier ALT</td>
<td><a href="https://github.com/odoo/enterprise/commit/53ff9d057477d55dc315765803e704a0749b1d08" target="_blank" rel="noopener">[FIX] voip: update neutralization</a></td>
<td><p>Since odoo/enterprise@4f162e7e1ea, the `voip.mode` ICP has been replaced by `voip.provider`&#x27;s mode.</p><p>This commit update the neutralization script accordingly.</p><p>closes odoo/enterprise#74350</p><p>X-original-commit: 6f06ef259fc80148cafb32b2737af71afc1e72d7 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-11-08</td>
<td>Thibault Francois</td>
<td><a href="https://github.com/odoo/enterprise/commit/7b8246793867d51ec428b85db67657c7cd5c17b9" target="_blank" rel="noopener">[FIX] voip: improve performance of _format_call_activities</a></td>
<td><p>Store the partner one by one is very costly. Since all the partner return by _mail_get_partners will end up in the store, we can store them all at once</p><p>This improve the time for get_today_call_activities from 25000ms to around 700ms for one of the worse case (thousands of partners to fetch)</p><p>closes odoo/enterprise#69132</p><p>X-original-commit: c2cc1570f217a520f7b47efdf09d522927587f1f Signed-off-by: Thibault Delavallee (tde) &lt;tde@openerp.com&gt; Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-11-06</td>
<td>Adnan Saiyed</td>
<td><a href="https://github.com/odoo/enterprise/commit/d6f90825b3bcf4cf061c4822a0285f22e2382089" target="_blank" rel="noopener">[IMP] voip_onsip, voip: convert qunit tests to hoot</a></td>
<td><p>Purpose of this commit is to convert remove QUnit tests which rely on `mail/test_utils` to hoot.</p><p>Part of task-3818666</p><p>closes odoo/enterprise#73384</p><p>Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-10-01</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/512d44ccee5a589ee62a0c0573bfead36e85d9aa" target="_blank" rel="noopener">[REF] mail_enterprise, *: rename Activity JS to patch PY name</a></td>
<td><p>* = approvals, documents, sign, voip</p><p>Enterprise counter-part.</p><p>Part of task-3605717</p><p>Part-of: odoo/enterprise#71221 Related: odoo/odoo#182364 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-09-13</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/2d0b681847a3aaf87713d340c1e8ee69343b268c" target="_blank" rel="noopener">[FIX] voip: disable ringtones in tests</a></td>
<td><p>Patch the voip.ringtone service in all voip tests to avoid playing ringtones while tests are running.</p><p>closes odoo/enterprise#70090</p><p>X-original-commit: 4193d7ccf2cf1cfd64d7079b251cb90b186293b7 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-09-04</td>
<td>saurabh</td>
<td><a href="https://github.com/odoo/enterprise/commit/55e56f54c5868ec73042602faae0607af58c6799" target="_blank" rel="noopener">[IMP] voip: move missed call notifications in top icon</a></td>
<td><p>This commit will stop opening the softphone container for showing missed calls count in topbar instead the missed calls count will be shown in VoIP systray item icon badge.</p><p>closes https://github.com/odoo/enterprise/pull/69490 Task-3392951</p><p>closes odoo/enterprise#69490</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-08-20</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/de1a4ebde7d7429b6dbd602a0a0ede369049cee7" target="_blank" rel="noopener">[FIX] voip: adapt voip model with model fix</a></td>
<td><p>The voip model was overriding `static insert` method as if this works on a single record. For some time, this method works on multiple records, and its implementation detail has changed so assuming it does `get() ?? new()` is no longer guaranteed.</p><p>The intent of override was to enrich data after them being assigned. This has been converted to an override of `update()`, which guarantees it being called whenever fields are updated on record, without making too much assumption in implementation details of records.</p><p>This commit also speeds up tests of VOIP, which were awaiting input that contains a value. This is not observed by mutation observer, so these tests took 3 seconds to execute. This PR puts the value in `data-value`, so that this is a mutation that can be observed by contains, thus reducting time of such test to mere dozens of ms.</p><p>closes odoo/enterprise#68604</p><p>Related: odoo/odoo#177059 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-08-01</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/2c5a12d8ebbd46785accbcdd12a85dfaaa72806e" target="_blank" rel="noopener">[REF] bus, *: shortcut to send message to user via bus</a></td>
<td><p>* = account_online_synchronization, delivery_iot, l10n_uk_reports, spreadsheet_edition, voip, website_helpdesk_livechat, whatsapp</p><p>Enterprise counter-part.</p><p>closes odoo/enterprise#67733</p><p>Related: odoo/odoo#175205 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-07-26</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/7995d248340edf2083880d37f1cd5c7c2d95b79f" target="_blank" rel="noopener">[REF] mail_enterprise, *: add extra values to Store on records</a></td>
<td><p>* = approvals, voip, whatsapp</p><p>This allows to easily set extra values on records without having to repeat the model name or the id in many different places.</p><p>Part of task-3605717</p><p>closes odoo/enterprise#67343</p><p>Related: odoo/odoo#174507 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-07-24</td>
<td>Thibault Francois</td>
<td><a href="https://github.com/odoo/enterprise/commit/742d7c969569cf7057c6341551190849ba36e8b0" target="_blank" rel="noopener">[FIX] voip: speed up call to _format_call_activities</a></td>
<td><p>We notice that get_today_call_activities is a very frequent call that spend a lot of time runing sql queries.</p><p>during 1h30 it was called 20515 times for an average of 719ms of sql times on odoo.com database.</p><p>It was cause by _format_call_activities which can be called with many hundreds of activities</p><p>before this commit for each activity _mail_get_partners and mail_partner_format were called once per activity. It take 581s for all the internal user of odoo.com database</p><p>after this commit the method _mail_get_partners and mail_partner_format are called for an entire batch as it&#x27;s intended. The same computation for internal user takes now 84s</p><p>closes odoo/enterprise#67718</p><p>X-original-commit: b31cf7dec220a125adbb860bc89165d5eba35ec3 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Thibault Francois &lt;tfr@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-07-19</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/5a71e4659695e2cb1fa1a9abec8b5acb4637f2b2" target="_blank" rel="noopener">[REF] mail_enterprise, *: introduce support for relations in Store data</a></td>
<td><p>* = knowledge, voip, whatsapp</p><p>And adapted the most simple cases.</p><p>Part of task-3605717</p><p>closes odoo/enterprise#66544</p><p>Related: odoo/odoo#172863 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-07-05</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/5e6d976d58f78b08844a7140dbd8de50567d628b" target="_blank" rel="noopener">[REF] voip: convert partner format to store</a></td>
<td><p>Part of task-3605717</p><p>Part-of: odoo/enterprise#65894 Related: odoo/odoo#171585 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-06-24</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/f04ca25c6baab2ffc6e578b7cc7f08881c180050" target="_blank" rel="noopener">[REF] voip: make get_today_call_activities store data ready</a></td>
<td><p>Part of task-3605717</p><p>Part-of: odoo/enterprise#65411 Related: odoo/odoo#170709 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-06-24</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/2ae7759618fa62a73e657d6e681117cd08f2109e" target="_blank" rel="noopener">[REF] voip: flatten persona data in get_today_call_activities</a></td>
<td><p>Part of task-3605717</p><p>Part-of: odoo/enterprise#65411 Related: odoo/odoo#170709 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-06-21</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/a00faee178b94e455a670fb59a3c77c3827b3b49" target="_blank" rel="noopener">[IMP] voip: allow &quot;infinite scrolling&quot;</a></td>
<td><p>Implement &quot;infinite scrolling&quot; in recent calls/contacts tabs.</p><p>Task-3984680</p><p>closes odoo/enterprise#65596</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-06-18</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/716f5216269b4b76de91883fd26d82e8ae3614ab" target="_blank" rel="noopener">[FIX] voip: fix test failure</a></td>
<td><p>&quot;Switch audio input&quot; test failed in an undeterminitic manner on this line: https://github.com/odoo/enterprise/blob/e808e583e9d406735a05dab42bf24f8b89899b67/voip/static/tests/softphone/device_selection_dialog.test.js#L54 After clicking the &quot;Call&quot; button, func `makeCall` has asynchronous call before setTimeout: https://github.com/odoo/enterprise/blob/e808e583e9d406735a05dab42bf24f8b89899b67/voip/static/src/core/user_agent_service.js#L268 https://github.com/odoo/enterprise/blob/e808e583e9d406735a05dab42bf24f8b89899b67/voip/static/src/core/user_agent_service.js#L284 It may happen that because of the asynchronous call, our `advanceTime(5000)` is executed before we call `setTimeout` in `makeCall`. To avoid this, we check the dom change to make sure the asynchronous call has finished before we continue.</p><p>closes odoo/enterprise#65246</p><p>X-original-commit: 7065a4500e5351cc75323b2efc4a85ea0cf3a0e0 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-06-10</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/eabdad3f0c95c8f75ad7ca4c6ab694f498a2a5d9" target="_blank" rel="noopener">[FIX] voip: attempt to reconnect after WebSocket disconnection</a></td>
<td><p>Task-3610647</p><p>closes odoo/enterprise#65077</p><p>X-original-commit: d084861f3b8fe08a948e94952b747c9161a8ba8b Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-06-10</td>
<td>dane@odoo.com</td>
<td><a href="https://github.com/odoo/enterprise/commit/92c9d5bf36a2a22fc139db89b1abf4199a03245a" target="_blank" rel="noopener">[FIX] voip: no crash on adding removed call activity</a></td>
<td><p>When call activity gets deleted or added, the related component has to be re-rendered so that most uptodate information is shown, otherwise this might lead to crash if those activities are accessed. To mitigate the issue, component re-rendering is invoked when call activity gets added or removed from the queue. The activity removal happens when `delete_call_activity` function is invoked directly, which crafts domain, to search the activies that are outdated.</p><p>Steps to reproduce:</p><p>- on crm lead schedule call activity and make sure that activity is old - book activity and save it - add it to Call Queue - remove it from Call Queue - try to access it/click on it</p><p>X-original-commit: 2ed3780ade29b0e1f404aca85dccf11f1dbb21a1</p><p>.</p><p>closes odoo/enterprise#64476</p><p>X-original-commit: edb5ea7c5ba8d80d5746aabd12e99f571e820c5b Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt; Signed-off-by: Dato Nefaridze (dane) &lt;dane@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-05-29</td>
<td>Rahul Prajapati</td>
<td><a href="https://github.com/odoo/enterprise/commit/04aca233750952f1a9eff581fc22761087fee403" target="_blank" rel="noopener">[REF] voip: convert tests to hoot</a></td>
<td><p>This commit aims to convert QUnit tests which rely on mail/test_utils to hoot.</p><p>Part of task-3818666</p><p>closes odoo/enterprise#63499</p><p>X-original-commit: 61faf35a9656c63ed007033453435dcaaff58e34 Related: odoo/odoo#167341 Signed-off-by: Matthieu Stockbauer (tsm) &lt;tsm@odoo.com&gt; Signed-off-by: Rahul Prajapati (rapr) &lt;rapr@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-05-22</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9bedb5999c06e7c49e4524c6218a48ddbac3df73" target="_blank" rel="noopener">[IMP] voip: Include the version of Odoo in the UserAgent header</a></td>
<td><p>Include the version of Odoo in the UserAgent header of SIP requests so that the information is available to the provider.</p><p>Task-3940569</p><p>closes odoo/enterprise#63509</p><p>X-original-commit: b89add4513af4e659d2b96b407cc7328603817b1 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-05-21</td>
<td>Xavier Luyckx (xlu)</td>
<td><a href="https://github.com/odoo/enterprise/commit/a9821fae63c1fa24e996f0227c2bec03e6228468" target="_blank" rel="noopener">[IMP] voip: center softphone Error Message (UI)</a></td>
<td><p>Prior to this commit, the VoIP error text was not properly centered within the overlay div, and had dark-mode background color issues.</p><p>This commit restructures the code for improved maintainability, centers the error text, updates a few classes and adapts the design for dark mode.</p><p>task-3539670</p><p>closes odoo/enterprise#63096</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-05-13</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/edb951ae9664cce6522cd2feda831c6e6c42158d" target="_blank" rel="noopener">[FIX] voip: search contact/activity/call onInput</a></td>
<td><p>When typing in the softphone&#x27;s search bar, the search result doesn&#x27;t appear immediately; the user has to press Enter to make it happen. This is because the input field uses the t-model directive with the trim modifier. The trim modifier silently switches the directive to lazy mode, meaning that the content of the field is updated whenever the onchange event is fired instead of oninput.</p><p>This commit removes the trim modifier to fix the problem.</p><p>opw-3890028</p><p>closes odoo/enterprise#62747</p><p>X-original-commit: 1cab6b1aa9ca0aa3214992999e078447455b4824 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-05-07</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/e52e757e99fdf7998c8c508ca4000b46a5fddb37" target="_blank" rel="noopener">[FIX] voip: open record from correspondence details</a></td>
<td><p>Since the complete refactoring of the module in 17, the &quot;open record&quot; button of the CorrespondenceDetails no longer works: Clicking it causes the softphone to fold, but nothing more happens (the record is not displayed as expected).</p><p>This is because we started retrieving the ORM service from the useService hook, whereas before we used to retrieve it from the env. useService untransparently wraps the ORM call in a &quot;_protectMethod&quot;, which drops the return value of an RPC if the component that made it has been destroyed in the meantime. Since clicking the &quot;open record&quot; button also folds the softphone, it destroyed the Correspondence Details component, preventing it from ever receiving the RPC&#x27;s return value.</p><p>This commit changes the way the ORM service is retrieved in order not to use useService and to solve the problem.</p><p>opw-3904519</p><p>closes odoo/enterprise#62159</p><p>X-original-commit: 439b14957cf4282b18fcf1ed959a5467ada90a17 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-04-24</td>
<td>Ryan Cen</td>
<td><a href="https://github.com/odoo/enterprise/commit/b7cd55da79ed2de1acf10caadfb8163f9ad310cf" target="_blank" rel="noopener">[FIX] voip: add back customer info on calls</a></td>
<td><p>Functionality was removed during the refactor of the voip module between 16 and 17 where you could enter any number through the phone keypad on voip or receive a call and have access to the information on the customer with the associated phone number.</p><p>This was a functionality that the customer on the ticket was using prior to upgrade.</p><p>I have added back this functionality through a non blocking call to a new function in voip.call that will search up the contact based on the phone number entered in the softphone. When the data comes back from the back end the UI will be updated with the partner information if it found it.</p><p>This also has a side effect of fixing the customer wizard button as well.</p><p>opw-3770625</p><p>closes odoo/enterprise#62048</p><p>X-original-commit: 1dd49e09a6907767593af8a2ec72ec79917ba077 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-04-09</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/2a0cf55c3e67bd89fe736e3d43cd03dbdb313dca" target="_blank" rel="noopener">[REF] voip{,_crm,_onsip}: remove useless attributes/comments</a></td>
<td><p>Remove: 1. Licence comments 2. utf-8 encoding attributes/comments 3. xml:space=&quot;preserve&quot; attributes</p><p>closes odoo/enterprise#60317</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-03-08</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/636c4c62044ebfb7bd84b3be43d840d58b2564e0" target="_blank" rel="noopener">[REF] mail, *: tests: use serverState</a></td>
<td><p>* = account_accountant, approvals, documents, mail_enterprise, sign, voip, voip_onsip, website_helpdesk_livechat, whatsapp</p><p>In hoot, pyEnv current state was moved to a new object called `serverState`. This commit prepares the tests to use this new object to reduce the diff in the main PR.</p><p>closes odoo/enterprise#58350</p><p>Related: odoo/odoo#157058 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-03-08</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/4354a4ea1810837565b8c98cf016127bd687b7c7" target="_blank" rel="noopener">[IMP] voip: remove unused imports</a></td>
<td><p>Part-of: odoo/enterprise#58336</p></td>
</tr>
<tr>
<td>2024-03-08</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/307476d5f54c6c026bb716ae2a7ae57fb168b819" target="_blank" rel="noopener">[REF] voip: tests: rename pyEnv searchRead</a></td>
<td><p>The python method name is `search_read`. This was corrected in hoot, this commit prepares the tests for the change by adapting the old one.</p><p>Part-of: odoo/enterprise#58350</p></td>
</tr>
<tr>
<td>2024-03-08</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/1378f5e48ebc20bfce71b6f49e6c8754308c92b6" target="_blank" rel="noopener">[IMP] voip: remove useless licence comments</a></td>
<td><p>closes odoo/enterprise#58336</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-03-08</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/04b3af762e9afde361618707a0676a50ee67eb78" target="_blank" rel="noopener">[IMP] voip: make optional parameters explicit</a></td>
<td><p>&quot;Implicit Optionals&quot; are prohibited by PEP 484. This commit adapts VoIP code to make them explicit.</p><p>Part-of: odoo/enterprise#58336</p></td>
</tr>
<tr>
<td>2024-03-07</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/0e0969d97b7d37bea5a4814babf888d40807fc07" target="_blank" rel="noopener">[IMP] voip: add Hold/Unhold button to voip</a></td>
<td><p>We finally have a button to hold/unhold during a call.</p><p>Task-3670392</p><p>closes odoo/enterprise#58249</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-03-06</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/817e51e8e938d3e0855a2d2c8e4c2193d7a6fc01" target="_blank" rel="noopener">[REF] mail_enterprise, *: tests: import openFormView</a></td>
<td><p>* = account_invoice_extract, account_online_synchronization, knowledge, test_mail_enterprise, voip, website_helpdesk_livechat, whatsapp</p><p>Rather than having to extract it from start on every test, we ca now import it once at the top.</p><p>Part-of: odoo/enterprise#58170</p></td>
</tr>
<tr>
<td>2024-03-06</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/5d7d89a064fb90033b11b76f9a96bd257fa843d1" target="_blank" rel="noopener">[PERF] voip: avoid useless bus notifications when modifying activities</a></td>
<td><p>Try to avoid useless bus notifications, especially at write time. Check we effectively have to send them depending on activities modified.</p><p>Task-3777606</p><p>X-original-commit: e09fa3d7821bdc9559f307b369ba4a9250b75ef0 Part-of: odoo/enterprise#90235 Related: odoo/odoo#219005 Signed-off-by: Thibault Delavallee (tde) &lt;tde@openerp.com&gt;</p></td>
</tr>
<tr>
<td>2024-03-05</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/fa12d843d041e22ff83a349ba2f0573e98946ad2" target="_blank" rel="noopener">[REF] mail, *: tests: add missing await</a></td>
<td><p>* = knowledge, mrp_workorder, voip, website_helpdesk_livechat</p><p>In preparation of hoot convertion, let&#x27;s ensure all tests properly await their &quot;open&quot; functions.</p><p>Part-of: odoo/enterprise#58075</p></td>
</tr>
<tr>
<td>2024-02-27</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/06f8dd25589c6d4a282d051453b6127411a6a40b" target="_blank" rel="noopener">[FIX] voip: call stuck in invitation view</a></td>
<td><p>Description: ============ If the execution of the code is abruptly interrupted during an incoming call invitation (e.g. by closing the page), when the call is reopened in the softphone, the correspondence details of the call get stuck in the invitation view.</p><p>This commit prevents this from happening by also checking for the presence of an actual session as a condition to display the call invitation view.</p><p>How to reproduce: ================= 1. Configure a database with VoIP in production mode 2. Receive an incoming call invitation and refresh the page without accepting/rejecting it 3. Re-open the call and notice that it&#x27;s stuck on the invitation view :((</p><p>Task-3770997</p><p>closes odoo/enterprise#57668</p><p>X-original-commit: 04b8d183a3b49d4e8fdaab9bf1797fab2d1351aa Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-02-26</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9e31c992928fcbc5b9d1b3dac6b9e2cdbdd2f1d5" target="_blank" rel="noopener">[FIX] voip: user is stuck in busy state after a missed call</a></td>
<td><p>When an incoming call is cancelled by the remote party, the current session is not properly cleared, causing Odoo to reject all subsequent calls, assuming the user is busy, since the previous session is still present.</p><p>This commit fixes the problem by properly clearing the current session when a CANCEL message is received.</p><p>closes odoo/enterprise#57626</p><p>X-original-commit: 7244a4cd9453fbc897db638cb638da914f4be236 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-02-22</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/59d7b430372cdfd5914dfac120b791a85063dd0a" target="_blank" rel="noopener">[FIX] voip: no crash on transfer to another device</a></td>
<td><p>The forward-port of #54535 neglected to adapt the code it introduced to the move of settings to its own model. Because of this oversight, this.settings is undefined, and this.settings.external_device_number would crash.</p><p>This commit adapts the code to properly retrieve the config, and adds a test to make sure this never happens again.</p><p>opw-3743892</p><p>closes odoo/enterprise#57294</p><p>X-original-commit: 984c2d964594c36dd8d9ad909cadbacd5ba1e89f Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-02-15</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/05d64c79087878517269bf5f3fda64cd14b8b473" target="_blank" rel="noopener">[IMP] voip: remove useless &quot;@odoo-module&quot; comments</a></td>
<td><p>.js files are now treated as odoo modules by default if they are under /static/src or /static/tests.</p><p>This commit removes the now useless odoo module declarations from VoIP&#x27;s codebase.</p><p>closes odoo/enterprise#56709</p><p>References: https://github.com/odoo/odoo/pull/142858 Signed-off-by: Tiffany Chang (tic) &lt;tic@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-02-06</td>
<td>Didier (did)</td>
<td><a href="https://github.com/odoo/enterprise/commit/70429cee1ebc6ab853ffa21ad89787554c0d069e" target="_blank" rel="noopener">[IMP] sign,voip: rename activity props</a></td>
<td><p>PR community: https://github.com/odoo/odoo/pull/152303</p><p>closes odoo/enterprise#55945</p><p>Related: odoo/odoo#152303 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-02-06</td>
<td>Louis (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/40de0be0ac8bb9203d3caaa0ad4db808e0f39353" target="_blank" rel="noopener">[IMP] voip: upgrade SIP.js library from 0.20.0 to 0.21.2</a></td>
<td><p>So that we can benefit from the latest bug fixes, including onsip/SIP.js@f06939c, which we already had to backport[1] to prevent crashes in stable versions of Odoo.</p><p>Changelogs: https://github.com/onsip/SIP.js/releases [1]: https://github.com/odoo/enterprise/pull/53581</p><p>Task-3724836</p><p>closes odoo/enterprise#55933</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-02-05</td>
<td>Louis (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/cbad1e21e754b098a54f11be19422bbfcf638dcf" target="_blank" rel="noopener">[FIX] voip: do not crash on cancelled call invitation</a></td>
<td><p>Sending a CANCEL request while a SIP session is being established will result in a 487 Request Terminated response to the pending INVITE request.</p><p>Prior to this commit, cancelling a SIP session would cause the session to be deleted twice: once immediately after the CANCEL request was sent, then a second time after the response to the INVITE request was received, resulting in a crash the second time because the session had already been deleted.</p><p>After this commit, 487 Request Terminated responses are ignored, preventing the code from attempting to delete the already deleted session and causing a crash.</p><p>opw-3702140</p><p>closes odoo/enterprise#55912</p><p>X-original-commit: 2efe0d24180e6e4afc2e95a95502b1eda859dba6 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-01-24</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/34678f588f72e2238de2d898d59db2ad3f5e055a" target="_blank" rel="noopener">[REF] mail_enterprise, *: move remaining values out of init messaging</a></td>
<td><p>* = documents, test_discuss_full_enterprise, voip, website_helpdesk_livechat</p><p>In attempt to remove the extra RPC made by `init_messaging` and extra await on `isReady` in code, move easy data from init to session.</p><p>closes odoo/enterprise#54926</p><p>Related: odoo/odoo#150625 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-01-23</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/949fc8b752760b614bf17d493084921c5a4cee2a" target="_blank" rel="noopener">[REF] mail, *: create common helper for building store data</a></td>
<td><p>* = documents, voip, website_helpdesk_livechat</p><p>As filling store data becomes a common pattern, the code will be more manageable with a standard helper.</p><p>Part-of: odoo/enterprise#54926</p></td>
</tr>
<tr>
<td>2024-01-22</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/05c3af0752358920ed5f6dc6bb986d444d4e70e0" target="_blank" rel="noopener">[IMP] mail, *: add systray activity to generic data route</a></td>
<td><p>* = account_accountant, documents, voip, web_studio</p><p>This will remove one RPC at every webclient startup.</p><p>closes odoo/enterprise#54801</p><p>Related: odoo/odoo#150367 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-01-19</td>
<td>Victor Piryns (pivi)</td>
<td><a href="https://github.com/odoo/enterprise/commit/ffe2eb8a932bd38cff15c1722d1e2aa1bc473e5a" target="_blank" rel="noopener">[PERF] voip: add missing indexes on `voip.call`</a></td>
<td><p>Description: Add missing index on `user_id` and `partner_id` to support the searches done in `get_recent_phone_calls` and `_get_number_of_missed_calls`. In a long living database that is making heavy use of the module, the table can grow to the millions of records.</p><p>closes odoo/enterprise#56312</p><p>X-original-commit: e9dac5c7dcf9afcb6f9094bba1e3ad92b27512ef Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Piryns Victor (pivi) &lt;pivi@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-01-18</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/1fc584408dc89abb96479a75dd7d25a405369991" target="_blank" rel="noopener">[REF] mail_enterprise, *: add fetchData helper to group RPC calls</a></td>
<td><p>* = account_accountant, documents, voip, web_studio, website_helpdesk_livechat</p><p>In particular, init_messaging and failures are now done in a single RPC.</p><p>Time control tests have to be adapted to take into account the extra delay that is introduced before fetching data.</p><p>Discuss action is made to render even if messaging is not initialized in order to resolve the action promise, to know when to advance time.</p><p>The new async step helper is used to guarantee proper order between RPC.</p><p>closes odoo/enterprise#54575</p><p>Related: odoo/odoo#149860 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-01-17</td>
<td>Louis (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/ce95ee843f9d5c2ed6b622ed54c77757b8224722" target="_blank" rel="noopener">[FIX] voip: sanitize number before calling makeURI</a></td>
<td><p>Sanitizes phone numbers before using them to build request URIs. This will prevent failure whenever a phone number contains spaces.</p><p>Task-3689342.</p><p>closes odoo/enterprise#55046</p><p>X-original-commit: 1fe81a9da4680c9cb4e9104072a23099078ed511 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-01-17</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/76c74bcb33362e401a2725187c9b96b36eee1133" target="_blank" rel="noopener">[REF] mail, *: fill store self (user) with data from session</a></td>
<td><p>* = approvals, voip, website_helpdesk_livechat</p><p>This will ease the transition to removing await dependency on init_messaging, as the biggest remaining reason was to know the current user.</p><p>closes odoo/enterprise#54509</p><p>Related: odoo/odoo#149561 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-01-16</td>
<td>kthe-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/8110ccc2519415b8586c8e83448dcd4624fada60" target="_blank" rel="noopener">[FIX] voip: fixed validation error while clicking on call button</a></td>
<td><p>- master - 17.0</p><p>Steps to reproduce:</p><p>- Open Field Service / HR Employee Application - Open any task / employee record - Click on call button in mobile or phone field</p><p>Issue:</p><p>- Throws out a validation error to the user saying the mobile number which is a required field is not set</p><p>Cause:</p><p>- The Phone Widget Activity Patch which supplies the value of phone number from the field in which the call button has been presses has an issue - It gathers the field name in which phone widget is present and matches it to mobile or phone and returns either of the values</p><p>Solution:</p><p>- The simple solution is to supply the mobile number based on the field it is clicked rather than a fixed setup of supplying only mobile or phone values.</p><p>task-3678808</p><p>closes odoo/enterprise#56063</p><p>X-original-commit: e8ac43c204eaf09c03c54b7741511b0a3a6b12ab Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-01-16</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/1c4471f24be35cf97bf9e5cf1bc6e99219fbf150" target="_blank" rel="noopener">[REF] mail, *: add data generic route</a></td>
<td><p>* = account_accountant, test_discuss_full_enterprise, voip, web_studio</p><p>The goal is to centralize the entry for all data, allowing to batch all requests together.</p><p>Tests are adapted to check for params, as the route name itself becomes insufficient.</p><p>closes odoo/enterprise#54496</p><p>Related: odoo/odoo#149712 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-01-15</td>
<td>Louis (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/0eb03c78b730fc6079fe64f70905ceef7830a00f" target="_blank" rel="noopener">[FIX] voip, voip_onsip: properly set voip_onsip override</a></td>
<td><p>Follow-up of #53729.</p><p>With only VoIP installed, without voip_onsip, running the test would result in a crash because onsip_auth_username doesn&#x27;t exist on the mocked model.</p><p>This commit fixes that by correctly adding onsip_auth_username only if voip_onsip is installed.</p><p>closes odoo/enterprise#54290</p><p>Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-01-10</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/6a0b4afd5c9db75fcd7f5b8dd58588b9f7a8007c" target="_blank" rel="noopener">[REF] mail_enterprise, *: move init messaging data inside Store</a></td>
<td><p>* = documents, test_discuss_full_enterprise, voip, website_helpdesk_livechat</p><p>closes odoo/enterprise#53934</p><p>Related: odoo/odoo#148549 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-01-05</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/781c6fcd0b293280bed994e3a3eaa6e9bd884268" target="_blank" rel="noopener">[FIX] voip: adapt from settings becoming a discuss model</a></td>
<td><p>Follow-up of https://github.com/odoo/enterprise/pull/50720</p><p>PR above turned Settings into a model, to ease inserting data from the server. To accomodate from this change, accessing to settings has to go to `store`.</p><p>Some LOCs were not properly adapted, which this commit fixes.</p><p>closes odoo/enterprise#53729</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-01-04</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/89ef86962f0f78cf6e7ed1661fb5d7a3c594efeb" target="_blank" rel="noopener">[REF] *: remove notification event from the bus service</a></td>
<td><p>*: iot, pos_preparation_display, pos_restaurant_appointment, spreadsheet_edition, voip.</p><p>closes odoo/enterprise#53496</p><p>Related: odoo/odoo#147747 Signed-off-by: Matthieu Stockbauer (tsm) &lt;tsm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2024-01-03</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/6570a9735de62130b6451202fb33fac70a0e7901" target="_blank" rel="noopener">[FIX] voip: avoid error when user&#x27;s microphone access is denied</a></td>
<td><p>To reproduce: 1. Install and configure the VoIP module in prod mode 2. Place a call to anyone 3. Block the browser from accessing the microphone Error: Invalid state transition from Terminated to Terminated</p><p>Fixed in https://github.com/onsip/SIP.js/commit/f06939c119149a3e00ad8acf69f37360d3331a62 Adapt it in old version.</p><p>Task-2810572</p><p>closes odoo/enterprise#56016</p><p>X-original-commit: dbc285f65b1e7c9a18ca662db1cc8211924ffafb Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-12-21</td>
<td>Xavier-Do</td>
<td><a href="https://github.com/odoo/enterprise/commit/39bec2573e2618ecd7fae38ffd8d129df654210d" target="_blank" rel="noopener">[IMP] timer, voip, make some call_kw readonly</a></td>
<td><p>closes odoo/enterprise#36587</p><p>Related: odoo/odoo#112000 Signed-off-by: Xavier Dollé (xdo) &lt;xdo@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-12-06</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/13d95867e5d9a6d8edd61444d0516817d2299942" target="_blank" rel="noopener">[FIX] voip: make `how_to_call_on_mobile` editable on user.setting view</a></td>
<td><p>This commit makes `how_to_call_on_mobile` editable from the res.users form.</p><p>Note: simply setting &quot;readonly=0&quot; resulted in a crash when no value is provided for how_to_call_on_mobile, as it is a required field. Even though it has a default value in res.users.settings, the value was not properly forwarded to res.users. It turns out that related fields should not be used with an inverse, causing all sort of odd behavior otherwise. That&#x27;s why this commit also replaces relateds with computes.</p><p>closes odoo/enterprise#57076</p><p>X-original-commit: 01fbdb03a1eeab56244d282f336f312d260c321f Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-12-06</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/0876185b1e23ee3b10b624cd1ab989435a083b58" target="_blank" rel="noopener">[FIX] voip_onsip: settings undefined</a></td>
<td><p>Follow the change of odoo/odoo#141904 user.settings service is changed from service to record and is now in mail.store service. Missing this change in voip_onsip.</p><p>closes odoo/enterprise#52242</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-12-05</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/4f162e7e1ea152c7a5f7fa3e66351bf9effeeebf" target="_blank" rel="noopener">[IMP] voip, *: add support for multiple voip providers</a></td>
<td><p>* = test_discuss_full_enterprise, voip_onsip</p><p>Add the support for multiple voip providers.</p><p>Task-3130964</p><p>closes odoo/enterprise#55530</p><p>Related: odoo/upgrade#5615 Signed-off-by: Yuchen Huang (yhu) &lt;yhu@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-11-22</td>
<td>vevi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/68d2b016bf16abfe48feef7a60b9e228a3154168" target="_blank" rel="noopener">[FIX] voip: give valid domain format in search records in voip_call</a></td>
<td><p>This traceback arises when the user tries to call Recent.</p><p>To reproduce this issue: 1. Install &#x27;VoIP&#x27; 2. Open Discuss/Softphone/Recent 3. Try to search for something in the Voip search bar</p><p>Error: &#x27; ValueError: too many values to unpack (expected 3)&#x27;</p><p>When the user tries to search for something in the search bar an invalid domain format is formed in &#x27;get_recent_phone_call&#x27;method. Which leads to the traceback from here</p><p>https://github.com/odoo/enterprise/blob/5c42708683905cfb5fe8c1005aabbbc9fb016fa2/voip/models/voip_call.py#L79-L85</p><p>After applying this commit will resolve the issue by giving a valid domain format to search.</p><p>sentry-4644858097</p><p>closes odoo/enterprise#51358</p><p>X-original-commit: 981c224178b4331da4ff7b5db7a1e8bfb2d54eae Signed-off-by: Adrien Widart (awt) &lt;awt@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-11-21</td>
<td>yhu-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/2e8f18801156a8069e26fb3d61d4f8d84893e891" target="_blank" rel="noopener">[FIX] voip: cursor position ignored when click on numpad</a></td>
<td><p>Fixed the issue when click on the numpad (number or backspace), cursor position is always ignored.</p><p>closes odoo/enterprise#51817</p><p>X-original-commit: 73b01fa5e1f56d4ab71d67760b15942fb2fa0e31 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-10-27</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/ed55923513cdaf52e6a8541b977c1f2de63ee499" target="_blank" rel="noopener">[FIX] mail,*: markup chatbot livechat message</a></td>
<td><p>*: approvals, voip, whatsapp</p><p>Before this commit, messages in chatbot conversation were not properly markup. This comes from changes from [1] that added trusted insert. Original code in `Record.insert()` makes a model insertion of the data using the `html` flag. Patches must not override `static insert()` as only the super call is affected by the provided `html` flag. For patches to take account of it, they must instead patch `_insert`, with `_` prefix, which is internally called by original `Record.insert()`.</p><p>In addition: - `static insert` allows array of data while `static _insert` works with data on single record. Patches were designed with data on single record, so some code were not working properly - Signature of `static insert` has been overloaded with new option `html: true`, so patches must propagate it. They were only propagating `data` and omitting the 2nd paramater, which results in omitting provided `html` thus falling back to `html: false`, resulting to non-escaping message body</p><p>This commit fixes all model patches to override `static _insert` instead of `static insert`.</p><p>[1]: https://github.com/odoo/odoo/pull/139501</p><p>closes odoo/enterprise#49784</p><p>X-original-commit: 4c8e2b505e70076d34b576ff11a5c22a055e58a4 Related: odoo/odoo#140202 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt; Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-10-24</td>
<td>Rémy Voet (ryv)</td>
<td><a href="https://github.com/odoo/enterprise/commit/87fb7ff491f62de2d9e4ab5a2a216474fc718e74" target="_blank" rel="noopener">[REM] *: change due to removal of `unaccent` parameter</a></td>
<td><p>In the community branch, we remove the `unaccent` parameter from `Field`. Then there are some changes to make in the enterprise: - Remove `unaccent=False` from all `parent_path` fields. - Since we remove `unaccent=False` from `phone` + `mobile` of `res.partner`, we replace the `ilike` with `like` to have the same behavior as before in `get_contacts` (voip module).</p><p>closes odoo/enterprise#49448</p><p>Related: odoo/odoo#139568 Signed-off-by: Raphael Collet &lt;rco@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-10-24</td>
<td>Louis (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/27a7a5245ad2e041048c12beebba2a18901f9d42" target="_blank" rel="noopener">[FIX] voip: properly display calls in “calling” and “ongoing” states</a></td>
<td><p>If for some reason (e.g. a power outage in the middle of a call) the call is never properly terminated, it may be stuck in the “calling” or “ongoing” state.</p><p>Prior to this commit, trying to display a call that was stuck in the wrong state would cause a crash.</p><p>After this commit, the call will be displayed correctly, even if it is in an improper state.</p><p>closes odoo/enterprise#49465</p><p>Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-10-19</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/ffcc2a11bde1a258cc4f4d68298964c3b96091c7" target="_blank" rel="noopener">[FIX] voip: do not return calls at init for portal users</a></td>
<td><p>closes odoo/enterprise#49323</p><p>Signed-off-by: Matthieu Stockbauer (tsm) &lt;tsm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-09-26</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/a2057eae62283005812acefd3fffdcb428f3f0f7" target="_blank" rel="noopener">[FIX] voip: fix partner search domain</a></td>
<td><p>Since https://github.com/odoo/odoo/pull/122085, display_name on res.partner is no longer stored, and therefore can&#x27;t be used in a search domain.</p><p>This commit replaces occurrences of display_name in search domains with complete_name, which is now the correct field to use.</p><p>Task-3518197</p><p>closes odoo/enterprise#47972</p><p>X-original-commit: 97336b71ab3031ce227c7a7a41e6090420c7c3b8 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-09-19</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b9d1e520cc6633e7d5fee17cfe962a8084c3891f" target="_blank" rel="noopener">[FIX] voip: restore incoming call after fold/unfold</a></td>
<td><p>Before this commit: if the dialing panel is folded while a call is incoming, unfolding it afterwards would cause the call accept/reject buttons to disappear, making it impossible to do anything but to wait for the caller to hang up.</p><p>After this commit: folding then unfolding the panel doesn&#x27;t break the state.</p><p>opw-3090255</p><p>closes odoo/enterprise#47870</p><p>X-original-commit: 1bb69232e7ebbce79a7263a1f9248e665abd996c Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-09-19</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/01ce3c6f93bc1f39848bfaf39d6e6300adb3020b" target="_blank" rel="noopener">[FIX] voip: transfer popover improvements</a></td>
<td><p>+ Clears the contact suggestion list when the transfer popover is blank + Ensures that a value is always provided as a phone number + Refactoring</p><p>opw-3480011</p><p>closes odoo/enterprise#48224</p><p>X-original-commit: 2c404499eda1374916fe5c61411d08c15fda3c33 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-09-13</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/31e686da7ec1b7d9eb6a9f3e7d7b93d5c0693544" target="_blank" rel="noopener">[REF] mail, *: tests: refactor `contains` to further remove `jQuery`</a></td>
<td><p>* = account_accountant, account_invoice_extract, account_online_synchronization, approvals, crm_enterprise, documents, documents_spreadsheet, helpdesk, hr_gantt, knowledge, mail_enterprise, project_enterprise, sign, test_mail_enterprise, timesheet_grid, voip, web_enterprise, web_studio, website_helpdesk_livechat, whatsapp</p><p>Enterprise counter-part of community changes.</p><p>closes odoo/enterprise#47064</p><p>Related: odoo/odoo#134652 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-09-04</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/582165788cece2a28a76077f1085d00c5d110bf5" target="_blank" rel="noopener">[REF] mail, *: tests: remove `afterNextRender`</a></td>
<td><p>* = account_online_synchronization, test_mail_enterprise, voip, web_studio</p><p>Follow up of https://github.com/odoo/odoo/pull/130451</p><p>`contains` is faster and functionally more significant.</p><p>closes odoo/enterprise#46739</p><p>Related: odoo/odoo#134025 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-08-31</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/d99a615fbbc675a541502d5541a75ef60ed00cbc" target="_blank" rel="noopener">[IMP] voip: only load SIP.js library for actual VoIP users</a></td>
<td><p>This commit creates a separate bundle for the SIP.js library and only loads it when the current user can use VoIP (i.e. when they have VoIP credentials).</p><p>closes odoo/enterprise#46649</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-08-31</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/33ebf000b3f951bfae7c098b4ff782062edb4416" target="_blank" rel="noopener">[REF] voip: tests: replace remaining jQuery text() occurrences</a></td>
<td><p>closes odoo/enterprise#46603</p><p>Related: odoo/odoo#133717 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-08-21</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/1c775ad78daeb3ae9801fdfcdf7101bf4440af83" target="_blank" rel="noopener">[IMP] mail_enterprise,*:tests:use `contains` in `click`, `insertText`</a></td>
<td><p>* = account_online_synchronization, approvals, crm_enterprise, documents, knowledge, sign, test_discuss_full_enterprise, test_mail_enterprise, voip, website_helpdesk_livechat</p><p>`contains` is more efficient than `afterNextRender` as it does not wait for several extra animation frames, and it is functionally more meaningful.</p><p>closes odoo/enterprise#44999</p><p>Related: odoo/odoo#130451 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-08-18</td>
<td>Adrien Dieudonne</td>
<td><a href="https://github.com/odoo/enterprise/commit/1d2d937eafb70e6d06b4cea3f410bdd8b4cde3b9" target="_blank" rel="noopener">[REF] voip: replace BlockUI by using custom one</a></td>
<td><p>Note that you can now close the dial popup by clicking on the close button located in the title.</p><p>Task ID: 3439226</p><p>closes odoo/enterprise#46166</p><p>Related: odoo/odoo#132295 Signed-off-by: Pierre Paridans (app) &lt;app@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-08-17</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/bbdb033031720365c448c6f3de40906ee0c4243e" target="_blank" rel="noopener">[REF] voip: complete refactoring</a></td>
<td><p>The code of the VoIP module is getting quite old and has accumulated a lot of technical debt over the years, making it very difficult if not impossible to add new features and fix some bugs. An upgrade of the code to our current coding standards is required prior to any further improvements.</p><p>This commit rewrites the code to use the newest APIs. In particular, it rewrites all the javascript code in a more declarative fashion, using Owl components and services instead of the old widgets.</p><p>Task-2376357.</p><p>closes odoo/enterprise#38339</p><p>Related: odoo/upgrade#5021 Related: odoo/odoo#115689 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-08-17</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/8734e5ddb573a6fc21477ec13c55e054d66af3c9" target="_blank" rel="noopener">[IMP] voip, voip_{crm,onsip}: format python code with Black</a></td>
<td><p>closes odoo/enterprise#45919</p><p>Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-08-02</td>
<td>Aaron Bohy</td>
<td><a href="https://github.com/odoo/enterprise/commit/3169752dbf5943df41133af8b7b50c0d24a4dcce" target="_blank" rel="noopener">[REF] *: use new formatters instead of legacy ones</a></td>
<td><p>*mrp_mps,mrp_workorder,voip</p><p>Part of task~3439226</p><p>Part-of: odoo/enterprise#45015</p></td>
</tr>
<tr>
<td>2023-08-01</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9591fca4d30d574db08e55a093066c8f3b1903e9" target="_blank" rel="noopener">[FIX] voip: restore missing class</a></td>
<td><p>Put a class on the softphone header icon to allow it to be retrieved from the javascript code.</p><p>closes odoo/enterprise#45088</p><p>X-original-commit: e81e2487de5e65a458dcdd28a2d9514157cefbab Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-07-28</td>
<td>bara-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/362dc29bf8b40ce1cd0f8ffe4c763e312d2e14e2" target="_blank" rel="noopener">[FIX] voip: call from mailing list contacts</a></td>
<td><p>when user clicks on call widget in mailing list contacts traceback will appear.</p><p>steps to produce: 1) install mass_mailing_sms and voip. 2) open one record and add mobile number. 3) click on mobile number.</p><p>Error: A traceback appears: &quot;IndexError: list index out of range&quot;</p><p>https://github.com/odoo/enterprise/blob/22992c1226268111ebf66f39214d8e15d0ede2e3/voip/models/voip_phonecall.py#L322 In the mailing.contact model, there is no field of type many2one with a comodel name of res.partner. As a result, the partner_field_name returns an empty list, and attempting to access the 0th element of an empty list is not possible.</p><p>sentry-4306579710</p><p>closes odoo/enterprise#44807</p><p>X-original-commit: 37200401bdb1901a0abff895180945a657960576 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Bansi Ranpariya (bara) &lt;bara@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-07-26</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/cba34344c55f59ad83f7ef351baab7bf2aa33d5d" target="_blank" rel="noopener">[REF] voip: move voip-reload-chatter to voip bus</a></td>
<td><p>Part of task-3265211</p><p>closes odoo/enterprise#44583</p><p>Related: odoo/odoo#129583 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-07-26</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/89c915835acaf817b027ecd040997ab2ac35500d" target="_blank" rel="noopener">[IMP] *: remove setup manager patches in test</a></td>
<td><p>*: documents, project_enterprise, timesheet_grid, voip, web_studio.</p><p>closes odoo/enterprise#44596</p><p>Related: odoo/odoo#129705 Signed-off-by: Matthieu Stockbauer (tsm) &lt;tsm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-07-18</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/c6cdbdb48d63abe0fee233fd38d42581fa5e43da" target="_blank" rel="noopener">[FIX] voip: redisplay tabs after a call</a></td>
<td><p>6b1d61b2df4037fad7dbc7a0401f9bee0d0647fb removed some `div`s that were no longer useful, but neglected to update some part of the JavaScript code accordingly, resulting in the tabs not being displayed after a call.</p><p>Task-3430368.</p><p>closes odoo/enterprise#44292</p><p>X-original-commit: 2e4ad25856dd20f94ed07509e1c11ea8862494c9 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-07-14</td>
<td>Victor Piryns (pivi)</td>
<td><a href="https://github.com/odoo/enterprise/commit/18cb0b640e9b05fda3799ab2adfc27e395318061" target="_blank" rel="noopener">[FIX] voip: add missing index on selection fields</a></td>
<td><p>Add missing index on `state` of `voip.phonecall` used in: - view search filters - `get_missed_call_info`</p><p>task-3420528</p><p>closes odoo/enterprise#44139</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-07-12</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/de3c60d4a052f13d91435e2697fc71ffbdcffa39" target="_blank" rel="noopener">[REF] voip: simplify partner link on voip activities</a></td>
<td><p>Followup of community code improvements. Finding partner / customer on a given record has been moved directly at model level in community, allowing to cleanup and simplify some code. Finding partners is now a generic feature once &#x27;mail&#x27; is installed.</p><p>Task-3422449 (Mail, Phone: Move and improve field helpers)</p><p>Part-of: odoo/enterprise#45036</p></td>
</tr>
<tr>
<td>2023-07-11</td>
<td>Pierre Pulinckx (pipu)</td>
<td><a href="https://github.com/odoo/enterprise/commit/5b07f7457df73c4f9389a37e9d3845915be3eb7f" target="_blank" rel="noopener">[REM] voip: remove transfer_call action</a></td>
<td><p>This action is no longer used because it is directly triggered in javascript.</p><p>task-3416597</p><p>closes odoo/enterprise#43932</p><p>Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-07-10</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/e590e17840612f7151a960148e5bb46783bb9ec9" target="_blank" rel="noopener">[REM] voip: remove useless sanitized_{phone,mobile} fields</a></td>
<td><p>Since phone numbers in `phone` and `mobile` fields are already sanitized by the phone_validation module, there is no need to have the `sanitized_phone` and `sanitized_mobile` fields.</p><p>Part of task-2832241</p><p>closes odoo/enterprise#27525</p><p>Related: odoo/upgrade#3530 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-07-10</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/dedc5616cfe5c099e2b32a0b08c726fde96e46c8" target="_blank" rel="noopener">[FIX] voip: properly display number of missed calls</a></td>
<td><p>Restore the missing `await` that was omitted when adapting VoIP to Discuss refactoring in c33fe997f270a086150b628ab1021e9469e89c02, causing the missed calls counter to show NaN.</p><p>Task-3416647.</p><p>closes odoo/enterprise#43875</p><p>X-original-commit: 5d016345b982bc09052fbd91c6433708345ceb84 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-07-04</td>
<td>Elisabeth Dickinson</td>
<td><a href="https://github.com/odoo/enterprise/commit/f33831d964f58e812cf93f17c974fb42bf96bebb" target="_blank" rel="noopener">[IMP] voip: realign phone icons in buttons</a></td>
<td><p>task- part of task-3326263</p><p>closes odoo/enterprise#44285</p><p>X-original-commit: 64296aca0a414d562a6032249bc3058541324c2a Signed-off-by: Bouvy Damien (dbo) &lt;dbo@odoo.com&gt; Signed-off-by: Elisabeth Dickinson (edi) &lt;edi@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-06-20</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/74b3db4e6f238d2b1553fd98f0a1d3629e92e9e4" target="_blank" rel="noopener">[FIX] voip: dialing panel style improvements</a></td>
<td><p>+ Realign the search bar with the search button + Remove unwanted scroll bar under the tab list + Remove form view related classes</p><p>closes odoo/enterprise#42888</p><p>X-original-commit: a721f408e04ffae1dff80433ae5a2ad398591da7 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-06-15</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/39f303ba4ff0f575392a675208633618619cd95d" target="_blank" rel="noopener">[FIX] voip: properly restore selected contact after tab refresh</a></td>
<td><p>Selecting a contact in VoIP, then folding/unfolding the VoIP window, then calling the contact causes a crash 😩</p><p>Steps to reproduce: 1. Install VoIP 2. Click on the phone icon in the systray to open the VoIP window 3. Go to the Contacts tab 4. Select a contact by clicking on it 5. Click twice on the top bar of the VoIP window to fold/unfold it 6. Click on the bottom phone button to make a call → 💥💥💥</p><p>This is because the logic that restores the selection after a tab refresh is based on the phonecall id. Since contacts are not phonecalls, they use virtual phonecall ids that are regenerated each time the tab is refreshed, so the virtual id is not longer valid and the restoration mechanism fails.</p><p>This commit fixes the problem by overriding the selection restoration logic for the Contacts tab to reconcile the selection based on the partner id rather than the phonecall id.</p><p>sentry-4066220991</p><p>closes odoo/enterprise#42728</p><p>X-original-commit: bcdb6f8073f5190b71dba214d642428e70177d0e Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-06-09</td>
<td>Sanket Brahmbhatt</td>
<td><a href="https://github.com/odoo/enterprise/commit/93c57d43e26e523da7bbc7103299f004c9bc4e7f" target="_blank" rel="noopener">[FIX] voip: user can perform call from voip</a></td>
<td><p>When the user opens the VOIP app, selects any contact, and clicks on the number the error would be generated.</p><p>Steps to reproduce : -Install the VoIP module. -Open the VoIP app. -Go to the contacts tab. -Select any one contact. -Click on Number Error:  A traceback appears</p><p>sentry-4238616490</p><p>closes odoo/enterprise#42782</p><p>X-original-commit: 0ed92a82daac949a58c37662ce5b05682fa9306a Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-06-07</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/0a11f32e12520511f7997b40691cb4e64f33b6cf" target="_blank" rel="noopener">[FIX] voip: wait for required data to start user agent</a></td>
<td><p>The User Agent was started before the VoIP configuration could be fetched, resulting in it being initialized in an unexpected state, preventing normal use of the application.</p><p>Task-3355307</p><p>closes odoo/enterprise#42128</p><p>X-original-commit: bff13e4c03e1033fe1105467fc10452151207c1a Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-06-05</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/5a857fa8dc07234f19c6c92b142fd7cc47ac479a" target="_blank" rel="noopener">[FIX] voip: apply multi-company when feching calls (2)</a></td>
<td><p>Follow up of https://github.com/odoo/enterprise/pull/41549</p><p>Apparently the fix does not work starting from 16.2, likely due to the introduction of orm fetch method, which changes when fields are loaded in cache and when access rights are checked (the previous code was assuming res_id was already accessible but it is not guaranteed and it is now no longer the case).</p><p>Part of task-3266643</p><p>closes odoo/enterprise#41987</p><p>X-original-commit: a766d03ca5419848bf82725b87bdddf1de9c2d50 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-06-01</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/6dfdd3be38ba6a12dd80674b49e8364e8fa47647" target="_blank" rel="noopener">[FIX] voip: abort obsolete RPC + fix spinner display</a></td>
<td><p>With this commit, if a RPC is pending but the search terms change, the current RPC is aborted and a new one with the updated search terms is made instead.</p><p>This commit also fixes a bug introduced in https://github.com/odoo/enterprise/pull/41704: sending two RPCs in a row could desynchronise the state of the interface, displaying the spinner when it shouldn&#x27;t.</p><p>Part of task-3343258.</p><p>closes odoo/enterprise#41958</p><p>X-original-commit: 73f5646ca95d1bc35263b1f2cbbdc84fed8e916f Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-05-26</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/4a6e9b4dbb472134450e59038e719fc6af4691d6" target="_blank" rel="noopener">[FIX] voip: apply multi-company when feching calls</a></td>
<td><p>Part of task-3266643</p><p>closes odoo/enterprise#41659</p><p>X-original-commit: ae50ddeacd11c4d68cc4adebd9a6538c9e0b300e Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt; Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-05-22</td>
<td>Damien Bouvy</td>
<td><a href="https://github.com/odoo/enterprise/commit/f75db5cef94c74c0d131bfe88e1509d25d1543f7" target="_blank" rel="noopener">[FIX] voip: badly structured views</a></td>
<td><p>closes odoo/enterprise#41355</p><p>X-original-commit: 00896c413a92a7f2035b5dfe70b51acb0eab3cbb Related: odoo/odoo#122111 Signed-off-by: Bouvy Damien (dbo) &lt;dbo@odoo.com&gt; Signed-off-by: Pierre Paridans (app) &lt;app@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-05-22</td>
<td>Elisabeth Dickinson</td>
<td><a href="https://github.com/odoo/enterprise/commit/c44c160bf1687a13feac7343a99e8289cc72e62c" target="_blank" rel="noopener">[FIX] *: switch image&#x27;s `.rounded-circle` to `.rounded`</a></td>
<td><p>*: documents, knowledge, mrp_workorder_hr, planning, social, social_push_notifications, spreadsheet_edition, voip</p><p>Since the Milk refactoring, the backend uses only `.rounded` avatar images. The `.rounded-circle` classes on images have been replaced by `.rounded`.</p><p>task-3336569 part of task-3326263</p><p>closes odoo/enterprise#41798</p><p>X-original-commit: 124f98f797086ad95ade927a0ac688f9f8feefa0 Related: odoo/odoo#123286 Signed-off-by: Pierre Paridans (app) &lt;app@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-05-04</td>
<td>Brieuc-brd</td>
<td><a href="https://github.com/odoo/enterprise/commit/691572027f57e29b21eed5597aaf7351ebb5c46b" target="_blank" rel="noopener">[IMP] documents, planning, voip: milk adaptations</a></td>
<td><p>task-2818586</p><p>Part-of: odoo/enterprise#38775</p></td>
</tr>
<tr>
<td>2023-04-28</td>
<td>stefanorigano (SRI)</td>
<td><a href="https://github.com/odoo/enterprise/commit/7c39ec3384c348c54863e59208a5460106d7427c" target="_blank" rel="noopener">[REF] web_enterprise, web_studio, voip: top-menu design</a></td>
<td><p>task-2818586</p><p>Part-of: odoo/enterprise#38775</p></td>
</tr>
<tr>
<td>2023-03-20</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/f73d3b5c4332e28d5b9fa0a014e6a3ff2ff7fe6f" target="_blank" rel="noopener">[FIX] voip: return when UA instantiation crashes</a></td>
<td><p>closes odoo/enterprise#38399</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-03-15</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/4ab64d5ae8c3c364b93beca3427f7e144ab7a0b5" target="_blank" rel="noopener">[FIX] voip: properly catch crash on UA instantiation and display it</a></td>
<td><p>Prevents a traceback from being displayed in case of a crash during the user agent initialization. Instead, the error message is displayed in the dedicated VoIP window.</p><p>closes odoo/enterprise#38299</p><p>X-original-commit: 9e4aff8267dd85e39a2568bb01f35f9ffdc7f5a5 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-03-14</td>
<td>MerlinGuillaume</td>
<td><a href="https://github.com/odoo/enterprise/commit/6bcb661c43254d27c0b64216524e129177295eef" target="_blank" rel="noopener">[FIX] voip: render the error message of voip in white</a></td>
<td><p>The error message of voip is written in black in dark mode making it impossible to read</p><p>Steps to reproduce: 1. Install VOIP 2. Enable dark mode (top right corner) 3. Go to Settings &gt; General Settings &gt; Integrations &gt; Asterisk (VoIP) and change the VoIP Environment to &#x27;Production&#x27; 4. Click on the VOIP icon, the dialing panel opens up but it is not usable (there is an error message but it&#x27;s written in black on black)</p><p>Solution: Render the text in white when dark mode is enabled</p><p>Problem: The blockMsg is rendered with the class `text-white` but this sets the color of the text to black when dark mode is enabled</p><p>opw-3210443</p><p>closes odoo/enterprise#38261</p><p>X-original-commit: 69baba79d7fe5e2beed2ac12369b02f2e71ef1d8 Signed-off-by: Guillaume Merlin (megu) &lt;megu@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-03-03</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/dbe7d7bd681d31d13a3e0f6bd10b5c1dd85ac518" target="_blank" rel="noopener">[IMP] *: remove &quot;French spacing&quot; 👺</a></td>
<td><p>According to Wiktionary, French spacing is &quot;the archaic practice (though still current in French) of inserting a space around colons, semicolons, question marks, and exclamation marks&quot;. This is not standard practice in English and most languages of the world.</p><p>The purpose of this commit is to start purging the code from this typo, as it may reflect poorly on the software for some people.</p><p>* = account_asset, account_auto_transfer, account_bank_statement_import, account_consolidation, account_sepa_direct_debit, appointment, documents_l10n_be_hr_payroll, event_barcode, event_social, helpdesk, hr_appraisal, hr_appraisal_survey, hr_contract_salary, hr_payroll, hr_payroll_account, hr_referral, industry_fsm, iot, knowledge, l10n_be_hr_payroll, l10n_be_reports, l10n_de_pos_cert, l10n_es_reports, l10n_ke_hr_payroll, l10n_ma_hr_payroll, l10n_mx_edi_website_sale, marketing_automation, mrp_mps, mrp_plm, mrp_workorder, mrp_workorder_hr, pos_hr_mobile, sale_planning, sale_purchase_inter_company_rules, sale_renting, sale_stock_renting, sale_subscription, sign, social, spreadsheet_edition, stock_barcode, stock_barcode_picking_batch, timesheet_grid, voip, web_gantt, web_studio</p><p>closes odoo/enterprise#37853</p><p>Related: odoo/odoo#114533 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2023-02-21</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/4495720d0fc58fc62103bdd7d079ffec47b6fd16" target="_blank" rel="noopener">[FIX] voip: always look for partner related to a call activity</a></td>
<td><p>Commit 5ba660f87a71f068ffb13f54f8de63d90ffcc166 changed the way phonecalls are created from &#x27;phonecall&#x27; activities. As a result, if an activity is already associated with a phone number, the related partner is never computed, resulting in this information remaining missing.</p><p>The goal of this commit is to restore the previous behavior, that is, looking for the relevant partner even if a phone number is already known for the given activity.</p><p>Task-3199796</p><p>closes odoo/enterprise#37646</p><p>X-original-commit: 3db5769e2b95fe805dfdd34325b919dff84cd364 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt; Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-12-29</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/3d8a14d3b2201f588622defb463a2ae031a303ba" target="_blank" rel="noopener">[FIX] voip: do not block webclient from init_messaging load</a></td>
<td><p>Before this commit, when installing voip, the web client had to wait for messaging being initialized.</p><p>This happens because voip registers a main component whose children `willStart` waits for initialized messaging. Main components full rendering, including children (&#x27;s `willStart`), affect the web client waiting as a whole.</p><p>This commit fixes the issue by not mounting the voip container children until messaging is initialized.</p><p>closes odoo/enterprise#35305</p><p>X-original-commit: 13a9744678bab80c68ed86c702c1e1d01aac0a0b Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-11-18</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/ea21380205c6965156ad089227b48039993a4f6b" target="_blank" rel="noopener">[FIX] voip: blank screen on mobile devices when missing a VoIP call</a></td>
<td><p>When we load Odoo and we missed a VoIP call, the VoIP dialog is showed folded on desktop. Folded isn&#x27;t a supported state on mobile screen. So in that case to avoid a VoIP Blank screen, we loaded the recent call VoIP Tab.</p><p>Steps to reproduce:</p><p>1. Missed a VoIP call 2. Open the mobile device 2. The VoIP dialog is blank =&gt; bug</p><p>closes odoo/enterprise#34384</p><p>Signed-off-by: Adrien Dieudonné (adr) &lt;adr@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-11-14</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/ac4dd830b24c7dd8dce2245596dca82055028c6a" target="_blank" rel="noopener">[IMP] voip: add the ability to switch the input for mobile device</a></td>
<td><p>The `replaceTrack`[1] allows the mobile web browser to switch between the `Headset earpiece` and the `Speakerphone`[2]. This change allows the user to change the audio output via a dialog when the call is made (instead of the current value set to `default` as Speakerphone).</p><p>This commit also fixes the opw-2991278</p><p>Steps to reproduce: - Setup a VoIP - User `Foo` connected with the mobile app - User `Bar` call the VoIP number of the user `Foo` - When `Foo` answer the call, it is not possible to take it by ear &quot;communication&quot; mode, it&#x27;s using the &quot;loudspeaker&quot; =&gt; bug</p><p>links: 1. https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/replaceTrack 2. https://source.chromium.org/chromium/chromium/src/+/main:media/base/android/java/src/org/chromium/media/AudioDeviceSelector.java;l=119;bpv=0;bpt=1</p><p>closes odoo/enterprise#34088</p><p>Related: odoo/odoo#107392 Signed-off-by: Adrien Dieudonné (adr) &lt;adr@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-11-10</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/203426c9d7e7345d5a98f9c460eb4faed5e01a27" target="_blank" rel="noopener">[FIX] voip: use grey avatar by default for phone calls</a></td>
<td><p>Phone calls with no partner are displayed with a white silhouette as an avatar, which is not quite visible as the background itself is also white.</p><p>This commit changes the default avatar to use the grey one so that it becomes visible on white background.</p><p>Task-3063301.</p><p>closes odoo/enterprise#33872</p><p>X-original-commit: aa62a11e60f28efcc197fe8c47828b5ea1fd00fd Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-11-07</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/8031552d5e9118ad173f2c511179932e49a45b26" target="_blank" rel="noopener">[IMP] voip, knowledge: remove leading whitespaces</a></td>
<td><p>Remove leading whitespaces introduced in 85ec2e4588464e7100c5315bbeef5af30daf4000</p><p>closes odoo/enterprise#33692</p><p>Related: odoo/odoo#105123 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-11-05</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/1e91edcb74ce0f690200652289e8295cd414a7ce" target="_blank" rel="noopener">[IMP] mail_enterprise, *: simply import @mail/model</a></td>
<td><p>* = account_accountant, approvals, crm_enterprise, documents, hr_recruitement_extract, knowledge, sign, social, voip, voip_onsip, website_helpdesk_livechat</p><p>Replaces the numerous imports related to the definition of models by a single import of the &#x27;@mail/model&#x27; module.</p><p>Task-3056971</p><p>Part-of: odoo/enterprise#33679</p></td>
</tr>
<tr>
<td>2022-11-03</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/a4cb5b4dbbb7cd04dccd46c823ec4bdf8bceeb82" target="_blank" rel="noopener">[IMP] mail, *: simplify discuss template (no templateGetter)</a></td>
<td><p>This commit simplifies discuss template by putting record accessors in the context of template.</p><p>*: approvals, knowledge, sign, voip</p><p>Task-3055022</p><p>Part-of: odoo/enterprise#33681</p></td>
</tr>
<tr>
<td>2022-11-03</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/8743fca9dee21f8382d54ea4cd940be31abd8f1a" target="_blank" rel="noopener">[IMP] mail, *: introduce useMessagingContainer</a></td>
<td><p>*: mail_enterprise, voip</p><p>This commit introduces component hook useMessagingContainer, which allow to lazily use messaging component in template.</p><p>This allow simplifing some code in container, and more notably in child messaging components, as they can now define their template in models.</p><p>Task-3055886</p><p>Part-of: odoo/enterprise#33681</p></td>
</tr>
<tr>
<td>2022-11-02</td>
<td>niyasraphy</td>
<td><a href="https://github.com/odoo/enterprise/commit/f0f9b27e02b08d1d8c26ac6031c92d650d8fcf71" target="_blank" rel="noopener">[IMP] l10n_pe_edi, voip: remove useless upgrade_boolean widget</a></td>
<td><p>In a Community database, in Settings, when checking a config exclusive to Enterprise, the Upgrade Boolean field is used to display a popup suggesting the user to upgrade to Enterprise.</p><p>The presence of this field does not make sense for modules that are Enterprise-only, such as VoIP.</p><p>This commit deletes occurrences of the Upgrade Boolean field in Enterprise modules, as they are not relevant there.</p><p>closes odoo/enterprise#34120</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-11-02</td>
<td>Antoine (anso)</td>
<td><a href="https://github.com/odoo/enterprise/commit/34787fae6f8933f0716d49e261e34674ccc61c71" target="_blank" rel="noopener">[FIX] voip: fix incoming call buttons layout and style</a></td>
<td><p>Accept and decline buttons were wrongly positioned and their style was too close</p><p>White png&#x27;s were not visible on a white bg</p><p>task-3047632</p><p>closes odoo/enterprise#33859</p><p>X-original-commit: deab8e07577c30bf54473f12f827b2ae48c290d0 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-10-31</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/114c249bfc1f9a9af88ac78ab3bcabbb82d56ef0" target="_blank" rel="noopener">[FIX] voip: traceback on mobile device when click button on voip panel</a></td>
<td><p>Before this commit we had the following traceback: &gt; Uncaught Promise &gt; this listener was already registered This is because we tried to add back button listener, but it was already done in _toggleDisplay. This error only occurs in the mobile app.</p><p>Steps to reproduce:</p><p>- Click on the VoIP icon in the systray to open the voip panel - Go to &quot;next activities&quot; tab - Click on &quot;Marc Demo&quot; - Click on button: &quot;mail&quot;, &quot;log&quot;, &quot;reschedule activity&quot;, &quot;partner&quot; =&gt; traceback</p><p>Part-of: odoo/enterprise#34384</p></td>
</tr>
<tr>
<td>2022-10-28</td>
<td>Zelong Lin</td>
<td><a href="https://github.com/odoo/enterprise/commit/9f2e9dbcfeaae8fc39a570c4cda00a386102a553" target="_blank" rel="noopener">[FIX] voip: call first when only has mobile number</a></td>
<td><p>Cannot call first partner if partner only has mobile number</p><p>task-3046595</p><p>closes odoo/enterprise#33425</p><p>X-original-commit: f5027137b54c47958a4bb42160a81a9f54a81f02 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-10-26</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/cfe545bcae35972ee3f5e8d7fe961d8a8b39bda3" target="_blank" rel="noopener">[IMP] mail, *: Rename component to match model (step 1)</a></td>
<td><p>*: approvals, documents, sign, voip</p><p>[IMP] approvals: rename Approval to ApprovalView (component) Task-3045295</p><p>[IMP] sign: rename SignRequest to SignRequestView (component) Task-3045299</p><p>[IMP] mail, *: rename component Activity to ActivityView *: approvals, documents, sign, voip Task-3045361</p><p>Task-3046089</p><p>closes odoo/enterprise#33300</p><p>Related: odoo/odoo#104261 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-10-24</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9b83770f4894d2aa0d1c5ed8e08b36083f012cf0" target="_blank" rel="noopener">[IMP] voip: get rid of trigger_up</a></td>
<td><p>Task-3042783.</p><p>closes odoo/enterprise#33228</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-10-21</td>
<td>Jorge Pinna Puissant</td>
<td><a href="https://github.com/odoo/enterprise/commit/e9fdd8de5e289b738e6b7011dff702e011bb489a" target="_blank" rel="noopener">[IMP] web,*: force props validation for components</a></td>
<td><p>*: mrp_workorder, spreadsheet_edition, voip, web_enterprise, web_gantt, web_studio</p><p>This commit adds a warning if the props validation is not set for a component.</p><p>The props validation is important to tell how a component should be used, by looking at its code, it&#x27;s a good documentation of the component. It&#x27;s also critical, to test if the component is correctly used, if all the obligatory props are passed and that there are of the correct type.</p><p>For more information, see: https://github.com/odoo/owl/blob/master/doc/reference/props.md#props-validation</p><p>closes odoo/enterprise#33044</p><p>Related: odoo/odoo#103723 Signed-off-by: Géry Debongnie &lt;ged@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-10-20</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9b494cc63e4e6e3fc8d9c4b9f1acb87fa33a102b" target="_blank" rel="noopener">[IMP] voip: convert VoipSystrayItem to models</a></td>
<td><p>Task-3036700.</p><p>closes odoo/enterprise#33036</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-10-17</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/efa607853819722d0f42d62d75d3da0b616010fe" target="_blank" rel="noopener">[IMP] voip: remove all native Odoo mobile app call usage</a></td>
<td><p>This commit restores the parity between the mobile app and the mobile web browser on VoIP calls.</p><p>Before this commit:</p><p>│─────────────────────────────────────────────────────────────────│ │                           │ Mobile Browser  │   Odoo App        │ │─────────────────────────────────────────────────────────────────│ │ Ringtones (dialtone)      │  Default*       │  Speakerphone     │ │                           │                 │                   │ │ Ringtones (incoming call) │  Default*       │  Speakerphone     │ │                           │                 │                   │ │ Call Make                 │  Default*       │  Headset earpiece │ │                           │                 │                   │ │ Call Answer               │  Default*       │  Speakerphone     │ │─────────────────────────────────────────────────────────────────│</p><p>After this commit:</p><p>│──────────────────────────────────────────────────────────────────│ │                           │ Mobile Browser   │   Odoo App        │ │──────────────────────────────────────────────────────────────────│ │ Ringtones (dialtone)      │  Default*        │  Default*         │ │                           │                  │                   │ │ Ringtones (incoming call) │  Default*        │  Default*         │ │                           │                  │                   │ │ Call Make                 │  Default*        │  Default*         │ │                           │                  │                   │ │ Call Answer               │  Default*        │  Default*         │ │──────────────────────────────────────────────────────────────────│</p><p>Notes:</p><p>- The default* value is the default device configured by the os =&gt; The Speakerphone is the default value. But if a USB / Bluetooth Devices are plugged to the phone, it can be the default configuration.</p><p>Part-of: odoo/enterprise#34088</p></td>
</tr>
<tr>
<td>2022-10-17</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/c256c795ecd9d89cb7e78e4ccaff03124129c55f" target="_blank" rel="noopener">[IMP] voip: remove owl bus on/off</a></td>
<td><p>These are deprecated since Owl 2, and lead to memory leak in the compatibility layer. This PR removes the last ones in the mail code.</p><p>task-2877316</p><p>closes odoo/enterprise#32842</p><p>Related: odoo/odoo#103301 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-10-10</td>
<td>Xavier Luyckx (xlu)</td>
<td><a href="https://github.com/odoo/enterprise/commit/af2d86d15307ff497942c503bb0155cea238917a" target="_blank" rel="noopener">[FIX] voip: adapt window title for dark mode</a></td>
<td><p>Prior to this commit, the window title for VOIP used incorrect colors. This commit adapts to the correct colors for dark mode.</p><p>task-3012970</p><p>X-original-commit: 1c7807ba80e2bd44bc009e4c5ff5491b77491344 Part-of: odoo/enterprise#32753</p></td>
</tr>
<tr>
<td>2022-10-10</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/a7beb416f27514249a6ffcbf078a2b351107b7cf" target="_blank" rel="noopener">[IMP] voip: merge path and filename fields of SoundEffect model</a></td>
<td><p>Context: We want to get rid of default values on identifying fields, and SoundEffect/path is currently the only field to present this pattern.</p><p>Merging path and filename fields together makes the default value no longer meaningful, as there is no full path that is shared by multiple records and which would therefore consist of a relevant default value.</p><p>The point of removing default values from identifying fields is to simplify the code of findFromIdentifyingData, which is called by every single insert, so that we no longer have the overhead of looking for default values.</p><p>This commit adapts the Enterprise code, and especially the VoIP code, to the changes made to the SoundEffect model.</p><p>closes odoo/enterprise#32634</p><p>Related: odoo/odoo#102912 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-10-06</td>
<td>Didier (did)</td>
<td><a href="https://github.com/odoo/enterprise/commit/f60b3226365f737c5a81f98f15864b1a912f5abe" target="_blank" rel="noopener">[IMP] voip: remove useless guard</a></td>
<td><p>part of task-2783065</p><p>closes odoo/enterprise#32360</p><p>Related: odoo/odoo#102336 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-10-06</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b649d34ec186cc1c2e5c95f0f99123bfa29c2cc1" target="_blank" rel="noopener">[IMP] voip: do not wait for Messaging in VoipService</a></td>
<td><p>closes odoo/enterprise#32433</p><p>X-original-commit: 25df3993409e4ab878e504b046d6e90b964733d7 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-10-03</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/87cd6d02ad471d7a9759b1e323e31a21fb0011e7" target="_blank" rel="noopener">[IMP] *: split mock server by model/controller</a></td>
<td><p>*: approvals, documents, voip, website_helpdesk_livechat.</p><p>The mail mock server is getting bigger and bigger. As a consequence, navigating/keeping it up to date is quiet inconvenient.</p><p>This commit solves this issue by splitting it by model/controller.</p><p>closes odoo/enterprise#32314</p><p>Related: odoo/odoo#98374 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-09-27</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/a16f6d61d11a3ea316783486bd2e2debd923ddf5" target="_blank" rel="noopener">[IMP] mail_enterprise, *: refactor patch API to match model definitions</a></td>
<td><p>Task-2998282.</p><p>* = approvals, crm_enterprise, documents, knowledge, sign, voip, voip_onsip, website_helpdesk</p><p>closes odoo/enterprise#32136</p><p>X-original-commit: 7c403fd8ce4b292eeb5db2302e9384f9a7358e22 Related: odoo/odoo#101827 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-09-27</td>
<td>luvi</td>
<td><a href="https://github.com/odoo/enterprise/commit/61923ecea206f71b70eab57f6430d172ae6d317d" target="_blank" rel="noopener">[FIX] voip: adapt code to PhoneField changes</a></td>
<td><p>This commit is the counterpart of https://github.com/odoo/odoo/pull/101433, and  adapts the code of voip to patch the right elements in the PhoneField template. As the field now always displays a Call button, the call must be enabled even in edition mode.</p><p>Tests have been adapted with a new selector</p><p>closes odoo/enterprise#32108</p><p>X-original-commit: 944ec9f4a77376d8f21af594e8fe4020868f5fa0 Related: odoo/odoo#101786 Signed-off-by: Michaël Mattiello &lt;mcm@odoo.com&gt; Signed-off-by: Luca Vitali &lt;luvi@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-09-20</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/dc6e264543411a36e1143361fa8d2d1a3b12c1ce" target="_blank" rel="noopener">[IMP] mail, *: introduce public livechat bundle</a></td>
<td><p>*: documents, knowledge, voip</p><p>This commit introduces the public livechat bundle, which contains the models that are specifically used in public livechat.</p><p>Doing so reduces the amount of model and data in frontend and external lib, which makes the page load faster.</p><p>Task-2990182 Task-2990191</p><p>closes odoo/enterprise#31608</p><p>X-original-commit: f5781df165af8233fce2187513bc92b44d0f24a7 Related: odoo/odoo#100768 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-09-20</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/165b3afd2118891cb8d57a6f8f0972ae88555262" target="_blank" rel="noopener">[IMP] voip, voip_crm: refactor call_center_field</a></td>
<td><p>Rewrite call_center_field to use OWL and models framework.</p><p>Task-2992592.</p><p>closes odoo/enterprise#31668</p><p>X-original-commit: 95cba6cff0dad7a8cc84a84abf5127a338e91bc0 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt; Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-09-16</td>
<td>Aaron Bohy</td>
<td><a href="https://github.com/odoo/enterprise/commit/f59ccad088633a4b04311b175c739b33743fbfcd" target="_blank" rel="noopener">[FIX] voip,web: PhoneField: set correct type on input</a></td>
<td><p>This pr is the enterprise counter part of odoo/odoo#100388 where we set the input type to &quot;tel&quot; in PhoneField, instad of &quot;phone&quot;, which simply doesn&#x27;t exist.</p><p>closes odoo/enterprise#31437</p><p>Signed-off-by: Pierre Paridans (app) &lt;app@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-09-13</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/aeecaeb5b1994925da8c1091fba954af541ff6c6" target="_blank" rel="noopener">[IMP] mail_enterprise, *: remove unnecessary declarations of `isCausal: true`</a></td>
<td><p>* = approvals, documents, sign, voip</p><p>Inverses of identifying fields are now automatically causal. This commit therefore removes the unnecessary declarations of `isCausal: true` from the code.</p><p>Task-2741402.</p><p>closes odoo/enterprise#31290</p><p>Related: odoo/odoo#100119 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-09-08</td>
<td>Rémy Voet (ryv)</td>
<td><a href="https://github.com/odoo/enterprise/commit/62a7d90029a018cde248fc08ac36d02a99eadeaa" target="_blank" rel="noopener">[IMP] voip: improve performance of `_compute_has_call_in_queue`</a></td>
<td><p>The domain part generated by `_linked_phone_call_domain` ``` [ (&#x27;activity_id.res_id&#x27;, &#x27;in&#x27;, &lt;rec_ids&gt;) (&#x27;activity_id.res_model_id&#x27;, &#x27;=&#x27;, &lt;id&gt;) ``` is highly inefficient. The ORM will convert it into (threat each condition independently): ``` [ (&#x27;activity_id&#x27;, &#x27;in&#x27;, env[&#x27;mail.activity&#x27;]._search([(&#x27;res_id&#x27;, &#x27;in&#x27;, &lt;rec_ids&gt;)])) (&#x27;activity_id&#x27;, &#x27;in&#x27;, env[&#x27;mail.activity&#x27;]._search([(&#x27;res_model_id&#x27;, &#x27;=&#x27;, &lt;id&gt;)])) ``` And the `_search` (of `mail.activity`) is override and doesn&#x27;t return a Query object but directly the result (and do extra stuff for security reason).</p><p>Because of these, both condition/_search load much more than necessary and check the access on too many records. By example, the second condition will fetch every activity id link to the current model (and check access to each), no matter the current records.</p><p>Performance Improvements: ------------------------- Only with 15_000 leads and 5_000 activity link to them, to read `has_call_in_queue` value of 10 records: It took 72 ms before and it takes 5 ms now.</p><p>closes odoo/enterprise#31179</p><p>Signed-off-by: Xavier Morel (xmo) &lt;xmo@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-08-29</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/d34bcf17b67424b49c7e236efd3894a74f1de0c8" target="_blank" rel="noopener">[FIX] voip: alignment issues in transfer call form</a></td>
<td><p>Before this commit, the close button was right next to the title instead of on the right.</p><p>This also fix the button that was below the field instead of being next to it.</p><p>Steps to reproduce: - Call an user - Click on transfer button =&gt; See the popup form</p><p>Part-of: odoo/enterprise#31261</p></td>
</tr>
<tr>
<td>2022-08-22</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/a80456b2629c245462d2ca3d140d90941ceced3f" target="_blank" rel="noopener">[IMP] voip: stop using OnChange constructor in model definitions</a></td>
<td><p>closes odoo/enterprise#30631</p><p>Related: odoo/odoo#98549 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-08-19</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/ec3f04cd0669ae41828f4a4c25d8e5bcc5f1a94d" target="_blank" rel="noopener">[IMP] voip: small Registerer improvements</a></td>
<td><p>In this commit: + Make the expiration interval a field and document it + Set the initial value of `state` in `_created` hook instead of via a compute + Fix single quotes</p><p>closes odoo/enterprise#30602</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-08-19</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/29474444f47dc28dd2a677eeb61be7e4acea3a45" target="_blank" rel="noopener">[PRF] hr_payroll_holidays, documents, voip: improve performance of closing activities</a></td>
<td><p>MailActivity model has an ``_action_done`` method that is quite heavily used and overridden. It notably posts messages, create next activities but also has some specific behavior depending on category.</p><p>Purpose of this commit is to improve code of this method to avoid useless queries, improve performance, and rethink the computation with batch in mind.</p><p>Task-2883589 (Activity performance and cleaning)</p><p>Part-of: odoo/enterprise#28421</p></td>
</tr>
<tr>
<td>2022-08-18</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/ddbc5e60bb14867030e64af1667854b633460244" target="_blank" rel="noopener">[IMP] mail_enterprise, *: remove explicit usage of insert-and-replace</a></td>
<td><p>* = approvals, documents, sign, voip</p><p>Distinction between &quot;replace&quot; and &quot;insert-and-replace&quot; can be guessed based on the type of the provided data.</p><p>task-2957295</p><p>closes odoo/enterprise#30580</p><p>Related: odoo/odoo#98404 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-08-17</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/88c0567d28dfa65f2367c5392430aa89aa9d2d4d" target="_blank" rel="noopener">[IMP] voip, *: auto add implicit attributes of identifying fields</a></td>
<td><p>Task-2955910. * = approvals, documents, mail_enterprise, sign</p><p>closes odoo/enterprise#30511</p><p>Related: odoo/odoo#98283 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-08-16</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/b6b80fecde9abadfca44da57ae6fc2b58bbc5119" target="_blank" rel="noopener">[IMP] mail, *: introduce identifyingMode and remove identifyingFields</a></td>
<td><p>* = approvals, documents, mail_enterprise, sign, voip</p><p>This simplifies definition and overrides and opens up new identification opportunities.</p><p>Part of task-2741982</p><p>closes odoo/enterprise#30470</p><p>Related: odoo/odoo#98166 Signed-off-by: Louis Wicket (wil) &lt;wil@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-08-09</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/f4e9d6d25ca3fedf832f301b073f8ffddf6fdd47" target="_blank" rel="noopener">[MOV] *: move startServer test helper to the bus module</a></td>
<td><p>*: account_accountant, account_invoice_extract, approvals, documents, documents_spreadsheet, voip.</p><p>closes odoo/enterprise#30244</p><p>Related: odoo/odoo#97771 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-08-08</td>
<td>Antoine (anso)</td>
<td><a href="https://github.com/odoo/enterprise/commit/5cce6fc9922b92be018c4c3ea90f1024bff6a092" target="_blank" rel="noopener">[IMP] voip : revamp scss</a></td>
<td><p>This commit simplifies the component&#x27;s SCSS improving bootstrap&#x27;s integration. Design was improved for consistency.</p><p>Part of the overall v16 SCSS optimization/restyle</p><p>task-2943593</p><p>closes odoo/enterprise#30201</p><p>Signed-off-by: Pierre Paridans (app) &lt;app@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-08-05</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/dfbb55a677430d5718f8e6dabcac28b0679b88cb" target="_blank" rel="noopener">[FIX] voip_onsip: don&#x27;t cast possible FieldCommand to boolean</a></td>
<td><p>The default value of areCredentialsSet is false, meaning that if the compute returns the field command `clear()`, we would expect the value to be reset to false. However, casting the `clear` command to a boolean would result in true, which is the opposite of what is expected.</p><p>This commit pulls the call to super from the boolean cast so that possible field commands as return value aren&#x27;t wrongly converted to true.</p><p>closes odoo/enterprise#30164</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-08-05</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/5964206b14232b531476be74ac77a263201a2a4b" target="_blank" rel="noopener">[IMP] voip: rename phonecall_type to direction</a></td>
<td><p>Upgrade: odoo/upgrade#3748 Part of task-2946324.</p><p>closes odoo/enterprise#30159</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-08-02</td>
<td>Aaron Bohy</td>
<td><a href="https://github.com/odoo/enterprise/commit/b135636adb2d42ab63e5d353c798f48b00021db9" target="_blank" rel="noopener">[FIX] voip: PhoneField: do not crash on click</a></td>
<td><p>Before this commit, it crashed when the user clicked on the value of a PhoneField, with voip installed. After this commit, it opens the voip DialingPanel as expected.</p><p>This commit also duplicates and adapts the (small) test suite for the voip PhoneField, s.t. the new implementation is tested as well. Before, only the legacy implementation was tested.</p><p>closes odoo/enterprise#30064</p><p>Signed-off-by: Lucas Perais (lpe) &lt;lpe@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-07-25</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/f263e633c4a26054e15bc419aaa488f5114d2647" target="_blank" rel="noopener">[FIX] *: fix onNotification/offNotification</a></td>
<td><p>*: delivery_iot, spreadsheet_edition, voip.</p><p>The callback registered by the bus service method onNotification was not the same unregistered by offNotification. Since those methods were superfluous, they have been remvoed in favor of (add/remove)EventListener.</p><p>closes odoo/enterprise#29819</p><p>Related: odoo/odoo#96684 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-07-19</td>
<td>Lucas Perais</td>
<td><a href="https://github.com/odoo/enterprise/commit/4cfce6fd8b27cb53370f714615f2b76471c7a44f" target="_blank" rel="noopener">[FIX] voip: improve voip service and adapt PhoneField to OWL</a></td>
<td><p>The voip service is now thought of as the center point of voip to handle the VOIP logic. It can tell if one can call, and one can make a phonecall with the `call` method.</p><p>The phone_field has been adapted consequently and uses that service to handle calling a number with VOIP.</p><p>Part-of: odoo/enterprise#23069</p></td>
</tr>
<tr>
<td>2022-07-19</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/1c3b39273477d57dc1b76ca2c0677d668eade48b" target="_blank" rel="noopener">[IMP] *: improve multi tab service</a></td>
<td><p>*: delivery_iot, iot, voip.</p><p>Following @ged-odoo review, the multi tab service has been improved: - multi_tab_service.js has been moved to the correct location. - _callLocalStorage method has been removed and replaced by getItemFromLocalStorage/setItemToLocalStorage. - underscore.js calls have been removed. - multi_tab_service is now using function closure style  instead of class. - multi_tab service is now using its own bus instance. - service name is now in snake case as per convention. - tests have been added. - multi tab service now handles setting/removing/getting values common to all the tabs.</p><p>closes odoo/enterprise#29694</p><p>Related: odoo/odoo#96386 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-07-15</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/13ac285a3fd40a6fcf9ffaf93057a65477c913b6" target="_blank" rel="noopener">[IMP] *: introduce multi tab service</a></td>
<td><p>*: delivery_iot, documents_spreadsheet, iot, voip.</p><p>In order to ease the PR introducing websockets in Odoo, introduce the multi service. Indeed, the cross tab bus won&#x27;t be necessary anymore but there will still be a need to elect a main tab: some actions should only be triggered once. To achieve this, the code electing the main tab has been split with the one handling the longpolling. The crosstab bus now relies on the multi tab service to known whether or not the current tab is the main tab.</p><p>task-2053917</p><p>closes odoo/enterprise#29573</p><p>Related: odoo/odoo#96174 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-07-14</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b32c20510060d57413396a29c184408df3b4415f" target="_blank" rel="noopener">[IMP] voip: rename event</a></td>
<td><p>so that it matches the name used by Owl without having to rely on a compatibility layer. It will be important to adapt some code to WOWL.</p><p>closes odoo/enterprise#29495</p><p>Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-07-14</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/26c25cf018a4794f178c102f82dfbf5571e9e963" target="_blank" rel="noopener">[IMP] *: replace on/off by (add/remove)EventListeners</a></td>
<td><p>*: delivery_iot, documents_spreadsheet, voip.</p><p>on/off are deprecated in favor of  addEventListener/removeEventListener. Calls to the bus service have been updated to reflect those changes.</p><p>task-2053917</p><p>closes odoo/enterprise#29501</p><p>Related: odoo/odoo#96017 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-07-12</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/8f0ebdaacb2a779fa7c51570fba9bcf79a0a09dd" target="_blank" rel="noopener">[IMP] mail_enterprise, voip: adapt chatter container in new form</a></td>
<td><p>task-2871070</p><p>Part-of: odoo/enterprise#23069</p></td>
</tr>
<tr>
<td>2022-06-28</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/f76a95ff91f381798a9c651554952ee020d60c96" target="_blank" rel="noopener">[IMP] voip: introduce Registerer model</a></td>
<td><p>Introduce the Registerer model that wraps the Registerer class of the SIP.js library.</p><p>Task-2896691.</p><p>closes odoo/enterprise#28996</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-28</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b3357eed1c6c28d5bad56bff33f651c28b8b4f03" target="_blank" rel="noopener">[FIX] voip: fix typo causing voip to crash</a></td>
<td><p>Fix typo introduced in commit ad35805dd324124544b7b2c8e762fff8fb8ff0a9.</p><p>closes odoo/enterprise#28927</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-27</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/ad35805dd324124544b7b2c8e762fff8fb8ff0a9" target="_blank" rel="noopener">[IMP] voip: use Device/hasRtcSupport in VoIP</a></td>
<td><p>closes odoo/enterprise#28900</p><p>Community: https://github.com/odoo/odoo/pull/94683 Related: odoo/odoo#94683 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-27</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/644e998a6d7ad7005234b32f3ffa75420b67fe31" target="_blank" rel="noopener">[IMP] voip: model ringtones</a></td>
<td><p>Task-2804940.</p><p>closes odoo/enterprise#28885</p><p>Community: odoo/odoo#94632 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-24</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/c77f27da626c57e599635ff01230d38948c43efc" target="_blank" rel="noopener">[IMP] voip_onsip: remove no longer useful code</a></td>
<td><p>closes odoo/enterprise#28835</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-24</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b3ae89b921ee898d9f9a2d1415f29b198c98b302" target="_blank" rel="noopener">[IMP] voip, voip_onsip: introduce Voip/authorizationUsername</a></td>
<td><p>Part-of: odoo/enterprise#28835</p></td>
</tr>
<tr>
<td>2022-06-24</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/389af6fe0b743190823ad0e0bec3285df0213654" target="_blank" rel="noopener">[IMP] mail_enterprise, *: use mail.assets_messaging bundle</a></td>
<td><p>*: approvals sign voip voip_onsip website_helpdesk_livechat</p><p>Task-2894450</p><p>closes odoo/enterprise#28913</p><p>Related: odoo/odoo#94722 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-22</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/7d0aa8df68b0e0866f7df33df048d931ff4d1aca" target="_blank" rel="noopener">[IMP] voip_onsip: remove useless neutralize function</a></td>
<td><p>Part-of: odoo/enterprise#28729</p></td>
</tr>
<tr>
<td>2022-06-22</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/155d078748d58d0f7d6c3c032316cfc80d56fa8b" target="_blank" rel="noopener">[IMP] voip, voip_crm, voip_onsip: remove encoding definition</a></td>
<td><p>Remove useless comments `# -*- coding: utf-8 -*-` from the VoIP codebase.</p><p>closes odoo/enterprise#28724</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-21</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/ede559a939d75db19f94336f0c8e690df4131a48" target="_blank" rel="noopener">[FIX] voip_onsip: rename forgotten parameter</a></td>
<td><p>Commit 25db5caf33c6ddfc2895915a99fe296c91ca24ef updated the SIP.js library, changing the name of some parameters.</p><p>This commit renames a parameter that had been forgotten.</p><p>closes odoo/enterprise#28686</p><p>X-original-commit: 5f579070502ed717ef53410119c6042fb2f26c06 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-21</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b12f1a1e8ce4f72a95c4ce57e7fbb1d41f301f8f" target="_blank" rel="noopener">[IMP] voip, *: model PBX configuration in Voip model</a></td>
<td><p>* = test_discuss_full_enterprise</p><p>Send PBX configuration in init_messaging and store it in the Voip model. Delete the no longer useful voip.configurator model.</p><p>Part of task-2804807.</p><p>closes odoo/enterprise#28860</p><p>Community: odoo/odoo#94569 Upgrade: odoo/upgrade#3625 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-21</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/9a87bd2bf0a784e7a83262c7491123f6a1066e9c" target="_blank" rel="noopener">[IMP] mail_enterprise, *: replace createChatterContainer during tests</a></td>
<td><p>*: approvals, voip.</p><p>The createChatterContainer helper was used during tests to mount a chatter container and test it. However, this approach is not very realistic and blocks some waiting PRs. In order to get closer from the reality, let&#x27;s mount a webClient and open a form view containing a chatter.</p><p>closes odoo/enterprise#28684</p><p>Related: odoo/odoo#94175 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-21</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/4f7b1696930eaa58dc4983d2c4a1150ae582b4e5" target="_blank" rel="noopener">[IMP] voip_onsip: rename onsip_auth_user -&gt; onsip_auth_username</a></td>
<td><p>Part-of: odoo/enterprise#28729</p></td>
</tr>
<tr>
<td>2022-06-21</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/26b8fffc951a52fd32961dd5a6c3ecc50db4003f" target="_blank" rel="noopener">[IMP] voip_onsip, *: move onsip_auth_username to res.users.settings</a></td>
<td><p>* = appointment_hr, test_discuss_full_enterprise In line with task-2821508.</p><p>closes odoo/enterprise#28729</p><p>Related: odoo/upgrade#3617 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-20</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/7b74051d42c027d98135e084578687811c121009" target="_blank" rel="noopener">[IMP] voip: change test to wait for the start of messaging service</a></td>
<td><p>Part-of: odoo/enterprise#28614</p></td>
</tr>
<tr>
<td>2022-06-20</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/40cd5afaf9b7b1b5024c36a8faf3e3b8d1ce5d19" target="_blank" rel="noopener">[IMP] voip: rewrite voip code to use res.users.settings</a></td>
<td><p>Part of task-2804807.</p><p>closes odoo/enterprise#28614</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-17</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/5c7f399ade9c92928b9aa97d307e3e30e3476793" target="_blank" rel="noopener">[IMP] voip: introduce Voip model</a></td>
<td><p>closes odoo/enterprise#28547</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-15</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/f6fb239bbd9e973314414ab523204a016d2ba67f" target="_blank" rel="noopener">[FIX][IMP] mail, voip: ease finding customer of a record</a></td>
<td><p>We now have a way to better define how to find a customer on a record using an inheritable method. See recently added method in ``MailThread`` mixin class.</p><p>Task-2883589 (Activity performance and cleaning)</p><p>Part-of: odoo/enterprise#28421</p></td>
</tr>
<tr>
<td>2022-06-15</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/dc50ef3ea46fe63167d615a931bb514b0108ce63" target="_blank" rel="noopener">[REF] voip: always ensure a phonecall activity type exists</a></td>
<td><p>Currently, when calling ``create_call_in_queue`` an heuristic to find the right activity type is performed. When no phonecall activity type is found a fallback on Todo or a generic activity type is done. However when creating activities, no ``voip.phonecall`` records are created when creating activities under a type that is not phonecall. This leads to an UserError being raised in ``create_call_in_queue``.</p><p>To avoid that issue, we now dynamically create the ``call`` activity type if it has been removed or wrongly updated. That way voip always works as intended instead of crashing or simply not working.</p><p>Task-2884301 (Voip synchronization simplification)</p><p>Part-of: odoo/enterprise#28421</p></td>
</tr>
<tr>
<td>2022-06-15</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/cc614564df3cac78f5adce4db6559e579470ef2e" target="_blank" rel="noopener">[REF] voip: improve activity creation batch creation</a></td>
<td><p>Purpose of this commit is mainly to compute activity / voip info in batch. Call-based activities compute phone and number for activities to prepare voip phonecalls creation. However this is currently done in a loop without any optimization when batching activities creation. However we often create activities in batch on a given model, allowing to batch the browse, access rights checks, ...</p><p>Instead of computing information record-based, group records by model and perform information fetch in batch.</p><p>Bus notifications are also batched to speedup multiple activities creation.</p><p>Task-2883589 (Activity performance and cleaning)</p><p>Part-of: odoo/enterprise#28421</p></td>
</tr>
<tr>
<td>2022-06-15</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/858c85d5ff96f1c4766d8e5d9270dc66d5c70931" target="_blank" rel="noopener">[REF] voip: create phonecalls in batch</a></td>
<td><p>When scheduling call-based activities, phonecalls can be created in batch instead of one by one. This improves performance when creating a lot of activities, through scheduled actions or list action for example.</p><p>Task-2883589 (Activity performance and cleaning)</p><p>Part-of: odoo/enterprise#28421</p></td>
</tr>
<tr>
<td>2022-06-15</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/0af29de5f445c8c70cd106ea7a7b9230964fce54" target="_blank" rel="noopener">[REF] voip: send activity notifications in batch</a></td>
<td><p>No need to send bus notifications one by one, we may use sendmany. Various activities crud methods send notifications, better group them when possible.</p><p>Task-2883589 (Activity performance and cleaning)</p><p>Part-of: odoo/enterprise#28421</p></td>
</tr>
<tr>
<td>2022-06-10</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/d60f1cd8c5603cea96ef07e61ae72aa2a766c015" target="_blank" rel="noopener">[IMP] voip: adapt from removal of Chatter/_willDelete lifecycle hook</a></td>
<td><p>Task-2881075</p><p>closes odoo/enterprise#28274</p><p>Related: odoo/odoo#93330 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-06-09</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/45ec3b8d4ba4531b0224c8d98b5445fb216871f9" target="_blank" rel="noopener">[IMP] voip: add voip config to res.users.settings</a></td>
<td><p>closes odoo/enterprise#28291</p><p>Related: odoo/odoo#93390 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-05-24</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/4bb6aede820672fd1f8bc19417879a0035e50787" target="_blank" rel="noopener">[IMP] voip: adapt dialig panel tests for wowl env</a></td>
<td><p>This PR prepares the ground for the one introducing the wowlEnv in the discuss app. Indeed, the start helper won&#x27;t return widgets anymore. This means we need to adapt those tests to stop calling widget methods and rely on a more realistic behavior. The voip dialing panel tests have been adapted to ease the wowlEnv integration.</p><p>task-2582313</p><p>closes odoo/enterprise#27720</p><p>Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-05-17</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/2986e2d78d39687252c725ead91e742a0fe20c8a" target="_blank" rel="noopener">[IMP] voip: improve dialing panel title translation</a></td>
<td><p>This commit provides translations in more plural forms for the dialing panel title.</p><p>closes odoo/enterprise#27448</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-05-16</td>
<td>Florian Charlier</td>
<td><a href="https://github.com/odoo/enterprise/commit/8ff30e818cf24d57fa8ff612372514fd92ced298" target="_blank" rel="noopener">[IMP] appointment,documents_spreadsheet,voip: use _is_internal</a></td>
<td><p>`_is_internal` is now used in the codebase where it is clear that `.has_group(&#x27;base.group_user&#x27;)` was called on a single record.</p><p>Part of Task-2762102 See odoo/odoo#85703</p><p>closes odoo/enterprise#27603</p><p>Signed-off-by: Thibault Delavallee (tde) &lt;tde@openerp.com&gt;</p></td>
</tr>
<tr>
<td>2022-05-11</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/23d43cc7f215915695910801384790bd0bc11cfe" target="_blank" rel="noopener">[IMP] mail_enterprise, *: remove useless widget destroy</a></td>
<td><p>*: account_invoice_extract, documents, voip.</p><p>Since community#86338, widget destruction is registered in the start method. Thus, explicit calls to widget.destroy during tests are useless. This PR prepares the ground for the one introducing the new environment in the discuss app. Indeed, the former PR will use createWebClient instead of createView/Widget constructor thus, we won&#x27;t be able to call destroy on the returned value anymore. In order to reduce the noise in the main PR, all the calls to widget.destroy have been removed.</p><p>task-2582313</p><p>closes odoo/enterprise#27192</p><p>Related: odoo/odoo#91082 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-05-03</td>
<td>Damien Bouvy</td>
<td><a href="https://github.com/odoo/enterprise/commit/dd28da9ecdeb87952b40a4d1ae2bc95d14b00013" target="_blank" rel="noopener">[FIX] voip: faster searches on incoming calls</a></td>
<td><p>When an incoming call event is triggered, the voip &#x27;user agent&#x27; will contact the backend to search for a user or partner matching the incomgin call&#x27;s phone number (formatted in different ways).</p><p>A &#x27;limit: 1&#x27; was added to (presumably) increase performance, but it may interact badly with indices set on the phone number fields to increase performance - and indices on the partner table in general.</p><p>Since the client code is already able to process more than one result, simply remove the limit.</p><p>closes odoo/enterprise#26896</p><p>X-original-commit: fa643db32d4461e53cf941812ab905f1daf56f9c Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-05-03</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/ccc60138237d0f836af31857e5062e477d6fc853" target="_blank" rel="noopener">[FIX] voip: send browser notifications in master tab</a></td>
<td><p>Stop sending browser notifications on incoming call if the current tab is not the master tab, so that users don&#x27;t get the notification as many times as they have open tabs.</p><p>Task-2841841</p><p>closes odoo/enterprise#26920</p><p>X-original-commit: 579998d6fbe322581db28b54766497bf6a8f4642 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-05-03</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/65ec2d856096aed6b8f048c14d661dd327681ece" target="_blank" rel="noopener">[IMP] voip: move VoIP user config from res.users to res.users.settings</a></td>
<td><p>Task-2821508.</p><p>closes odoo/enterprise#26287</p><p>Related: odoo/upgrade#3479 Related: odoo/odoo#90015 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-04-20</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/969eac2e408ba3a034c2773ebea6c5c3745e6f04" target="_blank" rel="noopener">[IMP] mail_enterprise, *: use wowlEnv instead of the legacy one</a></td>
<td><p>*: account_followup, account_invoice_extract, approvals, documents, documents_spreadsheet, hr_appraisal, sign, voip, web_studio, website_helpdesk_livechat.</p><p>task-2582313</p><p>closes odoo/enterprise#26493</p><p>Related: odoo/odoo#83774 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-04-19</td>
<td>Hiral Bhavsar</td>
<td><a href="https://github.com/odoo/enterprise/commit/d84ebc406911603f35a923b5c05349c321ae24a6" target="_blank" rel="noopener">[IMP] voip: move the handler to chatter instead of activity</a></td>
<td><p>Move the handler of &#x27;voip_reload_chatter&#x27; to chatter instead of activity because currently, this will likely trigger as many reload as there are activities</p><p>Task-2659932</p><p>closes odoo/enterprise#26641</p><p>X-original-commit: 19a46145d84d6ecbbfe725312ce4c181d9fd8170 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt; Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-04-14</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/e1b7bb3506401251ca2f65ec20eaa6719dc30c69" target="_blank" rel="noopener">[IMP] voip: move component handlers to models (step 5)</a></td>
<td><p>This commit moves some handler methods from components to models, as a step closer to having most of business code in models.</p><p>Having business code in models is desirable so that the code is much more maintainable: easier to change and more robust code.</p><p>Task-2579306</p><p>closes odoo/enterprise#26277</p><p>Related: odoo/odoo#88878 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-04-14</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/0cd0f22c9b8e55a68eaaf086e8fed2d3aee10b82" target="_blank" rel="noopener">[IMP] voip: move component handlers to models (step 7)</a></td>
<td><p>This commit moves some handler methods from components to models, as a step closer to having most of business code in models.</p><p>Having business code in models is desirable so that the code is much more maintainable: easier to change and more robust code.</p><p>Task-2579306</p><p>closes odoo/enterprise#26379</p><p>Related: odoo/odoo#89123 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-03-31</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/debef7f1c1029a0c469f848d095454fd3584428c" target="_blank" rel="noopener">[IMP] mail_enterprise, *: adapt tests data seeding</a></td>
<td><p>*: approvals, voip, website_helpdesk_livechat</p><p>task-2792108</p><p>closes odoo/enterprise#25883</p><p>Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-03-25</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/303562867a78330fbc9626db2f4c300f05392d89" target="_blank" rel="noopener">[FIX] voip: don&#x27;t play ringtone in all open tabs</a></td>
<td><p>Only play the incoming call ringtone in the master tab, avoiding to play several times at once the ringtone when multiple tabs are open.</p><p>Task-2803370</p><p>closes odoo/enterprise#25636</p><p>X-original-commit: 06167a375c62e92f008095d8a9e6f59da77c9710 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-03-24</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/503a7eb36dbe543211a9fcfc6e90fa63bdba4e39" target="_blank" rel="noopener">[FIX] voip: click on PhoneField only calls once</a></td>
<td><p>Current behavior: Clicking on a FieldPhone in a form view records the call in duplicate.</p><p>After this commit: Only one call is recorded.</p><p>Task-2802823</p><p>closes odoo/enterprise#25581</p><p>X-original-commit: 08fcd73ef9fad9540e361624d88ea1d16524e337 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-03-23</td>
<td>luvi</td>
<td><a href="https://github.com/odoo/enterprise/commit/767805948398950fa5303d961428e004968a9792" target="_blank" rel="noopener">[FIX] voip: phone field _onClick triggered twice</a></td>
<td><p>This commit is the counterpart of a community fix in the web module. The click handler is only triggered once and a phone call will no longer raise an error. A test has been added in the voip module to check that the handler is only called once.</p><p>PR community: odoo/odoo#86928</p><p>closes odoo/enterprise#25558</p><p>X-original-commit: c4b5a2be44050004ea900c81ff6d660d8c974ed5 Related: odoo/odoo#87196 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-03-23</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/5e1caf8dae572fb39415b2b321d412cf37ae6f56" target="_blank" rel="noopener">[MOV] mail_enterprise, *: move test_utils</a></td>
<td><p>* : account_invoice_extract, approvals, documents, documents_spreadsheet_bundle, voip, web_studio, website_helpdesk_livechat</p><p>Task-2759586 See https://github.com/odoo/odoo/pull/86791</p><p>closes odoo/enterprise#25491</p><p>Related: odoo/odoo#86791 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-03-22</td>
<td>stefanorigano (SRI)</td>
<td><a href="https://github.com/odoo/enterprise/commit/4f882d79f5e30a496559ce5ff1a5d982332c9654" target="_blank" rel="noopener">[IMP] voip: apply `odoo-brand` classes, adapt design</a></td>
<td><p>Part of the overall v16 SCSS optimization/restyle, task-2704984.</p><p>task-2800721</p><p>closes odoo/enterprise#25700</p><p>Related: odoo/odoo#87448 Signed-off-by: Pierre Paridans (app) &lt;app@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-03-18</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/db121cbe481c9b8ff86d0cbfc84ec35a93352115" target="_blank" rel="noopener">[MOV] mail_enterprise, *: move tests</a></td>
<td><p>* = approvals, voip, website_helpdesk</p><p>Move tests files into `static/tests`. Task-2759560</p><p>closes odoo/enterprise#25375</p><p>Related: odoo/odoo#86581 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-03-16</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/c08572b9af96b51d4c180f917bcdcdb45a41922a" target="_blank" rel="noopener">[IMP] mail_enterprise, *: make mail tests stop relying on this</a></td>
<td><p>*: approvals, mail_enterprise, voip, website_helpdesk_livechat.</p><p>task-2792108</p><p>closes odoo/enterprise#25341</p><p>Related: odoo/odoo#86559 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-03-15</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/5e26761322cf19940554917b799d3c24d1cc9bad" target="_blank" rel="noopener">[IMP] mail_enterprise, *: move up model files</a></td>
<td><p>Move model definition files from `models/thing/thing.js` to `models/thing.js` and remove the now empty intermediate directory.</p><p>Task-2759582 * = approvals, voip, website_helpdesk_livechat</p><p>closes odoo/enterprise#25291</p><p>Related: odoo/odoo#86464 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-03-15</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/1f81960f0ed37b68ce7d3b58ef9914a0c07243c7" target="_blank" rel="noopener">[IMP] mail_enterprise, *: make start method handle cleanup</a></td>
<td><p>*: account_invoice_extract, approvals, documents, documents_spreadsheet_bundle, mail_enterprise, voip, web_studio, website_helpdesk_livechat.</p><p>task-2792108</p><p>closes odoo/enterprise#25326</p><p>Related: odoo/odoo#86526 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-03-09</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/a3b1e9ebc3036616a6889ac9d08c1f5dd34d3803" target="_blank" rel="noopener">[FIX] voip: move user agent init after listeners</a></td>
<td><p>Errors triggered during the initialization of the user agent using sip_error are not caught since the event listeners have not yet been added.</p><p>This commit solves the issue by moving the instanciation of the UserAgent after the event listeners have been added.</p><p>closes odoo/enterprise#25140</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-03-09</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/663108936a9911e00a27f5733886aa00d8f31508" target="_blank" rel="noopener">[FIX] voip: properly escape reason phrases</a></td>
<td><p>Reason phrases are escaped using a no longer existing function. This commit solves the issue by importing the right function.</p><p>closes odoo/enterprise#25146</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-03-04</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/bede4389898104c8b19cccc9948d861d03b3280e" target="_blank" rel="noopener">[IMP] voip: fix broken tests</a></td>
<td><p>Part-of: odoo/enterprise#24970</p></td>
</tr>
<tr>
<td>2022-03-04</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/4844d6c1008731ed244ef9cceb2325b676023dc8" target="_blank" rel="noopener">[IMP] voip: properly start voip service</a></td>
<td><p>Part-of: odoo/enterprise#24970</p></td>
</tr>
<tr>
<td>2022-03-03</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/f4464cb55b9b1fb47ea5fcb587f1236a3d43736f" target="_blank" rel="noopener">[IMP] voip: remove dead code</a></td>
<td><p>Part-of: odoo/enterprise#24970</p></td>
</tr>
<tr>
<td>2022-03-03</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/4ee799d4950ad4f8fd2de44dd03503471a008552" target="_blank" rel="noopener">[IMP] voip: replace trigger ups with bus events</a></td>
<td><p>Replace `trigger_up`s in `user_agent.js` with bus events. The reason for this change is to remove the dependency of the user agent on the legacy EventDispatcher to allow it to be rewritten as a model.</p><p>Part-of: odoo/enterprise#24970</p></td>
</tr>
<tr>
<td>2022-03-01</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/e0fb715f24ef60ce45c38f915de0123dab1974da" target="_blank" rel="noopener">[IMP] voip: document old attributes</a></td>
<td><p>Part-of: odoo/enterprise#24160</p></td>
</tr>
<tr>
<td>2022-02-17</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/ea397d1aa1d8afd7ba90631656a20e377959fe5f" target="_blank" rel="noopener">[IMP] mail_enterprise, *: make mail module&#x27;s beforeEach functions async</a></td>
<td><p>*: account_invoice_extract, approvals, documents, voip, web_studio, website_helpdesk_livechat.</p><p>task-2767820</p><p>closes odoo/enterprise#24489</p><p>Related: odoo/odoo#84845 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-02-17</td>
<td>tsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/14c50215f3d5e11dfdac847568bcd74214b1507b" target="_blank" rel="noopener">[IMP] mail_enterprise, *: use python model definitions during tests</a></td>
<td><p>*: approvals, voip.</p><p>task-2767820</p><p>closes odoo/enterprise#24486</p><p>Related: odoo/odoo#84828 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-02-15</td>
<td>bit-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/a207090d40f0785d60866973b903d1da5766dcac" target="_blank" rel="noopener">[FIX] voip: call activity auto-close note contains html</a></td>
<td><p>Before this commit:</p><p>when scheduling a call activity and making the call with VOIP then end the call, the activity is resolved, and there is a note left on the chatter, but currently, it contains HTML.</p><p>After this commit:</p><p>The note will not contain any HTML content.</p><p>Task-2717666</p><p>closes odoo/enterprise#24581</p><p>X-original-commit: f5750b03b7bc340996a40561ddb203e57b3137b3 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt; Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-02-15</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9b8b84ad1846574f3551fac630a298265484456f" target="_blank" rel="noopener">[IMP] voip: adapt transfer to sip.js 0.20</a></td>
<td><p>closes odoo/enterprise#24160</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-02-14</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/198df7c57009a01d484828b47e9c0f8d70e26ed4" target="_blank" rel="noopener">[IMP] voip: clean up user agent</a></td>
<td><p>This commit cleans up the code in preparation for the update of the SIP.js library.</p><p>+ remove unused import + rename _onAccepted -&gt; _onOutgoingCallAccepted + reorder functions + update documentation + remove unnecessary new line + add missing new line + fix trailing commas</p><p>closes odoo/enterprise#24336</p><p>Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-01-28</td>
<td>stefanorigano (SRI)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9f0b83e5b7d6fa6934439661ef53687770959183" target="_blank" rel="noopener">[REF] voip, web_* : use odoo icons</a></td>
<td><p>This commit is part of v16 overall restyle (task-2704984).</p><p>community: https://github.com/odoo/odoo/pull/83501 task-2745275</p><p>Part-of: odoo/enterprise#23848</p></td>
</tr>
<tr>
<td>2022-01-25</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/4e0200e81042d354bb375cb5b2e21aa7cdc3a7d4" target="_blank" rel="noopener">[IMP] mail, *: batch and avoid duplicate chatter data rpc</a></td>
<td><p>* = account_followup, approvals, documents, voip</p><p>task-2742754</p><p>closes odoo/enterprise#23666</p><p>Related: odoo/odoo#83189 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2022-01-25</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/25db5caf33c6ddfc2895915a99fe296c91ca24ef" target="_blank" rel="noopener">[IMP] voip: update sip.js library</a></td>
<td><p>This commit updates the SIP.js library from v0.13.8 to v0.20.0. The new SIP.js API is substantially different from the old one and introduces many breaking changes, including:</p><p>+ Replacing all events with &quot;delegates&quot; + No longer providing any interface to catch userMedia events + Renaming classes, for example: UA -&gt; UserAgent + Renaming/deleting/reorganizing User Agent/SD-handler options + Replacing registration methods on UA with a new class Registerer + Replacing invitation methods on UA with a new class Inviter + Replacing plain text URIs with instances of the new class URI</p><p>Reasons to upgrade the library are: + Better compliance with the RFC and therefore better compatibility + Fewer lines of code + Interesting step for further refactorings</p><p>Part-of: odoo/enterprise#24160</p></td>
</tr>
<tr>
<td>2022-01-10</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/8ffbbb4971747c3476877fec6570c08402e91997" target="_blank" rel="noopener">[IMP] voip: remove manual need to bind record methods in _created</a></td>
<td><p>Task-2731656</p><p>closes odoo/enterprise#23343</p><p>Related: odoo/odoo#82444 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-12-21</td>
<td>Matthieu Stockbauer</td>
<td><a href="https://github.com/odoo/enterprise/commit/47657b757338977d8458d6df01e7ea1da2e29bc1" target="_blank" rel="noopener">[IMP] *: apply changes after longpolling replacement</a></td>
<td><p>*: delivery_iot, documents_spreadsheet, spreadsheet_edition, voip.</p><p>closes odoo/enterprise#23184</p><p>Related: odoo/odoo#75510 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-12-17</td>
<td>Didier (did)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b96b6ad6f7bf24b4d196a8a87f38a01d342590ca" target="_blank" rel="noopener">[IMP] approvals, sign, voip: adapt to the activityView model</a></td>
<td><p>part of task-2579306</p><p>closes odoo/enterprise#22506</p><p>Related: odoo/odoo#79538 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-12-17</td>
<td>Didier (did)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b536a336b1dbe216afea71f3ac7d1d2756ef8d60" target="_blank" rel="noopener">[IMP] approvals, voip: use mock server for activity test</a></td>
<td><p>closes odoo/enterprise#22941</p><p>Related: odoo/odoo#81502 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-11-29</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/b395a698af65b4d63459aec60a0cfc7816fba8df" target="_blank" rel="noopener">[IMP] approvals, sign, voip: rename activity model</a></td>
<td><p>Rename javascript model &#x27;mail.activity&#x27; to &#x27;Activity&#x27; in order to distinguish javascript model from python model.</p><p>Part of task-2701674.</p><p>closes odoo/enterprise#22593</p><p>Related: odoo/odoo#80555 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-10-28</td>
<td>Didier (did)</td>
<td><a href="https://github.com/odoo/enterprise/commit/ed7df3c525a91dcefbde33919cf5af167170633a" target="_blank" rel="noopener">[IMP] mail_enterprise, *: improve longpolling bus notification format</a></td>
<td><p>* = delivery_iot, documents_spreadsheet, snailmail_account_followup, voip, website_helpdesk_livechat</p><p>The aim of this PR is to improve/fix various flaws and limitation of the current API, to make it easier to use and more efficient.</p><p>Notification are now defined with 3 distinct parts:</p><p>- the channel determines which client(s) should receive it - the type determines how it should be handled - the payload determines any extra information helpful for handling it</p><p>Channel =======</p><p>Business code -------------</p><p>- Record channel is introduced for ease of subscribing to and sending notifications to specific partners, channels, documents, ... - String channel is still supported (but it is converted internally to the tuple channel). - Tuple channel is still supported without any change (but should be avoided whenever possible due to its complex syntax).</p><p>The channel is no longer sent to the client. When the channel was used for business purpose, the information it contained has been moved into either the new type, or the payload itself.</p><p>Technical note --------------</p><p>All channels are now internally converted to the tuple (db, ...) channel, which is necessary for the platform code (saas/sh).</p><p>Internally, the bus.bus table is not changed, type and payload are grouped together into what was (and still is) called message.</p><p>Type ====</p><p>Type is introduced to uniformize the way notifications are sent and handled. All existing notifications already had some kind of manually-built type in them. This is now officially supported at the bus API.</p><p>In client code this will allow (to be done in future commits) to register one handler per specific type, instead of having to iterate and to filter all received notifications on every handler.</p><p>Payload =======</p><p>Payload (ex message) did not change, it can still be anything depending on business needs.</p><p>Few adaptations: - When the type was included on the payload, the type has been moved to the new type parameter. - When the channel was used in business code, its data has been copied into the payload.</p><p>task-1891151</p><p>closes odoo/enterprise#21998</p><p>X-original-commit: 044d7e7c45f10d97143b5e8a25855cd185bc7229 Related: odoo/odoo#79201 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-10-26</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/5d1aea37a63864e09cde9e22693f96586a5a8882" target="_blank" rel="noopener">[IMP] mail_enterprise,*: change model declaration syntax</a></td>
<td><p>* = approvals, voip, website_helpdesk_livechat</p><p>This commit will change the declaration of the models with the aim of getting closer to a plain JSON-object. It allows us to eliminate a wide portion of boilerplate code, making the declaration shorter, more declarative, and less redundant, but mainly, it prepares the ground for further changes.</p><p>Task-2695223</p><p>closes odoo/enterprise#22042</p><p>Related: odoo/odoo#79259 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-10-19</td>
<td>Pierre Paridans</td>
<td><a href="https://github.com/odoo/enterprise/commit/61d4b329ecf51633f5a54de0fc8f6031f496d03d" target="_blank" rel="noopener">[FIX] voip: click on PhoneField value should trigger native call handler</a></td>
<td><p>When VOIP module is installed, this commit ensures click event on a PhoneField&#x27;s value is only prevented when Odoo&#x27;s VOIP should handle the call.</p><p>Steps to reproduce: - ensure &quot;voip&quot; and &quot;contacts&quot; apps are installed - ensure voip&#x27;s settings are set to &quot;prod&quot; without proper credentials - open a partner in Contacts app - click on the phone/mobile number =&gt; native call handler (SIP softphone, mobile phone app...) should open but doesn&#x27;t!</p><p>opw-2654620</p><p>closes odoo/enterprise#21866</p><p>X-original-commit: 3aefabc7c3093873d854ce44e4f5189aa6f6a160 Signed-off-by: Adrien Dieudonné (adr) &lt;adr@odoo.com&gt; Signed-off-by: Pierre Paridans (app) &lt;app@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-10-05</td>
<td>std-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/9aee11894b81cc55cd72f3000a4e328cb4d63875" target="_blank" rel="noopener">[IMP] voip: hide the VOIP settings for a portal user</a></td>
<td><p>Purpose ======= Hide the VOIP for a portal user because it makes no sense for him (it makes sense only for internal users).</p><p>Task-2508521</p><p>closes odoo/enterprise#21420</p><p>Related: odoo/upgrade#2890 Related: odoo/odoo#77766 Signed-off-by: Thibault Delavallee (tde) &lt;tde@openerp.com&gt; Co-authored-by: nounoubensebia &lt;neb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-09-27</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/77ee0b0b21bda08074ac329e845ca23c9b59acc3" target="_blank" rel="noopener">[IMP] voip: improve wording when failing to create a phonecall from activities and add tests</a></td>
<td><p>Purpose is to be a bit nicer to the user. We also add a few functional tests to begin improving testing of activities in submodules.</p><p>Task-2657021</p><p>Part-of: odoo/enterprise#21200</p></td>
</tr>
<tr>
<td>2021-09-27</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/5988ed14797dd8dc8516d09b1594360311be1e4d" target="_blank" rel="noopener">[IMP] test_mail_enterprise: include voip and check its impact</a></td>
<td><p>We add voip dependency in test_mail_enterprise in order to test features and additional workload linked to VOIP management in activities. Notably query counters are updated and added to check a bit current performance state.</p><p>Task-2657021</p><p>Part-of: odoo/enterprise#21200</p></td>
</tr>
<tr>
<td>2021-09-16</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/f1e55be7c7495bc69851555d2239b4ce15f9170c" target="_blank" rel="noopener">[IMP] mail_enterprise, *: adapt test utils and identifying fields</a></td>
<td><p>* = approvals, voip, website_helpdesk_livechat</p><p>closes odoo/enterprise#20964</p><p>closes odoo/enterprise#21426</p><p>Related: odoo/odoo#76718 Related: odoo/odoo#77779 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt; Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-09-01</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/a0380d6e85c916ee5e6fac6de0ab25838bb31ab5" target="_blank" rel="noopener">[IMP] mail_enterprise, *: add support for guest users</a></td>
<td><p>* = approvals, documents, social_instagram, voip, website_helpdesk_livechat</p><p>task-2494829</p><p>closes odoo/enterprise#20417</p><p>Related: odoo/odoo#75496 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-08-24</td>
<td>Zelong Lin</td>
<td><a href="https://github.com/odoo/enterprise/commit/7a5ccb73402ef9ab35001da0de67e1067ed8cf16" target="_blank" rel="noopener">[REF] *: convert JS files to ES6 modules</a></td>
<td><p>* = hr, hr_holidays, sms, snailmail, website_livechat, account_invoice_extract, approvals, documents, mail_enterprise, calendar, crm, mrp, note, website_slides, crm_enterprise, sign, social, voip</p><p>task-2510656</p><p>closes odoo/enterprise#19241</p><p>Related: odoo/odoo#72712 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-08-19</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/ff5c4e1f5352c268c68693d1e6ca3553b4ba3d2e" target="_blank" rel="noopener">[IMP] mail_enterprise, *: access messaging and models without env</a></td>
<td><p>* = account_followup, approvals, hr_appraisal, sign, voip</p><p>Part of task-2582313</p><p>closes odoo/enterprise#20343</p><p>Related: odoo/odoo#75286 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-08-17</td>
<td>Samuel Degueldre</td>
<td><a href="https://github.com/odoo/enterprise/commit/0a0ed15249e0855f5058e7dc181f7e50ebe92034" target="_blank" rel="noopener">[REF] *: adapt usage of messaging components</a></td>
<td><p>*: approvals, documents, mail_enterprise, sign, voip, web_studio</p><p>community PR: odoo/odoo#74982</p><p>closes odoo/enterprise#20304</p><p>Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-06-30</td>
<td>Xavier Morel</td>
<td><a href="https://github.com/odoo/enterprise/commit/b18bb819754a5afdbcee378baedde382f6c8205f" target="_blank" rel="noopener">[REM] voip, sign: overrides to removed mail templates</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2021-06-29</td>
<td>Aaron Bohy</td>
<td><a href="https://github.com/odoo/enterprise/commit/fc5de53d589de65762ad6226bffb1a310768a919" target="_blank" rel="noopener">[FIX] voip: display notification when making a call</a></td>
<td><p>Before this commit, it crashed when you clicked on a phone number in a form view, with voip installed. A call to the notification service was still using the former api.</p><p>closes odoo/enterprise#19332</p><p>Signed-off-by: Géry Debongnie (ged) &lt;ged@openerp.com&gt;</p></td>
</tr>
<tr>
<td>2021-06-25</td>
<td>Didier (did)</td>
<td><a href="https://github.com/odoo/enterprise/commit/e5159c2e9039e86f73d2a1b296471bd0b4d72ba1" target="_blank" rel="noopener">[IMP] mail_enterprise, *: use explicit export instead of default</a></td>
<td><p>* = approvals, documents, sign, voip, web_studio</p><p>Exporting directly on the line of the class or variable definition is less lines of code and less repetition (and risk or mistake).</p><p>Exporting with a name instead of default allows to catch typos more easily when importing and ensures the same name is used for consistency (and ease of grep).</p><p>closes odoo/enterprise#19224</p><p>Related: odoo/odoo#72597 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-06-23</td>
<td>William Braeckman</td>
<td><a href="https://github.com/odoo/enterprise/commit/4f31cd886798c1ddacf2433ecfdaad488ab4d590" target="_blank" rel="noopener">[FIX] voip: changing res_users view</a></td>
<td><p>Change below introduced a new group on the res.users form view which unwantedly changed how the view looks (removing the label from the signature field), the group doesn&#x27;t seem to be necessary or user anywhere else.</p><p>See https://github.com/odoo/enterprise/pull/9246/files#diff-975b2fe2510bf8daaaaf6a1fd28ff4ae710d892a1e3a6895d08b49e035cbdfcbR30-R32</p><p>Task ID: 2580167</p><p>closes odoo/enterprise#19197</p><p>Signed-off-by: Yannick Tivisse (yti) &lt;yti@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-06-18</td>
<td>qmo-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/125b067b29520aacb44acfe997f515db1a415575" target="_blank" rel="noopener">[MOV] voip: move phonecall category selection in mail module</a></td>
<td><p>In order to ease the mail.activity meetings management, we move the &#x27;phonecall&#x27; category into the base &#x27;mail&#x27; module.</p><p>Check community commit for more details.</p><p>Task-2486126 COM PR odoo/odoo#75530 UPG PR odoo/upgrade#2775</p><p>closes odoo/enterprise#20431</p><p>Signed-off-by: Thibault Delavallee (tde) &lt;tde@openerp.com&gt; Co-authored-by: Aurélien Warnon &lt;awa@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-06-16</td>
<td>Bruno Boi</td>
<td><a href="https://github.com/odoo/enterprise/commit/f09023bd6b910166c7f16f52bd4158b561c4d4c9" target="_blank" rel="noopener">[REF] voip: pass bus in props of systray item and dialing panel</a></td>
<td><p>... instead of exposing it in the voip service API (it is an internal bus).</p></td>
</tr>
<tr>
<td>2021-06-15</td>
<td>Xavier Morel</td>
<td><a href="https://github.com/odoo/enterprise/commit/696c0697bbade71c1c6c5d23edbf7f04280ccc97" target="_blank" rel="noopener">[FIX] voip: warnings during tests</a></td>
<td><p>During voip tests, multiple warnings pertaining to hanging up on calls with no id (voip/static/src/js/phone_call.js::PhoneCall#hangUp) are emitted.</p><p>These warnings are caused by the RPC handler always returning empty arrays rather than sensible mock data for the call being intercepted.</p><p>The specifically problematic are the various `create_` calls, which should return something with an id in both &quot;autocall flow&quot; and &quot;call from recent tab + keypad&quot;.</p><p>While at it, update the mockRPC callback to be less weird e.g. switch the huge sequences of if/if/if to a single switch, don&#x27;t return anything from `hangUp`, update the manual Array#find, and re-enable the final `hangup_call` in &quot;call from recent tab + keypad&quot; as it now works properly instead of triggering a warning.</p></td>
</tr>
<tr>
<td>2021-06-14</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/fb3af4537ea337a993283926abd4b5f565c0b43e" target="_blank" rel="noopener">[FIX] voip: remove limit to fix internal transfer</a></td>
<td><p>The minimum length of a phone number being set to 10, it wasn&#x27;t possible to internally transfer a call (internal numbers being shorter). This commit removes the minimum characters constraint so that we can transfer a call to a number as short as an internal number.</p><p>closes odoo/enterprise#19008</p><p>X-original-commit: 3b3c5f8490b5dfb1e30f3b91f9b82e23c8159ae6 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-05-27</td>
<td>Qiuyu (QHO)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9632f5362abd4415bd3c5bbe1bc372178b19cdd2" target="_blank" rel="noopener">[IMP] voip: call activity should also use mobile number</a></td>
<td><p>Currently call activity only uses phone number of the related partner. After this commit, mobile number will be used if phone number is not existing, or both mobile and phone number will be presented if they are both existing.</p><p>task id: 2528865</p><p>closes odoo/enterprise#18562</p><p>Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-05-26</td>
<td>Louis Wicket (wil)</td>
<td><a href="https://github.com/odoo/enterprise/commit/e88c76525a2aa3f62535cd83179d330b6d6c4187" target="_blank" rel="noopener">[FIX] voip: don&#x27;t display error on hangup</a></td>
<td><p>- No longer display an error when the user hangs up on their own before the session is established. This error was confusing enough that some people reported it as a bug. - Add &#x27;600 Busy Everywhere&#x27; to recognized status codes.</p><p>closes odoo/enterprise#18553</p><p>X-original-commit: 1de46af06d541d1c6a2a27e4fbeeacb32d08c1d0 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-03-25</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/90b4b4d528b4ed456a897d7ec714d478de09c4ab" target="_blank" rel="noopener">[FIX] voip: Avoid double dialing panel display on mobile devices</a></td>
<td><p>When opened on a mobile device (smartphone or tablet), both the native Dialing Panel and the virtual one opens when composing a phone number.</p><p>This commit sets the DialingPanel Widget&#x27;s flag to detect such environment and properly hides the virtual dialing panel when the native one is available.</p><p>Steps to reproduce:</p><p>1. Open VOIP panel 2. Click on dialing panel to compose a phone number 3. Both dialing panels are displayed =&gt; bug</p><p>Task ID: 2495658</p><p>closes odoo/enterprise#17430</p><p>X-original-commit: 4c0a14f932bdc3c6acf311d5d959529f665cbef7 Signed-off-by: Pierre Paridans &lt;pparidans@users.noreply.github.com&gt; Signed-off-by: res-odoo &lt;res-odoo@users.noreply.github.com&gt;</p></td>
</tr>
<tr>
<td>2021-03-12</td>
<td>Qiuyu (QHO)</td>
<td><a href="https://github.com/odoo/enterprise/commit/27be4770ed37ed42d94a86983bad68710157cd02" target="_blank" rel="noopener">[IMP] approvals, voip: replace `[]` commands by FieldCommands</a></td>
<td><p>closes odoo/enterprise#17036</p><p>Task-id: 2453408 Related: odoo/odoo#67643 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-02-22</td>
<td>bit-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/fd3ed79cd0eefbeeb1b3821774d7463158549588" target="_blank" rel="noopener">[FIX] voip: delete call in queue</a></td>
<td><p>Before this commit:</p><p>Method delete_call_in_queue is sending on the bus res.partner but it is sending the user id instead of the partner id.</p><p>After this commit:</p><p>Method delete_call_in_queue is sending on the bus res.partner with the the partner id.</p><p>Task-2464546</p><p>closes odoo/enterprise#16689</p><p>X-original-commit: b55547ed2bc0fa4fb1faff25b7542494224a4b88 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-02-15</td>
<td>Ipsita Borisagar</td>
<td><a href="https://github.com/odoo/enterprise/commit/7d28b65599efef70d3f92d05c9b780b4f60720fd" target="_blank" rel="noopener">[FIX] voip: traceback when hanging up the call</a></td>
<td><p>Before this commit:</p><p>An activity &quot;call&quot; is already marked as &quot;done&quot; in chatter, after that user schedule an activity &quot;call&quot; again and actually make that call and hang up the call, traceback will be occured. And another issue is when page will be refreshed, this activity will be marked as &quot;done&quot; and appears in chatter.</p><p>After this commit:</p><p>Hangs up the call for the second time, the activity will be marked as &quot;done&quot;, and appear in the chatter with the original notes ( in &quot;Today&quot; activities section ) without any traceback.</p><p>Links</p><p>PR https://github.com/odoo/enterprise/pull/16464 Task- 2457219</p><p>closes odoo/enterprise#16683</p><p>X-original-commit: 56944bad19d771e8c9d6a9d668042f150cefcd50 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2021-01-15</td>
<td>ijas ahammed</td>
<td><a href="https://github.com/odoo/enterprise/commit/1dbc514e9bc480056e0eccbe51d44611a52380ea" target="_blank" rel="noopener">[IMP] voip: adapt the tests related to phone widget</a></td>
<td><p>This commit adapts the test cases related to changes made in phone widget with PR https://github.com/odoo/odoo/pull/63735.</p><p>closes odoo/enterprise#15777</p><p>Task-id: 2345974 Related: odoo/odoo#63735 Signed-off-by: Thibault Delavallee (tde) &lt;tde@openerp.com&gt;</p></td>
</tr>
<tr>
<td>2020-12-24</td>
<td>Pierre Paridans</td>
<td><a href="https://github.com/odoo/enterprise/commit/2f6f98ce1d62c0618fca473385e6360eba32dba3" target="_blank" rel="noopener">[FIX] voip: avoid permanent override of the back button</a></td>
<td><p>The commit odoo/enterprise@b9c50fd28f162f4cba01c07c05bdc5bced1aeb78 enabled the back-button support for VoIP&#x27;s DialingPanel.</p><p>Sadly when the `voip` module is installed, the DialingPanel is immediately instantiated by the WebClient and appended to the DOM at launch.</p><p>Once attached to the DOM, the `BackButtonEventMixin` overrides the default back-button behavior... but in this case, this override should happen only when the DialingPanel is displayed, not just attached to the DOM.</p><p>In practice, when the `voip` module is installed, the back-button behavior is overridden all the time by the DialingPanel widget.</p><p>This commit fixes it by only enabling/disabling the back-button override when the widget is actually displayed (independently of its presence in the DOM).</p><p>Task ID 2148384</p><p>closes odoo/enterprise#15594</p><p>X-original-commit: 19903365dc0562b95570aa4e8ed5fe8e607b166c Signed-off-by: Adrien Dieudonné (adr) &lt;adr@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-11-25</td>
<td>Krina Oza</td>
<td><a href="https://github.com/odoo/enterprise/commit/715374e490114d24b77c1b84fb192da668a74257" target="_blank" rel="noopener">[IMP] various: Updated App icons for various modules</a></td>
<td><p>In this commit icons of the following modules are updated:</p><p>-account_auto_transfer -account_bank_statement_import_ofx -account_bank_statement_import_qif -helpdesk_account -helpdesk_fsm -helpdesk_repair -helpdesk_sale_coupon -helpdesk_stock -helpdesk_timesheet -hr_expense_extract -website_helpdesk_livechat -website_helpdesk_slides -website_helpdesk_forum -voip_onsip -timer -project_forecast -payment_sepa_direct_debit -industry_fsm_stock -industry_fsm_sale</p><p>TaskID:2378861</p><p>closes odoo/enterprise#14958</p><p>Related: odoo/odoo#62291 Signed-off-by: Yannick Tivisse (yti) &lt;yti@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-11-17</td>
<td>Goffin Simon</td>
<td><a href="https://github.com/odoo/enterprise/commit/df32d171ab10824d7106f3e8f3569f03a23e9386" target="_blank" rel="noopener">[FIX] voip: Safari traceback with incoming calls</a></td>
<td><p>Steps to reproduce the bug:</p><p>- Log as user on Safari - Make an incoming call to your voip number</p><p>Bug:</p><p>A traceback was raised:</p><p>Error: undefined is not an object (evaluating &#x27;window.Notification.requestPermission().then&#x27;) https://www.odoo.com/web/content/27161571-49b7377/web.assets_backend.js:10771:353 asyncFunctionResume@[native code] [native code] promiseReactionJob@[native code]</p><p>Ref: https://stackoverflow.com/questions/38114266/notification-requestpermission-throws-an-error-in-mac-versions-of-safari</p><p>opw:2377360</p><p>closes odoo/enterprise#14860</p><p>X-original-commit: ee15b276d4c62861414292f1bab8a0d74c08858e Signed-off-by: Simon Goffin (sig) &lt;sig@openerp.com&gt;</p></td>
</tr>
<tr>
<td>2020-10-30</td>
<td>Emilien Durieu (edu)</td>
<td><a href="https://github.com/odoo/enterprise/commit/e9c57d22e75df467b6735ff0d297f632a597a63d" target="_blank" rel="noopener">[FIX] voip: fix traceback on missed call edge case</a></td>
<td><p>There&#x27;s an edge case when the widget is open and someone calls then hangs up immediately where the softphone of the receiver still thinks the call is ongoing. When trying to reject or accept the call, the lib crashes. This is a not so great fix that checks for that state of affairs and prevents the acception/rejection from happening.</p><p>task-2326328</p><p>X-original-commit: d718ba35232063b06f3897ea4b0175063165b424</p></td>
</tr>
<tr>
<td>2020-10-30</td>
<td>Emilien Durieu (edu)</td>
<td><a href="https://github.com/odoo/enterprise/commit/a06c3b1dd93eb7204ebc432b0836d46d05b4d671" target="_blank" rel="noopener">[FIX] voip: close widget on click partner</a></td>
<td><p>Clicking partner did not have the same behavior as the other button, namely the widget would not fold.</p><p>task-2326328</p><p>closes odoo/enterprise#15007</p><p>X-original-commit: 1c293dd81c97f6cd77e1e1573fc5bf2af7ee4658 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-10-30</td>
<td>Emilien Durieu (edu)</td>
<td><a href="https://github.com/odoo/enterprise/commit/9b5421d5ce1900a2377a4dc04f02bcf3108c2b1a" target="_blank" rel="noopener">[FIX] voip: button disappeared on mobile with long call history</a></td>
<td><p>Buttons in the bottom of the widget disappeared because the history was taking full size. It also prevented the history from loading completely since additional lines were loaded on scroll, which didn&#x27;t happen because no scroll bar would appear.</p><p>task-2326328</p><p>X-original-commit: 1e2386ce34ead1e3ee5e4bafcde75592c0c56538</p></td>
</tr>
<tr>
<td>2020-10-27</td>
<td>Krina Oza</td>
<td><a href="https://github.com/odoo/enterprise/commit/a93e0da9edb626102112f35c563338cdeb316110" target="_blank" rel="noopener">[IMP] various: Update the app icons</a></td>
<td><p>Purpose of the task is to update the icon of the various modules.</p><p>So in this commitn updated App icons of the following modules:</p><p>-helpdesk_account -helpdesk_fsm -helpdesk_repair -helpdesk_sale_coupon -helpdesk_stock -helpdesk_timesheet -hr_expense_extract -industry_fsm_sale -industry_fsm_stock -project_forecast -timer -voip_onsip -website_helpdesk_forum -website_helpdesk_livechat -website_helpdesk_slides</p><p>Related PR: https://github.com/odoo/odoo/pull/60817</p><p>closes odoo/enterprise#14408</p><p>Taskid: 2369682 Related: odoo/odoo#60817 Signed-off-by: Yannick Tivisse (yti) &lt;yti@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-10-21</td>
<td>Nathan de Pryck</td>
<td><a href="https://github.com/odoo/enterprise/commit/12c8f17d0906c382a29dcbc2cf644d68ec80e07d" target="_blank" rel="noopener">[FIX] voip: reject call properly</a></td>
<td><p>This fix solves 2 encountered issues when a call is rejected. First of all, if you call someone which is already in an active call, the denied answer was not correctly interpreted on the &quot;caller&quot; side as the session was not cancelled. Now a message telling that the &quot;callee&quot; is not available is displayed and the session is cancelled. The second issue appears when the sip_ignore_incomming fields was activated. In this case, the call was always rejected. The problem is that the call may be redirected elsewhere, on a desk phone for e.g.. The previous solution does not allows this case.</p><p>see: https://tools.ietf.org/html/rfc3261#section-21.6.2 for status code</p><p>closes odoo/enterprise#14341</p><p>X-original-commit: 1481ae0dee16bdb426eed1bfbd928b94e59c2163 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-10-09</td>
<td>Emilien Durieu (edu)</td>
<td><a href="https://github.com/odoo/enterprise/commit/ea3cde7efc0895ed202179b985f7b733159d3bbe" target="_blank" rel="noopener">[FIX] voip: framework was complaining about empty fields</a></td>
<td><p>Now the fields are added to the context only if they have a value.</p><p>task-2326328</p><p>X-original-commit: 8a07b2bd761829b011ed8df2e45e765bc5426dea</p></td>
</tr>
<tr>
<td>2020-10-09</td>
<td>Emilien Durieu (edu)</td>
<td><a href="https://github.com/odoo/enterprise/commit/d22de08172b2df3671b463b6cf82bf01e356086a" target="_blank" rel="noopener">[FIX] voip: mobile app crashing when missed calls</a></td>
<td><p>`_toggleFold` was calling `_onToggleDisplay` which was calling `_toggleDisplay` which in turn was calling `_toggleFold`, calling rpc procedure in the meantime, thus crashing both the server and the client.</p><p>task-2326328</p><p>X-original-commit: 97c41b9f96ce2a83db7eebab061ba73e5f42ea59</p></td>
</tr>
<tr>
<td>2020-10-07</td>
<td>Emilien Durieu (edu)</td>
<td><a href="https://github.com/odoo/enterprise/commit/2cffa257e8de66d459ca63756556715f6ba721e9" target="_blank" rel="noopener">[FIX] voip: open links in modal instead of main screen</a></td>
<td><p>X-original-commit: a099977789b225b125609e84d049cd5124d0ce15</p></td>
</tr>
<tr>
<td>2020-10-05</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/febf478db4e9a6532378b4217a95c16a96f5b094" target="_blank" rel="noopener">[FIX] documents, voip, web_studio: clean up relations chatter/thread</a></td>
<td><p>This will prevent various flicker when using previous/next.</p><p>task-2243518</p><p>closes odoo/enterprise#13885</p><p>X-original-commit: 2ef4a784f7bb0423338c138c5cdf1750ea703556 Related: odoo/odoo#59411 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-09-23</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/b3cba1480345c316319c73259f64a3f60581e6a6" target="_blank" rel="noopener">[FIX] voip: remove unnecessary partnerDisplayName in test</a></td>
<td><p>The test does not make use of it and the field was made &quot;read-only&quot; in task-2322135</p><p>closes odoo/enterprise#13478</p><p>X-original-commit: 116b078af2d1a4d63315ee1795e2b86c17bf38b9 Related: odoo/odoo#58374 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-09-21</td>
<td>Sébastien Theys</td>
<td><a href="https://github.com/odoo/enterprise/commit/6eb44a2eb2d740b9bb3e091a8c14e671769531ef" target="_blank" rel="noopener">[FIX] voip: properly use test utils</a></td>
<td><p>closes odoo/enterprise#13393</p><p>X-original-commit: 387eba0074e5d4373b38b52d0f6a8c4b96906d94 Related: odoo/odoo#58167 Signed-off-by: Sébastien Theys (seb) &lt;seb@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-09-21</td>
<td>Richard Mathot</td>
<td><a href="https://github.com/odoo/enterprise/commit/5e6639fed97a54dc201ccafb28e31cc39b6f2e68" target="_blank" rel="noopener">[FIX] voip: faster installation on large res.partner tables</a></td>
<td><p>This fix allows to install voip in a database that contains approximately 400K res.partner records.</p><p>Before the fix =&gt; timeout or MemoryError</p><p>After the fix =&gt; installation runs in ~6 min</p><p>opw-2328605</p><p>closes odoo/enterprise#13473</p><p>X-original-commit: 99ef99405b03b9e990601614af9df4a85428b867 Signed-off-by: Richard Mathot (rim) &lt;rim@openerp.com&gt;</p></td>
</tr>
<tr>
<td>2020-08-20</td>
<td>jbm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/8920f86ca306c07c0b29fc81d334fbd8c38244fc" target="_blank" rel="noopener">[FIX] voip: Refuse incoming call</a></td>
<td><p>Before this commit: In voip, if we try to refuse an incoming call, the call stops but starts again one second after. If we refuse a second time this call, the call stops. So to refuse an incoming call, we must click twice on cancel button.</p><p>After this commit: Click once on the cancel button is enough to refuse an incoming call. Technically, when rejecting the call, we send status code 603 (‘Decline’) instead of 480 (‘Temporarily Unavailable’). More details: https://tools.ietf.org/html/rfc3261#section-21.6.2</p><p>TaskID 2309518</p><p>closes odoo/enterprise#12974</p><p>X-original-commit: e93b65f20088cd3e80f8cdc906043ba0b066a9ac Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt; Signed-off-by: jbm-odoo &lt;jbm-odoo@users.noreply.github.com&gt;</p></td>
</tr>
<tr>
<td>2020-08-18</td>
<td>Kamesh Patel</td>
<td><a href="https://github.com/odoo/enterprise/commit/105fb1d80618a36099528ce6bce0d696742ab789" target="_blank" rel="noopener">[FIX] voip: fix traceback when click on contact icon</a></td>
<td><p>Before this commit:</p><p>Currently, traceback occurring while going to click on the contact icon once the call connected (new number)</p><p>This is happening because of context value is undefined for email and it fails while evaluating at val.constructor as &#x27;val&#x27; is undefined here</p><p>After this commit:</p><p>Hence, pass email to context only if partner have an email and now While going to click on the contact icon once the call connected (new number) it will be redirected to the specific contacts view without any traceback</p><p>LINKS</p><p>task-2321014</p><p>closes odoo/enterprise#13640</p><p>X-original-commit: 9147a4ae28b37170277cade69f73c7583076e47f Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-08-13</td>
<td>Denis Ledoux</td>
<td><a href="https://github.com/odoo/enterprise/commit/8b5db609e94c028c8ea080ba2cf2ec9173f1ca4a" target="_blank" rel="noopener">[FIX] voip_phonecall: index mail_message_id</a></td>
<td><p>Indexing `mail_message_id` on `voip.phonecall` really helps the performances to delete mail messages when there is a lot of phonecalls in database.</p><p>During a version upgrade, mail messages can be deleted when a model is being deleted. e.g. deleting `procurement.order` deletes the mail messages related to procurement orders.</p><p>```sql SELECT count(*) FROM voip_phonecall; count ------- 80664</p><p>SELECT count(*) FROM mail_message; count --------- 8022420</p><p>EXPLAIN ANALYZE DELETE FROM mail_message WHERE id in (SELECT id FROM mail_message WHERE model = &#x27;procurement.order&#x27; limit 1000); BEGIN QUERY PLAN -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Delete on mail_message  (cost=233.19..2877.65 rows=1000 width=34) (actual time=18.263..18.263 rows=0 loops=1) -&gt;  Nested Loop  (cost=233.19..2877.65 rows=1000 width=34) (actual time=3.585..14.200 rows=1000 loops=1) -&gt;  HashAggregate  (cost=232.75..242.75 rows=1000 width=32) (actual time=3.528..3.915 rows=1000 loops=1) Group Key: &quot;ANY_subquery&quot;.id -&gt;  Subquery Scan on &quot;ANY_subquery&quot;  (cost=0.56..230.25 rows=1000 width=32) (actual time=0.057..3.003 rows=1000 loops=1) -&gt;  Limit  (cost=0.56..220.25 rows=1000 width=4) (actual time=0.051..2.570 rows=1000 loops=1) -&gt;  Index Scan using mail_message_model_index on mail_message mail_message_1  (cost=0.56..615555.95 rows=2801913 width=4) (actual time=0.050..2.410 rows=1000 loops=1) Index Cond: ((model)::text = &#x27;procurement.order&#x27;::text) -&gt;  Index Scan using mail_message_pkey on mail_message  (cost=0.43..2.63 rows=1 width=10) (actual time=0.010..0.010 rows=1 loops=1000) Index Cond: (id = &quot;ANY_subquery&quot;.id) Planning Time: 0.396 ms Trigger for constraint mail_channel_partner_seen_message_id_fkey: time=51.775 calls=1000 Trigger for constraint mail_compose_message_parent_id_fkey: time=29.725 calls=1000 Trigger for constraint mail_mail_mail_message_id_fkey: time=12.991 calls=1000 Trigger for constraint mail_message_mail_channel_rel_mail_message_id_fkey: time=9.910 calls=1000 Trigger for constraint mail_message_parent_id_fkey: time=134.675 calls=1000 Trigger for constraint mail_message_res_partner_needaction_rel_mail_message_id_fkey: time=12.822 calls=1000 Trigger for constraint mail_message_res_partner_rel_mail_message_id_fkey: time=11.092 calls=1000 Trigger for constraint mail_message_res_partner_starred_rel_mail_message_id_fkey: time=12.034 calls=1000 Trigger for constraint mail_tracking_value_mail_message_id_fkey: time=13.142 calls=1000 Trigger for constraint message_attachment_rel_message_id_fkey: time=11.479 calls=1000 Trigger for constraint rating_rating_message_id_fkey: time=18.046 calls=1000 Trigger for constraint res_partner_mail_message_rel_message_id_fkey: time=8.843 calls=1000 Trigger for constraint voip_phonecall_mail_message_id_fkey: time=41620.315 calls=1000 Execution Time: 41967.798 ms (25 rows) ```</p><p>Upgrade request 52582 M120914764-zcaevxmq</p><p>closes odoo/enterprise#12412</p><p>X-original-commit: eef6086d7023d87316a0947ebbb2a21aa45384d3 Signed-off-by: Denis Ledoux (dle) &lt;dle@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-08-11</td>
<td>Hiral Bhavsar</td>
<td><a href="https://github.com/odoo/enterprise/commit/9eeb7dcc000e3444a610dc80378c8be08c2d3695" target="_blank" rel="noopener">[FIX] voip: activity details updated after having edited it</a></td>
<td><p>Before this commit:</p><p>Activity details not updated in the chatter after having edited it from VOIP</p><p>After this commit:</p><p>Activity details will be updated in the chatter after having edited it from VOIP</p><p>LINKS</p><p>PR https://github.com/odoo/enterprise/pull/12428 Task-2282592</p><p>closes odoo/enterprise#12904</p><p>X-original-commit: dc585a75903e9db9135a600886b876d253b46465 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-07-14</td>
<td>Xavier Dubuc</td>
<td><a href="https://github.com/odoo/enterprise/commit/fd26dc2b04be98d07bc2204f095f78e9a2bb4ed6" target="_blank" rel="noopener">[FIX] voip: fix activity override to show phone number</a></td>
<td><p>odoo/odoo#54454 task-2296875</p><p>closes odoo/enterprise#11904</p><p>X-original-commit: af323b3f807e36c8c66df9dc6ad2d5bc0bed86c1 Related: odoo/odoo#54600 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-06-22</td>
<td>Nasreddin (bon)</td>
<td><a href="https://github.com/odoo/enterprise/commit/e702cc742dd32745bade67891a5b3171961826b0" target="_blank" rel="noopener">[FIX] voip: Alter phone sanitizing format</a></td>
<td><p>Issue</p><p>Incomming caller ID isn&#x27;t identified due to &#x27;-&#x27; inside sanitized phone number.</p><p>Sample no match: Incomming caller number : 972584082887 Sanitized number in db: +972 58-408-2887</p><p>Solution</p><p>Replace sanitizing format, INTERNATIONAL by E164; it will remove all spaces and &#x27;-&#x27; like the incomimg number.</p><p>Voip incomming number must also be in E164 format: https://github.com/odoo/enterprise/blob/cf19dea77c6a6cff4956e5553ff608da1be9137f/voip/static/lib/sip.js#L10587-L10590</p><p>opw-2273126</p><p>closes odoo/enterprise#11408</p><p>X-original-commit: 48be050ce072f36e4a9e08f10450a13fce75753b Signed-off-by: Nicolas Lempereur (nle) &lt;nle@odoo.com&gt; Signed-off-by: bon-odoo &lt;nboulif@users.noreply.github.com&gt;</p></td>
</tr>
<tr>
<td>2020-05-15</td>
<td>Jorge Pinna Puissant</td>
<td><a href="https://github.com/odoo/enterprise/commit/5726cfb96f3b2d397c5f01419849e4f5c114dabb" target="_blank" rel="noopener">[FIX] voip: no contact shown on incoming call</a></td>
<td><p>Since 8c03446f57999ed23d9ee9e77797b22af9606063, to find the contact of an incoming call, a sanitized process is done to add the international code if is missing. This relay in the inviteSession.remoteIdentity.uri.type parameter, which is not always set.</p><p>Now a fallback is done, it checks if the last 6 digits of the phone number corresponds to the last 6 digits of a phone number in the contact. Like this we can find the contact without having the international code.</p><p>opw-2254068</p><p>closes odoo/enterprise#10635</p><p>X-original-commit: 1cae30a425161da0dba7e0ea94abf8b6cc23e38c Signed-off-by: Jorge Pinna Puissant (jpp) &lt;jpp@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-05-04</td>
<td>Jorge Pinna Puissant</td>
<td><a href="https://github.com/odoo/enterprise/commit/5fb6540bdeb434c33955a37a3aaf5b12620dbf44" target="_blank" rel="noopener">[FIX] voip: no contact shown on incoming call</a></td>
<td><p>Before this commit, for an incoming call, only the phone number was shown, even if the contact is registered as a contact.</p><p>The phone number used to search the contact, has the standard USA formatting domestic numbers convention &#x27;1 (are code) extension&#x27;, without international call prefix. The numbers in the contact uses &#x27;+&#x27; as international call prefix. For example: 12686152726 call and a contact using this phone number is searched instead of +12686152726 (which is the value stored in the db).</p><p>Fine-tunning of aabdb279e24be696bcd48d3b79703bdfb2c6c56f</p><p>opw-2244047</p><p>closes odoo/enterprise#10363</p><p>X-original-commit: 8051470d88a803229567d7644cce07379c7c38a8 Signed-off-by: Jorge Pinna Puissant (jpp) &lt;jpp@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-03-18</td>
<td>Jorge Pinna Puissant</td>
<td><a href="https://github.com/odoo/enterprise/commit/e2a9c1b1f1407547ac6d83b363280f39bc4ea982" target="_blank" rel="noopener">[FIX] voip: no contact shown on incoming call</a></td>
<td><p>Before this commit, for an incoming call, only the phone number was shown, even if the contact is registered as a contact.</p><p>The phone number used to search the contact, has the standard for an international call prefix (double zero), and the numbers in the contact uses the &#x27;+&#x27; as international call prefix. For e.g : 0032412345678 call and a contact using this phone number is searched instead of +32412345678 (which is the value stored in the db).</p><p>Fine-tunning of 8c03446f57999ed23d9ee9e77797b22af9606063</p><p>OPW-2187771</p><p>closes odoo/enterprise#9347</p><p>X-original-commit: aabdb279e24be696bcd48d3b79703bdfb2c6c56f Signed-off-by: Nicolas Lempereur (nle) &lt;nle@odoo.com&gt; Signed-off-by: Jorge Pinna Puissant (jpp) &lt;jpp@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-03-18</td>
<td>jbm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/278d70039fd4fe65c338dbf831db384ace719b08" target="_blank" rel="noopener">[FIX] voip: Open right partner in a phone call</a></td>
<td><p>Before this commit: When we have a phone call without a partner (If we dial a number for example), by default, we put the number in this.phone and we won&#x27;t have a mobile number. If we click on partner icon, we must jump to the partner card, and if no partner matches this number, we must have a new empty partner. But to search the existing partner, we will match partner that has this phone number or partner that has no mobile phone. So even we have no partner that has this number, we will have the first contact that have no mobile phone.</p><p>After this commit: When we click on partner icon, we will have the right partner (if it exists with this phone number) or a new empty partner form.</p><p>closes odoo/enterprise#9396</p><p>X-original-commit: 23c20a9798911b6252fca3b46ce7ea9fcac1049c Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-03-16</td>
<td>jbm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/f3d00bd38371c1de80086f04d858e24d8efa3aaa" target="_blank" rel="noopener">[FIX] voip_crm: Typo with auto_install in manifest</a></td>
<td><p>Task ID 2008564</p><p>closes odoo/enterprise#9311</p><p>X-original-commit: c2c8a0c3fb2dfb42babd16bfd2cfd65dc057008f Signed-off-by: Yannick Tivisse (yti) &lt;yti@odoo.com&gt; Signed-off-by: jbm-odoo &lt;jbm-odoo@users.noreply.github.com&gt;</p></td>
</tr>
<tr>
<td>2020-02-27</td>
<td>jbm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/767e9123fe627313c75f8eb2c324ea9d8e6e09f6" target="_blank" rel="noopener">[IMP] voip: improve general usability (back2basic)</a></td>
<td><p>Purpose =======</p><p>Improve the usability of VOIP. The main issues we have are the following: - The matching between a phone number and a contact is poor - Users completely miss the configuration available in their Profile - No reporting for VOIP - Incoming calls can be completely missed if the user doesn&#x27;t have notifications allowed - The keypad and the call buttons basically do the same thing - The usability isn&#x27;t great</p><p>Specification =============</p><p>Lot of small points. But mainly:</p><p>- Add a popover to manage transfer call (instead of wizard). - Improve views.</p><p>Check the task pad for a complete description.</p><p>closes odoo/enterprise#9351</p><p>Taskid: 2008564 Related: odoo/upgrade#1541 Signed-off-by: Yannick Tivisse (yti) &lt;yti@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-02-24</td>
<td>Loan (lse)</td>
<td><a href="https://github.com/odoo/enterprise/commit/d501fd7a8acddc67c10fa2da55132d380e0d5ed3" target="_blank" rel="noopener">[FIX] VOIP: no contact shown on incoming call</a></td>
<td><p>closes odoo/enterprise#8979</p><p>X-original-commit: 8c03446f57999ed23d9ee9e77797b22af9606063 Signed-off-by: Jorge Pinna Puissant (jpp) &lt;jpp@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-02-07</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/6a90b7f9ef85eda5146e06557f565f3b5b5016d1" target="_blank" rel="noopener">[FIX] voip: Click on number call the contact</a></td>
<td><p>Step to reproduce:</p><p>- Open VoIP - Open the contact tab - Select a contact - Click on the phone number =&gt; crash</p><p>Task ID: 1896607</p><p>closes odoo/enterprise#8359</p><p>X-original-commit: a45d489508999f9d4f50f15d6633af533a029df9 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-02-04</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/8d866e72ac5143816ecbf6b888718862726d2aeb" target="_blank" rel="noopener">[FIX] voip: Display the right tab content when an user cancel a call at connecting state</a></td>
<td><p>Task ID: 1896607</p><p>X-original-commit: ee21074eadd6f954666e66e072258400aa6ede0c</p></td>
</tr>
<tr>
<td>2020-02-04</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/8bd4030ea93f95b57ef7e8e0356f828c164b1175" target="_blank" rel="noopener">[FIX] voip: Display the right contact when clicking on it on Contacts tabs</a></td>
<td><p>Step to reproduce:</p><p>1. Open VoIP 2. Select the contacts tabs 3. Select one contact (not the first) 4. the first contact is open instead of the previous one clicked</p><p>Task ID: 1896607</p><p>X-original-commit: a79d3818d2df56e6a56185f9ca91e43123c0d90d</p></td>
</tr>
<tr>
<td>2020-02-04</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/56bd37d84ec2c50e279357c8d1972428c44f8647" target="_blank" rel="noopener">[FIX] voip: Check of the WebRTC compatibility support</a></td>
<td><p>The WebRTC protocol (used to made a call with VoIP) need a browser support of these 3 web APIs:</p><p>- RTCPeerConnection: https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection - MediaStream: https://developer.mozilla.org/en-US/docs/Web/API/MediaStream - mediaDevices: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices</p><p>With this commit in the goal to avoid some browser crash, we now check if these 3 APIs are implemented by the user browser.</p><p>Task ID: 1896607</p><p>X-original-commit: a7192d93c8cd12d694a84a8bc5180d3337c28150</p></td>
</tr>
<tr>
<td>2020-02-04</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/2fd3867760c668ce806010b722fadd53f51ae83c" target="_blank" rel="noopener">[FIX] voip: Add missing catch when trying an audio play</a></td>
<td><p>This is the next part of catching error when we trying to play audio.</p><p>The first part was made on this commit: 46d9d6757504f15269d908ef3b2b4e8306d61c92</p><p>Task ID: 1896607</p><p>X-original-commit: 3258b71767ba32483806afc4ab530e2ae60f3464</p></td>
</tr>
<tr>
<td>2020-01-30</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/e59f987818ffaf83ddff04761dd56e9c764dc07b" target="_blank" rel="noopener">[FIX] voip: Display the right button when an anwser an call</a></td>
<td><p>Step to reproduce:</p><p>1. Made a call with a voip devices to another voip device 2. Accept with the dialog the call 3. The button bar still display the accept / reject button 4. So you can easily send and accept / reject SIP command for the existing current call and made an error on the SIP server.</p><p>Task ID: 1896607</p><p>X-original-commit: 260b60846e40ace9ae225810c480c8d87c3c0397</p></td>
</tr>
<tr>
<td>2020-01-30</td>
<td>alt-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/299652a87bc8f8b7639b4f7c9b64c31ddfe9b36a" target="_blank" rel="noopener">[FIX] voip: allow install if no country code set on partner</a></td>
<td><p>Country code of the user installing voip module can be empty, leading to an AttributeError. We should not prevent installation of the App.</p><p>closes odoo/enterprise#8052</p><p>X-original-commit: 592ddff4ae1e38e6345ebb8cee532297329485d5 Signed-off-by: Alex Tuyls &lt;alt-odoo@users.noreply.github.com&gt;</p></td>
</tr>
<tr>
<td>2020-01-28</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/91e35e64e60c7a1bde2da894b1d9fa17703bef09" target="_blank" rel="noopener">[FIX] voip: window.Notification could not exist in some case browser</a></td>
<td><p>Task ID: 1896607</p><p>X-original-commit: 66cd716540a8d2ef1c1f9b6ba269a8330989bea3</p></td>
</tr>
<tr>
<td>2020-01-24</td>
<td>Pierre Paridans</td>
<td><a href="https://github.com/odoo/enterprise/commit/dc1199bb32b91d3ef15d93bd90f0746a3250bdaf" target="_blank" rel="noopener">[FIX] account,voip: fake notebook misses tabs container</a></td>
<td><p>Since commit odoo/odoo@43db60dffa9cc2d99ef59ad384c2f21006ba593e `&lt;notebook&gt;` elements have also a wrapper element (with class `o_notebook_headers` around their tabs.</p><p>Since VOIP and account modules reuse the markup and styling of the `&lt;notebook&gt;` but without using the tag itself (cf. done by hand) the dial-up&#x27;s and reconciliation line&#x27;s tabs style were broken.</p><p>This commit adds the missing wrapper element and moves the margin-{left,right} reset to the correct element.</p><p>closes odoo/enterprise#7941</p><p>X-original-commit: 922cac0cc34df29d8003403edf79e92a6499578c Related: odoo/odoo#43959 Signed-off-by: Pierre Paridans &lt;pparidans@users.noreply.github.com&gt;</p></td>
</tr>
<tr>
<td>2020-01-20</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/9c01ea262e2a1b98d70ede10dc26262009571690" target="_blank" rel="noopener">[FIX] voip: fix &quot;rejecting RTCSession&quot; on making call</a></td>
<td><p>Revision on https://github.com/odoo/enterprise/commit/46d9d6757504f15269d908ef3b2b4e8306d61c92</p><p>Commit above made significant changes to client-side code of VOIP. However, it made a slight unintended change in the handling of the SIP signal INVITE, which in consequences rejected the call session immediately, resulting in an &quot;rejecting RTCSession&quot; on RINGING.</p><p>Closes #7800</p><p>X-original-commit: 3c983cac1a5bf93c54c02b85b0eec5e278715ebe</p></td>
</tr>
<tr>
<td>2020-01-20</td>
<td>Hiral Bhavsar</td>
<td><a href="https://github.com/odoo/enterprise/commit/5acd337a20a0923d5bf938d420b7e335dd23d21e" target="_blank" rel="noopener">[FIX] voip: no dial number when hitting Enter</a></td>
<td><p>Before this commit, during a call, when dialing number with click and then pressing Enter, it was dialing the latest number again. So if we wrote 12 and press Enter, it will add a 2 and output 122.</p><p>This happened because the focus was kept on dial number button, so pressing Enter still triggered a click on this dial number button.</p><p>This commit fixes the issue by setting the focus on to keypad input after click on dial number. That way, pressing Enter should behave as expected.</p><p>Task-Id 2071310</p><p>closes https://github.com/odoo/enterprise/pull/6934</p><p>closes odoo/enterprise#6934</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-01-20</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/533a7dfe6d390e380c80ed02158147cad851ad85" target="_blank" rel="noopener">[FIX] voip: stop ringtones during call</a></td>
<td><p>Revision on https://github.com/odoo/enterprise/commit/46d9d6757504f15269d908ef3b2b4e8306d61c92</p><p>Commit above introduced an issue where ringtone before call was still ringing during call, which this commit fixes.</p><p>Closes #7800</p><p>closes odoo/enterprise#7811</p><p>X-original-commit: 77ac65710f23fa1397572d7b1ae2a268df29f393 Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-01-17</td>
<td>Romain Estievenart</td>
<td><a href="https://github.com/odoo/enterprise/commit/b9c50fd28f162f4cba01c07c05bdc5bced1aeb78" target="_blank" rel="noopener">[IMP] voip: Enable VoIP on mobile devices</a></td>
<td><p>This commit enable VoIP on the mobile application. You are now able to choice between a phone call or a VoIP call when you click on a phone link.</p><p>Task ID: 1896607</p><p>closes odoo/enterprise#9246</p><p>Related: odoo/upgrade#945 Signed-off-by: Adrien Dieudonné (adr) &lt;adr@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-01-15</td>
<td>Martin Trigaux</td>
<td><a href="https://github.com/odoo/enterprise/commit/82be4a6835bc6a661c07e5d215605d47363fe35c" target="_blank" rel="noopener">[ADD] *: add ir.model.access on all transient models</a></td>
<td><p>snailmail_account_followup: adapt rule based on the one in the view l10n_be_reports,sale_ebay: add missing rules hr_appraisal: allow group_user timesheet.validation: approver only can access hr_referral: referral users can use wizard crm_helpdesk: saleman creates a ticket create done in sudo delivery_easypost: delivery manager can modify carriers documents: document users can request documents helpdesk_fsm: create a task from the wizard helpdesk_sale_coupon: replace hardcoded checks by ACL hr_contract_salary: contract manager can generate links hr_contract_sign: any employee can sign a document hr_payroll: payroll manager can create payslip and contract manager can modify contracts hr_payroll_account_sepa: same rule as hr.payslip industry_stock_fsm: remove hardcoded group by dynamic ACL iot: only admin as modiy ir.config_parameters l10n_be_hr_payroll: same rights as hr.payslip marketing_automation: same rights as source model marketing.campaign mrp_mps: same as source mps model mrp_workorder: allow for group user planning: only manager can create planning records sale_renting: salesman can create rental orders sale_renting_sign: sign user can request signature, ACL are checks in python sale_subscription: only a sale manager can modify subscriptions only a subscription manager can close a subscription sign: sign user can request signatures stock_barcode: stock user can create lot</p><p>closes odoo/enterprise#7737</p><p>Voip: any employee can forward calls Related: odoo/odoo#43306 Signed-off-by: Martin Trigaux (mat) &lt;mat@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2020-01-02</td>
<td>Shreya Thakrar</td>
<td><a href="https://github.com/odoo/enterprise/commit/40b6b930a33e8cb9a0c4120e4bf0a1a2e05a2a00" target="_blank" rel="noopener">[IMP] web_enterprise, voip: call queue icon visbility</a></td>
<td><p>This commit makes &#x27;Call queue&#x27; icon always visible for small devices which was not the case before.</p><p>Steps to reproduce: 1) Open CRM 2) Check the icon on the kanban card of &#x27;crm.lead&#x27;</p><p>Task ID - 2152124</p><p>closes odoo/enterprise#8436</p><p>Signed-off-by: Adrien Dieudonné (adr) &lt;adr@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-12-03</td>
<td>Ipsita Borisagar</td>
<td><a href="https://github.com/odoo/enterprise/commit/f07318b3985c5028c89ac888f59b0e33af760200" target="_blank" rel="noopener">[IMP] voip: ENTER key should start the call</a></td>
<td><p>This commit improves keyboard navigation to start the call when pressing ENTER after entering the phone number with the dialpad.</p><p>Task-Id 2124341</p><p>closes odoo/enterprise#7171</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-11-14</td>
<td>Lucas Perais (lpe)</td>
<td><a href="https://github.com/odoo/enterprise/commit/5c14802d97d3ad1b93893b08c78fcea4cb4e8622" target="_blank" rel="noopener">[IMP] voip, payment_sepa_direct_debit, adapt phone widget</a></td>
<td><p>Task 2123526</p><p>Adapt some views and test to the new feature: option to send sms is enabled by default on phone widget</p><p>closes odoo/enterprise#6706</p><p>Related: odoo/odoo#40266 Signed-off-by: Aaron Bohy (aab) &lt;aab@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-11-04</td>
<td>Hiral Bhavsar</td>
<td><a href="https://github.com/odoo/enterprise/commit/2822f583c859f2c215bb0347aaa4e04568e47b2f" target="_blank" rel="noopener">[IMP] voip: allow access to the dialpad during a call</a></td>
<td><p>This commit allow the access to the dialpad during a call.</p><p>Task-Id 2071310</p><p>closes https://github.com/odoo/enterprise/pull/6934</p></td>
</tr>
<tr>
<td>2019-10-29</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/d09673bc7a189b82f76425e1998a52f2f5e9b3e5" target="_blank" rel="noopener">[IMP] voip: put phonecalls menu into Phone / SMS technical menu</a></td>
<td><p>Purpose is to clean a bit technical menu, notably separating Discuss, Emails, Mass Mailing and Phone menu entries. Indeed there are quite a lot of menu entries and finding something is sometimes difficult.</p><p>Task 2118599 Community PR odoo/odoo#39460 PR #6539</p><p>Signed-off-by: Thibault Delavallee (tde) &lt;tde@openerp.com&gt;</p></td>
</tr>
<tr>
<td>2019-10-08</td>
<td>Nicolas Martinelli</td>
<td><a href="https://github.com/odoo/enterprise/commit/41bb70c57dd6010ecb45b5b31407f94a484ed18b" target="_blank" rel="noopener">[FIX] voip: consistent variable name</a></td>
<td><p>The variable `_currentPhoneCallId` is sometimes called `_currentPhonecallId`, which leads to crashes when calling from the activity widget.</p><p>We make the variable name consistent accross the files.</p><p>closes odoo/enterprise#5968</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-09-20</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/a056a62887645e94555a197bec26c4c08c5f9172" target="_blank" rel="noopener">[FIX] voip: prevent audio play in tests</a></td>
<td><p>This was caused by Chome Autoplay Policy.</p><p>Task-Id 2075089</p><p>closes odoo/enterprise#5395</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-09-03</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/b1c4faea8d2a179ea86b096e6d10741c6e7bec7c" target="_blank" rel="noopener">[FIX] voip: several fixes</a></td>
<td><p>1. search was not working 2. style of active tab header did not change properly 3. phone call with not ID no longer make a crash 4. redirect to partner was creating a record 5. error on call did not give reason from SIP lib 6. making a call crashed (`cannot read &#x27;pause&#x27; of &#x27;undefined&#x27;`) 7. could not select text (e.g. &#x27;Document&#x27;) on phone call details</p><p>Note that for issue 3, this commit prevents the crash but it does not the underlying problem. This change aligns the behaviour since version 11.</p><p>Task-Id 2058517</p></td>
</tr>
<tr>
<td>2019-08-22</td>
<td>Ravi Singh</td>
<td><a href="https://github.com/odoo/enterprise/commit/acc4fc3a057a40a75f0eccff96b5178081ac5c1e" target="_blank" rel="noopener">[FIX] voip: showing name of contact on call</a></td>
<td><p>in this commit, we have set the correct attribute(variable&#x27;s name) to fix showing the name of the contact on VOIP call panel</p><p>task-2056427</p><p>closes odoo/enterprise#5232</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-08-20</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/8ec8e93fc343e47d1a147c598804fd43b75b8fe4" target="_blank" rel="noopener">[FIX] *, web: Edge does not support obj spread operator</a></td>
<td><p>*: account_reports, documents, mail_enterprise, voip</p><p>As of August 20 2019, Microsoft Edge partially supports ECMA2018. For instance, `Promise.prototype.finally()` can be used, but the spread operator does not work on objects.</p><p>Task-ID 2056070</p><p>closes odoo/enterprise#5254</p><p>Signed-off-by: Pierre Paridans &lt;pparidans@users.noreply.github.com&gt;</p></td>
</tr>
<tr>
<td>2019-07-17</td>
<td>Julien Castiaux</td>
<td><a href="https://github.com/odoo/enterprise/commit/8033614d52346705a5ce4570fdfc3ed26c47527a" target="_blank" rel="noopener">[IMP] voip: show partner name instead of number</a></td>
<td><p>Set a phone number on a partner, make that partner call Odoo, his phone number is shown instead of his name.</p><p>Task-ID 2034004</p><p>closes odoo/enterprise#4937</p><p>Signed-off-by: Pierre Rousseau (pro) &lt;pro@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-06-27</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/00872278c8673b9697ecb9f4855a24c91f3c648f" target="_blank" rel="noopener">[MOV] voip: move JS code related to fields in its own file</a></td>
<td><p>Otherwise it is quite lost in a big JS file. Purpose is to prepare future modification of phone widget and voip integration inside it.</p><p>Related to task 1922163 Linked to community PR odoo/odoo#34516 Linked to PR #4707</p><p>Signed-off-by: Thibault Delavallee (tde) &lt;tde@openerp.com&gt;</p></td>
</tr>
<tr>
<td>2019-06-24</td>
<td>Pierre Rousseau</td>
<td><a href="https://github.com/odoo/enterprise/commit/e49106adf98c0cbf71b28f3c55f05790496ab1cb" target="_blank" rel="noopener">[FIX] voip: unable to accept call on chrome</a></td>
<td><p>Before this commit, we were not able to accept a call on chrome if the user doesn&#x27;t click on the page, because the play function requires some user interaction beforehand.</p><p>closes odoo/enterprise#4637</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-06-19</td>
<td>Florent Lejoly</td>
<td><a href="https://github.com/odoo/enterprise/commit/46d9d6757504f15269d908ef3b2b4e8306d61c92" target="_blank" rel="noopener">[IMP] voip: improvements</a></td>
<td><p>Improvements:</p><p>- New ringtone to notify user when connection is establishing; - Rounded corners to VOIP window; - Improved style of folded VOIP window; - Removed email button in non-partner calls; - Can now close VOIP even when configs are invalid or widget is blocked; - New &quot;connecting...&quot; screen when connection is establishing; - Automatically display unfold VOIP window on incoming call; - Temporarily block VOIP while microphone access is denied and trying to either call or receive a call; - New distinction between answered/missed/rejected calls; - Update sip.js lib to v0.13.8; - Code cleaning.</p><p>Known issues:</p><p>- When microphone permission is denied, it displays a crash error instead of blocking UI temporarily and requesting user to activate microphone. This is caused by conflict between unhandledrejection polyfill and sip.js lib (see https://github.com/odoo/odoo/commit/3b133f6f2c54ac8fb0a2ca415761eb6e872ac474)</p><p>Contributions:</p><p>- New features and Python code cleaning by Florent Lejoly &lt;fle@odoo.com&gt; - Javascript code cleaning by Alexandre Kühn &lt;aku@odoo.com&gt;</p><p>Task-Id: 1913470</p><p>Co-Authored-By: Alexandre Kühn &lt;aku@odoo.com&gt;</p><p>closes odoo/enterprise#3562</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-06-14</td>
<td>Nathan de Pryck</td>
<td><a href="https://github.com/odoo/enterprise/commit/9b9dc9e1123d4e8db3dd1ea6b047667d7b44dbe3" target="_blank" rel="noopener">[FIX] voip_onsip: fix the login to onsip</a></td>
<td><p>Previously, it was not possible to login to onsip. The connection was always forbidden because it does not collect all the configuration arguments. In order to fix it we override the method to gather all the config parameter from the voip user agent.</p><p>opw-2008473</p><p>closes odoo/enterprise#4579</p><p>Signed-off-by: Pierre Rousseau (pro) &lt;pro@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-06-13</td>
<td>Pierre Rousseau</td>
<td><a href="https://github.com/odoo/enterprise/commit/6890e797e5bb5a57fa0a74d4e853fe007fc116a4" target="_blank" rel="noopener">[FIX] voip: do not work on sip session in demo mode</a></td>
<td><p>Steps to reproduces: * Install VoIP * Make a call (in demo mode) * Mute or send a DTML =&gt; Traceback</p><p>This behavior was due to function calls on a sip session, which does not exist when VoIP is in demo mode. This commit fix this by adding a check on all the concerned functions.</p><p>Task-ID: 2009502</p><p>closes odoo/enterprise#4571</p><p>Signed-off-by: Rémi Rahir (rar) &lt;rar@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-06-06</td>
<td>Florent Lejoly</td>
<td><a href="https://github.com/odoo/enterprise/commit/94970b3b12bc98623612fa918a5379f819526b83" target="_blank" rel="noopener">[FIX] voip: uncatched promises</a></td>
<td><p>Before this commit it was impossible to make a call from the recent tab due to some uncatched promises. This commit fix the issue and add tests in order to avoid this in the future.</p><p>closes odoo/enterprise#4265</p><p>Signed-off-by: Pierre Rousseau (pro) &lt;pro@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-06-05</td>
<td>Toufik Ben Jaa</td>
<td><a href="https://github.com/odoo/enterprise/commit/3003e7dcd13591ab1b357329849519ddcc28a6f0" target="_blank" rel="noopener">[FIX] voip: keypad button on phone widget hidden</a></td>
<td><p>- In certain circumstances the bottom button to access the VOIP keypad was hidden.</p><p>This happens when you have a lot of recents call, activities that then hid the buttons.</p><p>closes odoo/enterprise#4514</p><p>Signed-off-by: Quentin Smetz (qsm) &lt;qsm@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-06-03</td>
<td>Olivier Dony</td>
<td><a href="https://github.com/odoo/enterprise/commit/acdc96b4d856f5c966ae9ca24f8fd12c59740b59" target="_blank" rel="noopener">[FIX] voip: fix typo in c21f9ac54b23b57fd3a6193497a7aebeb3f923b7</a></td>
<td><p>This enumeration is meant to be done on `messages`, as indicated by the name of the enum variables. There is a 1-to-1 mapping between `messages` and `self` after calling super(), because each activity results in a new message. Additionally, after super() the activities in `self` are deleted and should not be used.</p><p>Related to odoo/enterprise#3441 and Task-1915004</p></td>
</tr>
<tr>
<td>2019-04-25</td>
<td>Sapan Zaveri</td>
<td><a href="https://github.com/odoo/enterprise/commit/b1fd737fcbcf572e61fa57539e4f1fed4766402e" target="_blank" rel="noopener">[IMP] account_reports: phone should be clickable on follow-up reports</a></td>
<td><p>Purpose of this task is, on the follow-up reports, the phone and mobile numbers of the contact are indicated. the user can now directly call those numbers by clicking on them So I made the phone number clickable on follow-up reports.</p><p>here we need to check for the voip  so added name on voip and if voip installed then do the direct calling from voip.</p><p>Task- 1965862</p><p>closes odoo/enterprise#4077</p><p>Signed-off-by: Alexandre Kühn (aku) &lt;aku@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-04-01</td>
<td>Pierre Rousseau</td>
<td><a href="https://github.com/odoo/enterprise/commit/43c51311e02e03a48921554eb5875d38ef410cf2" target="_blank" rel="noopener">[FIX] voip: discard bad incoming SIP message</a></td>
<td><p>Before this commit, if a malformated incoming SIP message is received by the UA, a traceback occured. Now, a warning is logged, as SIP.JS do in the new version: https://github.com/onsip/SIP.js/blob/88f356a9063b575de5732dbb68a791724fb9728d/src/UA.ts#L640</p><p>closes odoo/enterprise#4036</p><p>Signed-off-by: pimodoo &lt;pimodoo@users.noreply.github.com&gt;</p></td>
</tr>
<tr>
<td>2019-03-06</td>
<td>Vincent Schippefilt</td>
<td><a href="https://github.com/odoo/enterprise/commit/6767c63e2d4a6c738c8a98cc1f7587fc538985e2" target="_blank" rel="noopener">[REF] voip: adapt code after jQuery update</a></td>
<td><p>Part of task 1896658</p><p>Co-authored-by: Aaron Bohy &lt;aab@odoo.com&gt; Co-authored-by: Christophe Matthieu &lt;chm@odoo.com&gt; Co-authored-by: Mathieu Duckerts-Antoine &lt;dam@odoo.com&gt; Co-authored-by: David Monjoie &lt;dmo@odoo.com&gt; Co-authored-by: Martin Geubelle &lt;mge@odoo.com&gt; Co-authored-by: svs-odoo &lt;svs@odoo.com&gt; Co-authored-by: Vincent Schippefilt &lt;vsc@odoo.com&gt;</p></td>
</tr>
<tr>
<td>2019-02-26</td>
<td>Prakash Prajapati</td>
<td><a href="https://github.com/odoo/enterprise/commit/12b3c8d1cdfda64bbe13528f08c0cb11bcbfb466" target="_blank" rel="noopener">[IMP] voip: allow to access VoIP tab behind modal</a></td>
<td><p>When a modal is opened, there&#x27;s no way to hang up on VoIP as the VoIP tab is behind the modal.</p><p>This commit improves the behavior by making VoIP tab accessible even when a modal is opened.</p><p>task-1911276</p><p>closes odoo/enterprise#3725</p><p>Signed-off-by: pimodoo &lt;pimodoo@users.noreply.github.com&gt;</p></td>
</tr>
<tr>
<td>2019-02-25</td>
<td>Toufik Ben Jaa</td>
<td><a href="https://github.com/odoo/enterprise/commit/bf7458d8af52017c5ee430cfcf7201728aaf99d6" target="_blank" rel="noopener">[FIX] voip: forwardport fail, missing comma</a></td>
<td><p>closes odoo/enterprise#3717</p></td>
</tr>
<tr>
<td>2019-02-20</td>
<td>Pierre Rousseau</td>
<td><a href="https://github.com/odoo/enterprise/commit/e472e137a9e72a3357c9f42cff18c385f544724d" target="_blank" rel="noopener">[FIX] voip: allow debug mode</a></td>
<td><p>Since 58365ad9d529a924c84fd43d942a04d9f6c5d135, there is a check to enable or disable the logging in console. However, the param &#x27;debug&#x27; was never sent to the client.</p><p>closes odoo/enterprise#3686</p></td>
</tr>
<tr>
<td>2019-02-19</td>
<td>Rémi Rahir</td>
<td><a href="https://github.com/odoo/enterprise/commit/2c7cf81836ddc1b9b9a46292243d19c877c68c5c" target="_blank" rel="noopener">[FIX] voip: fallback on keypad when no phonecall found</a></td>
<td><p>Since last refactoring, users could only use the searchbar to filter existing phonecalls and not to dial a phonenumber anymore. This was done on purpose to trigger specific events for every tab.</p><p>This commits allows a fallback behaviour; when the search term does not return any result, the user can hit the &#x27;call&#x27; button and will be redirected to the keypad where he can dial any number.</p><p>closes odoo/enterprise#3677</p></td>
</tr>
<tr>
<td>2019-02-18</td>
<td>Rémi Rahir</td>
<td><a href="https://github.com/odoo/enterprise/commit/ccd195e2b6ada4ec9aff67d783819259b0b49358" target="_blank" rel="noopener">[FIX] voip: search any description in next activities tab</a></td>
<td><p>The code that filters the next activities uses the search term as a regular expression which mean that any search beginning with &#x27;+&#x27;, &#x27;*&#x27; will crash at the creation of the RegExp object.</p><p>This commit escapes the specific symbols proper to regexpressions since we don&#x27;t actually need them.</p></td>
</tr>
<tr>
<td>2019-02-18</td>
<td>Rémi Rahir</td>
<td><a href="https://github.com/odoo/enterprise/commit/5d5c2449cbfb5c6afb0585ebf9b9e0ee4e5063cd" target="_blank" rel="noopener">[FIX] voip: don&#x27;t use static values for height</a></td>
<td><p>Backport of commit 1b7feef4da284a38e69bfe181e1c273cecf21a21</p><p>closes odoo/enterprise#3671</p></td>
</tr>
<tr>
<td>2019-02-18</td>
<td>Rémi Rahir</td>
<td><a href="https://github.com/odoo/enterprise/commit/1b7feef4da284a38e69bfe181e1c273cecf21a21" target="_blank" rel="noopener">[FIX] voip: don&#x27;t use static values for height</a></td>
<td><p>The fix proposed in 67d59a5903d01245d592542ec40d32f444134ac5 had weird behaviours in mobile view because in said views, the dial panel takes the whole screen. The 420px height limit meant that only 420px out of 1080 (for an hd screen) would be used by that class, leaving 660 for the bottom dial buttons which broke the layout completely.</p><p>closes odoo/enterprise#3664</p></td>
</tr>
<tr>
<td>2019-02-14</td>
<td>Jorge Pinna Puissant</td>
<td><a href="https://github.com/odoo/enterprise/commit/ad142a9fb17eb9d3c076fb4f14d0fb85f018e431" target="_blank" rel="noopener">[FIX] voip: click phone number voip parameter missing</a></td>
<td><p>When a VOIP is configured for the company, and a user don&#x27;t use VOIP (he didn&#x27;t configure username and password in the user settings). When the user click in a phone number:</p><p>Before this commit, the pop-up of the VOIP widget is open, a yellow message telling that the user is calling the number appears, and a traceback is raised.</p><p>Now, the default configuration of the browser is called.</p><p>opw-1937924</p><p>closes odoo/enterprise#3640</p></td>
</tr>
<tr>
<td>2019-02-13</td>
<td>Rémi Rahir</td>
<td><a href="https://github.com/odoo/enterprise/commit/6d5f817616f744e6348c3318012acb52eda3aebc" target="_blank" rel="noopener">[FIX] voip: toggle on inexistant variable</a></td>
<td><p>Small typo on variable name introduced when improving the interface in b1c0b95530786d8043a19801d9a11fe6375649fc.</p><p>closes odoo/enterprise#3631</p></td>
</tr>
<tr>
<td>2019-02-05</td>
<td>Nicolas Seinlet</td>
<td><a href="https://github.com/odoo/enterprise/commit/87ee58d570bfbfb3d590f64a6589ebe3aeec9e5e" target="_blank" rel="noopener">[IMP] voip: has_call_in_queue</a></td>
<td><p>Avoid to search in a loop. As the res_id is on a M2O, a read_group is not usable, and I guess there not millions of phone calls.</p><p>closes odoo/enterprise#3591</p></td>
</tr>
<tr>
<td>2019-02-01</td>
<td>fleodoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/67d59a5903d01245d592542ec40d32f444134ac5" target="_blank" rel="noopener">[FIX] voip: chrome issue</a></td>
<td><p>-Some buttons where not displayed in the new version of chrome</p><p>closes odoo/enterprise#3563</p></td>
</tr>
<tr>
<td>2019-01-30</td>
<td>XavierDo</td>
<td><a href="https://github.com/odoo/enterprise/commit/5f7fa74d413f46a9dec067de90558fbda8dace57" target="_blank" rel="noopener">[FIX] voip: inform user when call activity type is wrongly configured</a></td>
<td><p>`create_call_in_queue` highly relies on the fact that activity type `mail_activity_data_call` has &#x27;phonecall&#x27; as category. It isn&#x27;t always the case since activity type can be edited by users.</p><p>In this case, it is possible that a user receives a &#x27;record may have no phonecall&#x27; error message when it is actually linked to activity_type configuration.</p><p>This commit adds a better error message in this case, (and hopefully prevents support team to waste time on related tickets)</p><p>closes odoo/enterprise#3546</p></td>
</tr>
<tr>
<td>2019-01-24</td>
<td>Pierre Rousseau</td>
<td><a href="https://github.com/odoo/enterprise/commit/bc90fa4153b2a89ce9ff6ab27a418b95aa3a7ade" target="_blank" rel="noopener">[FIX] voip: cancel and reject failed</a></td>
<td><p>This commit completes f27626607b0e4d372a3cd943940617b9cd6d9568 when the call is rejected by closing the dialog.</p><p>This commit also fix the case when a call already finished is cancelled. An error is thrown by the lib: https://github.com/odoo/enterprise/blob/d1d79944cd3d9a76450184b42949e9bd4d2351d1/voip/static/lib/sip.js#L6863</p><p>But the error is not relevant for the end user. So the issue is catched and logged.</p><p>opw-1929582</p><p>closes odoo/enterprise#3500</p></td>
</tr>
<tr>
<td>2019-01-24</td>
<td>fleodoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/95eb8508cf5e9e9cdd802047e5c892a79de7e6c7" target="_blank" rel="noopener">[FIX] voip: Unblock voip if connected</a></td>
<td><p>Before this commit, if SIP fails to connect to the websocket at the first try, the phone widget was blocked without the possibility to unblock it. In addition, the overlay blocked all the widget, including the close icon.</p><p>Now, the phone is blocked by default, and unblock as soon as the websocket is connected.</p><p>OPW-1931725</p><p>closes odoo/enterprise#3495</p></td>
</tr>
<tr>
<td>2019-01-18</td>
<td>jem-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/1aa3afebb1e153fd2d153f8f2bc0911277395373" target="_blank" rel="noopener">[IMP] voip: upload document to mark activity as done</a></td>
<td><p>This commit only contains adaptation to the new community feature &quot;upload a document to mark an activity as done&quot; Indeed, the &#x27;category&#x27; field on activity should now be always visible, as we got 2 entries in mail modules.</p><p>Task-1915004</p><p>closes odoo/enterprise#3441</p></td>
</tr>
<tr>
<td>2018-12-18</td>
<td>jem-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/c21f9ac54b23b57fd3a6193497a7aebeb3f923b7" target="_blank" rel="noopener">[REF] voip: adaptation to new _action_done method</a></td>
<td><p>This commit uniformize the &quot;mark as done&quot; method for activity. The change is done in comminuty edition, so adaptations are required here. No functionnal change should be observed as this is purely technical.</p><p>Task-1915004</p></td>
</tr>
<tr>
<td>2018-12-11</td>
<td>Julien (juc) Castiaux</td>
<td><a href="https://github.com/odoo/enterprise/commit/98a1eec82878a30e98a8534065f16e8eb99b550f" target="_blank" rel="noopener">[FIX] voip: access a partner using his phone number</a></td>
<td><p>When clicking on the &quot;customer&quot; button on an ongoing call, a form to create a new parted was open even if the mobile phone was already known. This PR search for existing partner for the given phone number before opening the new partner form.</p><p>opw-1913815</p><p>closes odoo/enterprise#3260</p></td>
</tr>
<tr>
<td>2018-11-22</td>
<td>Toufik Ben Jaa</td>
<td><a href="https://github.com/odoo/enterprise/commit/1d060d999e46b42e0003302bbf21f81a7c689767" target="_blank" rel="noopener">[FIX] voip: correctly display phone call date</a></td>
<td><p>- The phone call date were not displayed correctly. They were offset by a month (november was displayed as december).</p><p>closes odoo/enterprise#3130</p></td>
</tr>
<tr>
<td>2018-11-20</td>
<td>Goffin Simon</td>
<td><a href="https://github.com/odoo/enterprise/commit/4ebf3ab5766319c54cdb6421045240f11065cb10" target="_blank" rel="noopener">[FIX] voip: Uninstalling VOIP lead to traceback</a></td>
<td><p>Steps to reproduce the bug:</p><p>- Install CRM and VOIP - Uninstall VOIP - Schedule a call on a lead</p><p>Bug:</p><p>A traceback was raised because the value &#x27;phonecall&#x27; didn&#x27;t exist for the selection field category on model &#x27;mail.activity.type&#x27;</p><p>opw:1908724</p><p>closes odoo/enterprise#3108</p></td>
</tr>
<tr>
<td>2018-10-30</td>
<td>XavierDo</td>
<td><a href="https://github.com/odoo/enterprise/commit/f804104dc2581c94384111ef47646a856363ab1d" target="_blank" rel="noopener">[FIX] voip: sync activity and phonecall date_deadline</a></td>
<td><p>Previously, when updating an activity date deadline, the corresponding phone call was not updated.</p><p>Now, writting date_deadline on activities will automatically update the corresponding phonecalls.</p><p>In this case, we also need to notify voip for refresh to update the displayed phonecall list.</p><p>Task: 1892475</p></td>
</tr>
<tr>
<td>2018-10-30</td>
<td>XavierDo</td>
<td><a href="https://github.com/odoo/enterprise/commit/b1c0b95530786d8043a19801d9a11fe6375649fc" target="_blank" rel="noopener">[IMP] voip: improve voip interface and manage autocall</a></td>
<td><p>This commit improves a little the voip pannel layout and add the support for autocall in activities: When calling from activity tab, each time a call is ended, the next one in the list is displayed.</p><p>Since the active call will be set has done once finished, a new option exists in autocall mode to &quot;postpone&quot; the call, meaning that the activity won&#x27;t be set has done. A js counter will register witch call was already tried in order select next one wisely and keep the already tried one for the end. Of course, this information will be lost if refreshing the page.</p><p>This commit also contains some cleaning and renaming, like log_note that wasn&#x27;t used and get_info() that was called multiple time, when the only information needed was the id.</p><p>Some work should still be done to move the different behaviour to the correct place.</p><p>Task: 1892475</p></td>
</tr>
<tr>
<td>2018-10-30</td>
<td>XavierDo</td>
<td><a href="https://github.com/odoo/enterprise/commit/3cf575334e53854feaa0118e786c599fba131c2c" target="_blank" rel="noopener">[ADD] voip, voip_crm: add call queue widget and mixin</a></td>
<td><p>Before previous voip refactoring it was possible to add a lead to the phonecall list. This commit retore this functionnality and add a server action to be able to add multiple records in the next activities phonecall list. Since phonecalls are linked to activity, it is done by creating a &quot;Call&quot; activity on each record. To avoid missing anything, a UserError will be raised if any of the record don&#x27;t have a phone number. This server action has been added on partner and leads.</p><p>The choice of making a mixin is maybe a little overkill but will allow to easily add this behaviour on any model later.</p><p>The voip mail_activity create has been decorate by model_create_multi, mainly to be able to create multiple record at the same time but to send only one refresh_voip notification.</p><p>Task: 1892475</p></td>
</tr>
<tr>
<td>2018-10-04</td>
<td>mreficent</td>
<td><a href="https://github.com/odoo/enterprise/commit/f7ea5671667460d4edd4e5ecc78f1184463bc236" target="_blank" rel="noopener">[REF] voip: rename voip.phonecall type field to phonecall_type</a></td>
<td><p>Purpose of this commit is to rename type column to something matching the the real business use of the field. That way it is easier to find and grep in the code. It also lessens potential conflicts with type build-in python function. It also lessens conflicts when using the field in JS as type is a build-in attribute.</p><p>Renaming type column is a long-living issue. We choose to do it at the beginning of the v13 development to catch errors as soon as possible.</p><p>This commit is linked to task ID 1896245. It is also a subpart of community PR #2807.</p></td>
</tr>
<tr>
<td>2018-09-27</td>
<td>Nicolas Martinelli</td>
<td><a href="https://github.com/odoo/enterprise/commit/f27626607b0e4d372a3cd943940617b9cd6d9568" target="_blank" rel="noopener">[FIX] voip: rejection failed</a></td>
<td><p>- Set-up callflow configurated to ring on two devices - Receive a call, a pop-up &#x27;Incoming call from:&#x27; is shown on both devices - Answer on device 1 - Cancel on device 2</p><p>A JS traceback arises.</p><p>This traceback is done on purpose at https://github.com/odoo/enterprise/blob/d1d79944cd3d9a76450184b42949e9bd4d2351d1/voip/static/lib/sip.js#L5788</p><p>However, the end user is not expecting such an error. Therefore, we catch and log it.</p><p>opw-1887056</p><p>closes odoo/enterprise#2740</p></td>
</tr>
<tr>
<td>2018-09-24</td>
<td>Nicolas Martinelli</td>
<td><a href="https://github.com/odoo/enterprise/commit/cf19dea77c6a6cff4956e5553ff608da1be9137f" target="_blank" rel="noopener">[FIX] voip: createObjectURL and MediaStream</a></td>
<td><p>As of Firefox 62, the URL.createObjectURL static method no longer accepts a MediaStream object as the argument. According to the current specs, only a Blob or MediaSource object can be accepted.</p><p>The stream argument support has been deprecated since Firefox 54. Safari has already made the change, and Chrome may also follow soon.</p><p>Whenever you want to set a MediaStream object on a &lt;video&gt; or &lt;audio&gt; element, the HTMLMediaElement.prototype.srcObject property should be used instead as below:</p><p>// This no longer works video.src = URL.createObjectURL(stream); // Instead, do this video.srcObject = stream;</p><p>Source: https://www.fxsitecompat.com/en-CA/docs/2018/url-createobjecturl-no-longer-accepts-mediastream-as-argument/ https://www.chromestatus.com/features/5618491470118912</p><p>opw-1885216</p><p>closes odoo/enterprise#2706</p></td>
</tr>
<tr>
<td>2018-09-11</td>
<td>qsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/c692e1a6de6f30364598c4c971179b0cd4cc3297" target="_blank" rel="noopener">[FIX] voip: BS4, do not use flex mixins anymore</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2018-08-16</td>
<td>Prakash Prajapati</td>
<td><a href="https://github.com/odoo/enterprise/commit/78eafe8e757a9ed0a43c8626ed4a93987a297147" target="_blank" rel="noopener">[FIX] voip: horizontally align bottom icons in voip windows</a></td>
<td><p>Task-ID 1865328</p></td>
</tr>
<tr>
<td>2018-08-08</td>
<td>Christophe Matthieu</td>
<td><a href="https://github.com/odoo/enterprise/commit/a5ecd8716bdf280e2bc87c7065ef88049ac7a4da" target="_blank" rel="noopener">[IMP] voip/project_timesheet_synchro: adapt code for bus_service refactoring</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2018-08-08</td>
<td>Pierre Rousseau</td>
<td><a href="https://github.com/odoo/enterprise/commit/58365ad9d529a924c84fd43d942a04d9f6c5d135" target="_blank" rel="noopener">[FIX] voip: SIP.JS 0.11.3</a></td>
<td><p>Upgrade the SIP.JS lib to 0.11.3 to avoid all the connections errors with latest browsers.</p><p>Task-1834182 opw-1885216</p></td>
</tr>
<tr>
<td>2018-07-12</td>
<td>qsm-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/13edfe502bb12c2c2a1eeeb6a4ab392ced42d7de" target="_blank" rel="noopener">[FIX] voip: restore icons&#x27; style in voip widget</a></td>
<td><p>Those were broken with https://github.com/odoo/enterprise/commit/3d6c7b95b94f23c6e0e0b088e3291e9bf323fc4a</p></td>
</tr>
<tr>
<td>2018-05-04</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/a965ca0dbe0efddddc113a73d67709892455bfc6" target="_blank" rel="noopener">[REF] *: Adapt from JS mail refactoring</a></td>
<td><p>*: mail_enterprise, voip, web_studio</p><p>Adapt from changes in community (1):</p><p>1. renamed &#x27;chat_manager&#x27; to &#x27;chat_service&#x27; 2. renaming &#x27;thread&#x27; to &#x27;_threadWidget&#x27; 3. mail.Chatter.Buttons template with camelCased parameters 4. renamed &quot;chat&quot; to &quot;thread&quot; at several places 5. mailTestUtils.getMailServices() for services in tests</p><p>(1) [REF] mail: JS mail refactoring commit: https://github.com/odoo/odoo/commit/cd34f6de727d5b3858420cff3c9d3c5995c4e75c</p></td>
</tr>
<tr>
<td>2018-04-05</td>
<td>Nicolas Martinelli</td>
<td><a href="https://github.com/odoo/enterprise/commit/bca3d65834f3faa749138394c67d0f11005734d4" target="_blank" rel="noopener">[FIX] voip: keep mail_message_id</a></td>
<td><p>Properly keep `mail_message_id` when updating the phonecall.</p></td>
</tr>
<tr>
<td>2018-03-30</td>
<td>Nicolas Martinelli</td>
<td><a href="https://github.com/odoo/enterprise/commit/63e9e23d57324e2458ffc00be19da56c96868f98" target="_blank" rel="noopener">[FIX] voip: mark activity as done</a></td>
<td><p>When a phonecall activity is marked as done, an error occurs since we try to write through a record which has been deleted.</p><p>opw-1827682 opw-1824648</p></td>
</tr>
<tr>
<td>2018-03-19</td>
<td>Pierre Rousseau</td>
<td><a href="https://github.com/odoo/enterprise/commit/8d011f0a263eb6aa22cdd43586b0447b5e3577f6" target="_blank" rel="noopener">[FIX] voip: remove video permission for incomming calls</a></td>
<td><p>Before this commit, the permission for camera was asked for incomming call, which resulted in an error if there was no camera connected.</p><p>OPW-1817655</p></td>
</tr>
<tr>
<td>2018-03-01</td>
<td>Aaron Bohy</td>
<td><a href="https://github.com/odoo/enterprise/commit/27ca5bdcf81a32f4944b700c27e7dcbca444d02f" target="_blank" rel="noopener">[FIX] voip: adapt code and tests</a></td>
<td><p>... according to community commit odoo/odoo@6be9fa396.</p><p>Related to task #30369</p></td>
</tr>
<tr>
<td>2018-01-26</td>
<td>Yenthe V.G</td>
<td><a href="https://github.com/odoo/enterprise/commit/0affaa3bd0dc3a6bb3d889c605d9fa5bfa317221" target="_blank" rel="noopener">[IMP] VOIP: remove trailing comma</a></td>
<td><p>Not really harmful but not needed</p><p>Closes #1724 Fixes odoo/odoo#19648</p></td>
</tr>
<tr>
<td>2018-01-17</td>
<td>Richard Mathot</td>
<td><a href="https://github.com/odoo/enterprise/commit/43d9a0644d1f079bafb5b72cd22981a6b74a2e92" target="_blank" rel="noopener">[FIX] sale_ebay,voip: disambiguate labels in settings</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2018-01-10</td>
<td>Rémi Rahir</td>
<td><a href="https://github.com/odoo/enterprise/commit/fcf07e83928103a459c1503efe779ab9bddc1518" target="_blank" rel="noopener">[FIX] voip: refactoring hiccups</a></td>
<td><p>During the refactoring, sanitized version of the numbers were introduced but unused in the calls. With the addition of a faulty parameter in res.company introduced in phone_validation this would lead to a wrong number called.</p><p>This commit ensures that the right sanitized number is used.</p><p>--------</p><p>Also on v11, incoming calls trigger a dialog. Before this commit the behaviour would be to reject the call when closing the dialog, whether the user chose to accept or reject the call.</p><p>This commit ensures that the reject call will only happen if the session is not &#x27;onCall&#x27;.</p></td>
</tr>
<tr>
<td>2017-12-21</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/8bcd90c165cabfa10e7db5b383df5ab880d6f513" target="_blank" rel="noopener">[FIX] voip: feedback method should work in batch</a></td>
<td><p>voip inherits from mail.activity model to implement behavior linked to phonecall activities. It inherits from the action_feedback method. Original method has been written to allow working in batch. Override does not respect that behavior. This commit fixes the inherit to effectively work in batch.</p></td>
</tr>
<tr>
<td>2017-12-21</td>
<td>Aaron Bohy</td>
<td><a href="https://github.com/odoo/enterprise/commit/78d8b0e91e9a10bdfbb9d3eef8274b4dbeae98bb" target="_blank" rel="noopener">[REF] voip: adapt to mail js refactoring</a></td>
<td><p>Adapt some enterprise code from a commit in community.</p><p>Related commit: https://github.com/odoo/odoo/commit/02ec09cb1c3e2d7bc7968f40c18f2208d7f3f498</p></td>
</tr>
<tr>
<td>2017-12-21</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/0056b1cd22d754f027976f24b5de7c39463a5c0f" target="_blank" rel="noopener">[FIX] voip: feedback method should work in batch</a></td>
<td><p>voip inherits from mail.activity model to implement behavior linked to phonecall activities. It inherits from the action_feedback method. Original method has been written to allow working in batch. Override does not respect that behavior. This commit fixes the inherit to effectively work in batch.</p><p>This is a manual backport of a saas 11.2 commit see 8bcd90c165cabfa10e7db5b383df5ab880d6f513 . It is backported even if it is not a real fix because it causes issues with server action and automated actions. Those could have been done on activities working in batch which is not the case when voip is installed.</p><p>Done after feedback from internal migration.</p></td>
</tr>
<tr>
<td>2017-11-29</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/aae0ddec6d490dc1c19dd2dd402d26357a1f8a87" target="_blank" rel="noopener">[REF] voip: use category activity type instead of new field</a></td>
<td><p>voip introduces a new field in order to tag some activity types as being phonecalls. However a field is already present on the activity type model to implement some custom behavior on activity types.</p><p>This commit fixes the voip code to use the category field instead of a custom one. This should have been done directly when merging voip as it was part of the original technical spec. However code review was not performed completely, meaning this modification is done only now.</p></td>
</tr>
<tr>
<td>2017-11-27</td>
<td>Alexandre Kühn</td>
<td><a href="https://github.com/odoo/enterprise/commit/95575cc4ab1617ce84b65504cc801f7d9497d40f" target="_blank" rel="noopener">[IMP] core: menu tip ux/ui improvement</a></td>
<td><p>We would like to make the &quot;no item found&quot; screens more appealing.</p><p>Before this commit, it shows a small help tip in the top-left corner of the screen, just below the &quot;Create&quot; button.</p><p>With this commit, these help tips have been replaced by onboarding screens, which consist of a picture and some text below, both of which are horizontally centered.</p><p>The texts have been slightly changed, so that they are shorter and clearer.</p><p>Considered modules:</p><p>(A) account_batch_deposit, account_deferred_revenue, account_online_sync, account_reports, account_sepa_direct_debit (H) helpdesk, hr_appraisal, hr_contract_salary (L) l10n_mx_edi (M) marketing_automation, mrp_plm, mrp_workorder (P) pos_loyalty (Q) quality, quality_control, quality_mrp (S) sale_coupon, sale_subscription (V) voip (W) web_enterprise, web_grid, web_studio, website_calendar, website_crm_score, website_sign</p></td>
</tr>
<tr>
<td>2017-11-16</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/23a5dbb94b0dc88db222f8807e68b209133ad5bc" target="_blank" rel="noopener">[FIX] voip: various fixes</a></td>
<td><p>* Don&#x27;t intercept the progress event anymore since it&#x27;s handled differently from PBX to PBX. Instead, assume that we are in call as soon as a sip_session is created. * Better handling of the display of the call/hangup buttons due to the previous modification. * Alert the user when he tried to make a call and he&#x27;s already in a call.</p></td>
</tr>
<tr>
<td>2017-11-14</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/565a52a19a468a595f01a184377f235b970d6142" target="_blank" rel="noopener">[FIX] voip: don&#x27;t assume external_phone set</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2017-11-13</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/86a2cb8929d18b2197af191eecdc7623851e0e8b" target="_blank" rel="noopener">[FIX] voip: correctly catch onProgress events for OnSip servers</a></td>
<td><p>OnSip servers doesn&#x27;t send anymore the reason_phrase &#x27;Trying&#x27; or &#x27;Ringing&#x27;. The tests done were not necessary anymore since we only support Asterisk and OnSip and they send only the progress event when the call reached the called end.</p></td>
</tr>
<tr>
<td>2017-10-20</td>
<td>Thibault Delavallée</td>
<td><a href="https://github.com/odoo/enterprise/commit/b6cc7d23530c314410c5efa6af13290ef9304b04" target="_blank" rel="noopener">[REF] voip: update module to images now being in static/img</a></td>
<td><p>See commit https://github.com/odoo/odoo/commit/f132c8862fb3416cb53c559be32acd880c3a1c7d .</p></td>
</tr>
<tr>
<td>2017-10-18</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/6ae7caa1fbed0e357a2fe93cdf750d7a710fbe7c" target="_blank" rel="noopener">[FIX] voip: remove soft hyphen before sending number to PBX</a></td>
<td><p>Soft hypen is an invisible character that need to be stripped before sending the number to the PBX.</p></td>
</tr>
<tr>
<td>2017-10-09</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/c2764b3a0be127c6d2c3f78659963ef68db0d2a8" target="_blank" rel="noopener">[FIX] voip: format the number to be compatible with more PBX</a></td>
<td><p>This commit formats the number sent to the PBX since some PBX don&#x27;t allow to number with spaces or special characters.</p></td>
</tr>
<tr>
<td>2017-10-09</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/03b03224e5deca807716af7b770b72a34f1e2439" target="_blank" rel="noopener">[FIX] voip: avoid phonecall duplication</a></td>
<td><p>Before this commit, some events create two phonecalls instead of one.</p></td>
</tr>
<tr>
<td>2017-10-04</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/e7156aef691c73c1fd008ab43b0060650da85e19" target="_blank" rel="noopener">[FIX] voip: correct wrong call to self.phone</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2017-09-29</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/cfff536c4ba60cfe9d77fae6488fdd51a707255a" target="_blank" rel="noopener">[FIX] voip: refresh phonecall details even if panel closed</a></td>
<td><p>The previous code made the assumption that the panel was open. Then when it was not the case, the phonecall details was not updated with the new one.</p></td>
</tr>
<tr>
<td>2017-09-25</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/aa257ea7a98d0e3a22777e2725ea044824f9a2bb" target="_blank" rel="noopener">[FIX] voip: avoid double incoming calls</a></td>
<td><p>This commit hangups the current call before accepting a new incoming one.</p></td>
</tr>
<tr>
<td>2017-09-18</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/05da8d763dd7e0faa79c28605ce1910224bcb9b6" target="_blank" rel="noopener">[IMP] voip: open the panel when click to dial</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2017-09-15</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/5f5342d219b9ffbf86c47b341d8aa829be4f374b" target="_blank" rel="noopener">[IMP] voip: reload chatter when call activity is logged</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2017-09-15</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/21bf2022ab6f681df58d4210e9c20f72686cede8" target="_blank" rel="noopener">[IMP] web_enterprise: add withelist class to display element in app switcher</a></td>
<td><p>This commit introduces a class &#x27;o_in_appswitcher&#x27; which will whitelist the element and let this element displayed in the app switcher. This commit adds this class to the voip panel as well.</p><p>Fix in communiy done with the commit odoo/odoo@43e412ccabef7a04c9513d74da5436a57d7ff2ca.</p></td>
</tr>
<tr>
<td>2017-09-15</td>
<td>rde</td>
<td><a href="https://github.com/odoo/enterprise/commit/0d5140df60ce76f1fe11c1009456ff598e23d4f3" target="_blank" rel="noopener">[FIX] voip, account_batch_deposit: fix test</a></td>
<td><p>These 2 tests was never executed due to a bad filename.</p><p>Now voip is activated and account_batch_deposit_template commented while we rewrite the test.</p></td>
</tr>
<tr>
<td>2017-09-14</td>
<td>Xavier Morel</td>
<td><a href="https://github.com/odoo/enterprise/commit/78f77882afabd0bcbcc454930cf58e053f674617" target="_blank" rel="noopener">[FIX] voip: crap</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2017-09-13</td>
<td>dbh</td>
<td><a href="https://github.com/odoo/enterprise/commit/e2754325d463eb405309902cbbb54ebd78a1a4d4" target="_blank" rel="noopener">[FIX] voip: Fix traceback on schedule activity for call</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2017-08-01</td>
<td>Josse Colpaert</td>
<td><a href="https://github.com/odoo/enterprise/commit/f21f66c9d2079a30170d1507cb9f8a280471d543" target="_blank" rel="noopener">[FIX] voip: not working on standard user accounts</a></td>
<td><p>When a user, like most normal users, does not have access to the Settings menu, it has no access to the ir config parameters of the voip, so he will not be able to dial (in production mode).</p><p>That is why we add a sudo in the function that gets these parameters. That function returns those values to the web client however, so we need to check  that the user is not a portal user.  (has the group base.group_user)</p><p>opw-751585</p></td>
</tr>
<tr>
<td>2017-07-06</td>
<td>Denis Vermylen</td>
<td><a href="https://github.com/odoo/enterprise/commit/4139f67445c17b642a7134f37ea8401549aab990" target="_blank" rel="noopener">[FIX] voip: handle appswitcher while calling</a></td>
<td><p>Clicking the appswitcher with VOIP removes the call-box and the &lt;audio&gt; tag that plays what your correspondant says. Upon entering another app the &lt;audio&gt; tag gets re-appended to the body but is no longer linked to the audio stream.</p><p>By appending it to the &lt;html&gt; tag instead of the &lt;body&gt; it survives the removal of the appswitcher, fixing the problem.</p></td>
</tr>
<tr>
<td>2017-05-30</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/d6f4c07f64a525096ac7b4e5ba4df7b973e9e1a7" target="_blank" rel="noopener">[IMP] voip: complete refactoring</a></td>
<td><p>* Delete crm_voip to only have one module voip * Add features (tabs, mute, don&#x27;t disturb mode,...) * Use the next activities to create voip_phonecall * Allow to click to dial from any model * Design improvements made by CFA</p></td>
</tr>
<tr>
<td>2017-04-24</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/ca7f9ddaf22e0c75f422e6b367c3b456bc14420b" target="_blank" rel="noopener">[FIX] voip: Monkey patch the sipjs lib due to chrome update</a></td>
<td><p>Since Chrome 57, the voip app was broken (more information https://medium.com/@nimbleape/webrtc-asterisk-and-chrome-57-a706fde33780). To fix this in stable without a lib update, we monkey patch the lib to reproduce the commit https://github.com/onsip/SIP.js/commit/bae28258a4b705eb10239b00094985dc4baa314a</p></td>
</tr>
<tr>
<td>2017-04-13</td>
<td>Nicolas Lempereur</td>
<td><a href="https://github.com/odoo/enterprise/commit/b4329abe7a0584c86853812a099db81fdeb4e0de" target="_blank" rel="noopener">[FIX] voip: possible error notification iphone 7</a></td>
<td><p>On safari iphone 7 (and possibly other browsers) we could have an error by referencing to an undeclared Notification variable.</p><p>opw-726084</p></td>
</tr>
<tr>
<td>2017-03-29</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/b81bb97aed8712fa613e9dcdf42aaf113134dffb" target="_blank" rel="noopener">[ADD] voip_onsip</a></td>
<td><p>New module that allow a connection to OnSIP PBX server from Odoo.</p></td>
</tr>
<tr>
<td>2017-03-07</td>
<td>Géry Debongnie</td>
<td><a href="https://github.com/odoo/enterprise/commit/466db49a7085330d0fc08a6e36100b76da544e93" target="_blank" rel="noopener">[REF] voip: correctly import mixins</a></td>
<td><p>The mixins key was removed from web.core, it is now better to directly import web.mixins</p></td>
</tr>
<tr>
<td>2017-03-01</td>
<td>Aaron Bohy</td>
<td><a href="https://github.com/odoo/enterprise/commit/900e55182cfa8a7c62875aa1c301de6bec947c8d" target="_blank" rel="noopener">[FIX] voip: this.performModelRPC not available</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2017-02-22</td>
<td>Aaron Bohy</td>
<td><a href="https://github.com/odoo/enterprise/commit/8d0599df2c25ffec0a87154403e1c6f634e59047" target="_blank" rel="noopener">[FIX] voip: remove useless imports</a></td>
<td><p>It also allows this module to be loaded in the test environment, where the module &#x27;web.web_client&#x27; is missing.</p><p>Also fixes some linting warnings.</p></td>
</tr>
<tr>
<td>2017-01-05</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/07918c5096f598df365de8609208ebfa52e4f21d" target="_blank" rel="noopener">[FIX] voip: better desktop notifications management</a></td>
<td><p>* When the incoming call is hanged up by the client before answering, we need to close the desktop notification. * Check to see if we are on the master bus was unecessary and was disabling the desktop notification on incoming call.</p></td>
</tr>
<tr>
<td>2017-01-03</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/035b4dafffdddfe9f3fe04d2a83ee3f1e91b6a1f" target="_blank" rel="noopener">[IMP] voip: use only one websocket to test the websocket validity</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2016-12-26</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/2b14c2129dc99cdc682d43c558f0989370368505" target="_blank" rel="noopener">[FIX] voip: correctly closing the websocket after testing the parameter.</a></td>
<td><p>Some configurations have a limited number of websockets avalaible. In order to avoid an unecessary websocket, we close the websocket used to know if the parameter is correct or not.</p></td>
</tr>
<tr>
<td>2016-12-05</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/770f39a05f4f4d91a2e4d74963a0cd4b3edb8f97" target="_blank" rel="noopener">[IMP] voip: avoid log in the browser console</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2016-08-17</td>
<td>Martin Trigaux</td>
<td><a href="https://github.com/odoo/enterprise/commit/b5b9c878fa74159a0dbd31b2bdd273cc6572c183" target="_blank" rel="noopener">[FIX] voip: update outdate voip.pot file</a></td>
<td><p>Follow changes made at c8331c41</p></td>
</tr>
<tr>
<td>2016-08-12</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/c8331c41dfd3bc12c5646818c6efe93030ec699d" target="_blank" rel="noopener">[FIX] crm_voip: change fields display names and avoid 0 as ring_number</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2016-08-09</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/82add144fa0d25816b45a23acf0f1bc600e5adec" target="_blank" rel="noopener">[FIX] crm_voip: settings display layout</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2016-08-09</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/565b539cb183a0b8521717265d9994d066b04153" target="_blank" rel="noopener">[FIX] crm_voip: add groups on field/ICP and allow user to edit sip preferences</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2016-07-27</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/de53faf01b7f61aee70f9dff55179078b26cf1cd" target="_blank" rel="noopener">[MIG] voip: migrate to new api</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2016-07-27</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/2a549c30a9233aa705b9fa574d1b4cbc25751fac" target="_blank" rel="noopener">[MOV] voip: split models in multiple files</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2016-07-27</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/1b55fba73ecb8c9552b9b6d9390ac5217a54b88a" target="_blank" rel="noopener">[MOV] voip: reorganize files</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2016-07-27</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/16960e9a2df83d2fc28f8f857bbade7d91264628" target="_blank" rel="noopener">[REM] voip: remove dead code</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2016-06-09</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/1bef6857a57b7233cc60b0f05bd11536bd2046d0" target="_blank" rel="noopener">[FIX] voip: avoid the websocket connection when in demo mode</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2016-06-06</td>
<td>Yannick Tivisse</td>
<td><a href="https://github.com/odoo/enterprise/commit/218a1fe0f2373a42e86ae77ffc85fed2ece65b06" target="_blank" rel="noopener">[IMP] base,sales_team: Move res_groups and menuitems to sales_team</a></td>
<td><p>Purpose: Having the res_group defined in base and sales_team auto installed with mail doens&#x27;t make sense.</p><p>- Move the empty res_config class and the related view from base_setup to sales_team (base_setup only contains the &#x27;General Settings&#x27; model and views - Move the &#x27;sale&#x27; related content from product to sale module (Access rights, menuitems,...) - Set sales_team at autoinstall False. The module is installed when needed by crm or sale for example - Set sales_team as a dependency of voip. (Access rights defined for configuration purpose) - Set sales_team ad a dependency of subscription (Access rights issue too)</p><p>Rename xmlids accordingly. Example: &#x27;base.group_sale_manager&#x27; becomes sales_team.group_sale_manager.</p></td>
</tr>
<tr>
<td>2016-06-02</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/5cd6e089f2d0367de3d29402ce7bf23381406328" target="_blank" rel="noopener">[ADD] voip: keypad for direct dialing, send dtmf and incoming call notif</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2016-05-19</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/870718433769140df52b814ca2d82e28c24b6a19" target="_blank" rel="noopener">[FIX] voip: call options for inbound call</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2016-03-10</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/0f51098a78761d496b18a27b425b39c693ce02cf" target="_blank" rel="noopener">[FIX] voip: change of remote option in the lib for reuse mediastream</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2016-01-29</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/73a78672dacf5d7fc47b4ef9190aa123cf68a1cf" target="_blank" rel="noopener">[FIX] voip: update the sipjs lib to fix issues with the new Asterisk, Chrome and Firefox versions</a></td>
<td><p>forward port of 1d692b7d10d9ebfc8051ae11ebdf7998ff460474 New versions of Chrome and Firefox introduced a new way of managing the media streams, which doesn&#x27;t work with older version of Asterisk. We keep the old lib to allow customers to still use it they are still using the old versions of Asterisk, Chrome and Firefox, and they don&#x27;t upgrade voip.</p></td>
</tr>
<tr>
<td>2015-10-07</td>
<td>Richard Mathot</td>
<td><a href="https://github.com/odoo/enterprise/commit/164e5b08436533fa98409cc7015a5c5d627dcade" target="_blank" rel="noopener">[REM] (crm_)voip: remove modelines</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2015-09-14</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/b3ce056e84c20d0dbcbe52141589180efd1be56c" target="_blank" rel="noopener">[FIX] crm_voip: Fix demo mode</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2015-09-02</td>
<td>fwi-odoo</td>
<td><a href="https://github.com/odoo/enterprise/commit/7aeebaad0a4689b1cd9dca9f4d203fe4dff740f4" target="_blank" rel="noopener">[FIX] crm_voip: adapt to master</a></td>
<td><p>No summary provided.</p></td>
</tr>
<tr>
<td>2015-08-06</td>
<td>Olivier Dony</td>
<td><a href="https://github.com/odoo/enterprise/commit/09d502af9f4e3842d7bd6bb0ac08f7af221b1c76" target="_blank" rel="noopener">[ADD] crm_voip, voip: direct port of v8 version</a></td>
<td><p>Only a few field and model names or inheriting views had to be adapted to make it installable.</p><p>Completely untested otherwise.</p></td>
</tr>
</tbody>
</table>
</div>
