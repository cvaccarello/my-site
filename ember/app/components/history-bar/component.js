import Ember from 'ember';

export default Ember.Component.extend({
	init() {
		this._super();
		var This = this;
		var data = this.get('model');

		// sort data such the most recent activity is always first
		data.sort(function(a, b) {
			if (a.date.to == b.date.to) {
				return (a.date.from < b.date.from);
			} else {
				return (a.date.to < b.date.to);
			}
		});

		// need to setup this resize funtion so that the context of this class can be used
		this.windowResize = function() {
			This.recalc();
		};
	},

	didReceiveAttrs() {
		var data = this.get('model');

		this.min_date = data[0].date.from;
		this.max_date = data[0].date.to;
		for (let i=1; i<data.length; i++) {
			let org_date = data[i].date;
			this.min_date = Math.min(this.min_date, org_date.from);
			this.max_date = Math.max(this.max_date, org_date.to);
		}

		// create a list of dates for timeline template
		var dates = [];
		for(let i=this.max_date; i>this.min_date; i--) {
			dates.push(i);
		}

		// set dates for template use
		this.set('dates', dates);
	},

	didInsertElement() {
		// create and remember jquery element for this component
		this.$el = $(this.element);

		// watch for screen resizing
		$(window).on('resize', this.windowResize);

		// trigger calculation to adjust elements on timeline
		this.recalc();
	},

	didDestroyElement() {
		$(window).off('resize', this.windowResize);
	},

	recalc() {
		var This = this;
		var $organizations = this.$el.find('.history-bar-organization');
		var el_top = this.$el.offset().top;

		$organizations.each(function(i) {
			var $this = $(this);
			var height = $this.outerHeight();
			var date_from = JSON.parse($this.attr('data-date-from'));
			var date_to = JSON.parse($this.attr('data-date-to'));

			var $date_marker_from = This.$el.find('.history-bar-marker[data-date="' + date_from + '"]');
			var $date_marker_to = This.$el.find('.history-bar-marker[data-date="' + date_to + '"]');

			var start_top = $date_marker_to.offset().top;
			var end_bottom = $date_marker_from.offset().top;
			var date_range_height = end_bottom - start_top;

			// multiplies the centering effect by this number, 1 = nothing, 0.5 means less, 2 means more.. basically acts like an overflow amount
			var center_mult_offset = 0.5;

			// center this organization within the give timeframe on the timeline
			$this.css({top: 0});
			var new_top = (start_top - el_top) - ($this.offset().top - el_top) - ((height - date_range_height)  / 2 * center_mult_offset);
			$this.css({top: new_top + 'px'});
		});
	}
});
