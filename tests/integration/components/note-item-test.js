import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-notes/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | note-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NoteItem />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <NoteItem>
        template block text
      </NoteItem>
    `);

    assert.dom().hasText('template block text');
  });
});
